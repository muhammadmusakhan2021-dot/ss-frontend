/* ============================================================================
   CHECKOUT API — calls the `checkout` Supabase Edge Function
   (supabase/functions/checkout/index.ts), which validates stock, decrements
   it atomically, creates the order, and emails both the store owner and the
   customer. Replaces the old frontend's fake local-only "Order Confirmed"
   flow with a real network call, while keeping the exact same success/error
   UI already built into index.html and product.html.
   ============================================================================ */

const CHECKOUT_FUNCTION_URL = `${SUPABASE_URL}/functions/v1/checkout`;

// cart here is the existing frontend `cart` array: [{ id, name, price, qty, ... }]
// `id` is the product's slug in the existing cart code — we look up dbId
// (the real UUID) from window.PRODUCTS before sending, since the database
// only knows products by UUID.
async function submitOrder({ fullName, phone, email, address, city, postalCode }, cart) {
  const items = cart.map((line) => {
    const product = window.PRODUCTS[line.id];
    return { productId: product ? product.dbId : line.id, quantity: line.qty };
  });

  const res = await fetch(CHECKOUT_FUNCTION_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
    },
    body: JSON.stringify({
      customerInfo: { fullName, phone, email, address, city, postalCode },
      paymentMethod: 'cod',
      items,
    }),
  });

  const data = await res.json();
  if (!res.ok || !data.success) {
    throw new Error(data.message || 'Could not place your order. Please try again.');
  }
  return data.order;
}

window.submitOrder = submitOrder;

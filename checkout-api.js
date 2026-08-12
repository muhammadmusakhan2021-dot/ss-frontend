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
//
// The Edge Function's contract is unchanged: it still only expects
// { fullName, phone, email, address, city, postalCode }.
//
// This accepts BOTH shapes the frontend has sent over time:
//   1) an already-composed `address` string (what index.html currently sends), or
//   2) the separate houseNumber/area/street/district fields (composed below)
// so this keeps working correctly regardless of which version of the
// checkout form's submit handler is live, instead of silently producing an
// empty address if the caller's shape doesn't match what this file expects.
function composeAddress({ houseNumber, area, street, district }) {
  return [houseNumber, area, street, district].filter(Boolean).join(', ');
}
 
async function submitOrder({ fullName, phone, email, address, houseNumber, area, street, district, city, postalCode }, cart) {
  const items = cart.map((line) => {
    const product = window.PRODUCTS[line.id];
    return { productId: product ? product.dbId : line.id, quantity: line.qty };
  });
 
  const finalAddress = (address && address.trim())
    ? address.trim()
    : composeAddress({ houseNumber, area, street, district });
 
  const res = await fetch(CHECKOUT_FUNCTION_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
    },
    body: JSON.stringify({
      customerInfo: { fullName, phone, email, address: finalAddress, city, postalCode },
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
 

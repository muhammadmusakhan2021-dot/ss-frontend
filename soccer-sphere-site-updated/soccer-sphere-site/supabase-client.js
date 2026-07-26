/* ============================================================================
   SUPABASE CLIENT — replaces products-data.js as the site's data source.
   This is the entire "API layer" change requested for the Supabase migration.
   Nothing else in this file touches layout, styling, or animation code.

   Loads the Supabase JS SDK from a CDN, fetches the live product catalog
   from the `product_catalog` view (see supabase/migrations/0001_init.sql),
   and reshapes each row into the EXACT same object shape the old static
   PRODUCTS object used — same field names (c1/c2/eyebrow/shortDesc/specs as
   [label,value] pairs/etc) — so index.html and product.html's existing
   render code needs no template changes, only a small timing change to
   await this fetch before rendering (see the two touch points documented
   in FRONTEND-INTEGRATION.md).
   ============================================================================ */

// TODO: replace with your project's real values (Supabase Dashboard → Settings → API).
// The anon key is safe to expose publicly — it only grants what your RLS
// policies (supabase/migrations/0002_rls_policies.sql) allow.
const SUPABASE_URL = 'https://YOUR-PROJECT-REF.supabase.co';
const SUPABASE_ANON_KEY = 'YOUR-ANON-PUBLIC-KEY';

let _sb = null;
function getSupabaseClient() {
  if (!_sb) {
    _sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  }
  return _sb;
}

// Reshapes one product_catalog row into the old products-data.js shape.
function mapProductRow(row) {
  return {
    id: row.slug,
    dbId: row.id, // real UUID, needed for cart/checkout calls; old data had no equivalent
    name: row.name,
    price: Number(row.price),
    c1: row.color_1,
    c2: row.color_2,
    eyebrow: row.eyebrow || '',
    shortDesc: row.short_description || '',
    description: row.description,
    features: row.features || [],
    specs: row.specifications || [],
    stock: row.stock,
    rating: Number(row.ratings_average),
    reviewCount: row.ratings_count,
    images: row.images || [],
    reviews: row.reviews || [],
  };
}

// Fetches all active products and returns them in the same
// `{ [slug]: product }` shape the old `const PRODUCTS = {...}` object had,
// and also sets window.PRODUCTS so no other code needs to change how it
// reads product data.
async function loadProducts() {
  const sb = getSupabaseClient();
  const { data, error } = await sb
    .from('product_catalog')
    .select('*')
    .eq('status', 'active')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Failed to load products from Supabase:', error.message);
    window.PRODUCTS = {};
    return window.PRODUCTS;
  }

  const products = {};
  for (const row of data) products[row.slug] = mapProductRow(row);
  window.PRODUCTS = products;
  return products;
}

window.loadProducts = loadProducts;

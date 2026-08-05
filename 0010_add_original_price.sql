-- ============================================================================
-- Add original_price for strikethrough pricing.
-- Does NOT touch existing tables/RLS/grants beyond what's explicitly needed
-- for this one new column. No data is deleted, no table is recreated.
-- ============================================================================

alter table products add column if not exists original_price numeric(10,2);

-- Selling prices
update products set price = 6000 where slug in ('trionda', 'adidas-trionda-final-pro');
update products set price = 3200 where slug not in ('trionda', 'adidas-trionda-final-pro');

-- Original/reference prices. Rs 6,000 for standard balls. For Trionda /
-- Trionda Final Pro, "appropriately higher than 6,000" — used Rs 7,500.
-- Change the two numbers below if you want a different figure.
update products set original_price = 7500 where slug in ('trionda', 'adidas-trionda-final-pro');
update products set original_price = 6000 where slug not in ('trionda', 'adidas-trionda-final-pro');

-- Required: new columns are NOT automatically covered by the column-level
-- grants from 0008_column_privacy.sql. Without this line, original_price
-- would cause the exact same "permission denied for table products" error
-- already fixed for cost_price — this time on the new column.
grant select (original_price) on products to anon, authenticated;

-- Required: product_catalog (0009) explicitly lists columns instead of
-- p.* — original_price must be added to that list or it won't reach the
-- frontend at all, even though the grant above allows it.
create or replace view product_catalog with (security_invoker = true) as
select
  p.id, p.name, p.slug, p.description, p.short_description, p.eyebrow,
  p.price, p.original_price, p.discount_pct, p.stock, p.sku, p.category, p.images,
  p.color_1, p.color_2,
  p.model_3d_glb_url, p.model_3d_hdr_environment, p.model_3d_camera_distance,
  p.features, p.specifications, p.ratings_average, p.ratings_count,
  p.status, p.total_sold, p.created_at, p.updated_at,
  coalesce(
    (select jsonb_agg(jsonb_build_object('name', r.name, 'role', r.role, 'stars', r.rating, 'quote', r.comment) order by r.created_at desc)
     from reviews r where r.product_id = p.id),
    '[]'::jsonb
  ) as reviews
from products p;

grant select on product_catalog to anon, authenticated;

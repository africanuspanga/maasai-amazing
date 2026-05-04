create extension if not exists pgcrypto;

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = timezone('utc', now());
  return new;
end;
$$;

create table if not exists public.cms_settings (
  key text primary key,
  label text not null,
  payload jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.cms_itineraries (
  slug text primary key,
  title text not null,
  short_title text,
  featured_subtitle text,
  duration text not null,
  image text not null,
  destinations text not null,
  group_size text not null,
  description text not null,
  highlights text[] not null default '{}'::text[],
  price_from text not null,
  category text not null check (category in ('northern', 'zanzibar', 'safari')),
  book_tour_name text,
  featured_section text check (featured_section in ('northern', 'zanzibar', 'southern') or featured_section is null),
  sort_order integer not null default 0,
  is_published boolean not null default true,
  details jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.cms_testimonials (
  id text primary key,
  name text not null,
  location text not null,
  country text,
  image text not null,
  rating integer not null default 5 check (rating between 1 and 5),
  quote text not null,
  tour text not null,
  sort_order integer not null default 0,
  is_published boolean not null default true,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.cms_partners (
  id text primary key,
  name text not null,
  logo text not null,
  website_url text,
  width integer not null default 160,
  height integer not null default 60,
  sort_order integer not null default 0,
  is_published boolean not null default true,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.cms_inquiries (
  id uuid primary key default gen_random_uuid(),
  inquiry_type text not null default 'booking' check (inquiry_type in ('booking', 'contact', 'general')),
  status text not null default 'new' check (status in ('new', 'contacted', 'closed')),
  locale text,
  source_page text,
  tour_slug text references public.cms_itineraries(slug) on delete set null,
  tour_name text,
  full_name text not null,
  nationality text,
  email text not null,
  phone text not null,
  preferred_travel_date date,
  accommodation text,
  adults integer,
  children integer,
  special_requests text,
  payload jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create trigger cms_settings_set_updated_at
before update on public.cms_settings
for each row
execute function public.set_updated_at();

create trigger cms_itineraries_set_updated_at
before update on public.cms_itineraries
for each row
execute function public.set_updated_at();

create trigger cms_testimonials_set_updated_at
before update on public.cms_testimonials
for each row
execute function public.set_updated_at();

create trigger cms_partners_set_updated_at
before update on public.cms_partners
for each row
execute function public.set_updated_at();

create trigger cms_inquiries_set_updated_at
before update on public.cms_inquiries
for each row
execute function public.set_updated_at();

alter table public.cms_settings enable row level security;
alter table public.cms_itineraries enable row level security;
alter table public.cms_testimonials enable row level security;
alter table public.cms_partners enable row level security;
alter table public.cms_inquiries enable row level security;

create policy "Public can read cms settings"
on public.cms_settings
for select
using (true);

create policy "Public can read published itineraries"
on public.cms_itineraries
for select
using (is_published);

create policy "Public can read published testimonials"
on public.cms_testimonials
for select
using (is_published);

create policy "Public can read published partners"
on public.cms_partners
for select
using (is_published);

grant select on public.cms_settings to anon, authenticated;
grant select on public.cms_itineraries to anon, authenticated;
grant select on public.cms_testimonials to anon, authenticated;
grant select on public.cms_partners to anon, authenticated;
grant all privileges on public.cms_settings to service_role;
grant all privileges on public.cms_itineraries to service_role;
grant all privileges on public.cms_testimonials to service_role;
grant all privileges on public.cms_partners to service_role;
grant all privileges on public.cms_inquiries to service_role;

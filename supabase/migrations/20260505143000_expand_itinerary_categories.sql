alter table public.cms_itineraries
drop constraint if exists cms_itineraries_category_check;

alter table public.cms_itineraries
add constraint cms_itineraries_category_check
check (category in ('destination', 'kilimanjaro', 'northern', 'zanzibar', 'safari'));

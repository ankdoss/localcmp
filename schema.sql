-- Create components table
create table if not exists public.components (
	id uuid primary key default gen_random_uuid(),
	name text not null,
	code text not null,
	description text,
	created_at timestamptz not null default now(),
	updated_at timestamptz not null default now()
);

-- Keep updated_at in sync
create or replace function public.set_updated_at()
returns trigger as $$
begin
	new.updated_at = now();
	return new;
end;
$$ language plpgsql;

drop trigger if exists trg_components_updated_at on public.components;
create trigger trg_components_updated_at
before update on public.components
for each row execute function public.set_updated_at();

-- Row Level Security
alter table public.components enable row level security;

-- Policies (adjust as needed for your security model)
create policy if not exists components_select_all on public.components
for select using (true);

create policy if not exists components_insert_all on public.components
for insert with check (true);

create policy if not exists components_update_all on public.components
for update using (true) with check (true); 
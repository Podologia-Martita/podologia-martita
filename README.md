# Podología Martita - Panel Profesional

Proyecto listo para desplegar en **Vercel** con base de datos en **Supabase**.

## 🚀 Pasos rápidos

1. Sube este proyecto a GitHub.
2. Entra a Vercel → Importa el repo → Configura variables de entorno:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
3. Deploy → listo!

La tabla en Supabase se crea con este SQL:

```sql
create table bookings (
  id uuid default uuid_generate_v4() primary key,
  professional_id uuid references auth.users(id),
  client_name text,
  service text,
  time timestamptz,
  status text default 'PENDIENTE'
);
```

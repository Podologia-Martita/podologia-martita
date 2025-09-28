# Podología Martita - Panel Profesional

Proyecto listo para desplegar en **Vercel** con base de datos en **Supabase**.

## 🚀 Pasos rápidos

1. Subir este proyecto a GitHub.
2. En Vercel → Importar repo → Configurar variables de entorno:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
3. Deploy → listo!

SQL para tabla de reservas en Supabase:

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

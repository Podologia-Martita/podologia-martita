# Podología Martita — Panel Profesional (listo para Vercel + Supabase)

## Qué contiene
Proyecto Vite + React con el componente `PanelProfesional` listo para conectarse a Supabase.

## Pasos rápidos para dejarlo online (resumen)
1. Crear proyecto en Supabase y copiar **Project URL** y **Anon Public Key**.
2. Crear repo en GitHub y subir este repo (subir ZIP o crear repo y push).
3. En Vercel, importar el repo y en Environment Variables añadir:
   - VITE_SUPABASE_URL = <Project URL>
   - VITE_SUPABASE_ANON_KEY = <Anon Public Key>
4. Deployar en Vercel; usar la URL proporcionada.

## Archivos importantes
- `src/PanelProfesional.jsx` → componente principal (login + ver/confirmar citas).
- `.gitignore` → ignora node_modules, dist, .env.

## Notas
- Reemplaza las claves en Vercel; no pongas keys dentro del código.
- Si necesitas que yo suba el repo a GitHub directamente, dime tu usuario de GitHub o da permisos (nota: no puedo actuar en tu cuenta).

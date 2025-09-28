import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export default function PanelProfesional() {
  const [citas, setCitas] = useState([]);

  const fetchCitas = async () => {
    const { data, error } = await supabase.from("bookings").select("*");
    if (!error) setCitas(data);
  };

  const confirmarCita = async (id) => {
    await supabase.from("bookings").update({ status: "CONFIRMADA" }).eq("id", id);
    fetchCitas();
  };

  useEffect(() => { fetchCitas(); }, []);

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>Panel Profesional - Podología Martita</h1>
      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>Cliente</th>
            <th>Servicio</th>
            <th>Hora</th>
            <th>Estado</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {citas.map((cita) => (
            <tr key={cita.id}>
              <td>{cita.client_name}</td>
              <td>{cita.service}</td>
              <td>{new Date(cita.time).toLocaleString()}</td>
              <td>{cita.status}</td>
              <td>
                {cita.status === "PENDIENTE" && <button onClick={() => confirmarCita(cita.id)}>Confirmar</button>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
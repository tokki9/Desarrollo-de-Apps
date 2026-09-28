import { Link, Outlet } from "react-router"; 

export function Layout() {
  return (
    <div style={{ fontFamily: "sans-serif", padding: "20px" }}>
      {/* Encabezado fijo visible en todas las pantallas */}
      <header style={{ borderBottom: "2px solid #0070f3", paddingBottom: "10px" }}>
        <h2>📍 Aplicación SPA - Desarrollo de Aplicaciones (VI Semestre)</h2>
        
        <nav style={{ display: "flex", gap: "15px" }}>
          {/* PASO 2.2 */}
          <Link to="/">Inicio</Link>
          <Link to="/perfil/estudiante_vi">Mi Perfil</Link>               */}
          <Link to="/ruta-inexistente">Probar 404</Link>
        </nav>
      </header>

      {/* ÁREA DE CONTENIDO DINÁMICO */}
      <main style={{ marginTop: "20px" }}>
        <Outlet />         
      </main>
    </div>
  );
}

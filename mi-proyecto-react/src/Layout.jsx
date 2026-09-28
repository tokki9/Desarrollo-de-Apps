// ----------------------------------------------------------------------
// ✏️ [CÓDIGO A COMPLETAR POR EL ESTUDIANTE - PASO 2.1]
// Importa los componentes 'Link' y 'Outlet' desde 'react-router'
// ----------------------------------------------------------------------


export function Layout() {
  return (
    <div style={{ fontFamily: "sans-serif", padding: "20px" }}>
      {/* Encabezado fijo visible en todas las pantallas */}
      <header style={{ borderBottom: "2px solid #0070f3", paddingBottom: "10px" }}>
        <h2>📍 Aplicación SPA - Desarrollo de Aplicaciones (VI Semestre)</h2>
        
        <nav style={{ display: "flex", gap: "15px" }}>
          {/* ------------------------------------------------------------------ */}
          {/* ✏️ [CÓDIGO A COMPLETAR POR EL ESTUDIANTE - PASO 2.2]              */}
          {/* Crea los enlaces usando el componente <Link>:                      */}
          {/* 1. <Link to="/">Inicio</Link>                                      */}
          {/* 2. <Link to="/perfil/estudiante_vi">Mi Perfil</Link>               */}
          {/* 3. <Link to="/ruta-inexistente">Probar 404</Link>                  */}
          {/* ------------------------------------------------------------------ */}
          
        </nav>
      </header>

      {/* ÁREA DE CONTENIDO DINÁMICO */}
      <main style={{ marginTop: "20px" }}>
        {/* ------------------------------------------------------------------ */}
        {/* ✏️ [CÓDIGO A COMPLETAR POR EL ESTUDIANTE - PASO 2.3]              */}
        {/* Inserta aquí el marcador <Outlet /> para renderizar las vistas hijas */}
        {/* ------------------------------------------------------------------ */}
        
      </main>
    </div>
  );
}

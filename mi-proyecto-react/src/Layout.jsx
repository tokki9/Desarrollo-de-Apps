import { Link, Outlet } from "react-router";

export function Layout() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <nav
        style={{
          marginBottom: "20px",
          padding: "10px",
          backgroundColor: "#eee",
          borderRadius: "5px",
        }}
      >
        <Link
          to="/"
          style={{
            marginRight: "15px",
            textDecoration: "none",
            color: "#333",
            fontWeight: "bold",
          }}
        >
          Inicio
        </Link>
        <Link
          to="/perfil/123"
          style={{
            textDecoration: "none",
            color: "#333",
            fontWeight: "bold",
          }}
        >
          Perfil de Usuario
        </Link>
      </nav>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
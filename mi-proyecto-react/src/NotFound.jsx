import { Link } from "react-router";

export function NotFound() {
  return (
    <div
      style={{
        backgroundColor: "#fff0f0",
        padding: "15px",
        borderRadius: "8px",
        border: "1px solid #ffa39e",
      }}
    >
      <h3 style={{ color: "#cf1322" }}>
        ⚠ Error 404 - Página No Encontrada
      </h3>
      <p>La ruta solicitada no existe en la aplicación.</p>

      <Link
        to="/"
        style={{ color: "#1890ff", textDecoration: "underline" }}
      >
        Volver al Inicio
      </Link>
    </div>
  );
}
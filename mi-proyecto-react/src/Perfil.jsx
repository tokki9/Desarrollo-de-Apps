import { useParams } from "react-router";

export function Perfil() {
  const { usuarioId } = useParams();

  return (
    <div
      style={{
        backgroundColor: "#e6f7ff",
        padding: "15px",
        borderRadius: "8px",
      }}
    >
      <h3>Perfil del Usuario</h3>
      <p>
        Identificador leído desde la URL:{" "}
        <strong style={{ color: "#8070f3", fontSize: "1.1em" }}>
          {usuarioId}
        </strong>
      </p>
    </div>
  );
}
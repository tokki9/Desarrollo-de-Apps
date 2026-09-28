// Importaciones de librerías base de React
import React from "react";
import ReactDOM from "react-dom/client";

// Importaciones necesarias de React Router
import { createBrowserRouter, RouterProvider } from "react-router";

// Importación de componentes de vista
import { Layout } from "./Layout";
import { Home } from "./Home";
import { Perfil } from "./Perfil";
import { NotFound } from "./NotFound";

// ============================================================================
// CONFIGURACIÓN DEL ENRUTADOR (createBrowserRouter)
// ============================================================================
const router = createBrowserRouter([
  {
    path: "/",              // Ruta raíz de la aplicación
    Component: Layout,      // Componente padre (Maqueta)
    children: [
      // ----------------------------------------------------------------------
      // ✏️ [CÓDIGO A COMPLETAR POR EL ESTUDIANTE - PASO 1.1]
      // Define la ruta por defecto (index) que renderizará el componente Home
      // Pista: usa { index: true, Component: Home }
      // ----------------------------------------------------------------------
      
      
      // ----------------------------------------------------------------------
      // ✏️ [CÓDIGO A COMPLETAR POR EL ESTUDIANTE - PASO 1.2]
      // Define la ruta dinámica "perfil/:usuarioId" asignada al componente Perfil
      // Pista: usa { path: "perfil/:usuarioId", Component: Perfil }
      // ----------------------------------------------------------------------
      
      
      // ----------------------------------------------------------------------
      // ✏️ [CÓDIGO A COMPLETAR POR EL ESTUDIANTE - PASO 1.3]
      // Define la ruta comodín "*" para capturar errores 404 con NotFound
      // Pista: usa { path: "*", Component: NotFound }
      // ----------------------------------------------------------------------
      
    ],
  },
]);

// ============================================================================
// MONTAJE EN EL DOM
// ============================================================================
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* ---------------------------------------------------------------------- */}
    {/* ✏️ [CÓDIGO A COMPLETAR POR EL ESTUDIANTE - PASO 1.4]                  */}
    {/* Inyecta el componente <RouterProvider router={router} />               */}
    {/* ---------------------------------------------------------------------- */}
    
  </React.StrictMode>
);

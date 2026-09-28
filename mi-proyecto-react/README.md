# 🚀 Práctica Dirigida: Enrutamiento SPA con React Router

<div align="center">

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-8-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)

**Asignatura:** Desarrollo de Aplicaciones  

</div>

---

## 👥 Integrantes del Grupo

| Código / DNI | Apellidos y Nombres | Fecha |
|:------------:|:--------------------|:-----:|
| 2024000374 | Castilla Alegre Nicolle Alby | 28/09/2026 |
| 2024001432 | Kana Zambrano Luz Clarita | 28/09/2026 |
| 2022223851 | Mansilla Ttito Paolo Jesús | 28/09/2026 |
| 2019205301 | Paredes Olanda Emerson Juan | 28/09/2026 |
| 2022602572 | Ramos Quispe Darella Mehily | 28/09/2026 |

---

## 🎯 Objetivo de la Práctica

Aprender a estructurar la navegación del lado del cliente (**Client-Side Routing**) en una **SPA** (Single Page Application) utilizando **React Router**, completando los puntos críticos de código enrutado, jerárquico y dinámico en un tiempo límite de 16 minutos.

---

## 📚 Conceptos Aplicados

| Concepto | Descripción |
|----------|-------------|
| **SPA vs MPA** | En una MPA cada navegación solicita un nuevo HTML al servidor. En una SPA, React Router intercepta la URL y renderiza el componente adecuado en el cliente sin recargar la página. |
| **Rutas Anidadas** | Permiten mantener layouts compartidos (como cabeceras) mientras el contenido central cambia dinámicamente. |
| **createBrowserRouter** | Función que define el árbol de rutas fuera de la jerarquía de renderizado de React. |
| **RouterProvider** | Componente proveedor que entrega el contexto global de navegación a la app. |
| **Outlet** | Marcador de posición donde se montan las rutas hijas dentro del layout padre. |
| **Link** | Componente que sustituye a la etiqueta a para navegar en el cliente evitando la recarga. |
| **useParams** | Hook para extraer variables dinámicas de la URL. |

---

## 📁 Estructura del Proyecto

| Archivo | Descripción |
|---------|-------------|
| `src/main.jsx` | Configuración del router |
| `src/Layout.jsx` | Barra de navegación con Link y Outlet |
| `src/Home.jsx` | Vista principal (index) |
| `src/Perfil.jsx` | Captura de parámetros dinámicos con useParams |
| `src/NotFound.jsx` | Vista de error 404 con enlace de retorno |
| `evidencias/` | Capturas de funcionamiento |
| `index.html` | Punto de entrada HTML |
| `package.json` | Dependencias del proyecto |
| `vite.config.js` | Configuración de Vite |

---

## ⚙️ Instalación y Ejecución

```bash
# 1. Clonar el repositorio
git clone https://github.com/tokki9/Desarrollo-de-Apps.git

# 2. Entrar a la carpeta del proyecto
cd Desarrollo-de-Apps/mi-proyecto-react

# 3. Instalar dependencias
npm install

# 4. Ejecutar servidor de desarrollo
npm run dev

# 5. Abrir en el navegador
http://localhost:5173/

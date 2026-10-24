# ⚡ Atlas — Management Dashboard System

<p align="center">
  <img src="https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Supabase-Database-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white" alt="Supabase" />
  <img src="https://img.shields.io/badge/UI_Style-Dark_Glassmorphism-FF5E36?style=for-the-badge" alt="Glassmorphism" />
  <img src="https://img.shields.io/badge/License-MIT-blue?style=for-the-badge" alt="License" />
</p>

---

## 📌 Descripción General

**Atlas** es un sistema e interfaz de gestión empresarial enfocado en la administración de registros personales (`personas`). La aplicación combina una arquitectura frontend moderna construida con **React + Vite** y un backend BaaS (*Backend as a Service*) con **Supabase**, ofreciendo operaciones **CRUD en tiempo real** (Create, Read, Update, Delete).

El sistema cuenta con una experiencia de usuario (UX/UI) de nivel **SaaS Premium**, aplicando principios de **Bento Grid Layout** y estética **Dark Glassmorphism** inspirada en paneles de control FinTech de alto rendimiento.

---

## 🎨 Características Visuales y Arquitectura

- **Dark Glassmorphism UI:** Paneles translúcidos con `backdrop-filter: blur()`, acentos en gradiente coral/neón e iluminación ambiental.
- **Bento Grid Dashboard:** Estructura de tarjetas modulares adaptables a múltiples resoluciones.
- **Dock Lateral & Navigation Bar:** Menú de navegación flotante tipo *macOS Dock* con acceso directo a módulos.
- **Micro-interacciones y Feedback:** Animaciones suaves de transición, modales dinámicos y loaders en tiempo real.

---

## 🚀 Funcionalidades Principales

- [x] **Lectura Dinámica (READ):** Sincronización en tiempo real de registros desde la base de datos PostgreSQL de Supabase.
- [x] **Creación de Registros (CREATE):** Formulario modal interactivo con validación de campos obligatorios.
- [x] **Búsqueda & Filtro Instantáneo:** Búsqueda reactiva por nombre o tipo de documento sin recargar la página.
- [x] **Actualización (UPDATE):** Precarga de datos existentes dentro del modal para modificación de registros.
- [x] **Eliminación Segura (DELETE):** Confirmación previa y borrado permanente en base de datos.
- [x] **Políticas de Seguridad RLS:** Integración con Row Level Security en Supabase para control de acceso granular.

---

## 🛠️ Stack Tecnológico

| Capa | Tecnología |
| :--- | :--- |
| **Frontend Framework** | [React 18](https://reactjs.org/) |
| **Build Tool & Bundler** | [Vite](https://vitejs.dev/) |
| **Database & BaaS** | [Supabase (PostgreSQL)](https://supabase.com/) |
| **Styling** | Modular CSS3 (Custom Properties + Flexbox/Grid) |
| **Font Family** | [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) |
| **Version Control** | Git & GitHub |

---

## 📂 Estructura del Proyecto

```text
Atlas/
├── frontend/
│   ├── public/
│   │   └── favicon.ico
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   └── personas/
│   │   │       ├── PersonaCard.jsx      # Tarjeta individual con acciones CRUD
│   │   │       ├── PersonaForm.jsx      # Modal reutilizable para Crear / Editar
│   │   │       └── PersonaList.jsx      # Contenedor del listado y filtros
│   │   ├── config/
│   │   │   └── supabase.js          # Cliente configurado de Supabase
│   │   ├── services/
│   │   │   └── personaService.js    # Capa de abstracción de datos (API Client)
│   │   ├── App.css                  # Sistema de estilos Dark Glassmorphism
│   │   ├── App.jsx                  # Layout principal (Dock + Dashboard + Sidebar)
│   │   ├── main.jsx                 # Punto de entrada de React
│   │   └── index.css                # Estilos base globales
│   ├── .env.example                 # Plantilla de variables de entorno
│   ├── index.html                   # HTML base con fuentes de Google Fonts
│   ├── package.json                 # Módulos y scripts de NPM
│   └── vite.config.js               # Configuración de Vite
└── README.md

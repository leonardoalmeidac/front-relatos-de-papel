# Guía de Instalación y Ejecución - Actividad 1 Grupo 33

Este documento detalla los pasos necesarios para configurar el entorno de desarrollo y ejecutar el proyecto desde cero.

## 1. Tecnologías y Librerías Utilizadas

Para que este proyecto funcione, se han instalado y configurado las siguientes herramientas:

*   **Vite**: Herramienta de construcción (build tool) rápida para proyectos web modernos.
*   **React (v18.2)**: Librería base para la construcción de interfaces de usuario basadas en componentes.
*   **React Router DOM (v6.21)**: Encargada de la navegación y el sistema de rutas de la aplicación.
*   **Context API**: Sistema nativo de React utilizado para gestionar el estado global del carrito de compras.
*   **CSS3 con Metodología BEM**: Para el diseño visual organizado y escalable.

## 2. Requisitos Previos

Antes de comenzar, asegúrate de tener instalado lo siguiente:

*   **Node.js**: Es el entorno de ejecución para JavaScript.
    *   Descárgalo en: [https://nodejs.org/](https://nodejs.org/) (Se recomienda la versión **LTS**).
    *   Al instalar Node.js, también se instalará **npm** (Node Package Manager) automáticamente.

## 2. Preparación del Proyecto

Una vez que tengas Node.js instalado:

1.  **Descarga/Clona el proyecto** en una carpeta de tu ordenador.
2.  Abre una terminal (PowerShell, CMD o la terminal de VS Code) en la carpeta raíz del proyecto (`ACTIVIDAD1_GRUPO33`).

## 3. Instalación de Dependencias

Ejecuta el siguiente comando para descargar e instalar todas las librerías necesarias (React, React Router, Vite, etc.):

```bash
npm install
```

Este comando creará una carpeta llamada `node_modules` con todo lo necesario para que el proyecto funcione.

## 4. Ejecución del Proyecto

Para lanzar la aplicación en modo desarrollo, ejecuta:

```bash
npm run dev
```

Una vez ejecutado, la terminal te mostrará una dirección URL (normalmente `http://localhost:5173`). Abre esa dirección en tu navegador para ver la tienda.

## 5. Estructura de Comandos

*   `npm run dev`: Inicia el servidor de desarrollo.
*   `npm run build`: Genera los archivos listos para producción (necesario para desplegar en Vercel).
*   `npm run preview`: Previsualiza la versión de producción localmente.

---
**Curso:** Desarrollo Web Full Stack  
**Actividad:** 1 (Front-end React)  
**Grupo:** 33

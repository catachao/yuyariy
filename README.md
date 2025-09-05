# 🌐 Yuyariy Frontend – Plataforma de Lectura Crítica y Comparación de Noticias

![Status](https://img.shields.io/badge/status-en%20desarrollo-yellow)
![Frontend](https://img.shields.io/badge/frontend-React-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## 📖 Descripción del Proyecto  
**Yuyariy** es una plataforma digital innovadora que fomenta la **lectura crítica** y reduce el **sesgo de confirmación** en los usuarios.  

Este repositorio corresponde al **Frontend** de la aplicación, desarrollado con **React** como **PWA (Progressive Web App)**.  

### ✨ Funcionalidades principales del frontend:
- Interfaz web responsiva y accesible.  
- Visualización de noticias con **comparación entre medios**.  
- Integración con **API backend** para análisis de sesgo.  
- Diccionario contextual para términos complejos.  
- Preguntas de reflexión al final de cada noticia.  
- Sistema de alertas y notificaciones personalizadas.  
- Modo offline con opción de **“guardar para después”**.  

---

## 🛠️ Tecnologías Utilizadas
- [React](https://react.dev/) – Librería principal para el frontend.  
- [Vite](https://vitejs.dev/) – Bundler y entorno de desarrollo rápido.  
- [Tailwind CSS](https://tailwindcss.com/) – Estilos modernos y responsivos.  
- [React Router](https://reactrouter.com/) – Navegación de la aplicación.  
- [Axios](https://axios-http.com/) – Cliente HTTP para consumir el backend.  
- [PWA Support](https://web.dev/progressive-web-apps/) – Compatibilidad con apps instalables.  

---

## 📂 Estructura del Proyecto
```bash
yuyariy-frontend/
├── public/             # Archivos estáticos
├── src/
│   ├── assets/         # Imágenes, íconos
│   ├── components/     # Componentes reutilizables
│   ├── pages/          # Páginas principales (Home, Noticias, Comparador)
│   ├── services/       # Conexiones API (Axios)
│   ├── hooks/          # Hooks personalizados
│   ├── styles/         # Configuración de Tailwind u otros estilos
│   └── App.jsx         # Punto de entrada principal
├── package.json
└── README.md

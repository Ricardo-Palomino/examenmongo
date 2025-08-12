# 🎵 Music Store - Base de Datos MongoDB

Bienvenido a **Music Store**, la base de datos para una tienda de CDs y vinilos creada con MongoDB.  
Este proyecto te permite gestionar tu inventario de álbumes musicales, incluyendo información detallada sobre cada disco, su disponibilidad, origen, precios y más.

---

## 📋 Descripción del Proyecto

Music Store es una tienda especializada en música física, donde se venden CDs y vinilos.  
Esta base de datos está diseñada para almacenar información relevante de cada álbum, facilitando consultas, actualizaciones y administración del stock.

---

## 🔧 Tecnologías y Herramientas Usadas

- MongoDB: Base de datos NoSQL, ideal para manejar documentos flexibles con datos anidados.  
- Visual Studio Code (VS Code): Editor de código ligero y potente.  


---

## 🛠 Requisitos Previos

Antes de comenzar, necesitás tener instalado:

- MongoDB (local o en la nube).  
- Visual Studio Code.  
- Extensión MongoDB for VS Code (buscar en extensiones e instalar).

---

## 🚀 Cómo empezar

1. Abrí Visual Studio Code y asegurate de tener instalada la extensión MongoDB for VS Code.  
2. Conectate a MongoDB usando la paleta de comandos (`Ctrl+Shift+P` o `Cmd+Shift+P`) y seleccionando “MongoDB: Connect”.  
3. Ingresá la URI de conexión a tu base de datos (por ejemplo, `mongodb://localhost:27017`).  

---

## 📁 Archivos y ejemplos de operaciones

- Crear la base de datos y colección.  
- Insertar álbumes con sus datos completos (SKU, título, artista, género, formato, precio, stock, rating, tags, país proveedor, tipo de importación, disponibilidad).  

---

## 🧰 Comandos útiles para administrar la base

### Consultas básicas

- Buscar álbumes por género específico.  
- Buscar álbumes con precio mayor a un valor determinado.  
- Buscar álbumes que no sean de un género específico.  
- Buscar álbumes con rating alto.  
- Buscar álbumes con bajo stock para reposición.

### Actualizaciones

- Agregar campos nuevos a todos los álbumes.  
- Eliminar campos de los documentos.  
- Eliminar etiquetas específicas en los álbumes.

### Eliminaciones

- Eliminar álbumes con SKU específico.  
- Eliminar todos los álbumes sin stock.

---

## 💡 Tips para usar MongoDB con VS Code

- Seleccioná el código en tus archivos y usá la opción “Run Selected MongoDB Command” para ejecutar comandos.  
- Observá los resultados y mensajes en la consola integrada.  
- Mantén tus scripts organizados para facilitar el mantenimiento y la reutilización.  
- Usá filtros precisos para evitar errores en actualizaciones o eliminaciones.

---

## 🤝 Contacto y soporte

Ricardo-Palomino

---

## 🎉 ¡Gracias por usar Music Store!

Con esta base de datos vas a poder gestionar tus álbumes, precios, stock y mucho más fácil que nunca.  

# Message Board

## Descripción

Message Board es una aplicación web simple construida con Node.js, Express y EJS. Permite ver mensajes existentes y agregar nuevos mensajes a un tablón mediante un formulario.

## Características

- Mostrar mensajes existentes en la página principal.
- Agregar nuevos mensajes con nombre de usuario y texto.
- Rutas simples con Express y plantillas EJS.

## Estructura del proyecto

- `app.js` - Configura el servidor Express y define el motor de vistas.
- `routes/index.js` - Gestiona las rutas principales y el almacenamiento en memoria de los mensajes.
- `views/index.ejs` - Vista de la página principal que lista los mensajes.
- `views/form.ejs` - Vista con el formulario para crear un nuevo mensaje.

## Instalación

1. Clona el repositorio o descarga el proyecto.
2. Navega a la carpeta del proyecto:

   ```bash
   cd Message_Board
   ```
3. Instala las dependencias:

   ```bash
   npm install
   ```

## Uso

Inicia el servidor con:

```bash
npm start
```

Luego abre en tu navegador:

```text
http://localhost:3000
```

## Rutas

- `GET /` - Muestra la lista de mensajes.
- `GET /new` - Muestra el formulario para agregar un nuevo mensaje.
- `POST /new` - Envía los datos del formulario y agrega un mensaje.

## Notas

- Los mensajes se guardan en memoria durante la ejecución del servidor. Al reiniciar la aplicación, los mensajes se restablecen.
- Este proyecto es ideal para practicar Express, EJS y el manejo de formularios en Node.js.



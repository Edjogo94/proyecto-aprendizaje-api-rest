# proyecto-aprendizaje-api-rest

Este es un proyecto que usa Node.js, Express, PostgreSQL y otras dependencias para crear una aplicación web.

## Instalación

Para instalar las dependencias del proyecto, ejecuta el siguiente comando:

```shell
npm install
```

## Configuración

Para configurar el proyecto, necesitas crear un archivo llamado `.env` en la raíz de tu proyecto y añadir las siguientes variables de entorno:

```dotenv
PORT= El puerto donde se ejecutará tu aplicación (por ejemplo, 3000)
PG_HOST=localhost
PG_PORT=5432
PG_DATABASE=modulos_uni_antioquia
PG_USER=postgres
PG_PASSWORD=(tu contraseña para psql con el usuario que configures)
```

## Uso

Para iniciar la aplicación, ejecuta el siguiente comando:

```shell
npm start
```

Esto iniciará el servidor en el puerto especificado y se conectará a la base de datos

Para iniciar la aplicación en modo de prueba (usando nodemon), ejecuta el siguiente comando:

```shell
npm start-dev
```

Esto iniciará el servidor en el puerto especificado y se conectará a la base de datos, se volverá a ejecutar el servidor si algun archivo cambia

Para poblar la base de datos con algunos datos de prueba, ejecuta el siguiente comando:

```shell
npm run db:seed
```

Esto ejecutará el script `db/seed.sql` que creará algunas colecciones y documentos en tu base de datos.

# API de Películas y Multimedia

Esta API proporciona acceso a información sobre películas, directores, géneros, productores, tipos de multimedia y más. A continuación se detallan las rutas y controladores disponibles en la API:

## Controlador: directorController

### Directores

-   `GET /directors`: Obtener la lista de todos los directores.
-   `GET /directors/:id`: Obtener información sobre un director específico mediante su ID.
-   `POST /directors`: Crear un nuevo director.
-   `PUT /directors/:id`: Actualizar la información de un director mediante su ID.
-   `DELETE /directors/:id`: Eliminar un director por su ID.

## Controlador: generosController

### Géneros de Películas

-   `GET /generos`: Obtener la lista de todos los géneros de películas.
-   `GET /generos/:id`: Obtener información sobre un género de película específico mediante su ID.
-   `POST /generos`: Crear un nuevo género de película.
-   `PUT /generos/:id`: Actualizar la información de un género de película mediante su ID.
-   `DELETE /generos/:id`: Eliminar un género de película por su ID.

## Controlador: mediaController

### Medios Multimedia

-   `GET /media`: Obtener la lista de todos los medios multimedia.
-   `GET /media/:id`: Obtener información sobre un medio multimedia específico mediante su ID.
-   `POST /media`: Crear un nuevo medio multimedia.
-   `PUT /media/:id`: Actualizar la información de un medio multimedia mediante su ID.
-   `DELETE /media/:id`: Eliminar un medio multimedia por su ID.

## Controlador: productoresController

### Productores

-   `GET /productores`: Obtener la lista de todos los productores.
-   `GET /productores/:id`: Obtener información sobre un productor específico mediante su ID.
-   `POST /productores`: Crear un nuevo productor.
-   `PUT /productores/:id`: Actualizar la información de un productor mediante su ID.
-   `DELETE /productores/:id`: Eliminar un productor por su ID.

## Controlador: tiposController

### Tipos de Multimedia

-   `GET /tipos`: Obtener la lista de todos los tipos de multimedia.
-   `GET /tipos/:id`: Obtener información sobre un tipo de multimedia específico mediante su ID.
-   `POST /tipos`: Crear un nuevo tipo de multimedia.
-   `PUT /tipos/:id`: Actualizar la información de un tipo de multimedia mediante su ID.
-   `DELETE /tipos/:id`: Eliminar un tipo de multimedia por su ID.

## Otras Rutas

-   `GET /`: Inicio o presentación de la API.
-   `404`: Ruta no encontrada (Página no encontrada).

Asegúrate de utilizar los nombres correctos de controladores y rutas en tu aplicación y de proporcionar una descripción detallada de cada ruta si es necesario.

## Autor

Este proyecto fue creado por Eduardo.

## Licencia

Este proyecto está licenciado bajo la licencia ISC.

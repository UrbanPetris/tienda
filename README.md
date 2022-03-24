# Tienda Argentina 360

## Repositorio de curso React (2495) - Coderhouse

Este repositorio contiene todos los archivos necesarios para clonar el proyecto final del curso React (2495) de Coderhouse. El mismo consiste en todos los archivos html, css y javascript utilizados en la creación de la aplicación web de la tienda "Argentina 360". A su vez se listan las dependencias a instalarse para emular el desarrollo en un proyecto de Node.

## Acerca de la aplicación

La aplicación "Tienda" simula un e-commerce de turismo en Argentina denominado "Argentina 360". En el mismo se pueden visualizar distintos tipos de productos turísticos filtrando por varias categorías y obtener luego detalles de alguno en particular.

## Contenidos

- Barra de navegación con brand, carrito y apertura de menún off-canvas.
- Contenedor con tarjetas que simulan la oferta turística
- Contenedor con tarjeta que simula el detalle de un producto específico

## Herramientas empleadas

La aplicación además de React 17.0.2 utiliza las siguientes tecnologías y herramientas de uso libre:

- [React-Bootstrap] - front-end framework implementado con componentes de React. Permite un rápido enmaquetado y diseño adaptable a dispositivos móbiles. El hecho de que sea a través de componentes hace más fácil el mantenimiento y reutilización del código.

## Instalación

Sírvase clonar el repositorio usando git bash o cualquier terminal que permite usar git. Escriba en ella:

```sh
$git clone https://github.com/UrbanPetris/tienda.git
```

Para más información dirígase a la documentación oficial de Github [aquí](https://docs.github.com/es/repositories/creating-and-managing-repositories/cloning-a-repository)

## Organización del proyecto

Si ha hecho una clonación existosa del repositorio encontrará en la carpeta del directorio el siguiente archivo:

- package.json (metadatos del project en Node, incluyendo las dependencias a instalar)

Y un sistema de carpetas y archivos como el siguiente:

- public:

  - index.html
  - /img (imágenes del proyecto, acá deben alojarse las imágenes de los productos cuyos relative paths deberán actualizarse en backend)

- src:
  - App.js
  - App.css
  - /components (js/jsx y css para la renderización y funcionalidad de los componentes de App)
  - /services (js del backend de Firebase)
  - /context (js/jsx que hacen a la configuración de los distintos contextos necesarios para el funcionamiento de la app)

## Configuración

El backend de la app se apoya en los servicios provistos por la plataforma cloud Firebase de Google por lo que para el funcionamiento de la misma se necesita crear un proyecto, desarrollar una base de datos documental y luego configurar las variables de entorno en un archivo .env en el root de la app. A continuación se muestra el procedimiento:

Crear un proyecto con el nombre que desee:

<img src="https://github.com/UrbanPetris/tienda/blob/master/public/img/createproject.JPG?raw=true" width="500">

No es necesario habilitar Google Analytics:

<img src="https://github.com/UrbanPetris/tienda/blob/master/public/img/createproject2.JPG?raw=true" width="500">

Crear una base de datos en modo productivo:

<img src="https://github.com/UrbanPetris/tienda/blob/master/public/img/createdatabase.JPG?raw=true" width="500">

<img src="https://github.com/UrbanPetris/tienda/blob/master/public/img/createdatabase2.JPG?raw=true" width="500">

Comenzar una nueva colección que deberá llamarse _products_

<img src="https://github.com/UrbanPetris/tienda/blob/master/public/img/startcollection.JPG?raw=true" width="500">

Completar los productos con las siguientes fields/keys (_categoryId_, _categoryDescription_, _description_, _img_ _name_, _price_, _stock_). Todas deben ser del tipo texto salvo las últimas dos. Se recomienda que el primer field/key correspondiente al id se genere automáticamente:

<img src="https://github.com/UrbanPetris/tienda/blob/master/public/img/startcollection2.JPG?raw=true" width="500">

![startcollection3](https://github.com/UrbanPetris/tienda/blob/master/public/img/startcollection3.JPG?raw=true)

El campo _categoryId_ debe contener el id de los documentos de la collection a crear de categories donde la key _description_ será el nombre que se incorporará al navbar:

![startcollection4](https://github.com/UrbanPetris/tienda/blob/master/public/img/startcollection4.JPG?raw=true)

Una vez hecho esto deben configurarse las variables de entorno en un archivo .env que deberá ubicarse en el root de la app. Para ello antes se deberá registrar una app (en este caso, web) al proyecto de Firebase:

<img src="https://github.com/UrbanPetris/tienda/blob/master/public/img/firebaseapp.JPG?raw=true" width="500">

No es necesario configurar hosting:

<img src="https://github.com/UrbanPetris/tienda/blob/master/public/img/firebaseapp2.JPG?raw=true" width="400">

Respecto al software development kit, se indica que es necesario instalar Firebase en npm (ya incluído en las dependencias en package.json) e inicializar Firebase en un archivo javascript. Aquí sólo interesa adaptar la configuración de Firebase en un entorno de variables local:

<img src="https://github.com/UrbanPetris/tienda/blob/master/public/img/firebaseapp3.JPG?raw=true" width="600">

<img src="https://github.com/UrbanPetris/tienda/blob/master/public/img/env.JPG?raw=true" width="600">

## Licencia

MIT

**Todo el material audiovisual de este sitio ha sido obtenido de la web.**

[react-bootstrap]: https://react-bootstrap.github.io/

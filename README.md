# Perfil Profesional

## Descripción
Este proyecto es una aplicación web interactiva que he desarrollado con **Create React App** para proporcionar un perfil profesional detallado. Muestra información sobre mis habilidades, proyectos y experiencias de una manera organizada y accesible. A través de este proyecto, he demostrado y ampliado una amplia gama de habilidades y conocimientos técnicos esenciales en el desarrollo web moderno, tales como:

- Uso de **React** para construir una interfaz de usuario eficiente y dinámica.
- Implementación de las últimas características de **JavaScript (ES6+)**, incluyendo funciones de flecha, destructuración y async/await.
- Utilización de **HTML5 y CSS3** para estructurar y diseñar la aplicación.
- Manejo de la navegación dentro de la aplicación con **React Router**.
- Realización de peticiones HTTP a APIs externas utilizando **Axios**.
- Gestión del estado y los efectos secundarios en la aplicación mediante hooks de **React**.
- Uso de **Git y GitHub** para el control de versiones y la colaboración en el desarrollo del proyecto.
- Implementación de pruebas unitarias y de integración con **Jest** y **React Testing Library**.
- Creación de un diseño adaptable con **Responsive Design**.
- Consumo e integración de **APIs RESTful**.
- Conocimientos en **despliegue de aplicaciones web** y configuración de pipelines de **CI/CD**.
- Despliegue del sitio web utilizando **GitHub Pages**.

## Instalación
Para configurar y ejecutar este proyecto en tu máquina local, sigue estos pasos:

1. Clona este repositorio:
    ```sh
    git clone https://github.com/albope/perfil-profesional.git
    cd perfil-profesional
    ```

2. Instala las dependencias necesarias:
    ```sh
    npm install
    ```

## Uso
Para ejecutar la aplicación en modo de desarrollo:
```sh
npm start

Abre http://localhost:3000 para ver la aplicación en el navegador. La página se recargará automáticamente si realizas cambios en el código.
```

## Scripts Disponibles
En el directorio del proyecto, puedes ejecutar:
```sh
npm start: Ejecuta la aplicación en el modo de desarrollo.
npm test: Lanza el corredor de pruebas en el modo interactivo de vigilancia.
npm run build: Construye la aplicación para producción en la carpeta build.
npm run deploy: Despliega la aplicación en GitHub Pages.
npm run eject: Extrae los archivos de configuración para una mayor personalización.
```

## Estructura del Proyecto

La estructura básica del proyecto es la siguiente:
```sh
perfil-profesional/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── Home.js
│   │   ├── Experience.js
│   │   ├── Skills.js
│   │   ├── Projects.js
│   │   ├── Contact.js
│   │   └── Footer.js
│   ├── App.js
│   ├── index.js
│   └── ...
├── .gitignore
├── package.json
├── README.md
└── ...
```
## Despliegue

Para desplegar la aplicación en GitHub Pages, sigue estos pasos:
```sh
1. Asegúrate de tener la configuración correcta en package.json:

"homepage": "https://albope.github.io/perfil-profesional",
"scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
}

2. Construye y despliega la aplicación:

npm run deploy
```
## Contribuciones

Las contribuciones son bienvenidas. Para contribuir, por favor sigue estos pasos:
```sh
Haz un fork de este repositorio.
Crea una nueva rama (git checkout -b feature/nueva-funcionalidad).
Realiza los cambios necesarios y haz commit (git commit -m 'Añadir nueva funcionalidad').
Empuja los cambios a la rama (git push origin feature/nueva-funcionalidad).
Crea un Pull Request.
```
## Licencia

Este proyecto está licenciado bajo la Licencia MIT - ver el archivo LICENSE para más detalles.

## Contacto

Para más información o preguntas, puedes contactarme:

Github: [albope](https://github.com/albope)\
LinkedIn: [Alberto Bort Pérez](https://www.linkedin.com/in/albertobort/)

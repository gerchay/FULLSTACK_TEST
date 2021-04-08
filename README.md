# FULLSTACK_TEST

Full Stack JS - Code Challenge - Español

---

## Iniciar Aplicación

Para iniciar la aplicación con docker compose se escribe el siguiente comando en consola en el directorio del proyecto
```
    docker-compose up
```
Al terminar de construir las imagenes se accede al navegador con la url *http://localhost:3000/*

![alt-text](https://github.com/gerchay/FULLSTACK_TEST/blob/main/img/react-app.png)

En la parte superior se encuentra un caja de texto y boton, al ingresar una palabra o un texto se tiene que presionar el boton, el texto sera procesado en la api y regresara el texto invertido y un verdadero o falso si la palabra o texto enviado es palindrome.

### Archivo docker-compose 🐳

EL archivo docker-compose.yml contiene dos servicios
1. api-server: crea y levanta la imagen que se encuentra adentro de la carpeta api, que contiene el backend de la aplicación y se expone en el puerto 5000

``` Dockerfile
    api-server:
        image: api-toolbox
        build:
        dockerfile: Dockerfile 
        context: ./api
        ports: 
        - "5000:5000" 
```

2. front-react: crea la imagen que se encuentra en el directorio front, la nombre front-toolbox y se expone en el puerto 3000

``` Dockerfile
    front-react: 
        image: front-toolbox
        build: 
        dockerfile: Dockerfile
        context: ./front
        stdin_open: true
        ports: 
        - "3000:3000"
```

Para ambos servicio se utiliza una red llamada mern-app

``` Dockerfile
    networks:
        mern-app:
            driver: bridge
```

---

## API

### Tecnologias utilizadas 🚀

- [NodeJs](https://nodejs.org/en/) - 12
- [ExpressJs](https://expressjs.com/) - 4.17.1
- [cors](https://www.npmjs.com/package/cors) - 2.8.5
- [Mocha](https://mochajs.org/) - 8.3.2
- [Chai](https://www.chaijs.com/) - 4.3.4
- [SuperTest](https://github.com/visionmedia/supertest#readme) - 6.1.3

### TESTS 🧪

La apliación cuenta con diferentes tests realizados con mocha + chai + supertest. Los test van dirigidos hacía la petición GET /iecho, donde se comprueba que la api regrese un status 200 en caso de exito, regrese el texto invertido y que se regrese un verdadero o falso si el texto es palindrome. 
Para realizar se escriben los siguientes comandos en la consola.

``` 
    cd api
    npm install
    npm test
```

### Dockerfile 🐳

Para construir la imagen de la aplicación en node y expres js, se utiliza *node:12-alpine* .

``` Dockerfile
    FROM node:12-alpine
```

Dentro de la imagen se crea un directorio llamado app, a continucación se copia todos los archivos que lleven package sobre ese directorio y se installa las dependencias 

``` Dockerfile
    WORKDIR /app
    COPY package*.json ./
    RUN npm install 
    COPY . .
```

La imagen queda expuesta al puerto 5000

``` Dockerfile
    EXPOSE 5000
```

---

## FRONT

### Tecnologias utilizadas 🚀

- [Node](https://nodejs.org/en/) - 12
- [React](https://es.reactjs.org/) - 17.0.2
- [React-Bootstrap](https://react-bootstrap.github.io/) - 1.5.2
- [Bootstrap-CDN](https://getbootstrap.com/docs/5.0/getting-started/introduction/) - 5.0.0
- [Jest](https://jestjs.io/docs/getting-started) - 5.11.4
- [enzyme](https://enzymejs.github.io/enzyme/) - 3.11.0

### TESTS 🧪

La apliación cuenta con un archivo app.test.js que realiza un snapshot del componente para permitir ver los cambios realizados y que el flujo del componente se siga manteniendo.

```
    cd front
    npm install
    npm run test
```

### Dockerfile 🐳

Para construir la imagen de la aplicación en react, se utiliza *node:12* y *nginx:alpine* .

``` Dockerfile
    FROM node:12-alpine
    FROM nginx:alpine
```

Se crea una variable de entorno llamada *PORT* para enviarla al archivo nginx.conf. la imagen queda expuesta en el puerto 3000

``` Dockerfile
    ENV PORT 3000
    ENV HOST 0.0.0.0
    EXPOSE 3000
```

---

⭐️ From [@gerchay](https://github.com/gerchay)

# Microservicio Docker + Serverless

Taller donde se implementa el mismo microservicio de dos formas: como contenedor Docker y como funcion serverless. El endpoint recibe un nombre y devuelve un saludo.

---

## Estructura del proyecto

```
microservicio-docker/
├── app/
│   ├── index.js
│   ├── package.json
│   ├── Dockerfile
│   └── .dockerignore
├── serverless/
│   ├── handler.js
│   └── serverless.yml
├── docker-compose.yml
└── README.md
```

---

## Parte 1 — Docker

Se creo una API REST con Node.js y Express que expone dos endpoints:

- `GET /hello?name=Ana` responde `{"message": "Hola Ana desde Docker"}`
- `GET /health` responde `{"status": "ok"}`

Se escribio el Dockerfile usando la imagen `node:20-alpine`, instalando solo las dependencias de produccion y corriendo el proceso con un usuario no root por seguridad. Se construyo la imagen localmente, se ejecuto el contenedor en el puerto 3000 y se verifico que los dos endpoints respondieran correctamente.

La imagen quedo publicada en Docker Hub:
`https://hub.docker.com/r/camilo22021517/hello-microservice`

---

## Parte 2 — Serverless

Se implemento el handler para AWS Lambda en `serverless/handler.js`. La funcion recibe el evento de API Gateway, extrae el parametro `name` del query string y devuelve la respuesta en el formato que espera Lambda, sin usar Express ni levantar ningun servidor.

La configuracion del despliegue esta en `serverless.yml` apuntando a AWS con runtime Node.js 20, memoria de 128 MB y un timeout de 10 segundos.

---

## Referencias

- [Docker Docs](https://docs.docker.com/reference/dockerfile/)
- [Serverless Framework Docs](https://www.serverless.com/framework/docs)
- [AWS Lambda Docs](https://docs.aws.amazon.com/lambda/latest/dg/getting-started.html)

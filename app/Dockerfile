# ── Etapa 1: imagen base ──────────────────────────────────────
FROM node:20-alpine

# Metadata
LABEL maintainer="tu-usuario@email.com"
LABEL description="Microservicio Hello World con Node.js"

# Directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar archivos de dependencias primero (aprovecha cache de Docker)
COPY package*.json ./

# Instalar solo dependencias de producción
RUN npm install --omit=dev

# Copiar el resto del código
COPY . .

# Exponer el puerto que usa la app
EXPOSE 3000

# Usuario no-root por seguridad
USER node

# Comando de inicio
CMD ["node", "index.js"]

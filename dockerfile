# Fase de build
FROM node:18-alpine AS build

WORKDIR /app

# Copiar solo los archivos de dependencias primero
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código
COPY . .

# Ejecutar el build de producción
RUN npm run build

# Fase final: servidor web
FROM nginx:alpine

# Copiar los archivos generados al servidor nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Exponer el puerto 80
EXPOSE 80

# Comando por defecto
CMD ["nginx", "-g", "daemon off;"]

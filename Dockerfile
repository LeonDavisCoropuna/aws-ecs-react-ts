# Usa una imagen de Node.js como base
FROM node:14.18.3 as builder

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia el package.json y el package-lock.json (o yarn.lock) al directorio de trabajo
COPY package.json .

# Instala las dependencias del proyecto
RUN npm install

# Copia todos los archivos del proyecto al directorio de trabajo
COPY . .

# Compila la aplicación
RUN npm run build

# Etapa de producción
FROM nginx


# Configura Nginx para que sirva la aplicación en el puerto 80
EXPOSE 80
# Copia los archivos compilados de la etapa de construcción a la carpeta de archivos estáticos de Nginx
COPY --from=builder /app/build /usr/share/nginx/html

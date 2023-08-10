FROM node:16-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install -g npm@9.8.1
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build
#RUN ng build
EXPOSE 4200
CMD ["npm", "start"]
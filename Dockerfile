FROM node:latest
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY index.js ./
EXPOSE 3005
CMD ["node", "index.js"]
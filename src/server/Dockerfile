FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=5000

CMD ["npm", "run", "start:dev"]


EXPOSE 5000

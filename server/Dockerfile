FROM node:17

WORKDIR /home/server

COPY package.json .

RUN npm install

COPY . ./

EXPOSE 8080

CMD ["npm", "run", "dev"]

FROM node:17
RUN mkdir -p /home/server
WORKDIR /home/server
COPY package.json /home/server/
RUN npm install
COPY . ./
EXPOSE 8080
CMD ["npm", "run", "dev"]

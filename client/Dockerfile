FROM node:17
RUN mkdir -p /home/client
WORKDIR /home/client
COPY package.json /home/client/
RUN npm install
COPY . ./
EXPOSE 3000
CMD ["npm", "start"]
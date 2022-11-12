# Dockerized full stack web application template

This template utilizes 
- Postgres server
- Node
- Express
- React

To spin up the docker image, run 

```
cd CRUD-docker/
```

```
npm i -C ./client && npm i -C ./server
```

```
docker-compose up
```

Once the container is running, visit [localhost:3000](http://localhost:3000)



> :warning: env file present in /server, but it only contains a default password

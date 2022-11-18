# Dockerized full stack web application template

This template utilizes 
- Postgres server
- Node (Javasript)
- Express
- React (Javascript)
  - React Router

To spin up the docker image, run 

```
cd Dockerized-React-SQL/
```


```
docker-compose up
```

Once the container is running, visit [localhost:3000](http://localhost:3000)



> :warning: env file present in /server, which only contains default credentials. However, it should generally be avoided when it contains sensitive information.

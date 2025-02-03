# URL-Shortener

# App

## Start

npm install 

npm run devStart

## MongoDB

### Start a MongoDB Container:

docker run -d --name mongodb-container -p 27017:27017 mongo

### Verify, that MongoDB is running

docker exec -it mongodb-container mongosh

show dbs

### Start and Stop MongoDB

docker start mongodb-container
docker stop mongodb-container

### Check running containers

docker ps
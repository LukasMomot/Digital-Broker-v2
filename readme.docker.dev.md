How t use DEV enironment for docker
docker build -t digital-broker-dev -f Dockerfile.dev .
docker run -v ${PWD}:/app -v /app/node_modules -p 4201:4200 -p 49153:49153 --rm digital-broker-dev

docker-compose -f docker-compose.dev.yml up --build

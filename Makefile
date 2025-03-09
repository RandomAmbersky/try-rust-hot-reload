DOCKER_COMPOSE_FILE = "./docker/docker-compose.yml"

docker-up: docker-build
	docker compose --file ${DOCKER_COMPOSE_FILE} up --build --force-recreate

docker-build:
	docker compose --file ${DOCKER_COMPOSE_FILE} build

docker-build-from-scratch:
	docker compose --file ${DOCKER_COMPOSE_FILE} build --no-cache

web:
	python3 -m http.server 8000 -d ./app/dist

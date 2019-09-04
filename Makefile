include .env

DOCKER='docker'
COMPOSE='docker-compose'

build:
	$(COMPOSE) build

# ----- LOCAL DEVELOPMENT -----
clean:
	$(COMPOSE) down

start: build
	$(COMPOSE) up -d

bash:
	$(COMPOSE) run --entrypoint=sh app

# ----- TESTING -----
test: build
	$(COMPOSE) run -e NODE_ENV=test --entrypoint=npm app run test

# ----- PRODUCTION -----
prod: build
	$(COMPOSE) run -d -e NODE_ENV=production --entrypoint=npm 

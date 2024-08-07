up:
	docker-compose -f docker/docker-compose.yml up --build -d

down:
	docker-compose -f docker/docker-compose.yml down

build:
	docker-compose -f docker/docker-compose.yml build

restart:
	docker-compose -f docker/docker-compose.yml down && docker-compose -f docker/docker-compose.yml up --build -d

logs:
	docker-compose -f docker/docker-compose.yml logs -f

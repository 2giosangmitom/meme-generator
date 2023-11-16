IMAGE_NAME=meme_generator
CONTAINER_NAME=pheloi_meme

build:
	docker buildx build -t $(IMAGE_NAME):latest .

run:
	docker run --name $(CONTAINER_NAME)  -dp 8080:8080 $(IMAGE_NAME):latest

stop:
	docker container stop $(CONTAINER_NAME)

remove:
	docker rm $(CONTAINER_NAME)

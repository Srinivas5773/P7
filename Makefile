# OmniHealth OS - Build and Execution Automation Makefile

.PHONY: all install build run test clean docker-build docker-run

all: install build test

install:
	npm install

build:
	npm run build

run:
	npm start

test:
	npm test

clean:
	rm -rf node_modules coverage dist

docker-build:
	docker build -t omnihealth-hospital-os:latest .

docker-run:
	docker run -p 3000:3000 omnihealth-hospital-os:latest

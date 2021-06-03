# example-node-k8s
example node/vue stack with k8s orchestration


## Requirements

- minikube
- docker
- node js

## Running

Start minikube
`$ minkube start`

Enable Ingress

`$ minikube addons enable ingress`

Enable Metrics

`$ minkube addons enable metrics-server`

Allow minikube to pull from local images

`$ eval $(minikube -p minikube docker-env)`

Build containers

`$ docker compose -f docker-compose-local.yml build`

Run local stack with docker
`$ docker compose -f docker-compose-local.yml up`

Run k8s stack
`$ kubectl create -R -f k8s/deployments`

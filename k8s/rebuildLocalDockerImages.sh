eval $(minikube -p minikube docker-env)
echo "Deleting example-node-k8s containers"
docker image rm -f $(docker images -f "reference=example-node-k8s*" -q)
echo "building docker image example-node-k8s_api"
docker build ../api -t example-node-k8s_api
echo "building docker image example-node-k8s_www"
docker build ../www -t example-node-k8s_www

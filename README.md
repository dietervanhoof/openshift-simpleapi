# Simple API Openshift example
## Steps
- Build the image: `docker build -t <IMAGESTREAM> .` (`docker build -t simpleapi .`)
- Tag the image: `docker tag simpleapi <DOCKER-REGISTRY-HOST>/<NAMESPACE>/<IMAGESTREAM>:<TAG>` (`docker tag simpleapi myregistry.com/dieter/simpleapi:latest`)
- Login to the Openshift cluster: `oc login <OPENSHIFT-HOST>` and provide your username and password
- Get a registry token: `oc whoami -t`
- Login to the Docker Registry: `docker login -p <TOKEN> -u <USERNAME> <DOCKER-REGISTRY-LOCATION>`
- Push the image: `docker push <DOCKER-REGISTRY-HOST>/<NAMESPACE>/<IMAGESTREAM>:<TAG>` (`docker push myregistry.com/dieter/simpleapi:latest`)
- Create a new app based on this image: `oc new-app <NAMESPACE>/<IMAGESTREAM>:<TAG>` (`oc new-app dieter/simpleapi:latest`)
- Expose the service: `oc expose svc <SERVICENAME>` (`oc expose svc simpleapi`)
- Get the route: `oc get route`
- Do a curl

# Load nerdctl build function from Tilt's extension
load('ext://nerdctl', 'nerdctl_build')

# Use nerdctl to build the image
nerdctl_build(
    ref='react-todo-app',
    context='.',
    dockerfile='Dockerfile'
)

# Apply Kubernetes YAML manifests
k8s_yaml(['k8s/deployment.yaml', 'k8s/service.yaml'])

# Define the Kubernetes resource and port forward
k8s_resource('todo-frontend', port_forwards=30080)

# Create Namespaces in Kubernetes Cluster

``` YAML
apiVersion: v1
kind: Namespace
metadata:
  name:  dev
---
apiVersion: v1
kind: Pod
metadata:
  name: dev-nginx-pod
  namespace: dev
spec:
  containers:
  - name: dev-nginx-pod
    image: nginx:latest
```

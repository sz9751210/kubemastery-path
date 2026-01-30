---
id: auto-cka-15
title: Auto CKA Practice (Batch 15)
category: CKA
duration: 120 mins
---

# Auto CKA Practice (Batch 15)

This is an auto-generated exam to provide infinite practice questions.

# Task 1: Scale Deployment
Create a deployment named `resource-7wgaag` in namespace `default` using image `postgres`.
Scale it to `2` replicas.
Then, perform a rolling update to image `postgres:latest`.

```setup
kubectl create ns default --dry-run=client -o yaml | kubectl apply -f -
kubectl delete deploy resource-7wgaag -n default 2>/dev/null || true
```

```verify
kubectl get deploy resource-7wgaag -n default -o jsonpath='{.spec.replicas}' | grep 2
kubectl get deploy resource-7wgaag -n default -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "postgres:latest"
```


# Task 2: Expose Service
Expose the deployment `resource-xek6la-dep` as a Service named `resource-xek6la` in namespace `frontend`.
The service should listen on port `3896` and be of type `ClusterIP`.

```setup
kubectl create ns frontend --dry-run=client -o yaml | kubectl apply -f -
kubectl create deployment resource-xek6la-dep --image=nginx -n frontend --dry-run=client -o yaml | kubectl apply -f -
kubectl delete svc resource-xek6la -n frontend 2>/dev/null || true
```

```verify
kubectl get svc resource-xek6la -n frontend -o jsonpath='{.spec.ports[0].port}' | grep 3896
kubectl get svc resource-xek6la -n frontend -o jsonpath='{.spec.type}' | grep ClusterIP
```


# Task 3: Expose Service
Expose the deployment `resource-mws61h-dep` as a Service named `resource-mws61h` in namespace `prod`.
The service should listen on port `5329` and be of type `ClusterIP`.

```setup
kubectl create ns prod --dry-run=client -o yaml | kubectl apply -f -
kubectl create deployment resource-mws61h-dep --image=nginx -n prod --dry-run=client -o yaml | kubectl apply -f -
kubectl delete svc resource-mws61h -n prod 2>/dev/null || true
```

```verify
kubectl get svc resource-mws61h -n prod -o jsonpath='{.spec.ports[0].port}' | grep 5329
kubectl get svc resource-mws61h -n prod -o jsonpath='{.spec.type}' | grep ClusterIP
```


# Task 4: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-6umkm0` in namespace `prod`.
Request `2Gi` storage with access mode `ReadWriteOnce`.

```setup
kubectl create ns prod --dry-run=client -o yaml | kubectl apply -f -
kubectl delete pvc resource-6umkm0 -n prod 2>/dev/null || true
```

```verify
kubectl get pvc resource-6umkm0 -n prod -o jsonpath='{.spec.resources.requests.storage}' | grep 2Gi
kubectl get pvc resource-6umkm0 -n prod -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteOnce
```


# Task 5: Expose Service
Expose the deployment `resource-464nd3-dep` as a Service named `resource-464nd3` in namespace `backend`.
The service should listen on port `4077` and be of type `ClusterIP`.

```setup
kubectl create ns backend --dry-run=client -o yaml | kubectl apply -f -
kubectl create deployment resource-464nd3-dep --image=nginx -n backend --dry-run=client -o yaml | kubectl apply -f -
kubectl delete svc resource-464nd3 -n backend 2>/dev/null || true
```

```verify
kubectl get svc resource-464nd3 -n backend -o jsonpath='{.spec.ports[0].port}' | grep 4077
kubectl get svc resource-464nd3 -n backend -o jsonpath='{.spec.type}' | grep ClusterIP
```


# Task 6: Expose Service
Expose the deployment `resource-6zndmk-dep` as a Service named `resource-6zndmk` in namespace `dev`.
The service should listen on port `3833` and be of type `ClusterIP`.

```setup
kubectl create ns dev --dry-run=client -o yaml | kubectl apply -f -
kubectl create deployment resource-6zndmk-dep --image=nginx -n dev --dry-run=client -o yaml | kubectl apply -f -
kubectl delete svc resource-6zndmk -n dev 2>/dev/null || true
```

```verify
kubectl get svc resource-6zndmk -n dev -o jsonpath='{.spec.ports[0].port}' | grep 3833
kubectl get svc resource-6zndmk -n dev -o jsonpath='{.spec.type}' | grep ClusterIP
```


# Task 7: Expose Service
Expose the deployment `resource-tmxvja-dep` as a Service named `resource-tmxvja` in namespace `frontend`.
The service should listen on port `8900` and be of type `NodePort`.

```setup
kubectl create ns frontend --dry-run=client -o yaml | kubectl apply -f -
kubectl create deployment resource-tmxvja-dep --image=nginx -n frontend --dry-run=client -o yaml | kubectl apply -f -
kubectl delete svc resource-tmxvja -n frontend 2>/dev/null || true
```

```verify
kubectl get svc resource-tmxvja -n frontend -o jsonpath='{.spec.ports[0].port}' | grep 8900
kubectl get svc resource-tmxvja -n frontend -o jsonpath='{.spec.type}' | grep NodePort
```


# Task 8: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-5oyu1d` in namespace `default`.
Request `10Gi` storage with access mode `ReadOnlyMany`.

```setup
kubectl create ns default --dry-run=client -o yaml | kubectl apply -f -
kubectl delete pvc resource-5oyu1d -n default 2>/dev/null || true
```

```verify
kubectl get pvc resource-5oyu1d -n default -o jsonpath='{.spec.resources.requests.storage}' | grep 10Gi
kubectl get pvc resource-5oyu1d -n default -o jsonpath='{.spec.accessModes[0]}' | grep ReadOnlyMany
```


# Task 9: Create a Pod
Create a pod named `resource-seaps0` in namespace `kube-system` using image `busybox`.
Ensure it has a label `release=stable`.

```setup
kubectl create ns kube-system --dry-run=client -o yaml | kubectl apply -f -
# Clean up if exists
kubectl delete pod resource-seaps0 -n kube-system --force --grace-period=0 2>/dev/null || true
```

```verify
kubectl get pod resource-seaps0 -n kube-system --no-headers | grep Running
kubectl get pod resource-seaps0 -n kube-system -o jsonpath='{.metadata.labels.release}' | grep stable
```


# Task 10: Expose Service
Expose the deployment `resource-vmr69n-dep` as a Service named `resource-vmr69n` in namespace `staging`.
The service should listen on port `3005` and be of type `NodePort`.

```setup
kubectl create ns staging --dry-run=client -o yaml | kubectl apply -f -
kubectl create deployment resource-vmr69n-dep --image=nginx -n staging --dry-run=client -o yaml | kubectl apply -f -
kubectl delete svc resource-vmr69n -n staging 2>/dev/null || true
```

```verify
kubectl get svc resource-vmr69n -n staging -o jsonpath='{.spec.ports[0].port}' | grep 3005
kubectl get svc resource-vmr69n -n staging -o jsonpath='{.spec.type}' | grep NodePort
```


# Task 11: Create a Pod
Create a pod named `resource-siskbg` in namespace `default` using image `nginx`.
Ensure it has a label `team=blue`.

```setup
kubectl create ns default --dry-run=client -o yaml | kubectl apply -f -
# Clean up if exists
kubectl delete pod resource-siskbg -n default --force --grace-period=0 2>/dev/null || true
```

```verify
kubectl get pod resource-siskbg -n default --no-headers | grep Running
kubectl get pod resource-siskbg -n default -o jsonpath='{.metadata.labels.team}' | grep blue
```


# Task 12: Create a Pod
Create a pod named `resource-de8z9z` in namespace `kube-system` using image `mysql`.
Ensure it has a label `release=stable`.

```setup
kubectl create ns kube-system --dry-run=client -o yaml | kubectl apply -f -
# Clean up if exists
kubectl delete pod resource-de8z9z -n kube-system --force --grace-period=0 2>/dev/null || true
```

```verify
kubectl get pod resource-de8z9z -n kube-system --no-headers | grep Running
kubectl get pod resource-de8z9z -n kube-system -o jsonpath='{.metadata.labels.release}' | grep stable
```


# Task 13: Create a Pod
Create a pod named `resource-9ws993` in namespace `staging` using image `python:3.9`.
Ensure it has a label `app=web`.

```setup
kubectl create ns staging --dry-run=client -o yaml | kubectl apply -f -
# Clean up if exists
kubectl delete pod resource-9ws993 -n staging --force --grace-period=0 2>/dev/null || true
```

```verify
kubectl get pod resource-9ws993 -n staging --no-headers | grep Running
kubectl get pod resource-9ws993 -n staging -o jsonpath='{.metadata.labels.app}' | grep web
```


# Task 14: Create a Pod
Create a pod named `resource-0e7gkr` in namespace `prod` using image `httpd`.
Ensure it has a label `team=blue`.

```setup
kubectl create ns prod --dry-run=client -o yaml | kubectl apply -f -
# Clean up if exists
kubectl delete pod resource-0e7gkr -n prod --force --grace-period=0 2>/dev/null || true
```

```verify
kubectl get pod resource-0e7gkr -n prod --no-headers | grep Running
kubectl get pod resource-0e7gkr -n prod -o jsonpath='{.metadata.labels.team}' | grep blue
```


# Task 15: Node Maintenance
Mark node `node-1` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.

```setup
# Ensure node is uncordoned first
kubectl uncordon node-1 2>/dev/null || true
```

```verify
# Check if node exists and is ready (was uncordoned)
kubectl get node node-1 --no-headers | grep Ready | grep -v SchedulingDisabled
```


# Task 16: Scale Deployment
Create a deployment named `resource-1e1mmk` in namespace `frontend` using image `mysql`.
Scale it to `4` replicas.
Then, perform a rolling update to image `mysql:latest`.

```setup
kubectl create ns frontend --dry-run=client -o yaml | kubectl apply -f -
kubectl delete deploy resource-1e1mmk -n frontend 2>/dev/null || true
```

```verify
kubectl get deploy resource-1e1mmk -n frontend -o jsonpath='{.spec.replicas}' | grep 4
kubectl get deploy resource-1e1mmk -n frontend -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "mysql:latest"
```


# Task 17: Expose Service
Expose the deployment `resource-md87ra-dep` as a Service named `resource-md87ra` in namespace `frontend`.
The service should listen on port `8047` and be of type `NodePort`.

```setup
kubectl create ns frontend --dry-run=client -o yaml | kubectl apply -f -
kubectl create deployment resource-md87ra-dep --image=nginx -n frontend --dry-run=client -o yaml | kubectl apply -f -
kubectl delete svc resource-md87ra -n frontend 2>/dev/null || true
```

```verify
kubectl get svc resource-md87ra -n frontend -o jsonpath='{.spec.ports[0].port}' | grep 8047
kubectl get svc resource-md87ra -n frontend -o jsonpath='{.spec.type}' | grep NodePort
```


# Task 18: Node Maintenance
Mark node `node-2` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.

```setup
# Ensure node is uncordoned first
kubectl uncordon node-2 2>/dev/null || true
```

```verify
# Check if node exists and is ready (was uncordoned)
kubectl get node node-2 --no-headers | grep Ready | grep -v SchedulingDisabled
```


# Task 19: Node Maintenance
Mark node `node-2` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.

```setup
# Ensure node is uncordoned first
kubectl uncordon node-2 2>/dev/null || true
```

```verify
# Check if node exists and is ready (was uncordoned)
kubectl get node node-2 --no-headers | grep Ready | grep -v SchedulingDisabled
```


# Task 20: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-uyze8x` in namespace `default`.
Request `10Gi` storage with access mode `ReadWriteOnce`.

```setup
kubectl create ns default --dry-run=client -o yaml | kubectl apply -f -
kubectl delete pvc resource-uyze8x -n default 2>/dev/null || true
```

```verify
kubectl get pvc resource-uyze8x -n default -o jsonpath='{.spec.resources.requests.storage}' | grep 10Gi
kubectl get pvc resource-uyze8x -n default -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteOnce
```


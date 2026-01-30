---
id: auto-cka-17
title: Auto CKA Practice (Batch 17)
category: CKA
duration: 120 mins
---

# Auto CKA Practice (Batch 17)

This is an auto-generated exam to provide infinite practice questions.

# Task 1: Create a Pod
Create a pod named `resource-e8jame` in namespace `test` using image `python:3.9`.
Ensure it has a label `release=stable`.

```setup
kubectl create ns test --dry-run=client -o yaml | kubectl apply -f -
# Clean up if exists
kubectl delete pod resource-e8jame -n test --force --grace-period=0 2>/dev/null || true
```

```verify
kubectl get pod resource-e8jame -n test --no-headers | grep Running
kubectl get pod resource-e8jame -n test -o jsonpath='{.metadata.labels.release}' | grep stable
```


# Task 2: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-p6l23n` in namespace `prod`.
Request `2Gi` storage with access mode `ReadWriteOnce`.

```setup
kubectl create ns prod --dry-run=client -o yaml | kubectl apply -f -
kubectl delete pvc resource-p6l23n -n prod 2>/dev/null || true
```

```verify
kubectl get pvc resource-p6l23n -n prod -o jsonpath='{.spec.resources.requests.storage}' | grep 2Gi
kubectl get pvc resource-p6l23n -n prod -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteOnce
```


# Task 3: Create a Pod
Create a pod named `resource-0laz5d` in namespace `backend` using image `memcached`.
Ensure it has a label `tier=frontend`.

```setup
kubectl create ns backend --dry-run=client -o yaml | kubectl apply -f -
# Clean up if exists
kubectl delete pod resource-0laz5d -n backend --force --grace-period=0 2>/dev/null || true
```

```verify
kubectl get pod resource-0laz5d -n backend --no-headers | grep Running
kubectl get pod resource-0laz5d -n backend -o jsonpath='{.metadata.labels.tier}' | grep frontend
```


# Task 4: Expose Service
Expose the deployment `resource-9fckmz-dep` as a Service named `resource-9fckmz` in namespace `prod`.
The service should listen on port `5587` and be of type `NodePort`.

```setup
kubectl create ns prod --dry-run=client -o yaml | kubectl apply -f -
kubectl create deployment resource-9fckmz-dep --image=nginx -n prod --dry-run=client -o yaml | kubectl apply -f -
kubectl delete svc resource-9fckmz -n prod 2>/dev/null || true
```

```verify
kubectl get svc resource-9fckmz -n prod -o jsonpath='{.spec.ports[0].port}' | grep 5587
kubectl get svc resource-9fckmz -n prod -o jsonpath='{.spec.type}' | grep NodePort
```


# Task 5: Expose Service
Expose the deployment `resource-pywfkl-dep` as a Service named `resource-pywfkl` in namespace `default`.
The service should listen on port `7222` and be of type `NodePort`.

```setup
kubectl create ns default --dry-run=client -o yaml | kubectl apply -f -
kubectl create deployment resource-pywfkl-dep --image=nginx -n default --dry-run=client -o yaml | kubectl apply -f -
kubectl delete svc resource-pywfkl -n default 2>/dev/null || true
```

```verify
kubectl get svc resource-pywfkl -n default -o jsonpath='{.spec.ports[0].port}' | grep 7222
kubectl get svc resource-pywfkl -n default -o jsonpath='{.spec.type}' | grep NodePort
```


# Task 6: Scale Deployment
Create a deployment named `resource-ady5jc` in namespace `kube-system` using image `redis`.
Scale it to `4` replicas.
Then, perform a rolling update to image `redis:latest`.

```setup
kubectl create ns kube-system --dry-run=client -o yaml | kubectl apply -f -
kubectl delete deploy resource-ady5jc -n kube-system 2>/dev/null || true
```

```verify
kubectl get deploy resource-ady5jc -n kube-system -o jsonpath='{.spec.replicas}' | grep 4
kubectl get deploy resource-ady5jc -n kube-system -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "redis:latest"
```


# Task 7: Create a Pod
Create a pod named `resource-52r700` in namespace `dev` using image `httpd`.
Ensure it has a label `team=blue`.

```setup
kubectl create ns dev --dry-run=client -o yaml | kubectl apply -f -
# Clean up if exists
kubectl delete pod resource-52r700 -n dev --force --grace-period=0 2>/dev/null || true
```

```verify
kubectl get pod resource-52r700 -n dev --no-headers | grep Running
kubectl get pod resource-52r700 -n dev -o jsonpath='{.metadata.labels.team}' | grep blue
```


# Task 8: Node Maintenance
Mark node `node-3` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.

```setup
# Ensure node is uncordoned first
kubectl uncordon node-3 2>/dev/null || true
```

```verify
# Check if node exists and is ready (was uncordoned)
kubectl get node node-3 --no-headers | grep Ready | grep -v SchedulingDisabled
```


# Task 9: Create a Pod
Create a pod named `resource-u7lxiv` in namespace `dev` using image `memcached`.
Ensure it has a label `team=blue`.

```setup
kubectl create ns dev --dry-run=client -o yaml | kubectl apply -f -
# Clean up if exists
kubectl delete pod resource-u7lxiv -n dev --force --grace-period=0 2>/dev/null || true
```

```verify
kubectl get pod resource-u7lxiv -n dev --no-headers | grep Running
kubectl get pod resource-u7lxiv -n dev -o jsonpath='{.metadata.labels.team}' | grep blue
```


# Task 10: Expose Service
Expose the deployment `resource-abiqcb-dep` as a Service named `resource-abiqcb` in namespace `test`.
The service should listen on port `7540` and be of type `ClusterIP`.

```setup
kubectl create ns test --dry-run=client -o yaml | kubectl apply -f -
kubectl create deployment resource-abiqcb-dep --image=nginx -n test --dry-run=client -o yaml | kubectl apply -f -
kubectl delete svc resource-abiqcb -n test 2>/dev/null || true
```

```verify
kubectl get svc resource-abiqcb -n test -o jsonpath='{.spec.ports[0].port}' | grep 7540
kubectl get svc resource-abiqcb -n test -o jsonpath='{.spec.type}' | grep ClusterIP
```


# Task 11: Scale Deployment
Create a deployment named `resource-ne3gun` in namespace `staging` using image `redis`.
Scale it to `5` replicas.
Then, perform a rolling update to image `redis:latest`.

```setup
kubectl create ns staging --dry-run=client -o yaml | kubectl apply -f -
kubectl delete deploy resource-ne3gun -n staging 2>/dev/null || true
```

```verify
kubectl get deploy resource-ne3gun -n staging -o jsonpath='{.spec.replicas}' | grep 5
kubectl get deploy resource-ne3gun -n staging -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "redis:latest"
```


# Task 12: Scale Deployment
Create a deployment named `resource-qy548m` in namespace `kube-system` using image `httpd`.
Scale it to `3` replicas.
Then, perform a rolling update to image `httpd:latest`.

```setup
kubectl create ns kube-system --dry-run=client -o yaml | kubectl apply -f -
kubectl delete deploy resource-qy548m -n kube-system 2>/dev/null || true
```

```verify
kubectl get deploy resource-qy548m -n kube-system -o jsonpath='{.spec.replicas}' | grep 3
kubectl get deploy resource-qy548m -n kube-system -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "httpd:latest"
```


# Task 13: Expose Service
Expose the deployment `resource-qblw73-dep` as a Service named `resource-qblw73` in namespace `frontend`.
The service should listen on port `5853` and be of type `ClusterIP`.

```setup
kubectl create ns frontend --dry-run=client -o yaml | kubectl apply -f -
kubectl create deployment resource-qblw73-dep --image=nginx -n frontend --dry-run=client -o yaml | kubectl apply -f -
kubectl delete svc resource-qblw73 -n frontend 2>/dev/null || true
```

```verify
kubectl get svc resource-qblw73 -n frontend -o jsonpath='{.spec.ports[0].port}' | grep 5853
kubectl get svc resource-qblw73 -n frontend -o jsonpath='{.spec.type}' | grep ClusterIP
```


# Task 14: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-4pgn7x` in namespace `test`.
Request `5Gi` storage with access mode `ReadWriteOnce`.

```setup
kubectl create ns test --dry-run=client -o yaml | kubectl apply -f -
kubectl delete pvc resource-4pgn7x -n test 2>/dev/null || true
```

```verify
kubectl get pvc resource-4pgn7x -n test -o jsonpath='{.spec.resources.requests.storage}' | grep 5Gi
kubectl get pvc resource-4pgn7x -n test -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteOnce
```


# Task 15: Scale Deployment
Create a deployment named `resource-k1cmle` in namespace `dev` using image `postgres`.
Scale it to `4` replicas.
Then, perform a rolling update to image `postgres:latest`.

```setup
kubectl create ns dev --dry-run=client -o yaml | kubectl apply -f -
kubectl delete deploy resource-k1cmle -n dev 2>/dev/null || true
```

```verify
kubectl get deploy resource-k1cmle -n dev -o jsonpath='{.spec.replicas}' | grep 4
kubectl get deploy resource-k1cmle -n dev -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "postgres:latest"
```


# Task 16: Node Maintenance
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


# Task 17: Expose Service
Expose the deployment `resource-4cb8e5-dep` as a Service named `resource-4cb8e5` in namespace `kube-system`.
The service should listen on port `7124` and be of type `NodePort`.

```setup
kubectl create ns kube-system --dry-run=client -o yaml | kubectl apply -f -
kubectl create deployment resource-4cb8e5-dep --image=nginx -n kube-system --dry-run=client -o yaml | kubectl apply -f -
kubectl delete svc resource-4cb8e5 -n kube-system 2>/dev/null || true
```

```verify
kubectl get svc resource-4cb8e5 -n kube-system -o jsonpath='{.spec.ports[0].port}' | grep 7124
kubectl get svc resource-4cb8e5 -n kube-system -o jsonpath='{.spec.type}' | grep NodePort
```


# Task 18: Node Maintenance
Mark node `node-3` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.

```setup
# Ensure node is uncordoned first
kubectl uncordon node-3 2>/dev/null || true
```

```verify
# Check if node exists and is ready (was uncordoned)
kubectl get node node-3 --no-headers | grep Ready | grep -v SchedulingDisabled
```


# Task 19: Scale Deployment
Create a deployment named `resource-124q62` in namespace `kube-system` using image `python:3.9`.
Scale it to `5` replicas.
Then, perform a rolling update to image `python:3.9:latest`.

```setup
kubectl create ns kube-system --dry-run=client -o yaml | kubectl apply -f -
kubectl delete deploy resource-124q62 -n kube-system 2>/dev/null || true
```

```verify
kubectl get deploy resource-124q62 -n kube-system -o jsonpath='{.spec.replicas}' | grep 5
kubectl get deploy resource-124q62 -n kube-system -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "python:3.9:latest"
```


# Task 20: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-d99xom` in namespace `backend`.
Request `1Gi` storage with access mode `ReadWriteMany`.

```setup
kubectl create ns backend --dry-run=client -o yaml | kubectl apply -f -
kubectl delete pvc resource-d99xom -n backend 2>/dev/null || true
```

```verify
kubectl get pvc resource-d99xom -n backend -o jsonpath='{.spec.resources.requests.storage}' | grep 1Gi
kubectl get pvc resource-d99xom -n backend -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteMany
```


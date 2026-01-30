---
id: auto-cka-20
title: Auto CKA Practice (Batch 20)
category: CKA
duration: 120 mins
---

# Auto CKA Practice (Batch 20)

This is an auto-generated exam to provide infinite practice questions.

# Task 1: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-nc47ez` in namespace `prod`.
Request `100Mi` storage with access mode `ReadWriteMany`.

```setup
kubectl create ns prod --dry-run=client -o yaml | kubectl apply -f -
kubectl delete pvc resource-nc47ez -n prod 2>/dev/null || true
```

```verify
kubectl get pvc resource-nc47ez -n prod -o jsonpath='{.spec.resources.requests.storage}' | grep 100Mi
kubectl get pvc resource-nc47ez -n prod -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteMany
```


# Task 2: Create a Pod
Create a pod named `resource-xqahz3` in namespace `backend` using image `postgres`.
Ensure it has a label `tier=frontend`.

```setup
kubectl create ns backend --dry-run=client -o yaml | kubectl apply -f -
# Clean up if exists
kubectl delete pod resource-xqahz3 -n backend --force --grace-period=0 2>/dev/null || true
```

```verify
kubectl get pod resource-xqahz3 -n backend --no-headers | grep Running
kubectl get pod resource-xqahz3 -n backend -o jsonpath='{.metadata.labels.tier}' | grep frontend
```


# Task 3: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-mykq3e` in namespace `default`.
Request `100Mi` storage with access mode `ReadWriteOnce`.

```setup
kubectl create ns default --dry-run=client -o yaml | kubectl apply -f -
kubectl delete pvc resource-mykq3e -n default 2>/dev/null || true
```

```verify
kubectl get pvc resource-mykq3e -n default -o jsonpath='{.spec.resources.requests.storage}' | grep 100Mi
kubectl get pvc resource-mykq3e -n default -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteOnce
```


# Task 4: Create a Pod
Create a pod named `resource-32ii6d` in namespace `frontend` using image `memcached`.
Ensure it has a label `env=prod`.

```setup
kubectl create ns frontend --dry-run=client -o yaml | kubectl apply -f -
# Clean up if exists
kubectl delete pod resource-32ii6d -n frontend --force --grace-period=0 2>/dev/null || true
```

```verify
kubectl get pod resource-32ii6d -n frontend --no-headers | grep Running
kubectl get pod resource-32ii6d -n frontend -o jsonpath='{.metadata.labels.env}' | grep prod
```


# Task 5: Scale Deployment
Create a deployment named `resource-xz8ilm` in namespace `dev` using image `busybox`.
Scale it to `5` replicas.
Then, perform a rolling update to image `busybox:latest`.

```setup
kubectl create ns dev --dry-run=client -o yaml | kubectl apply -f -
kubectl delete deploy resource-xz8ilm -n dev 2>/dev/null || true
```

```verify
kubectl get deploy resource-xz8ilm -n dev -o jsonpath='{.spec.replicas}' | grep 5
kubectl get deploy resource-xz8ilm -n dev -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "busybox:latest"
```


# Task 6: Expose Service
Expose the deployment `resource-z2ea64-dep` as a Service named `resource-z2ea64` in namespace `frontend`.
The service should listen on port `3990` and be of type `NodePort`.

```setup
kubectl create ns frontend --dry-run=client -o yaml | kubectl apply -f -
kubectl create deployment resource-z2ea64-dep --image=nginx -n frontend --dry-run=client -o yaml | kubectl apply -f -
kubectl delete svc resource-z2ea64 -n frontend 2>/dev/null || true
```

```verify
kubectl get svc resource-z2ea64 -n frontend -o jsonpath='{.spec.ports[0].port}' | grep 3990
kubectl get svc resource-z2ea64 -n frontend -o jsonpath='{.spec.type}' | grep NodePort
```


# Task 7: Create a Pod
Create a pod named `resource-e1d8ml` in namespace `kube-system` using image `nginx`.
Ensure it has a label `app=web`.

```setup
kubectl create ns kube-system --dry-run=client -o yaml | kubectl apply -f -
# Clean up if exists
kubectl delete pod resource-e1d8ml -n kube-system --force --grace-period=0 2>/dev/null || true
```

```verify
kubectl get pod resource-e1d8ml -n kube-system --no-headers | grep Running
kubectl get pod resource-e1d8ml -n kube-system -o jsonpath='{.metadata.labels.app}' | grep web
```


# Task 8: Create a Pod
Create a pod named `resource-c8bqq5` in namespace `dev` using image `memcached`.
Ensure it has a label `env=prod`.

```setup
kubectl create ns dev --dry-run=client -o yaml | kubectl apply -f -
# Clean up if exists
kubectl delete pod resource-c8bqq5 -n dev --force --grace-period=0 2>/dev/null || true
```

```verify
kubectl get pod resource-c8bqq5 -n dev --no-headers | grep Running
kubectl get pod resource-c8bqq5 -n dev -o jsonpath='{.metadata.labels.env}' | grep prod
```


# Task 9: Expose Service
Expose the deployment `resource-kfpb2q-dep` as a Service named `resource-kfpb2q` in namespace `prod`.
The service should listen on port `7972` and be of type `ClusterIP`.

```setup
kubectl create ns prod --dry-run=client -o yaml | kubectl apply -f -
kubectl create deployment resource-kfpb2q-dep --image=nginx -n prod --dry-run=client -o yaml | kubectl apply -f -
kubectl delete svc resource-kfpb2q -n prod 2>/dev/null || true
```

```verify
kubectl get svc resource-kfpb2q -n prod -o jsonpath='{.spec.ports[0].port}' | grep 7972
kubectl get svc resource-kfpb2q -n prod -o jsonpath='{.spec.type}' | grep ClusterIP
```


# Task 10: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-1oq5r9` in namespace `test`.
Request `2Gi` storage with access mode `ReadWriteMany`.

```setup
kubectl create ns test --dry-run=client -o yaml | kubectl apply -f -
kubectl delete pvc resource-1oq5r9 -n test 2>/dev/null || true
```

```verify
kubectl get pvc resource-1oq5r9 -n test -o jsonpath='{.spec.resources.requests.storage}' | grep 2Gi
kubectl get pvc resource-1oq5r9 -n test -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteMany
```


# Task 11: Node Maintenance
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


# Task 12: Create a Pod
Create a pod named `resource-kaz3nc` in namespace `kube-system` using image `redis`.
Ensure it has a label `app=web`.

```setup
kubectl create ns kube-system --dry-run=client -o yaml | kubectl apply -f -
# Clean up if exists
kubectl delete pod resource-kaz3nc -n kube-system --force --grace-period=0 2>/dev/null || true
```

```verify
kubectl get pod resource-kaz3nc -n kube-system --no-headers | grep Running
kubectl get pod resource-kaz3nc -n kube-system -o jsonpath='{.metadata.labels.app}' | grep web
```


# Task 13: Expose Service
Expose the deployment `resource-8ajkoz-dep` as a Service named `resource-8ajkoz` in namespace `dev`.
The service should listen on port `5436` and be of type `NodePort`.

```setup
kubectl create ns dev --dry-run=client -o yaml | kubectl apply -f -
kubectl create deployment resource-8ajkoz-dep --image=nginx -n dev --dry-run=client -o yaml | kubectl apply -f -
kubectl delete svc resource-8ajkoz -n dev 2>/dev/null || true
```

```verify
kubectl get svc resource-8ajkoz -n dev -o jsonpath='{.spec.ports[0].port}' | grep 5436
kubectl get svc resource-8ajkoz -n dev -o jsonpath='{.spec.type}' | grep NodePort
```


# Task 14: Expose Service
Expose the deployment `resource-hps3h7-dep` as a Service named `resource-hps3h7` in namespace `test`.
The service should listen on port `3048` and be of type `ClusterIP`.

```setup
kubectl create ns test --dry-run=client -o yaml | kubectl apply -f -
kubectl create deployment resource-hps3h7-dep --image=nginx -n test --dry-run=client -o yaml | kubectl apply -f -
kubectl delete svc resource-hps3h7 -n test 2>/dev/null || true
```

```verify
kubectl get svc resource-hps3h7 -n test -o jsonpath='{.spec.ports[0].port}' | grep 3048
kubectl get svc resource-hps3h7 -n test -o jsonpath='{.spec.type}' | grep ClusterIP
```


# Task 15: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-6e5q0a` in namespace `test`.
Request `10Gi` storage with access mode `ReadWriteOnce`.

```setup
kubectl create ns test --dry-run=client -o yaml | kubectl apply -f -
kubectl delete pvc resource-6e5q0a -n test 2>/dev/null || true
```

```verify
kubectl get pvc resource-6e5q0a -n test -o jsonpath='{.spec.resources.requests.storage}' | grep 10Gi
kubectl get pvc resource-6e5q0a -n test -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteOnce
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


# Task 17: Create a Pod
Create a pod named `resource-0snnwz` in namespace `frontend` using image `memcached`.
Ensure it has a label `team=blue`.

```setup
kubectl create ns frontend --dry-run=client -o yaml | kubectl apply -f -
# Clean up if exists
kubectl delete pod resource-0snnwz -n frontend --force --grace-period=0 2>/dev/null || true
```

```verify
kubectl get pod resource-0snnwz -n frontend --no-headers | grep Running
kubectl get pod resource-0snnwz -n frontend -o jsonpath='{.metadata.labels.team}' | grep blue
```


# Task 18: Create a Pod
Create a pod named `resource-ze939j` in namespace `staging` using image `python:3.9`.
Ensure it has a label `team=blue`.

```setup
kubectl create ns staging --dry-run=client -o yaml | kubectl apply -f -
# Clean up if exists
kubectl delete pod resource-ze939j -n staging --force --grace-period=0 2>/dev/null || true
```

```verify
kubectl get pod resource-ze939j -n staging --no-headers | grep Running
kubectl get pod resource-ze939j -n staging -o jsonpath='{.metadata.labels.team}' | grep blue
```


# Task 19: Expose Service
Expose the deployment `resource-b5dllz-dep` as a Service named `resource-b5dllz` in namespace `default`.
The service should listen on port `7655` and be of type `ClusterIP`.

```setup
kubectl create ns default --dry-run=client -o yaml | kubectl apply -f -
kubectl create deployment resource-b5dllz-dep --image=nginx -n default --dry-run=client -o yaml | kubectl apply -f -
kubectl delete svc resource-b5dllz -n default 2>/dev/null || true
```

```verify
kubectl get svc resource-b5dllz -n default -o jsonpath='{.spec.ports[0].port}' | grep 7655
kubectl get svc resource-b5dllz -n default -o jsonpath='{.spec.type}' | grep ClusterIP
```


# Task 20: Create a Pod
Create a pod named `resource-hcptkk` in namespace `kube-system` using image `python:3.9`.
Ensure it has a label `tier=frontend`.

```setup
kubectl create ns kube-system --dry-run=client -o yaml | kubectl apply -f -
# Clean up if exists
kubectl delete pod resource-hcptkk -n kube-system --force --grace-period=0 2>/dev/null || true
```

```verify
kubectl get pod resource-hcptkk -n kube-system --no-headers | grep Running
kubectl get pod resource-hcptkk -n kube-system -o jsonpath='{.metadata.labels.tier}' | grep frontend
```


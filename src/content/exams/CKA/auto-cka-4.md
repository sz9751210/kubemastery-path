---
id: auto-cka-4
title: Auto CKA Practice (Batch 4)
category: CKA
duration: 120 mins
---

# Auto CKA Practice (Batch 4)

This is an auto-generated exam to provide infinite practice questions.

# Task 1: Create a Pod
Create a pod named `resource-1pxk55` in namespace `frontend` using image `postgres`.
Ensure it has a label `team=blue`.

```setup
kubectl create ns frontend --dry-run=client -o yaml | kubectl apply -f -
# Clean up if exists
kubectl delete pod resource-1pxk55 -n frontend --force --grace-period=0 2>/dev/null || true
```

```verify
kubectl get pod resource-1pxk55 -n frontend --no-headers | grep Running
kubectl get pod resource-1pxk55 -n frontend -o jsonpath='{.metadata.labels.team}' | grep blue
```


# Task 2: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-membuf` in namespace `prod`.
Request `100Mi` storage with access mode `ReadOnlyMany`.

```setup
kubectl create ns prod --dry-run=client -o yaml | kubectl apply -f -
kubectl delete pvc resource-membuf -n prod 2>/dev/null || true
```

```verify
kubectl get pvc resource-membuf -n prod -o jsonpath='{.spec.resources.requests.storage}' | grep 100Mi
kubectl get pvc resource-membuf -n prod -o jsonpath='{.spec.accessModes[0]}' | grep ReadOnlyMany
```


# Task 3: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-9itjti` in namespace `backend`.
Request `2Gi` storage with access mode `ReadOnlyMany`.

```setup
kubectl create ns backend --dry-run=client -o yaml | kubectl apply -f -
kubectl delete pvc resource-9itjti -n backend 2>/dev/null || true
```

```verify
kubectl get pvc resource-9itjti -n backend -o jsonpath='{.spec.resources.requests.storage}' | grep 2Gi
kubectl get pvc resource-9itjti -n backend -o jsonpath='{.spec.accessModes[0]}' | grep ReadOnlyMany
```


# Task 4: Scale Deployment
Create a deployment named `resource-okzyqi` in namespace `backend` using image `python:3.9`.
Scale it to `3` replicas.
Then, perform a rolling update to image `python:3.9:latest`.

```setup
kubectl create ns backend --dry-run=client -o yaml | kubectl apply -f -
kubectl delete deploy resource-okzyqi -n backend 2>/dev/null || true
```

```verify
kubectl get deploy resource-okzyqi -n backend -o jsonpath='{.spec.replicas}' | grep 3
kubectl get deploy resource-okzyqi -n backend -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "python:3.9:latest"
```


# Task 5: Expose Service
Expose the deployment `resource-vy7z93-dep` as a Service named `resource-vy7z93` in namespace `default`.
The service should listen on port `7074` and be of type `NodePort`.

```setup
kubectl create ns default --dry-run=client -o yaml | kubectl apply -f -
kubectl create deployment resource-vy7z93-dep --image=nginx -n default --dry-run=client -o yaml | kubectl apply -f -
kubectl delete svc resource-vy7z93 -n default 2>/dev/null || true
```

```verify
kubectl get svc resource-vy7z93 -n default -o jsonpath='{.spec.ports[0].port}' | grep 7074
kubectl get svc resource-vy7z93 -n default -o jsonpath='{.spec.type}' | grep NodePort
```


# Task 6: Node Maintenance
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


# Task 7: Node Maintenance
Mark node `node-5` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.

```setup
# Ensure node is uncordoned first
kubectl uncordon node-5 2>/dev/null || true
```

```verify
# Check if node exists and is ready (was uncordoned)
kubectl get node node-5 --no-headers | grep Ready | grep -v SchedulingDisabled
```


# Task 8: Create a Pod
Create a pod named `resource-nqgm2x` in namespace `dev` using image `node:14`.
Ensure it has a label `team=blue`.

```setup
kubectl create ns dev --dry-run=client -o yaml | kubectl apply -f -
# Clean up if exists
kubectl delete pod resource-nqgm2x -n dev --force --grace-period=0 2>/dev/null || true
```

```verify
kubectl get pod resource-nqgm2x -n dev --no-headers | grep Running
kubectl get pod resource-nqgm2x -n dev -o jsonpath='{.metadata.labels.team}' | grep blue
```


# Task 9: Scale Deployment
Create a deployment named `resource-72nw0p` in namespace `kube-system` using image `redis`.
Scale it to `4` replicas.
Then, perform a rolling update to image `redis:latest`.

```setup
kubectl create ns kube-system --dry-run=client -o yaml | kubectl apply -f -
kubectl delete deploy resource-72nw0p -n kube-system 2>/dev/null || true
```

```verify
kubectl get deploy resource-72nw0p -n kube-system -o jsonpath='{.spec.replicas}' | grep 4
kubectl get deploy resource-72nw0p -n kube-system -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "redis:latest"
```


# Task 10: Node Maintenance
Mark node `node-5` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.

```setup
# Ensure node is uncordoned first
kubectl uncordon node-5 2>/dev/null || true
```

```verify
# Check if node exists and is ready (was uncordoned)
kubectl get node node-5 --no-headers | grep Ready | grep -v SchedulingDisabled
```


# Task 11: Create a Pod
Create a pod named `resource-gtku45` in namespace `backend` using image `node:14`.
Ensure it has a label `env=prod`.

```setup
kubectl create ns backend --dry-run=client -o yaml | kubectl apply -f -
# Clean up if exists
kubectl delete pod resource-gtku45 -n backend --force --grace-period=0 2>/dev/null || true
```

```verify
kubectl get pod resource-gtku45 -n backend --no-headers | grep Running
kubectl get pod resource-gtku45 -n backend -o jsonpath='{.metadata.labels.env}' | grep prod
```


# Task 12: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-lj0cb7` in namespace `frontend`.
Request `1Gi` storage with access mode `ReadWriteMany`.

```setup
kubectl create ns frontend --dry-run=client -o yaml | kubectl apply -f -
kubectl delete pvc resource-lj0cb7 -n frontend 2>/dev/null || true
```

```verify
kubectl get pvc resource-lj0cb7 -n frontend -o jsonpath='{.spec.resources.requests.storage}' | grep 1Gi
kubectl get pvc resource-lj0cb7 -n frontend -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteMany
```


# Task 13: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-oew3ge` in namespace `backend`.
Request `5Gi` storage with access mode `ReadWriteMany`.

```setup
kubectl create ns backend --dry-run=client -o yaml | kubectl apply -f -
kubectl delete pvc resource-oew3ge -n backend 2>/dev/null || true
```

```verify
kubectl get pvc resource-oew3ge -n backend -o jsonpath='{.spec.resources.requests.storage}' | grep 5Gi
kubectl get pvc resource-oew3ge -n backend -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteMany
```


# Task 14: Node Maintenance
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


# Task 15: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-ljdj5u` in namespace `kube-system`.
Request `2Gi` storage with access mode `ReadOnlyMany`.

```setup
kubectl create ns kube-system --dry-run=client -o yaml | kubectl apply -f -
kubectl delete pvc resource-ljdj5u -n kube-system 2>/dev/null || true
```

```verify
kubectl get pvc resource-ljdj5u -n kube-system -o jsonpath='{.spec.resources.requests.storage}' | grep 2Gi
kubectl get pvc resource-ljdj5u -n kube-system -o jsonpath='{.spec.accessModes[0]}' | grep ReadOnlyMany
```


# Task 16: Expose Service
Expose the deployment `resource-nebszf-dep` as a Service named `resource-nebszf` in namespace `dev`.
The service should listen on port `6392` and be of type `ClusterIP`.

```setup
kubectl create ns dev --dry-run=client -o yaml | kubectl apply -f -
kubectl create deployment resource-nebszf-dep --image=nginx -n dev --dry-run=client -o yaml | kubectl apply -f -
kubectl delete svc resource-nebszf -n dev 2>/dev/null || true
```

```verify
kubectl get svc resource-nebszf -n dev -o jsonpath='{.spec.ports[0].port}' | grep 6392
kubectl get svc resource-nebszf -n dev -o jsonpath='{.spec.type}' | grep ClusterIP
```


# Task 17: Create a Pod
Create a pod named `resource-b3t235` in namespace `staging` using image `node:14`.
Ensure it has a label `env=prod`.

```setup
kubectl create ns staging --dry-run=client -o yaml | kubectl apply -f -
# Clean up if exists
kubectl delete pod resource-b3t235 -n staging --force --grace-period=0 2>/dev/null || true
```

```verify
kubectl get pod resource-b3t235 -n staging --no-headers | grep Running
kubectl get pod resource-b3t235 -n staging -o jsonpath='{.metadata.labels.env}' | grep prod
```


# Task 18: Expose Service
Expose the deployment `resource-do65wo-dep` as a Service named `resource-do65wo` in namespace `kube-system`.
The service should listen on port `6593` and be of type `NodePort`.

```setup
kubectl create ns kube-system --dry-run=client -o yaml | kubectl apply -f -
kubectl create deployment resource-do65wo-dep --image=nginx -n kube-system --dry-run=client -o yaml | kubectl apply -f -
kubectl delete svc resource-do65wo -n kube-system 2>/dev/null || true
```

```verify
kubectl get svc resource-do65wo -n kube-system -o jsonpath='{.spec.ports[0].port}' | grep 6593
kubectl get svc resource-do65wo -n kube-system -o jsonpath='{.spec.type}' | grep NodePort
```


# Task 19: Create a Pod
Create a pod named `resource-1ik0nz` in namespace `dev` using image `postgres`.
Ensure it has a label `tier=frontend`.

```setup
kubectl create ns dev --dry-run=client -o yaml | kubectl apply -f -
# Clean up if exists
kubectl delete pod resource-1ik0nz -n dev --force --grace-period=0 2>/dev/null || true
```

```verify
kubectl get pod resource-1ik0nz -n dev --no-headers | grep Running
kubectl get pod resource-1ik0nz -n dev -o jsonpath='{.metadata.labels.tier}' | grep frontend
```


# Task 20: Create a Pod
Create a pod named `resource-au2qec` in namespace `staging` using image `busybox`.
Ensure it has a label `release=stable`.

```setup
kubectl create ns staging --dry-run=client -o yaml | kubectl apply -f -
# Clean up if exists
kubectl delete pod resource-au2qec -n staging --force --grace-period=0 2>/dev/null || true
```

```verify
kubectl get pod resource-au2qec -n staging --no-headers | grep Running
kubectl get pod resource-au2qec -n staging -o jsonpath='{.metadata.labels.release}' | grep stable
```


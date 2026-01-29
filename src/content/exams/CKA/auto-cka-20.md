---
id: auto-cka-20
title: Auto CKA Practice (Batch 20)
category: CKA
duration: 120 mins
---

# Auto CKA Practice (Batch 20)

This is an auto-generated exam to provide infinite practice questions.

# Task 1: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-yanbcr` in namespace `dev`.
Request `10Gi` storage with access mode `ReadWriteOnce`.

```verify
kubectl get pvc resource-yanbcr -n dev -o jsonpath='{.spec.resources.requests.storage}' | grep 10Gi
kubectl get pvc resource-yanbcr -n dev -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteOnce
```


# Task 2: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-noemu3` in namespace `staging`.
Request `1Gi` storage with access mode `ReadWriteMany`.

```verify
kubectl get pvc resource-noemu3 -n staging -o jsonpath='{.spec.resources.requests.storage}' | grep 1Gi
kubectl get pvc resource-noemu3 -n staging -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteMany
```


# Task 3: Node Maintenance
Mark node `node-4` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.

```verify
# Check if node exists and is ready (was uncordoned)
kubectl get node node-4 --no-headers | grep Ready | grep -v SchedulingDisabled
```


# Task 4: Node Maintenance
Mark node `node-5` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.

```verify
# Check if node exists and is ready (was uncordoned)
kubectl get node node-5 --no-headers | grep Ready | grep -v SchedulingDisabled
```


# Task 5: Scale Deployment
Create a deployment named `resource-au24yb` in namespace `default` using image `python:3.9`.
Scale it to `5` replicas.
Then, perform a rolling update to image `python:3.9:latest`.

```verify
kubectl get deploy resource-au24yb -n default -o jsonpath='{.spec.replicas}' | grep 5
kubectl get deploy resource-au24yb -n default -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "python:3.9:latest"
```


# Task 6: Create a Pod
Create a pod named `resource-8y6upe` in namespace `backend` using image `node:14`.
Ensure it has a label `env=prod`.

```verify
kubectl get pod resource-8y6upe -n backend --no-headers | grep Running
kubectl get pod resource-8y6upe -n backend -o jsonpath='{.metadata.labels.env}' | grep prod
```


# Task 7: Node Maintenance
Mark node `node-2` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.

```verify
# Check if node exists and is ready (was uncordoned)
kubectl get node node-2 --no-headers | grep Ready | grep -v SchedulingDisabled
```


# Task 8: Scale Deployment
Create a deployment named `resource-8v9mvy` in namespace `prod` using image `python:3.9`.
Scale it to `2` replicas.
Then, perform a rolling update to image `python:3.9:latest`.

```verify
kubectl get deploy resource-8v9mvy -n prod -o jsonpath='{.spec.replicas}' | grep 2
kubectl get deploy resource-8v9mvy -n prod -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "python:3.9:latest"
```


# Task 9: Scale Deployment
Create a deployment named `resource-vby1tu` in namespace `dev` using image `nginx`.
Scale it to `5` replicas.
Then, perform a rolling update to image `nginx:latest`.

```verify
kubectl get deploy resource-vby1tu -n dev -o jsonpath='{.spec.replicas}' | grep 5
kubectl get deploy resource-vby1tu -n dev -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "nginx:latest"
```


# Task 10: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-chsj2a` in namespace `test`.
Request `2Gi` storage with access mode `ReadWriteMany`.

```verify
kubectl get pvc resource-chsj2a -n test -o jsonpath='{.spec.resources.requests.storage}' | grep 2Gi
kubectl get pvc resource-chsj2a -n test -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteMany
```


# Task 11: Scale Deployment
Create a deployment named `resource-31rx8b` in namespace `frontend` using image `redis`.
Scale it to `2` replicas.
Then, perform a rolling update to image `redis:latest`.

```verify
kubectl get deploy resource-31rx8b -n frontend -o jsonpath='{.spec.replicas}' | grep 2
kubectl get deploy resource-31rx8b -n frontend -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "redis:latest"
```


# Task 12: Expose Service
Expose the deployment `resource-xzmdgl-dep` as a Service named `resource-xzmdgl` in namespace `frontend`.
The service should listen on port `4644` and be of type `ClusterIP`.

```verify
kubectl get svc resource-xzmdgl -n frontend -o jsonpath='{.spec.ports[0].port}' | grep 4644
kubectl get svc resource-xzmdgl -n frontend -o jsonpath='{.spec.type}' | grep ClusterIP
```


# Task 13: Create a Pod
Create a pod named `resource-3n8p92` in namespace `frontend` using image `busybox`.
Ensure it has a label `env=prod`.

```verify
kubectl get pod resource-3n8p92 -n frontend --no-headers | grep Running
kubectl get pod resource-3n8p92 -n frontend -o jsonpath='{.metadata.labels.env}' | grep prod
```


# Task 14: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-cfjywd` in namespace `backend`.
Request `5Gi` storage with access mode `ReadWriteOnce`.

```verify
kubectl get pvc resource-cfjywd -n backend -o jsonpath='{.spec.resources.requests.storage}' | grep 5Gi
kubectl get pvc resource-cfjywd -n backend -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteOnce
```


# Task 15: Node Maintenance
Mark node `node-2` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.

```verify
# Check if node exists and is ready (was uncordoned)
kubectl get node node-2 --no-headers | grep Ready | grep -v SchedulingDisabled
```


# Task 16: Node Maintenance
Mark node `node-2` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.

```verify
# Check if node exists and is ready (was uncordoned)
kubectl get node node-2 --no-headers | grep Ready | grep -v SchedulingDisabled
```


# Task 17: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-3lldlx` in namespace `staging`.
Request `100Mi` storage with access mode `ReadWriteOnce`.

```verify
kubectl get pvc resource-3lldlx -n staging -o jsonpath='{.spec.resources.requests.storage}' | grep 100Mi
kubectl get pvc resource-3lldlx -n staging -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteOnce
```


# Task 18: Node Maintenance
Mark node `node-3` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.

```verify
# Check if node exists and is ready (was uncordoned)
kubectl get node node-3 --no-headers | grep Ready | grep -v SchedulingDisabled
```


# Task 19: Create a Pod
Create a pod named `resource-s7fvu7` in namespace `default` using image `busybox`.
Ensure it has a label `app=web`.

```verify
kubectl get pod resource-s7fvu7 -n default --no-headers | grep Running
kubectl get pod resource-s7fvu7 -n default -o jsonpath='{.metadata.labels.app}' | grep web
```


# Task 20: Expose Service
Expose the deployment `resource-8ia7e2-dep` as a Service named `resource-8ia7e2` in namespace `backend`.
The service should listen on port `3028` and be of type `ClusterIP`.

```verify
kubectl get svc resource-8ia7e2 -n backend -o jsonpath='{.spec.ports[0].port}' | grep 3028
kubectl get svc resource-8ia7e2 -n backend -o jsonpath='{.spec.type}' | grep ClusterIP
```


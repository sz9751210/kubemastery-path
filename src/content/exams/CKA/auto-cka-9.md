---
id: auto-cka-9
title: Auto CKA Practice (Batch 9)
category: CKA
duration: 120 mins
---

# Auto CKA Practice (Batch 9)

This is an auto-generated exam to provide infinite practice questions.

# Task 1: Node Maintenance
Mark node `node-3` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.

```verify
# Check if node exists and is ready (was uncordoned)
kubectl get node node-3 --no-headers | grep Ready | grep -v SchedulingDisabled
```


# Task 2: Expose Service
Expose the deployment `resource-1wb5po-dep` as a Service named `resource-1wb5po` in namespace `staging`.
The service should listen on port `8700` and be of type `NodePort`.

```verify
kubectl get svc resource-1wb5po -n staging -o jsonpath='{.spec.ports[0].port}' | grep 8700
kubectl get svc resource-1wb5po -n staging -o jsonpath='{.spec.type}' | grep NodePort
```


# Task 3: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-rfgbif` in namespace `frontend`.
Request `1Gi` storage with access mode `ReadWriteMany`.

```verify
kubectl get pvc resource-rfgbif -n frontend -o jsonpath='{.spec.resources.requests.storage}' | grep 1Gi
kubectl get pvc resource-rfgbif -n frontend -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteMany
```


# Task 4: Node Maintenance
Mark node `node-5` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.

```verify
# Check if node exists and is ready (was uncordoned)
kubectl get node node-5 --no-headers | grep Ready | grep -v SchedulingDisabled
```


# Task 5: Expose Service
Expose the deployment `resource-rqevb7-dep` as a Service named `resource-rqevb7` in namespace `frontend`.
The service should listen on port `8175` and be of type `NodePort`.

```verify
kubectl get svc resource-rqevb7 -n frontend -o jsonpath='{.spec.ports[0].port}' | grep 8175
kubectl get svc resource-rqevb7 -n frontend -o jsonpath='{.spec.type}' | grep NodePort
```


# Task 6: Node Maintenance
Mark node `node-1` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.

```verify
# Check if node exists and is ready (was uncordoned)
kubectl get node node-1 --no-headers | grep Ready | grep -v SchedulingDisabled
```


# Task 7: Node Maintenance
Mark node `node-3` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.

```verify
# Check if node exists and is ready (was uncordoned)
kubectl get node node-3 --no-headers | grep Ready | grep -v SchedulingDisabled
```


# Task 8: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-6kgufo` in namespace `test`.
Request `100Mi` storage with access mode `ReadWriteMany`.

```verify
kubectl get pvc resource-6kgufo -n test -o jsonpath='{.spec.resources.requests.storage}' | grep 100Mi
kubectl get pvc resource-6kgufo -n test -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteMany
```


# Task 9: Create a Pod
Create a pod named `resource-6deu9y` in namespace `prod` using image `redis`.
Ensure it has a label `tier=frontend`.

```verify
kubectl get pod resource-6deu9y -n prod --no-headers | grep Running
kubectl get pod resource-6deu9y -n prod -o jsonpath='{.metadata.labels.tier}' | grep frontend
```


# Task 10: Node Maintenance
Mark node `node-3` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.

```verify
# Check if node exists and is ready (was uncordoned)
kubectl get node node-3 --no-headers | grep Ready | grep -v SchedulingDisabled
```


# Task 11: Scale Deployment
Create a deployment named `resource-ennmft` in namespace `default` using image `mysql`.
Scale it to `2` replicas.
Then, perform a rolling update to image `mysql:latest`.

```verify
kubectl get deploy resource-ennmft -n default -o jsonpath='{.spec.replicas}' | grep 2
kubectl get deploy resource-ennmft -n default -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "mysql:latest"
```


# Task 12: Node Maintenance
Mark node `node-5` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.

```verify
# Check if node exists and is ready (was uncordoned)
kubectl get node node-5 --no-headers | grep Ready | grep -v SchedulingDisabled
```


# Task 13: Scale Deployment
Create a deployment named `resource-z3bm36` in namespace `default` using image `nginx`.
Scale it to `5` replicas.
Then, perform a rolling update to image `nginx:latest`.

```verify
kubectl get deploy resource-z3bm36 -n default -o jsonpath='{.spec.replicas}' | grep 5
kubectl get deploy resource-z3bm36 -n default -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "nginx:latest"
```


# Task 14: Node Maintenance
Mark node `node-3` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.

```verify
# Check if node exists and is ready (was uncordoned)
kubectl get node node-3 --no-headers | grep Ready | grep -v SchedulingDisabled
```


# Task 15: Scale Deployment
Create a deployment named `resource-9wjccd` in namespace `default` using image `redis`.
Scale it to `4` replicas.
Then, perform a rolling update to image `redis:latest`.

```verify
kubectl get deploy resource-9wjccd -n default -o jsonpath='{.spec.replicas}' | grep 4
kubectl get deploy resource-9wjccd -n default -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "redis:latest"
```


# Task 16: Create a Pod
Create a pod named `resource-w77x67` in namespace `backend` using image `node:14`.
Ensure it has a label `team=blue`.

```verify
kubectl get pod resource-w77x67 -n backend --no-headers | grep Running
kubectl get pod resource-w77x67 -n backend -o jsonpath='{.metadata.labels.team}' | grep blue
```


# Task 17: Expose Service
Expose the deployment `resource-60b4re-dep` as a Service named `resource-60b4re` in namespace `staging`.
The service should listen on port `5168` and be of type `ClusterIP`.

```verify
kubectl get svc resource-60b4re -n staging -o jsonpath='{.spec.ports[0].port}' | grep 5168
kubectl get svc resource-60b4re -n staging -o jsonpath='{.spec.type}' | grep ClusterIP
```


# Task 18: Scale Deployment
Create a deployment named `resource-ravh7b` in namespace `kube-system` using image `redis`.
Scale it to `5` replicas.
Then, perform a rolling update to image `redis:latest`.

```verify
kubectl get deploy resource-ravh7b -n kube-system -o jsonpath='{.spec.replicas}' | grep 5
kubectl get deploy resource-ravh7b -n kube-system -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "redis:latest"
```


# Task 19: Expose Service
Expose the deployment `resource-c9gwli-dep` as a Service named `resource-c9gwli` in namespace `prod`.
The service should listen on port `5296` and be of type `ClusterIP`.

```verify
kubectl get svc resource-c9gwli -n prod -o jsonpath='{.spec.ports[0].port}' | grep 5296
kubectl get svc resource-c9gwli -n prod -o jsonpath='{.spec.type}' | grep ClusterIP
```


# Task 20: Expose Service
Expose the deployment `resource-yxvpjw-dep` as a Service named `resource-yxvpjw` in namespace `staging`.
The service should listen on port `8395` and be of type `ClusterIP`.

```verify
kubectl get svc resource-yxvpjw -n staging -o jsonpath='{.spec.ports[0].port}' | grep 8395
kubectl get svc resource-yxvpjw -n staging -o jsonpath='{.spec.type}' | grep ClusterIP
```


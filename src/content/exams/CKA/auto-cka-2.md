---
id: auto-cka-2
title: Auto CKA Practice (Batch 2)
category: CKA
duration: 120 mins
---

# Auto CKA Practice (Batch 2)

This is an auto-generated exam to provide infinite practice questions.

# Task 1: Expose Service
Expose the deployment `resource-0ovzgy-dep` as a Service named `resource-0ovzgy` in namespace `prod`.
The service should listen on port `7925` and be of type `ClusterIP`.

```verify
kubectl get svc resource-0ovzgy -n prod -o jsonpath='{.spec.ports[0].port}' | grep 7925
kubectl get svc resource-0ovzgy -n prod -o jsonpath='{.spec.type}' | grep ClusterIP
```


# Task 2: Create a Pod
Create a pod named `resource-sutouv` in namespace `test` using image `memcached`.
Ensure it has a label `app=web`.

```verify
kubectl get pod resource-sutouv -n test --no-headers | grep Running
kubectl get pod resource-sutouv -n test -o jsonpath='{.metadata.labels.app}' | grep web
```


# Task 3: Node Maintenance
Mark node `node-1` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.

```verify
# Check if node exists and is ready (was uncordoned)
kubectl get node node-1 --no-headers | grep Ready | grep -v SchedulingDisabled
```


# Task 4: Expose Service
Expose the deployment `resource-d8k4r1-dep` as a Service named `resource-d8k4r1` in namespace `frontend`.
The service should listen on port `6107` and be of type `ClusterIP`.

```verify
kubectl get svc resource-d8k4r1 -n frontend -o jsonpath='{.spec.ports[0].port}' | grep 6107
kubectl get svc resource-d8k4r1 -n frontend -o jsonpath='{.spec.type}' | grep ClusterIP
```


# Task 5: Node Maintenance
Mark node `node-1` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.

```verify
# Check if node exists and is ready (was uncordoned)
kubectl get node node-1 --no-headers | grep Ready | grep -v SchedulingDisabled
```


# Task 6: Create a Pod
Create a pod named `resource-947y0v` in namespace `staging` using image `postgres`.
Ensure it has a label `tier=frontend`.

```verify
kubectl get pod resource-947y0v -n staging --no-headers | grep Running
kubectl get pod resource-947y0v -n staging -o jsonpath='{.metadata.labels.tier}' | grep frontend
```


# Task 7: Create a Pod
Create a pod named `resource-b8hmj2` in namespace `frontend` using image `python:3.9`.
Ensure it has a label `app=web`.

```verify
kubectl get pod resource-b8hmj2 -n frontend --no-headers | grep Running
kubectl get pod resource-b8hmj2 -n frontend -o jsonpath='{.metadata.labels.app}' | grep web
```


# Task 8: Node Maintenance
Mark node `node-1` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.

```verify
# Check if node exists and is ready (was uncordoned)
kubectl get node node-1 --no-headers | grep Ready | grep -v SchedulingDisabled
```


# Task 9: Node Maintenance
Mark node `node-4` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.

```verify
# Check if node exists and is ready (was uncordoned)
kubectl get node node-4 --no-headers | grep Ready | grep -v SchedulingDisabled
```


# Task 10: Scale Deployment
Create a deployment named `resource-4vwdgx` in namespace `prod` using image `postgres`.
Scale it to `2` replicas.
Then, perform a rolling update to image `postgres:latest`.

```verify
kubectl get deploy resource-4vwdgx -n prod -o jsonpath='{.spec.replicas}' | grep 2
kubectl get deploy resource-4vwdgx -n prod -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "postgres:latest"
```


# Task 11: Node Maintenance
Mark node `node-3` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.

```verify
# Check if node exists and is ready (was uncordoned)
kubectl get node node-3 --no-headers | grep Ready | grep -v SchedulingDisabled
```


# Task 12: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-2kld5n` in namespace `backend`.
Request `5Gi` storage with access mode `ReadWriteOnce`.

```verify
kubectl get pvc resource-2kld5n -n backend -o jsonpath='{.spec.resources.requests.storage}' | grep 5Gi
kubectl get pvc resource-2kld5n -n backend -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteOnce
```


# Task 13: Expose Service
Expose the deployment `resource-63362f-dep` as a Service named `resource-63362f` in namespace `prod`.
The service should listen on port `8631` and be of type `ClusterIP`.

```verify
kubectl get svc resource-63362f -n prod -o jsonpath='{.spec.ports[0].port}' | grep 8631
kubectl get svc resource-63362f -n prod -o jsonpath='{.spec.type}' | grep ClusterIP
```


# Task 14: Expose Service
Expose the deployment `resource-uol60g-dep` as a Service named `resource-uol60g` in namespace `prod`.
The service should listen on port `3235` and be of type `NodePort`.

```verify
kubectl get svc resource-uol60g -n prod -o jsonpath='{.spec.ports[0].port}' | grep 3235
kubectl get svc resource-uol60g -n prod -o jsonpath='{.spec.type}' | grep NodePort
```


# Task 15: Node Maintenance
Mark node `node-2` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.

```verify
# Check if node exists and is ready (was uncordoned)
kubectl get node node-2 --no-headers | grep Ready | grep -v SchedulingDisabled
```


# Task 16: Create a Pod
Create a pod named `resource-xz3q0f` in namespace `dev` using image `alpine`.
Ensure it has a label `tier=frontend`.

```verify
kubectl get pod resource-xz3q0f -n dev --no-headers | grep Running
kubectl get pod resource-xz3q0f -n dev -o jsonpath='{.metadata.labels.tier}' | grep frontend
```


# Task 17: Create a Pod
Create a pod named `resource-nrl26t` in namespace `kube-system` using image `python:3.9`.
Ensure it has a label `team=blue`.

```verify
kubectl get pod resource-nrl26t -n kube-system --no-headers | grep Running
kubectl get pod resource-nrl26t -n kube-system -o jsonpath='{.metadata.labels.team}' | grep blue
```


# Task 18: Expose Service
Expose the deployment `resource-3u4sjo-dep` as a Service named `resource-3u4sjo` in namespace `prod`.
The service should listen on port `8269` and be of type `ClusterIP`.

```verify
kubectl get svc resource-3u4sjo -n prod -o jsonpath='{.spec.ports[0].port}' | grep 8269
kubectl get svc resource-3u4sjo -n prod -o jsonpath='{.spec.type}' | grep ClusterIP
```


# Task 19: Expose Service
Expose the deployment `resource-gga9w5-dep` as a Service named `resource-gga9w5` in namespace `prod`.
The service should listen on port `6618` and be of type `NodePort`.

```verify
kubectl get svc resource-gga9w5 -n prod -o jsonpath='{.spec.ports[0].port}' | grep 6618
kubectl get svc resource-gga9w5 -n prod -o jsonpath='{.spec.type}' | grep NodePort
```


# Task 20: Node Maintenance
Mark node `node-5` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.

```verify
# Check if node exists and is ready (was uncordoned)
kubectl get node node-5 --no-headers | grep Ready | grep -v SchedulingDisabled
```


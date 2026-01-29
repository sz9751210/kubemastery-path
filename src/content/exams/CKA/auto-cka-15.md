---
id: auto-cka-15
title: Auto CKA Practice (Batch 15)
category: CKA
duration: 120 mins
---

# Auto CKA Practice (Batch 15)

This is an auto-generated exam to provide infinite practice questions.

# Task 1: Node Maintenance
Mark node `node-4` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.

```verify
# Check if node exists and is ready (was uncordoned)
kubectl get node node-4 --no-headers | grep Ready | grep -v SchedulingDisabled
```


# Task 2: Expose Service
Expose the deployment `resource-lzet56-dep` as a Service named `resource-lzet56` in namespace `test`.
The service should listen on port `8565` and be of type `ClusterIP`.

```verify
kubectl get svc resource-lzet56 -n test -o jsonpath='{.spec.ports[0].port}' | grep 8565
kubectl get svc resource-lzet56 -n test -o jsonpath='{.spec.type}' | grep ClusterIP
```


# Task 3: Expose Service
Expose the deployment `resource-2lloyp-dep` as a Service named `resource-2lloyp` in namespace `default`.
The service should listen on port `4401` and be of type `NodePort`.

```verify
kubectl get svc resource-2lloyp -n default -o jsonpath='{.spec.ports[0].port}' | grep 4401
kubectl get svc resource-2lloyp -n default -o jsonpath='{.spec.type}' | grep NodePort
```


# Task 4: Scale Deployment
Create a deployment named `resource-mcqq0f` in namespace `dev` using image `node:14`.
Scale it to `5` replicas.
Then, perform a rolling update to image `node:14:latest`.

```verify
kubectl get deploy resource-mcqq0f -n dev -o jsonpath='{.spec.replicas}' | grep 5
kubectl get deploy resource-mcqq0f -n dev -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "node:14:latest"
```


# Task 5: Expose Service
Expose the deployment `resource-h8f5ah-dep` as a Service named `resource-h8f5ah` in namespace `frontend`.
The service should listen on port `4707` and be of type `NodePort`.

```verify
kubectl get svc resource-h8f5ah -n frontend -o jsonpath='{.spec.ports[0].port}' | grep 4707
kubectl get svc resource-h8f5ah -n frontend -o jsonpath='{.spec.type}' | grep NodePort
```


# Task 6: Scale Deployment
Create a deployment named `resource-k84bjq` in namespace `test` using image `alpine`.
Scale it to `2` replicas.
Then, perform a rolling update to image `alpine:latest`.

```verify
kubectl get deploy resource-k84bjq -n test -o jsonpath='{.spec.replicas}' | grep 2
kubectl get deploy resource-k84bjq -n test -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "alpine:latest"
```


# Task 7: Create a Pod
Create a pod named `resource-sdx62h` in namespace `prod` using image `alpine`.
Ensure it has a label `tier=frontend`.

```verify
kubectl get pod resource-sdx62h -n prod --no-headers | grep Running
kubectl get pod resource-sdx62h -n prod -o jsonpath='{.metadata.labels.tier}' | grep frontend
```


# Task 8: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-gah37i` in namespace `backend`.
Request `100Mi` storage with access mode `ReadWriteOnce`.

```verify
kubectl get pvc resource-gah37i -n backend -o jsonpath='{.spec.resources.requests.storage}' | grep 100Mi
kubectl get pvc resource-gah37i -n backend -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteOnce
```


# Task 9: Node Maintenance
Mark node `node-3` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.

```verify
# Check if node exists and is ready (was uncordoned)
kubectl get node node-3 --no-headers | grep Ready | grep -v SchedulingDisabled
```


# Task 10: Expose Service
Expose the deployment `resource-16gqo4-dep` as a Service named `resource-16gqo4` in namespace `dev`.
The service should listen on port `5195` and be of type `ClusterIP`.

```verify
kubectl get svc resource-16gqo4 -n dev -o jsonpath='{.spec.ports[0].port}' | grep 5195
kubectl get svc resource-16gqo4 -n dev -o jsonpath='{.spec.type}' | grep ClusterIP
```


# Task 11: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-kkr9t2` in namespace `frontend`.
Request `10Gi` storage with access mode `ReadWriteOnce`.

```verify
kubectl get pvc resource-kkr9t2 -n frontend -o jsonpath='{.spec.resources.requests.storage}' | grep 10Gi
kubectl get pvc resource-kkr9t2 -n frontend -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteOnce
```


# Task 12: Node Maintenance
Mark node `node-2` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.

```verify
# Check if node exists and is ready (was uncordoned)
kubectl get node node-2 --no-headers | grep Ready | grep -v SchedulingDisabled
```


# Task 13: Node Maintenance
Mark node `node-5` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.

```verify
# Check if node exists and is ready (was uncordoned)
kubectl get node node-5 --no-headers | grep Ready | grep -v SchedulingDisabled
```


# Task 14: Create a Pod
Create a pod named `resource-49xfr9` in namespace `frontend` using image `node:14`.
Ensure it has a label `release=stable`.

```verify
kubectl get pod resource-49xfr9 -n frontend --no-headers | grep Running
kubectl get pod resource-49xfr9 -n frontend -o jsonpath='{.metadata.labels.release}' | grep stable
```


# Task 15: Expose Service
Expose the deployment `resource-7lwjgr-dep` as a Service named `resource-7lwjgr` in namespace `backend`.
The service should listen on port `8247` and be of type `ClusterIP`.

```verify
kubectl get svc resource-7lwjgr -n backend -o jsonpath='{.spec.ports[0].port}' | grep 8247
kubectl get svc resource-7lwjgr -n backend -o jsonpath='{.spec.type}' | grep ClusterIP
```


# Task 16: Scale Deployment
Create a deployment named `resource-q8yas7` in namespace `prod` using image `alpine`.
Scale it to `5` replicas.
Then, perform a rolling update to image `alpine:latest`.

```verify
kubectl get deploy resource-q8yas7 -n prod -o jsonpath='{.spec.replicas}' | grep 5
kubectl get deploy resource-q8yas7 -n prod -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "alpine:latest"
```


# Task 17: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-thsh60` in namespace `test`.
Request `2Gi` storage with access mode `ReadWriteOnce`.

```verify
kubectl get pvc resource-thsh60 -n test -o jsonpath='{.spec.resources.requests.storage}' | grep 2Gi
kubectl get pvc resource-thsh60 -n test -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteOnce
```


# Task 18: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-rw6npn` in namespace `kube-system`.
Request `10Gi` storage with access mode `ReadOnlyMany`.

```verify
kubectl get pvc resource-rw6npn -n kube-system -o jsonpath='{.spec.resources.requests.storage}' | grep 10Gi
kubectl get pvc resource-rw6npn -n kube-system -o jsonpath='{.spec.accessModes[0]}' | grep ReadOnlyMany
```


# Task 19: Scale Deployment
Create a deployment named `resource-e9a5mf` in namespace `frontend` using image `redis`.
Scale it to `2` replicas.
Then, perform a rolling update to image `redis:latest`.

```verify
kubectl get deploy resource-e9a5mf -n frontend -o jsonpath='{.spec.replicas}' | grep 2
kubectl get deploy resource-e9a5mf -n frontend -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "redis:latest"
```


# Task 20: Create a Pod
Create a pod named `resource-d07tti` in namespace `test` using image `alpine`.
Ensure it has a label `release=stable`.

```verify
kubectl get pod resource-d07tti -n test --no-headers | grep Running
kubectl get pod resource-d07tti -n test -o jsonpath='{.metadata.labels.release}' | grep stable
```


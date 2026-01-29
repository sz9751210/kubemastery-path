---
id: auto-cka-3
title: Auto CKA Practice (Batch 3)
category: CKA
duration: 120 mins
---

# Auto CKA Practice (Batch 3)

This is an auto-generated exam to provide infinite practice questions.

# Task 1: Create a Pod
Create a pod named `resource-v71flg` in namespace `default` using image `httpd`.
Ensure it has a label `env=prod`.

```verify
kubectl get pod resource-v71flg -n default --no-headers | grep Running
kubectl get pod resource-v71flg -n default -o jsonpath='{.metadata.labels.env}' | grep prod
```


# Task 2: Node Maintenance
Mark node `node-5` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.

```verify
# Check if node exists and is ready (was uncordoned)
kubectl get node node-5 --no-headers | grep Ready | grep -v SchedulingDisabled
```


# Task 3: Expose Service
Expose the deployment `resource-sdf46h-dep` as a Service named `resource-sdf46h` in namespace `default`.
The service should listen on port `7649` and be of type `NodePort`.

```verify
kubectl get svc resource-sdf46h -n default -o jsonpath='{.spec.ports[0].port}' | grep 7649
kubectl get svc resource-sdf46h -n default -o jsonpath='{.spec.type}' | grep NodePort
```


# Task 4: Expose Service
Expose the deployment `resource-9e084c-dep` as a Service named `resource-9e084c` in namespace `test`.
The service should listen on port `5975` and be of type `ClusterIP`.

```verify
kubectl get svc resource-9e084c -n test -o jsonpath='{.spec.ports[0].port}' | grep 5975
kubectl get svc resource-9e084c -n test -o jsonpath='{.spec.type}' | grep ClusterIP
```


# Task 5: Node Maintenance
Mark node `node-5` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.

```verify
# Check if node exists and is ready (was uncordoned)
kubectl get node node-5 --no-headers | grep Ready | grep -v SchedulingDisabled
```


# Task 6: Expose Service
Expose the deployment `resource-9rizt7-dep` as a Service named `resource-9rizt7` in namespace `test`.
The service should listen on port `3531` and be of type `NodePort`.

```verify
kubectl get svc resource-9rizt7 -n test -o jsonpath='{.spec.ports[0].port}' | grep 3531
kubectl get svc resource-9rizt7 -n test -o jsonpath='{.spec.type}' | grep NodePort
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
Create a deployment named `resource-rmmcme` in namespace `default` using image `busybox`.
Scale it to `5` replicas.
Then, perform a rolling update to image `busybox:latest`.

```verify
kubectl get deploy resource-rmmcme -n default -o jsonpath='{.spec.replicas}' | grep 5
kubectl get deploy resource-rmmcme -n default -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "busybox:latest"
```


# Task 9: Scale Deployment
Create a deployment named `resource-5jxqx5` in namespace `backend` using image `postgres`.
Scale it to `3` replicas.
Then, perform a rolling update to image `postgres:latest`.

```verify
kubectl get deploy resource-5jxqx5 -n backend -o jsonpath='{.spec.replicas}' | grep 3
kubectl get deploy resource-5jxqx5 -n backend -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "postgres:latest"
```


# Task 10: Expose Service
Expose the deployment `resource-j6znrh-dep` as a Service named `resource-j6znrh` in namespace `default`.
The service should listen on port `7980` and be of type `NodePort`.

```verify
kubectl get svc resource-j6znrh -n default -o jsonpath='{.spec.ports[0].port}' | grep 7980
kubectl get svc resource-j6znrh -n default -o jsonpath='{.spec.type}' | grep NodePort
```


# Task 11: Node Maintenance
Mark node `node-4` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.

```verify
# Check if node exists and is ready (was uncordoned)
kubectl get node node-4 --no-headers | grep Ready | grep -v SchedulingDisabled
```


# Task 12: Expose Service
Expose the deployment `resource-bltfzl-dep` as a Service named `resource-bltfzl` in namespace `test`.
The service should listen on port `8509` and be of type `NodePort`.

```verify
kubectl get svc resource-bltfzl -n test -o jsonpath='{.spec.ports[0].port}' | grep 8509
kubectl get svc resource-bltfzl -n test -o jsonpath='{.spec.type}' | grep NodePort
```


# Task 13: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-lnwjby` in namespace `default`.
Request `5Gi` storage with access mode `ReadWriteOnce`.

```verify
kubectl get pvc resource-lnwjby -n default -o jsonpath='{.spec.resources.requests.storage}' | grep 5Gi
kubectl get pvc resource-lnwjby -n default -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteOnce
```


# Task 14: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-nagbfv` in namespace `test`.
Request `2Gi` storage with access mode `ReadOnlyMany`.

```verify
kubectl get pvc resource-nagbfv -n test -o jsonpath='{.spec.resources.requests.storage}' | grep 2Gi
kubectl get pvc resource-nagbfv -n test -o jsonpath='{.spec.accessModes[0]}' | grep ReadOnlyMany
```


# Task 15: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-ezoxmi` in namespace `prod`.
Request `100Mi` storage with access mode `ReadWriteOnce`.

```verify
kubectl get pvc resource-ezoxmi -n prod -o jsonpath='{.spec.resources.requests.storage}' | grep 100Mi
kubectl get pvc resource-ezoxmi -n prod -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteOnce
```


# Task 16: Scale Deployment
Create a deployment named `resource-6zejjd` in namespace `frontend` using image `python:3.9`.
Scale it to `3` replicas.
Then, perform a rolling update to image `python:3.9:latest`.

```verify
kubectl get deploy resource-6zejjd -n frontend -o jsonpath='{.spec.replicas}' | grep 3
kubectl get deploy resource-6zejjd -n frontend -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "python:3.9:latest"
```


# Task 17: Create a Pod
Create a pod named `resource-5qbdyq` in namespace `frontend` using image `redis`.
Ensure it has a label `env=prod`.

```verify
kubectl get pod resource-5qbdyq -n frontend --no-headers | grep Running
kubectl get pod resource-5qbdyq -n frontend -o jsonpath='{.metadata.labels.env}' | grep prod
```


# Task 18: Create a Pod
Create a pod named `resource-77xo0t` in namespace `default` using image `redis`.
Ensure it has a label `app=web`.

```verify
kubectl get pod resource-77xo0t -n default --no-headers | grep Running
kubectl get pod resource-77xo0t -n default -o jsonpath='{.metadata.labels.app}' | grep web
```


# Task 19: Scale Deployment
Create a deployment named `resource-slb5x1` in namespace `default` using image `mysql`.
Scale it to `5` replicas.
Then, perform a rolling update to image `mysql:latest`.

```verify
kubectl get deploy resource-slb5x1 -n default -o jsonpath='{.spec.replicas}' | grep 5
kubectl get deploy resource-slb5x1 -n default -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "mysql:latest"
```


# Task 20: Node Maintenance
Mark node `node-1` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.

```verify
# Check if node exists and is ready (was uncordoned)
kubectl get node node-1 --no-headers | grep Ready | grep -v SchedulingDisabled
```


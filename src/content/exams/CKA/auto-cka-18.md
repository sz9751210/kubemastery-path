---
id: auto-cka-18
title: Auto CKA Practice (Batch 18)
category: CKA
duration: 120 mins
---

# Auto CKA Practice (Batch 18)

This is an auto-generated exam to provide infinite practice questions.

# Task 1: Create a Pod
Create a pod named `resource-14otlm` in namespace `prod` using image `memcached`.
Ensure it has a label `release=stable`.

```verify
kubectl get pod resource-14otlm -n prod --no-headers | grep Running
kubectl get pod resource-14otlm -n prod -o jsonpath='{.metadata.labels.release}' | grep stable
```


# Task 2: Node Maintenance
Mark node `node-4` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.

```verify
# Check if node exists and is ready (was uncordoned)
kubectl get node node-4 --no-headers | grep Ready | grep -v SchedulingDisabled
```


# Task 3: Create a Pod
Create a pod named `resource-lkicgn` in namespace `prod` using image `python:3.9`.
Ensure it has a label `release=stable`.

```verify
kubectl get pod resource-lkicgn -n prod --no-headers | grep Running
kubectl get pod resource-lkicgn -n prod -o jsonpath='{.metadata.labels.release}' | grep stable
```


# Task 4: Expose Service
Expose the deployment `resource-dmwlk0-dep` as a Service named `resource-dmwlk0` in namespace `dev`.
The service should listen on port `6295` and be of type `ClusterIP`.

```verify
kubectl get svc resource-dmwlk0 -n dev -o jsonpath='{.spec.ports[0].port}' | grep 6295
kubectl get svc resource-dmwlk0 -n dev -o jsonpath='{.spec.type}' | grep ClusterIP
```


# Task 5: Create a Pod
Create a pod named `resource-bcva2g` in namespace `frontend` using image `busybox`.
Ensure it has a label `team=blue`.

```verify
kubectl get pod resource-bcva2g -n frontend --no-headers | grep Running
kubectl get pod resource-bcva2g -n frontend -o jsonpath='{.metadata.labels.team}' | grep blue
```


# Task 6: Node Maintenance
Mark node `node-4` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.

```verify
# Check if node exists and is ready (was uncordoned)
kubectl get node node-4 --no-headers | grep Ready | grep -v SchedulingDisabled
```


# Task 7: Scale Deployment
Create a deployment named `resource-9ud5be` in namespace `test` using image `mysql`.
Scale it to `2` replicas.
Then, perform a rolling update to image `mysql:latest`.

```verify
kubectl get deploy resource-9ud5be -n test -o jsonpath='{.spec.replicas}' | grep 2
kubectl get deploy resource-9ud5be -n test -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "mysql:latest"
```


# Task 8: Expose Service
Expose the deployment `resource-fzhh8a-dep` as a Service named `resource-fzhh8a` in namespace `test`.
The service should listen on port `7442` and be of type `NodePort`.

```verify
kubectl get svc resource-fzhh8a -n test -o jsonpath='{.spec.ports[0].port}' | grep 7442
kubectl get svc resource-fzhh8a -n test -o jsonpath='{.spec.type}' | grep NodePort
```


# Task 9: Node Maintenance
Mark node `node-1` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.

```verify
# Check if node exists and is ready (was uncordoned)
kubectl get node node-1 --no-headers | grep Ready | grep -v SchedulingDisabled
```


# Task 10: Create a Pod
Create a pod named `resource-wumqez` in namespace `backend` using image `mysql`.
Ensure it has a label `release=stable`.

```verify
kubectl get pod resource-wumqez -n backend --no-headers | grep Running
kubectl get pod resource-wumqez -n backend -o jsonpath='{.metadata.labels.release}' | grep stable
```


# Task 11: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-9z2y2v` in namespace `prod`.
Request `10Gi` storage with access mode `ReadWriteMany`.

```verify
kubectl get pvc resource-9z2y2v -n prod -o jsonpath='{.spec.resources.requests.storage}' | grep 10Gi
kubectl get pvc resource-9z2y2v -n prod -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteMany
```


# Task 12: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-0237ox` in namespace `prod`.
Request `1Gi` storage with access mode `ReadWriteMany`.

```verify
kubectl get pvc resource-0237ox -n prod -o jsonpath='{.spec.resources.requests.storage}' | grep 1Gi
kubectl get pvc resource-0237ox -n prod -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteMany
```


# Task 13: Create a Pod
Create a pod named `resource-wg8upr` in namespace `staging` using image `postgres`.
Ensure it has a label `release=stable`.

```verify
kubectl get pod resource-wg8upr -n staging --no-headers | grep Running
kubectl get pod resource-wg8upr -n staging -o jsonpath='{.metadata.labels.release}' | grep stable
```


# Task 14: Create a Pod
Create a pod named `resource-3ge889` in namespace `test` using image `mysql`.
Ensure it has a label `env=prod`.

```verify
kubectl get pod resource-3ge889 -n test --no-headers | grep Running
kubectl get pod resource-3ge889 -n test -o jsonpath='{.metadata.labels.env}' | grep prod
```


# Task 15: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-io3jd3` in namespace `frontend`.
Request `2Gi` storage with access mode `ReadOnlyMany`.

```verify
kubectl get pvc resource-io3jd3 -n frontend -o jsonpath='{.spec.resources.requests.storage}' | grep 2Gi
kubectl get pvc resource-io3jd3 -n frontend -o jsonpath='{.spec.accessModes[0]}' | grep ReadOnlyMany
```


# Task 16: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-acsgu8` in namespace `kube-system`.
Request `100Mi` storage with access mode `ReadWriteMany`.

```verify
kubectl get pvc resource-acsgu8 -n kube-system -o jsonpath='{.spec.resources.requests.storage}' | grep 100Mi
kubectl get pvc resource-acsgu8 -n kube-system -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteMany
```


# Task 17: Create a Pod
Create a pod named `resource-7tcz1t` in namespace `dev` using image `mysql`.
Ensure it has a label `env=prod`.

```verify
kubectl get pod resource-7tcz1t -n dev --no-headers | grep Running
kubectl get pod resource-7tcz1t -n dev -o jsonpath='{.metadata.labels.env}' | grep prod
```


# Task 18: Node Maintenance
Mark node `node-1` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.

```verify
# Check if node exists and is ready (was uncordoned)
kubectl get node node-1 --no-headers | grep Ready | grep -v SchedulingDisabled
```


# Task 19: Scale Deployment
Create a deployment named `resource-io32k2` in namespace `default` using image `mysql`.
Scale it to `4` replicas.
Then, perform a rolling update to image `mysql:latest`.

```verify
kubectl get deploy resource-io32k2 -n default -o jsonpath='{.spec.replicas}' | grep 4
kubectl get deploy resource-io32k2 -n default -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "mysql:latest"
```


# Task 20: Node Maintenance
Mark node `node-3` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.

```verify
# Check if node exists and is ready (was uncordoned)
kubectl get node node-3 --no-headers | grep Ready | grep -v SchedulingDisabled
```


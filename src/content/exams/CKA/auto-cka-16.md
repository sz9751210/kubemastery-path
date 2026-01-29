---
id: auto-cka-16
title: Auto CKA Practice (Batch 16)
category: CKA
duration: 120 mins
---

# Auto CKA Practice (Batch 16)

This is an auto-generated exam to provide infinite practice questions.

# Task 1: Scale Deployment
Create a deployment named `resource-0bd2ct` in namespace `backend` using image `node:14`.
Scale it to `4` replicas.
Then, perform a rolling update to image `node:14:latest`.

```verify
kubectl get deploy resource-0bd2ct -n backend -o jsonpath='{.spec.replicas}' | grep 4
kubectl get deploy resource-0bd2ct -n backend -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "node:14:latest"
```


# Task 2: Expose Service
Expose the deployment `resource-wxxyg8-dep` as a Service named `resource-wxxyg8` in namespace `backend`.
The service should listen on port `8730` and be of type `NodePort`.

```verify
kubectl get svc resource-wxxyg8 -n backend -o jsonpath='{.spec.ports[0].port}' | grep 8730
kubectl get svc resource-wxxyg8 -n backend -o jsonpath='{.spec.type}' | grep NodePort
```


# Task 3: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-2gx69g` in namespace `frontend`.
Request `2Gi` storage with access mode `ReadWriteOnce`.

```verify
kubectl get pvc resource-2gx69g -n frontend -o jsonpath='{.spec.resources.requests.storage}' | grep 2Gi
kubectl get pvc resource-2gx69g -n frontend -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteOnce
```


# Task 4: Expose Service
Expose the deployment `resource-fgb7ic-dep` as a Service named `resource-fgb7ic` in namespace `backend`.
The service should listen on port `4675` and be of type `NodePort`.

```verify
kubectl get svc resource-fgb7ic -n backend -o jsonpath='{.spec.ports[0].port}' | grep 4675
kubectl get svc resource-fgb7ic -n backend -o jsonpath='{.spec.type}' | grep NodePort
```


# Task 5: Create a Pod
Create a pod named `resource-4t6hag` in namespace `prod` using image `memcached`.
Ensure it has a label `app=web`.

```verify
kubectl get pod resource-4t6hag -n prod --no-headers | grep Running
kubectl get pod resource-4t6hag -n prod -o jsonpath='{.metadata.labels.app}' | grep web
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
Mark node `node-5` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.

```verify
# Check if node exists and is ready (was uncordoned)
kubectl get node node-5 --no-headers | grep Ready | grep -v SchedulingDisabled
```


# Task 8: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-ggywzl` in namespace `frontend`.
Request `1Gi` storage with access mode `ReadOnlyMany`.

```verify
kubectl get pvc resource-ggywzl -n frontend -o jsonpath='{.spec.resources.requests.storage}' | grep 1Gi
kubectl get pvc resource-ggywzl -n frontend -o jsonpath='{.spec.accessModes[0]}' | grep ReadOnlyMany
```


# Task 9: Scale Deployment
Create a deployment named `resource-k42s1d` in namespace `kube-system` using image `nginx`.
Scale it to `4` replicas.
Then, perform a rolling update to image `nginx:latest`.

```verify
kubectl get deploy resource-k42s1d -n kube-system -o jsonpath='{.spec.replicas}' | grep 4
kubectl get deploy resource-k42s1d -n kube-system -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "nginx:latest"
```


# Task 10: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-1fdm1p` in namespace `frontend`.
Request `1Gi` storage with access mode `ReadWriteMany`.

```verify
kubectl get pvc resource-1fdm1p -n frontend -o jsonpath='{.spec.resources.requests.storage}' | grep 1Gi
kubectl get pvc resource-1fdm1p -n frontend -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteMany
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
Create a PersistentVolumeClaim named `resource-oamfok` in namespace `dev`.
Request `100Mi` storage with access mode `ReadOnlyMany`.

```verify
kubectl get pvc resource-oamfok -n dev -o jsonpath='{.spec.resources.requests.storage}' | grep 100Mi
kubectl get pvc resource-oamfok -n dev -o jsonpath='{.spec.accessModes[0]}' | grep ReadOnlyMany
```


# Task 13: Scale Deployment
Create a deployment named `resource-kuv6vt` in namespace `backend` using image `nginx`.
Scale it to `2` replicas.
Then, perform a rolling update to image `nginx:latest`.

```verify
kubectl get deploy resource-kuv6vt -n backend -o jsonpath='{.spec.replicas}' | grep 2
kubectl get deploy resource-kuv6vt -n backend -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "nginx:latest"
```


# Task 14: Node Maintenance
Mark node `node-5` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.

```verify
# Check if node exists and is ready (was uncordoned)
kubectl get node node-5 --no-headers | grep Ready | grep -v SchedulingDisabled
```


# Task 15: Node Maintenance
Mark node `node-1` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.

```verify
# Check if node exists and is ready (was uncordoned)
kubectl get node node-1 --no-headers | grep Ready | grep -v SchedulingDisabled
```


# Task 16: Scale Deployment
Create a deployment named `resource-hyms11` in namespace `staging` using image `node:14`.
Scale it to `2` replicas.
Then, perform a rolling update to image `node:14:latest`.

```verify
kubectl get deploy resource-hyms11 -n staging -o jsonpath='{.spec.replicas}' | grep 2
kubectl get deploy resource-hyms11 -n staging -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "node:14:latest"
```


# Task 17: Node Maintenance
Mark node `node-3` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.

```verify
# Check if node exists and is ready (was uncordoned)
kubectl get node node-3 --no-headers | grep Ready | grep -v SchedulingDisabled
```


# Task 18: Expose Service
Expose the deployment `resource-axrcbc-dep` as a Service named `resource-axrcbc` in namespace `test`.
The service should listen on port `3973` and be of type `ClusterIP`.

```verify
kubectl get svc resource-axrcbc -n test -o jsonpath='{.spec.ports[0].port}' | grep 3973
kubectl get svc resource-axrcbc -n test -o jsonpath='{.spec.type}' | grep ClusterIP
```


# Task 19: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-cgk7dn` in namespace `default`.
Request `100Mi` storage with access mode `ReadWriteMany`.

```verify
kubectl get pvc resource-cgk7dn -n default -o jsonpath='{.spec.resources.requests.storage}' | grep 100Mi
kubectl get pvc resource-cgk7dn -n default -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteMany
```


# Task 20: Node Maintenance
Mark node `node-4` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.

```verify
# Check if node exists and is ready (was uncordoned)
kubectl get node node-4 --no-headers | grep Ready | grep -v SchedulingDisabled
```


---
id: auto-cka-1
title: Auto CKA Practice (Batch 1)
category: CKA
duration: 120 mins
---

# Auto CKA Practice (Batch 1)

This is an auto-generated exam to provide infinite practice questions.

# Task 1: Scale Deployment
Create a deployment named `resource-rli9py` in namespace `dev` using image `busybox`.
Scale it to `5` replicas.
Then, perform a rolling update to image `busybox:latest`.

```verify
kubectl get deploy resource-rli9py -n dev -o jsonpath='{.spec.replicas}' | grep 5
kubectl get deploy resource-rli9py -n dev -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "busybox:latest"
```


# Task 2: Node Maintenance
Mark node `node-1` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.

```verify
# Check if node exists and is ready (was uncordoned)
kubectl get node node-1 --no-headers | grep Ready | grep -v SchedulingDisabled
```


# Task 3: Create a Pod
Create a pod named `resource-ex0xgk` in namespace `staging` using image `httpd`.
Ensure it has a label `env=prod`.

```verify
kubectl get pod resource-ex0xgk -n staging --no-headers | grep Running
kubectl get pod resource-ex0xgk -n staging -o jsonpath='{.metadata.labels.env}' | grep prod
```


# Task 4: Expose Service
Expose the deployment `resource-qbe9p2-dep` as a Service named `resource-qbe9p2` in namespace `dev`.
The service should listen on port `7021` and be of type `NodePort`.

```verify
kubectl get svc resource-qbe9p2 -n dev -o jsonpath='{.spec.ports[0].port}' | grep 7021
kubectl get svc resource-qbe9p2 -n dev -o jsonpath='{.spec.type}' | grep NodePort
```


# Task 5: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-v4c1y4` in namespace `prod`.
Request `1Gi` storage with access mode `ReadWriteOnce`.

```verify
kubectl get pvc resource-v4c1y4 -n prod -o jsonpath='{.spec.resources.requests.storage}' | grep 1Gi
kubectl get pvc resource-v4c1y4 -n prod -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteOnce
```


# Task 6: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-tghlsn` in namespace `dev`.
Request `5Gi` storage with access mode `ReadOnlyMany`.

```verify
kubectl get pvc resource-tghlsn -n dev -o jsonpath='{.spec.resources.requests.storage}' | grep 5Gi
kubectl get pvc resource-tghlsn -n dev -o jsonpath='{.spec.accessModes[0]}' | grep ReadOnlyMany
```


# Task 7: Node Maintenance
Mark node `node-1` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.

```verify
# Check if node exists and is ready (was uncordoned)
kubectl get node node-1 --no-headers | grep Ready | grep -v SchedulingDisabled
```


# Task 8: Create a Pod
Create a pod named `resource-jxsv4y` in namespace `staging` using image `alpine`.
Ensure it has a label `env=prod`.

```verify
kubectl get pod resource-jxsv4y -n staging --no-headers | grep Running
kubectl get pod resource-jxsv4y -n staging -o jsonpath='{.metadata.labels.env}' | grep prod
```


# Task 9: Node Maintenance
Mark node `node-2` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.

```verify
# Check if node exists and is ready (was uncordoned)
kubectl get node node-2 --no-headers | grep Ready | grep -v SchedulingDisabled
```


# Task 10: Create a Pod
Create a pod named `resource-xw63a2` in namespace `dev` using image `memcached`.
Ensure it has a label `team=blue`.

```verify
kubectl get pod resource-xw63a2 -n dev --no-headers | grep Running
kubectl get pod resource-xw63a2 -n dev -o jsonpath='{.metadata.labels.team}' | grep blue
```


# Task 11: Scale Deployment
Create a deployment named `resource-c1ugwg` in namespace `backend` using image `redis`.
Scale it to `3` replicas.
Then, perform a rolling update to image `redis:latest`.

```verify
kubectl get deploy resource-c1ugwg -n backend -o jsonpath='{.spec.replicas}' | grep 3
kubectl get deploy resource-c1ugwg -n backend -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "redis:latest"
```


# Task 12: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-letjzr` in namespace `default`.
Request `2Gi` storage with access mode `ReadWriteOnce`.

```verify
kubectl get pvc resource-letjzr -n default -o jsonpath='{.spec.resources.requests.storage}' | grep 2Gi
kubectl get pvc resource-letjzr -n default -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteOnce
```


# Task 13: Node Maintenance
Mark node `node-3` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.

```verify
# Check if node exists and is ready (was uncordoned)
kubectl get node node-3 --no-headers | grep Ready | grep -v SchedulingDisabled
```


# Task 14: Create a Pod
Create a pod named `resource-jybfln` in namespace `backend` using image `busybox`.
Ensure it has a label `team=blue`.

```verify
kubectl get pod resource-jybfln -n backend --no-headers | grep Running
kubectl get pod resource-jybfln -n backend -o jsonpath='{.metadata.labels.team}' | grep blue
```


# Task 15: Scale Deployment
Create a deployment named `resource-72ox36` in namespace `backend` using image `alpine`.
Scale it to `2` replicas.
Then, perform a rolling update to image `alpine:latest`.

```verify
kubectl get deploy resource-72ox36 -n backend -o jsonpath='{.spec.replicas}' | grep 2
kubectl get deploy resource-72ox36 -n backend -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "alpine:latest"
```


# Task 16: Scale Deployment
Create a deployment named `resource-xux1yb` in namespace `backend` using image `alpine`.
Scale it to `2` replicas.
Then, perform a rolling update to image `alpine:latest`.

```verify
kubectl get deploy resource-xux1yb -n backend -o jsonpath='{.spec.replicas}' | grep 2
kubectl get deploy resource-xux1yb -n backend -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "alpine:latest"
```


# Task 17: Node Maintenance
Mark node `node-2` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.

```verify
# Check if node exists and is ready (was uncordoned)
kubectl get node node-2 --no-headers | grep Ready | grep -v SchedulingDisabled
```


# Task 18: Node Maintenance
Mark node `node-5` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.

```verify
# Check if node exists and is ready (was uncordoned)
kubectl get node node-5 --no-headers | grep Ready | grep -v SchedulingDisabled
```


# Task 19: Scale Deployment
Create a deployment named `resource-lbf2ys` in namespace `test` using image `memcached`.
Scale it to `2` replicas.
Then, perform a rolling update to image `memcached:latest`.

```verify
kubectl get deploy resource-lbf2ys -n test -o jsonpath='{.spec.replicas}' | grep 2
kubectl get deploy resource-lbf2ys -n test -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "memcached:latest"
```


# Task 20: Scale Deployment
Create a deployment named `resource-lxptm7` in namespace `kube-system` using image `nginx`.
Scale it to `2` replicas.
Then, perform a rolling update to image `nginx:latest`.

```verify
kubectl get deploy resource-lxptm7 -n kube-system -o jsonpath='{.spec.replicas}' | grep 2
kubectl get deploy resource-lxptm7 -n kube-system -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "nginx:latest"
```


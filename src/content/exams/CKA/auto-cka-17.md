---
id: auto-cka-17
title: Auto CKA Practice (Batch 17)
category: CKA
duration: 120 mins
---

# Auto CKA Practice (Batch 17)

This is an auto-generated exam to provide infinite practice questions.

# Task 1: Create a Pod
Create a pod named `resource-fhl06a` in namespace `backend` using image `postgres`.
Ensure it has a label `tier=frontend`.

```verify
kubectl get pod resource-fhl06a -n backend --no-headers | grep Running
kubectl get pod resource-fhl06a -n backend -o jsonpath='{.metadata.labels.tier}' | grep frontend
```


# Task 2: Scale Deployment
Create a deployment named `resource-vy7j2p` in namespace `test` using image `python:3.9`.
Scale it to `2` replicas.
Then, perform a rolling update to image `python:3.9:latest`.

```verify
kubectl get deploy resource-vy7j2p -n test -o jsonpath='{.spec.replicas}' | grep 2
kubectl get deploy resource-vy7j2p -n test -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "python:3.9:latest"
```


# Task 3: Node Maintenance
Mark node `node-5` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.

```verify
# Check if node exists and is ready (was uncordoned)
kubectl get node node-5 --no-headers | grep Ready | grep -v SchedulingDisabled
```


# Task 4: Scale Deployment
Create a deployment named `resource-p6h7o2` in namespace `dev` using image `httpd`.
Scale it to `3` replicas.
Then, perform a rolling update to image `httpd:latest`.

```verify
kubectl get deploy resource-p6h7o2 -n dev -o jsonpath='{.spec.replicas}' | grep 3
kubectl get deploy resource-p6h7o2 -n dev -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "httpd:latest"
```


# Task 5: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-fa1uyw` in namespace `backend`.
Request `100Mi` storage with access mode `ReadWriteMany`.

```verify
kubectl get pvc resource-fa1uyw -n backend -o jsonpath='{.spec.resources.requests.storage}' | grep 100Mi
kubectl get pvc resource-fa1uyw -n backend -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteMany
```


# Task 6: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-7cd5wd` in namespace `dev`.
Request `100Mi` storage with access mode `ReadWriteMany`.

```verify
kubectl get pvc resource-7cd5wd -n dev -o jsonpath='{.spec.resources.requests.storage}' | grep 100Mi
kubectl get pvc resource-7cd5wd -n dev -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteMany
```


# Task 7: Expose Service
Expose the deployment `resource-m8y8jn-dep` as a Service named `resource-m8y8jn` in namespace `test`.
The service should listen on port `7785` and be of type `NodePort`.

```verify
kubectl get svc resource-m8y8jn -n test -o jsonpath='{.spec.ports[0].port}' | grep 7785
kubectl get svc resource-m8y8jn -n test -o jsonpath='{.spec.type}' | grep NodePort
```


# Task 8: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-vahu5w` in namespace `default`.
Request `100Mi` storage with access mode `ReadWriteOnce`.

```verify
kubectl get pvc resource-vahu5w -n default -o jsonpath='{.spec.resources.requests.storage}' | grep 100Mi
kubectl get pvc resource-vahu5w -n default -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteOnce
```


# Task 9: Create a Pod
Create a pod named `resource-igdz2d` in namespace `kube-system` using image `memcached`.
Ensure it has a label `team=blue`.

```verify
kubectl get pod resource-igdz2d -n kube-system --no-headers | grep Running
kubectl get pod resource-igdz2d -n kube-system -o jsonpath='{.metadata.labels.team}' | grep blue
```


# Task 10: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-028t4h` in namespace `dev`.
Request `1Gi` storage with access mode `ReadOnlyMany`.

```verify
kubectl get pvc resource-028t4h -n dev -o jsonpath='{.spec.resources.requests.storage}' | grep 1Gi
kubectl get pvc resource-028t4h -n dev -o jsonpath='{.spec.accessModes[0]}' | grep ReadOnlyMany
```


# Task 11: Expose Service
Expose the deployment `resource-ex9k1c-dep` as a Service named `resource-ex9k1c` in namespace `default`.
The service should listen on port `7782` and be of type `ClusterIP`.

```verify
kubectl get svc resource-ex9k1c -n default -o jsonpath='{.spec.ports[0].port}' | grep 7782
kubectl get svc resource-ex9k1c -n default -o jsonpath='{.spec.type}' | grep ClusterIP
```


# Task 12: Scale Deployment
Create a deployment named `resource-nbz2eq` in namespace `default` using image `mysql`.
Scale it to `5` replicas.
Then, perform a rolling update to image `mysql:latest`.

```verify
kubectl get deploy resource-nbz2eq -n default -o jsonpath='{.spec.replicas}' | grep 5
kubectl get deploy resource-nbz2eq -n default -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "mysql:latest"
```


# Task 13: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-dqb5ln` in namespace `kube-system`.
Request `100Mi` storage with access mode `ReadWriteOnce`.

```verify
kubectl get pvc resource-dqb5ln -n kube-system -o jsonpath='{.spec.resources.requests.storage}' | grep 100Mi
kubectl get pvc resource-dqb5ln -n kube-system -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteOnce
```


# Task 14: Node Maintenance
Mark node `node-3` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.

```verify
# Check if node exists and is ready (was uncordoned)
kubectl get node node-3 --no-headers | grep Ready | grep -v SchedulingDisabled
```


# Task 15: Expose Service
Expose the deployment `resource-kofc2c-dep` as a Service named `resource-kofc2c` in namespace `kube-system`.
The service should listen on port `3391` and be of type `ClusterIP`.

```verify
kubectl get svc resource-kofc2c -n kube-system -o jsonpath='{.spec.ports[0].port}' | grep 3391
kubectl get svc resource-kofc2c -n kube-system -o jsonpath='{.spec.type}' | grep ClusterIP
```


# Task 16: Create a Pod
Create a pod named `resource-os5rhf` in namespace `staging` using image `nginx`.
Ensure it has a label `app=web`.

```verify
kubectl get pod resource-os5rhf -n staging --no-headers | grep Running
kubectl get pod resource-os5rhf -n staging -o jsonpath='{.metadata.labels.app}' | grep web
```


# Task 17: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-qv0vzw` in namespace `dev`.
Request `100Mi` storage with access mode `ReadWriteMany`.

```verify
kubectl get pvc resource-qv0vzw -n dev -o jsonpath='{.spec.resources.requests.storage}' | grep 100Mi
kubectl get pvc resource-qv0vzw -n dev -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteMany
```


# Task 18: Create a Pod
Create a pod named `resource-k69mh8` in namespace `backend` using image `node:14`.
Ensure it has a label `tier=frontend`.

```verify
kubectl get pod resource-k69mh8 -n backend --no-headers | grep Running
kubectl get pod resource-k69mh8 -n backend -o jsonpath='{.metadata.labels.tier}' | grep frontend
```


# Task 19: Create a Pod
Create a pod named `resource-gjqjmw` in namespace `kube-system` using image `nginx`.
Ensure it has a label `release=stable`.

```verify
kubectl get pod resource-gjqjmw -n kube-system --no-headers | grep Running
kubectl get pod resource-gjqjmw -n kube-system -o jsonpath='{.metadata.labels.release}' | grep stable
```


# Task 20: Node Maintenance
Mark node `node-3` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.

```verify
# Check if node exists and is ready (was uncordoned)
kubectl get node node-3 --no-headers | grep Ready | grep -v SchedulingDisabled
```


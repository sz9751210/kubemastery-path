---
id: auto-cka-10
title: Auto CKA Practice (Batch 10)
category: CKA
duration: 120 mins
---

# Auto CKA Practice (Batch 10)

This is an auto-generated exam to provide infinite practice questions.

# Task 1: Expose Service
Expose the deployment `resource-6dqwyo-dep` as a Service named `resource-6dqwyo` in namespace `backend`.
The service should listen on port `8642` and be of type `ClusterIP`.

```verify
kubectl get svc resource-6dqwyo -n backend -o jsonpath='{.spec.ports[0].port}' | grep 8642
kubectl get svc resource-6dqwyo -n backend -o jsonpath='{.spec.type}' | grep ClusterIP
```


# Task 2: Expose Service
Expose the deployment `resource-1mq94m-dep` as a Service named `resource-1mq94m` in namespace `staging`.
The service should listen on port `4818` and be of type `ClusterIP`.

```verify
kubectl get svc resource-1mq94m -n staging -o jsonpath='{.spec.ports[0].port}' | grep 4818
kubectl get svc resource-1mq94m -n staging -o jsonpath='{.spec.type}' | grep ClusterIP
```


# Task 3: Create a Pod
Create a pod named `resource-t42cqy` in namespace `prod` using image `postgres`.
Ensure it has a label `team=blue`.

```verify
kubectl get pod resource-t42cqy -n prod --no-headers | grep Running
kubectl get pod resource-t42cqy -n prod -o jsonpath='{.metadata.labels.team}' | grep blue
```


# Task 4: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-15d5gs` in namespace `test`.
Request `5Gi` storage with access mode `ReadOnlyMany`.

```verify
kubectl get pvc resource-15d5gs -n test -o jsonpath='{.spec.resources.requests.storage}' | grep 5Gi
kubectl get pvc resource-15d5gs -n test -o jsonpath='{.spec.accessModes[0]}' | grep ReadOnlyMany
```


# Task 5: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-scmw6n` in namespace `frontend`.
Request `5Gi` storage with access mode `ReadWriteOnce`.

```verify
kubectl get pvc resource-scmw6n -n frontend -o jsonpath='{.spec.resources.requests.storage}' | grep 5Gi
kubectl get pvc resource-scmw6n -n frontend -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteOnce
```


# Task 6: Create a Pod
Create a pod named `resource-i8fthw` in namespace `default` using image `memcached`.
Ensure it has a label `app=web`.

```verify
kubectl get pod resource-i8fthw -n default --no-headers | grep Running
kubectl get pod resource-i8fthw -n default -o jsonpath='{.metadata.labels.app}' | grep web
```


# Task 7: Create a Pod
Create a pod named `resource-ymnbn6` in namespace `dev` using image `httpd`.
Ensure it has a label `env=prod`.

```verify
kubectl get pod resource-ymnbn6 -n dev --no-headers | grep Running
kubectl get pod resource-ymnbn6 -n dev -o jsonpath='{.metadata.labels.env}' | grep prod
```


# Task 8: Create a Pod
Create a pod named `resource-u62foi` in namespace `default` using image `nginx`.
Ensure it has a label `tier=frontend`.

```verify
kubectl get pod resource-u62foi -n default --no-headers | grep Running
kubectl get pod resource-u62foi -n default -o jsonpath='{.metadata.labels.tier}' | grep frontend
```


# Task 9: Node Maintenance
Mark node `node-1` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.

```verify
# Check if node exists and is ready (was uncordoned)
kubectl get node node-1 --no-headers | grep Ready | grep -v SchedulingDisabled
```


# Task 10: Expose Service
Expose the deployment `resource-s0jl54-dep` as a Service named `resource-s0jl54` in namespace `frontend`.
The service should listen on port `7244` and be of type `NodePort`.

```verify
kubectl get svc resource-s0jl54 -n frontend -o jsonpath='{.spec.ports[0].port}' | grep 7244
kubectl get svc resource-s0jl54 -n frontend -o jsonpath='{.spec.type}' | grep NodePort
```


# Task 11: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-v9iqxq` in namespace `staging`.
Request `10Gi` storage with access mode `ReadWriteMany`.

```verify
kubectl get pvc resource-v9iqxq -n staging -o jsonpath='{.spec.resources.requests.storage}' | grep 10Gi
kubectl get pvc resource-v9iqxq -n staging -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteMany
```


# Task 12: Create a Pod
Create a pod named `resource-0294ua` in namespace `default` using image `alpine`.
Ensure it has a label `team=blue`.

```verify
kubectl get pod resource-0294ua -n default --no-headers | grep Running
kubectl get pod resource-0294ua -n default -o jsonpath='{.metadata.labels.team}' | grep blue
```


# Task 13: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-73nm4h` in namespace `test`.
Request `100Mi` storage with access mode `ReadWriteMany`.

```verify
kubectl get pvc resource-73nm4h -n test -o jsonpath='{.spec.resources.requests.storage}' | grep 100Mi
kubectl get pvc resource-73nm4h -n test -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteMany
```


# Task 14: Expose Service
Expose the deployment `resource-27ji4b-dep` as a Service named `resource-27ji4b` in namespace `test`.
The service should listen on port `6206` and be of type `NodePort`.

```verify
kubectl get svc resource-27ji4b -n test -o jsonpath='{.spec.ports[0].port}' | grep 6206
kubectl get svc resource-27ji4b -n test -o jsonpath='{.spec.type}' | grep NodePort
```


# Task 15: Create a Pod
Create a pod named `resource-or6g5i` in namespace `frontend` using image `python:3.9`.
Ensure it has a label `tier=frontend`.

```verify
kubectl get pod resource-or6g5i -n frontend --no-headers | grep Running
kubectl get pod resource-or6g5i -n frontend -o jsonpath='{.metadata.labels.tier}' | grep frontend
```


# Task 16: Scale Deployment
Create a deployment named `resource-m3fb0n` in namespace `dev` using image `redis`.
Scale it to `3` replicas.
Then, perform a rolling update to image `redis:latest`.

```verify
kubectl get deploy resource-m3fb0n -n dev -o jsonpath='{.spec.replicas}' | grep 3
kubectl get deploy resource-m3fb0n -n dev -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "redis:latest"
```


# Task 17: Scale Deployment
Create a deployment named `resource-3wsyfi` in namespace `staging` using image `node:14`.
Scale it to `5` replicas.
Then, perform a rolling update to image `node:14:latest`.

```verify
kubectl get deploy resource-3wsyfi -n staging -o jsonpath='{.spec.replicas}' | grep 5
kubectl get deploy resource-3wsyfi -n staging -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "node:14:latest"
```


# Task 18: Create a Pod
Create a pod named `resource-vqmv1b` in namespace `kube-system` using image `redis`.
Ensure it has a label `team=blue`.

```verify
kubectl get pod resource-vqmv1b -n kube-system --no-headers | grep Running
kubectl get pod resource-vqmv1b -n kube-system -o jsonpath='{.metadata.labels.team}' | grep blue
```


# Task 19: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-fql70q` in namespace `default`.
Request `100Mi` storage with access mode `ReadOnlyMany`.

```verify
kubectl get pvc resource-fql70q -n default -o jsonpath='{.spec.resources.requests.storage}' | grep 100Mi
kubectl get pvc resource-fql70q -n default -o jsonpath='{.spec.accessModes[0]}' | grep ReadOnlyMany
```


# Task 20: Scale Deployment
Create a deployment named `resource-bskghv` in namespace `test` using image `redis`.
Scale it to `5` replicas.
Then, perform a rolling update to image `redis:latest`.

```verify
kubectl get deploy resource-bskghv -n test -o jsonpath='{.spec.replicas}' | grep 5
kubectl get deploy resource-bskghv -n test -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "redis:latest"
```


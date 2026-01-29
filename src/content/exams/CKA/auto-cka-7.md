---
id: auto-cka-7
title: Auto CKA Practice (Batch 7)
category: CKA
duration: 120 mins
---

# Auto CKA Practice (Batch 7)

This is an auto-generated exam to provide infinite practice questions.

# Task 1: Scale Deployment
Create a deployment named `resource-t8t216` in namespace `dev` using image `python:3.9`.
Scale it to `2` replicas.
Then, perform a rolling update to image `python:3.9:latest`.

```verify
kubectl get deploy resource-t8t216 -n dev -o jsonpath='{.spec.replicas}' | grep 2
kubectl get deploy resource-t8t216 -n dev -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "python:3.9:latest"
```


# Task 2: Create a Pod
Create a pod named `resource-e79anv` in namespace `backend` using image `redis`.
Ensure it has a label `team=blue`.

```verify
kubectl get pod resource-e79anv -n backend --no-headers | grep Running
kubectl get pod resource-e79anv -n backend -o jsonpath='{.metadata.labels.team}' | grep blue
```


# Task 3: Node Maintenance
Mark node `node-3` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.

```verify
# Check if node exists and is ready (was uncordoned)
kubectl get node node-3 --no-headers | grep Ready | grep -v SchedulingDisabled
```


# Task 4: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-oon0uo` in namespace `backend`.
Request `100Mi` storage with access mode `ReadWriteOnce`.

```verify
kubectl get pvc resource-oon0uo -n backend -o jsonpath='{.spec.resources.requests.storage}' | grep 100Mi
kubectl get pvc resource-oon0uo -n backend -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteOnce
```


# Task 5: Create a Pod
Create a pod named `resource-ign98p` in namespace `frontend` using image `httpd`.
Ensure it has a label `app=web`.

```verify
kubectl get pod resource-ign98p -n frontend --no-headers | grep Running
kubectl get pod resource-ign98p -n frontend -o jsonpath='{.metadata.labels.app}' | grep web
```


# Task 6: Node Maintenance
Mark node `node-1` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.

```verify
# Check if node exists and is ready (was uncordoned)
kubectl get node node-1 --no-headers | grep Ready | grep -v SchedulingDisabled
```


# Task 7: Scale Deployment
Create a deployment named `resource-e4h4v9` in namespace `staging` using image `python:3.9`.
Scale it to `3` replicas.
Then, perform a rolling update to image `python:3.9:latest`.

```verify
kubectl get deploy resource-e4h4v9 -n staging -o jsonpath='{.spec.replicas}' | grep 3
kubectl get deploy resource-e4h4v9 -n staging -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "python:3.9:latest"
```


# Task 8: Expose Service
Expose the deployment `resource-khg8wt-dep` as a Service named `resource-khg8wt` in namespace `default`.
The service should listen on port `7541` and be of type `ClusterIP`.

```verify
kubectl get svc resource-khg8wt -n default -o jsonpath='{.spec.ports[0].port}' | grep 7541
kubectl get svc resource-khg8wt -n default -o jsonpath='{.spec.type}' | grep ClusterIP
```


# Task 9: Node Maintenance
Mark node `node-5` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.

```verify
# Check if node exists and is ready (was uncordoned)
kubectl get node node-5 --no-headers | grep Ready | grep -v SchedulingDisabled
```


# Task 10: Expose Service
Expose the deployment `resource-kfi7xg-dep` as a Service named `resource-kfi7xg` in namespace `staging`.
The service should listen on port `8613` and be of type `NodePort`.

```verify
kubectl get svc resource-kfi7xg -n staging -o jsonpath='{.spec.ports[0].port}' | grep 8613
kubectl get svc resource-kfi7xg -n staging -o jsonpath='{.spec.type}' | grep NodePort
```


# Task 11: Scale Deployment
Create a deployment named `resource-8lwpiy` in namespace `dev` using image `busybox`.
Scale it to `5` replicas.
Then, perform a rolling update to image `busybox:latest`.

```verify
kubectl get deploy resource-8lwpiy -n dev -o jsonpath='{.spec.replicas}' | grep 5
kubectl get deploy resource-8lwpiy -n dev -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "busybox:latest"
```


# Task 12: Create a Pod
Create a pod named `resource-y68a91` in namespace `staging` using image `httpd`.
Ensure it has a label `env=prod`.

```verify
kubectl get pod resource-y68a91 -n staging --no-headers | grep Running
kubectl get pod resource-y68a91 -n staging -o jsonpath='{.metadata.labels.env}' | grep prod
```


# Task 13: Expose Service
Expose the deployment `resource-14cn75-dep` as a Service named `resource-14cn75` in namespace `frontend`.
The service should listen on port `8011` and be of type `NodePort`.

```verify
kubectl get svc resource-14cn75 -n frontend -o jsonpath='{.spec.ports[0].port}' | grep 8011
kubectl get svc resource-14cn75 -n frontend -o jsonpath='{.spec.type}' | grep NodePort
```


# Task 14: Create a Pod
Create a pod named `resource-3kdgss` in namespace `prod` using image `postgres`.
Ensure it has a label `app=web`.

```verify
kubectl get pod resource-3kdgss -n prod --no-headers | grep Running
kubectl get pod resource-3kdgss -n prod -o jsonpath='{.metadata.labels.app}' | grep web
```


# Task 15: Create a Pod
Create a pod named `resource-r17enr` in namespace `staging` using image `busybox`.
Ensure it has a label `app=web`.

```verify
kubectl get pod resource-r17enr -n staging --no-headers | grep Running
kubectl get pod resource-r17enr -n staging -o jsonpath='{.metadata.labels.app}' | grep web
```


# Task 16: Expose Service
Expose the deployment `resource-qwjt56-dep` as a Service named `resource-qwjt56` in namespace `backend`.
The service should listen on port `4289` and be of type `NodePort`.

```verify
kubectl get svc resource-qwjt56 -n backend -o jsonpath='{.spec.ports[0].port}' | grep 4289
kubectl get svc resource-qwjt56 -n backend -o jsonpath='{.spec.type}' | grep NodePort
```


# Task 17: Scale Deployment
Create a deployment named `resource-7frtyi` in namespace `frontend` using image `redis`.
Scale it to `3` replicas.
Then, perform a rolling update to image `redis:latest`.

```verify
kubectl get deploy resource-7frtyi -n frontend -o jsonpath='{.spec.replicas}' | grep 3
kubectl get deploy resource-7frtyi -n frontend -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "redis:latest"
```


# Task 18: Node Maintenance
Mark node `node-2` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.

```verify
# Check if node exists and is ready (was uncordoned)
kubectl get node node-2 --no-headers | grep Ready | grep -v SchedulingDisabled
```


# Task 19: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-ucrxkc` in namespace `kube-system`.
Request `1Gi` storage with access mode `ReadWriteMany`.

```verify
kubectl get pvc resource-ucrxkc -n kube-system -o jsonpath='{.spec.resources.requests.storage}' | grep 1Gi
kubectl get pvc resource-ucrxkc -n kube-system -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteMany
```


# Task 20: Create a Pod
Create a pod named `resource-t9do1o` in namespace `test` using image `alpine`.
Ensure it has a label `team=blue`.

```verify
kubectl get pod resource-t9do1o -n test --no-headers | grep Running
kubectl get pod resource-t9do1o -n test -o jsonpath='{.metadata.labels.team}' | grep blue
```


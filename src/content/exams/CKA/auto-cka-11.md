---
id: auto-cka-11
title: Auto CKA Practice (Batch 11)
category: CKA
duration: 120 mins
---

# Auto CKA Practice (Batch 11)

This is an auto-generated exam to provide infinite practice questions.

# Task 1: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-wsfvd7` in namespace `frontend`.
Request `10Gi` storage with access mode `ReadWriteMany`.

```verify
kubectl get pvc resource-wsfvd7 -n frontend -o jsonpath='{.spec.resources.requests.storage}' | grep 10Gi
kubectl get pvc resource-wsfvd7 -n frontend -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteMany
```


# Task 2: Create a Pod
Create a pod named `resource-e21rif` in namespace `staging` using image `httpd`.
Ensure it has a label `tier=frontend`.

```verify
kubectl get pod resource-e21rif -n staging --no-headers | grep Running
kubectl get pod resource-e21rif -n staging -o jsonpath='{.metadata.labels.tier}' | grep frontend
```


# Task 3: Scale Deployment
Create a deployment named `resource-912em7` in namespace `staging` using image `nginx`.
Scale it to `3` replicas.
Then, perform a rolling update to image `nginx:latest`.

```verify
kubectl get deploy resource-912em7 -n staging -o jsonpath='{.spec.replicas}' | grep 3
kubectl get deploy resource-912em7 -n staging -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "nginx:latest"
```


# Task 4: Scale Deployment
Create a deployment named `resource-mscuqd` in namespace `default` using image `mysql`.
Scale it to `5` replicas.
Then, perform a rolling update to image `mysql:latest`.

```verify
kubectl get deploy resource-mscuqd -n default -o jsonpath='{.spec.replicas}' | grep 5
kubectl get deploy resource-mscuqd -n default -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "mysql:latest"
```


# Task 5: Create a Pod
Create a pod named `resource-cba6hh` in namespace `dev` using image `nginx`.
Ensure it has a label `tier=frontend`.

```verify
kubectl get pod resource-cba6hh -n dev --no-headers | grep Running
kubectl get pod resource-cba6hh -n dev -o jsonpath='{.metadata.labels.tier}' | grep frontend
```


# Task 6: Node Maintenance
Mark node `node-3` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.

```verify
# Check if node exists and is ready (was uncordoned)
kubectl get node node-3 --no-headers | grep Ready | grep -v SchedulingDisabled
```


# Task 7: Expose Service
Expose the deployment `resource-w729t8-dep` as a Service named `resource-w729t8` in namespace `backend`.
The service should listen on port `7872` and be of type `ClusterIP`.

```verify
kubectl get svc resource-w729t8 -n backend -o jsonpath='{.spec.ports[0].port}' | grep 7872
kubectl get svc resource-w729t8 -n backend -o jsonpath='{.spec.type}' | grep ClusterIP
```


# Task 8: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-kg82fs` in namespace `staging`.
Request `100Mi` storage with access mode `ReadWriteMany`.

```verify
kubectl get pvc resource-kg82fs -n staging -o jsonpath='{.spec.resources.requests.storage}' | grep 100Mi
kubectl get pvc resource-kg82fs -n staging -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteMany
```


# Task 9: Node Maintenance
Mark node `node-1` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.

```verify
# Check if node exists and is ready (was uncordoned)
kubectl get node node-1 --no-headers | grep Ready | grep -v SchedulingDisabled
```


# Task 10: Node Maintenance
Mark node `node-3` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.

```verify
# Check if node exists and is ready (was uncordoned)
kubectl get node node-3 --no-headers | grep Ready | grep -v SchedulingDisabled
```


# Task 11: Expose Service
Expose the deployment `resource-uxzhzf-dep` as a Service named `resource-uxzhzf` in namespace `kube-system`.
The service should listen on port `5102` and be of type `ClusterIP`.

```verify
kubectl get svc resource-uxzhzf -n kube-system -o jsonpath='{.spec.ports[0].port}' | grep 5102
kubectl get svc resource-uxzhzf -n kube-system -o jsonpath='{.spec.type}' | grep ClusterIP
```


# Task 12: Node Maintenance
Mark node `node-4` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.

```verify
# Check if node exists and is ready (was uncordoned)
kubectl get node node-4 --no-headers | grep Ready | grep -v SchedulingDisabled
```


# Task 13: Scale Deployment
Create a deployment named `resource-ypojsj` in namespace `kube-system` using image `busybox`.
Scale it to `3` replicas.
Then, perform a rolling update to image `busybox:latest`.

```verify
kubectl get deploy resource-ypojsj -n kube-system -o jsonpath='{.spec.replicas}' | grep 3
kubectl get deploy resource-ypojsj -n kube-system -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "busybox:latest"
```


# Task 14: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-msmryk` in namespace `kube-system`.
Request `5Gi` storage with access mode `ReadWriteOnce`.

```verify
kubectl get pvc resource-msmryk -n kube-system -o jsonpath='{.spec.resources.requests.storage}' | grep 5Gi
kubectl get pvc resource-msmryk -n kube-system -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteOnce
```


# Task 15: Scale Deployment
Create a deployment named `resource-8zlxw2` in namespace `dev` using image `memcached`.
Scale it to `3` replicas.
Then, perform a rolling update to image `memcached:latest`.

```verify
kubectl get deploy resource-8zlxw2 -n dev -o jsonpath='{.spec.replicas}' | grep 3
kubectl get deploy resource-8zlxw2 -n dev -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "memcached:latest"
```


# Task 16: Node Maintenance
Mark node `node-1` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.

```verify
# Check if node exists and is ready (was uncordoned)
kubectl get node node-1 --no-headers | grep Ready | grep -v SchedulingDisabled
```


# Task 17: Node Maintenance
Mark node `node-5` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.

```verify
# Check if node exists and is ready (was uncordoned)
kubectl get node node-5 --no-headers | grep Ready | grep -v SchedulingDisabled
```


# Task 18: Expose Service
Expose the deployment `resource-bmzb2h-dep` as a Service named `resource-bmzb2h` in namespace `backend`.
The service should listen on port `7346` and be of type `ClusterIP`.

```verify
kubectl get svc resource-bmzb2h -n backend -o jsonpath='{.spec.ports[0].port}' | grep 7346
kubectl get svc resource-bmzb2h -n backend -o jsonpath='{.spec.type}' | grep ClusterIP
```


# Task 19: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-3uijuf` in namespace `staging`.
Request `5Gi` storage with access mode `ReadWriteMany`.

```verify
kubectl get pvc resource-3uijuf -n staging -o jsonpath='{.spec.resources.requests.storage}' | grep 5Gi
kubectl get pvc resource-3uijuf -n staging -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteMany
```


# Task 20: Scale Deployment
Create a deployment named `resource-wf7v96` in namespace `prod` using image `postgres`.
Scale it to `5` replicas.
Then, perform a rolling update to image `postgres:latest`.

```verify
kubectl get deploy resource-wf7v96 -n prod -o jsonpath='{.spec.replicas}' | grep 5
kubectl get deploy resource-wf7v96 -n prod -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "postgres:latest"
```


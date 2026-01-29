---
id: auto-cka-12
title: Auto CKA Practice (Batch 12)
category: CKA
duration: 120 mins
---

# Auto CKA Practice (Batch 12)

This is an auto-generated exam to provide infinite practice questions.

# Task 1: Scale Deployment
Create a deployment named `resource-17vhlj` in namespace `kube-system` using image `redis`.
Scale it to `4` replicas.
Then, perform a rolling update to image `redis:latest`.

```verify
kubectl get deploy resource-17vhlj -n kube-system -o jsonpath='{.spec.replicas}' | grep 4
kubectl get deploy resource-17vhlj -n kube-system -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "redis:latest"
```


# Task 2: Scale Deployment
Create a deployment named `resource-cwmn7v` in namespace `prod` using image `mysql`.
Scale it to `5` replicas.
Then, perform a rolling update to image `mysql:latest`.

```verify
kubectl get deploy resource-cwmn7v -n prod -o jsonpath='{.spec.replicas}' | grep 5
kubectl get deploy resource-cwmn7v -n prod -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "mysql:latest"
```


# Task 3: Node Maintenance
Mark node `node-1` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.

```verify
# Check if node exists and is ready (was uncordoned)
kubectl get node node-1 --no-headers | grep Ready | grep -v SchedulingDisabled
```


# Task 4: Node Maintenance
Mark node `node-2` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.

```verify
# Check if node exists and is ready (was uncordoned)
kubectl get node node-2 --no-headers | grep Ready | grep -v SchedulingDisabled
```


# Task 5: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-gma3wm` in namespace `staging`.
Request `5Gi` storage with access mode `ReadOnlyMany`.

```verify
kubectl get pvc resource-gma3wm -n staging -o jsonpath='{.spec.resources.requests.storage}' | grep 5Gi
kubectl get pvc resource-gma3wm -n staging -o jsonpath='{.spec.accessModes[0]}' | grep ReadOnlyMany
```


# Task 6: Expose Service
Expose the deployment `resource-7erfph-dep` as a Service named `resource-7erfph` in namespace `backend`.
The service should listen on port `7580` and be of type `NodePort`.

```verify
kubectl get svc resource-7erfph -n backend -o jsonpath='{.spec.ports[0].port}' | grep 7580
kubectl get svc resource-7erfph -n backend -o jsonpath='{.spec.type}' | grep NodePort
```


# Task 7: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-oiwtkb` in namespace `staging`.
Request `2Gi` storage with access mode `ReadWriteMany`.

```verify
kubectl get pvc resource-oiwtkb -n staging -o jsonpath='{.spec.resources.requests.storage}' | grep 2Gi
kubectl get pvc resource-oiwtkb -n staging -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteMany
```


# Task 8: Node Maintenance
Mark node `node-4` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.

```verify
# Check if node exists and is ready (was uncordoned)
kubectl get node node-4 --no-headers | grep Ready | grep -v SchedulingDisabled
```


# Task 9: Node Maintenance
Mark node `node-2` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.

```verify
# Check if node exists and is ready (was uncordoned)
kubectl get node node-2 --no-headers | grep Ready | grep -v SchedulingDisabled
```


# Task 10: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-5hpmkg` in namespace `default`.
Request `5Gi` storage with access mode `ReadOnlyMany`.

```verify
kubectl get pvc resource-5hpmkg -n default -o jsonpath='{.spec.resources.requests.storage}' | grep 5Gi
kubectl get pvc resource-5hpmkg -n default -o jsonpath='{.spec.accessModes[0]}' | grep ReadOnlyMany
```


# Task 11: Node Maintenance
Mark node `node-4` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.

```verify
# Check if node exists and is ready (was uncordoned)
kubectl get node node-4 --no-headers | grep Ready | grep -v SchedulingDisabled
```


# Task 12: Scale Deployment
Create a deployment named `resource-40bvo7` in namespace `test` using image `httpd`.
Scale it to `5` replicas.
Then, perform a rolling update to image `httpd:latest`.

```verify
kubectl get deploy resource-40bvo7 -n test -o jsonpath='{.spec.replicas}' | grep 5
kubectl get deploy resource-40bvo7 -n test -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "httpd:latest"
```


# Task 13: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-dbbocc` in namespace `frontend`.
Request `2Gi` storage with access mode `ReadOnlyMany`.

```verify
kubectl get pvc resource-dbbocc -n frontend -o jsonpath='{.spec.resources.requests.storage}' | grep 2Gi
kubectl get pvc resource-dbbocc -n frontend -o jsonpath='{.spec.accessModes[0]}' | grep ReadOnlyMany
```


# Task 14: Scale Deployment
Create a deployment named `resource-k061mu` in namespace `frontend` using image `node:14`.
Scale it to `5` replicas.
Then, perform a rolling update to image `node:14:latest`.

```verify
kubectl get deploy resource-k061mu -n frontend -o jsonpath='{.spec.replicas}' | grep 5
kubectl get deploy resource-k061mu -n frontend -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "node:14:latest"
```


# Task 15: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-4p9bp1` in namespace `default`.
Request `5Gi` storage with access mode `ReadWriteOnce`.

```verify
kubectl get pvc resource-4p9bp1 -n default -o jsonpath='{.spec.resources.requests.storage}' | grep 5Gi
kubectl get pvc resource-4p9bp1 -n default -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteOnce
```


# Task 16: Node Maintenance
Mark node `node-5` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.

```verify
# Check if node exists and is ready (was uncordoned)
kubectl get node node-5 --no-headers | grep Ready | grep -v SchedulingDisabled
```


# Task 17: Scale Deployment
Create a deployment named `resource-cabt3s` in namespace `kube-system` using image `mysql`.
Scale it to `3` replicas.
Then, perform a rolling update to image `mysql:latest`.

```verify
kubectl get deploy resource-cabt3s -n kube-system -o jsonpath='{.spec.replicas}' | grep 3
kubectl get deploy resource-cabt3s -n kube-system -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "mysql:latest"
```


# Task 18: Node Maintenance
Mark node `node-1` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.

```verify
# Check if node exists and is ready (was uncordoned)
kubectl get node node-1 --no-headers | grep Ready | grep -v SchedulingDisabled
```


# Task 19: Expose Service
Expose the deployment `resource-tls0c9-dep` as a Service named `resource-tls0c9` in namespace `test`.
The service should listen on port `5554` and be of type `ClusterIP`.

```verify
kubectl get svc resource-tls0c9 -n test -o jsonpath='{.spec.ports[0].port}' | grep 5554
kubectl get svc resource-tls0c9 -n test -o jsonpath='{.spec.type}' | grep ClusterIP
```


# Task 20: Create a Pod
Create a pod named `resource-u47m7s` in namespace `default` using image `memcached`.
Ensure it has a label `env=prod`.

```verify
kubectl get pod resource-u47m7s -n default --no-headers | grep Running
kubectl get pod resource-u47m7s -n default -o jsonpath='{.metadata.labels.env}' | grep prod
```


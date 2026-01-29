---
id: auto-cka-13
title: Auto CKA Practice (Batch 13)
category: CKA
duration: 120 mins
---

# Auto CKA Practice (Batch 13)

This is an auto-generated exam to provide infinite practice questions.

# Task 1: Expose Service
Expose the deployment `resource-ks042p-dep` as a Service named `resource-ks042p` in namespace `dev`.
The service should listen on port `8996` and be of type `ClusterIP`.

```verify
kubectl get svc resource-ks042p -n dev -o jsonpath='{.spec.ports[0].port}' | grep 8996
kubectl get svc resource-ks042p -n dev -o jsonpath='{.spec.type}' | grep ClusterIP
```


# Task 2: Expose Service
Expose the deployment `resource-spl5wt-dep` as a Service named `resource-spl5wt` in namespace `dev`.
The service should listen on port `3157` and be of type `NodePort`.

```verify
kubectl get svc resource-spl5wt -n dev -o jsonpath='{.spec.ports[0].port}' | grep 3157
kubectl get svc resource-spl5wt -n dev -o jsonpath='{.spec.type}' | grep NodePort
```


# Task 3: Scale Deployment
Create a deployment named `resource-63gksr` in namespace `frontend` using image `nginx`.
Scale it to `5` replicas.
Then, perform a rolling update to image `nginx:latest`.

```verify
kubectl get deploy resource-63gksr -n frontend -o jsonpath='{.spec.replicas}' | grep 5
kubectl get deploy resource-63gksr -n frontend -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "nginx:latest"
```


# Task 4: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-hbs7kd` in namespace `default`.
Request `100Mi` storage with access mode `ReadWriteOnce`.

```verify
kubectl get pvc resource-hbs7kd -n default -o jsonpath='{.spec.resources.requests.storage}' | grep 100Mi
kubectl get pvc resource-hbs7kd -n default -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteOnce
```


# Task 5: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-v20vjg` in namespace `staging`.
Request `100Mi` storage with access mode `ReadWriteOnce`.

```verify
kubectl get pvc resource-v20vjg -n staging -o jsonpath='{.spec.resources.requests.storage}' | grep 100Mi
kubectl get pvc resource-v20vjg -n staging -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteOnce
```


# Task 6: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-4u73c7` in namespace `dev`.
Request `1Gi` storage with access mode `ReadWriteMany`.

```verify
kubectl get pvc resource-4u73c7 -n dev -o jsonpath='{.spec.resources.requests.storage}' | grep 1Gi
kubectl get pvc resource-4u73c7 -n dev -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteMany
```


# Task 7: Expose Service
Expose the deployment `resource-ulrs06-dep` as a Service named `resource-ulrs06` in namespace `staging`.
The service should listen on port `5446` and be of type `NodePort`.

```verify
kubectl get svc resource-ulrs06 -n staging -o jsonpath='{.spec.ports[0].port}' | grep 5446
kubectl get svc resource-ulrs06 -n staging -o jsonpath='{.spec.type}' | grep NodePort
```


# Task 8: Expose Service
Expose the deployment `resource-uyduzx-dep` as a Service named `resource-uyduzx` in namespace `test`.
The service should listen on port `4181` and be of type `NodePort`.

```verify
kubectl get svc resource-uyduzx -n test -o jsonpath='{.spec.ports[0].port}' | grep 4181
kubectl get svc resource-uyduzx -n test -o jsonpath='{.spec.type}' | grep NodePort
```


# Task 9: Scale Deployment
Create a deployment named `resource-anw5j4` in namespace `dev` using image `postgres`.
Scale it to `2` replicas.
Then, perform a rolling update to image `postgres:latest`.

```verify
kubectl get deploy resource-anw5j4 -n dev -o jsonpath='{.spec.replicas}' | grep 2
kubectl get deploy resource-anw5j4 -n dev -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "postgres:latest"
```


# Task 10: Node Maintenance
Mark node `node-5` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.

```verify
# Check if node exists and is ready (was uncordoned)
kubectl get node node-5 --no-headers | grep Ready | grep -v SchedulingDisabled
```


# Task 11: Scale Deployment
Create a deployment named `resource-ga6cqs` in namespace `default` using image `busybox`.
Scale it to `2` replicas.
Then, perform a rolling update to image `busybox:latest`.

```verify
kubectl get deploy resource-ga6cqs -n default -o jsonpath='{.spec.replicas}' | grep 2
kubectl get deploy resource-ga6cqs -n default -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "busybox:latest"
```


# Task 12: Create a Pod
Create a pod named `resource-ultuyu` in namespace `dev` using image `mysql`.
Ensure it has a label `release=stable`.

```verify
kubectl get pod resource-ultuyu -n dev --no-headers | grep Running
kubectl get pod resource-ultuyu -n dev -o jsonpath='{.metadata.labels.release}' | grep stable
```


# Task 13: Node Maintenance
Mark node `node-2` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.

```verify
# Check if node exists and is ready (was uncordoned)
kubectl get node node-2 --no-headers | grep Ready | grep -v SchedulingDisabled
```


# Task 14: Node Maintenance
Mark node `node-1` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.

```verify
# Check if node exists and is ready (was uncordoned)
kubectl get node node-1 --no-headers | grep Ready | grep -v SchedulingDisabled
```


# Task 15: Expose Service
Expose the deployment `resource-zpr5p1-dep` as a Service named `resource-zpr5p1` in namespace `test`.
The service should listen on port `6998` and be of type `ClusterIP`.

```verify
kubectl get svc resource-zpr5p1 -n test -o jsonpath='{.spec.ports[0].port}' | grep 6998
kubectl get svc resource-zpr5p1 -n test -o jsonpath='{.spec.type}' | grep ClusterIP
```


# Task 16: Scale Deployment
Create a deployment named `resource-wy47p9` in namespace `frontend` using image `mysql`.
Scale it to `5` replicas.
Then, perform a rolling update to image `mysql:latest`.

```verify
kubectl get deploy resource-wy47p9 -n frontend -o jsonpath='{.spec.replicas}' | grep 5
kubectl get deploy resource-wy47p9 -n frontend -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "mysql:latest"
```


# Task 17: Expose Service
Expose the deployment `resource-qcz7ck-dep` as a Service named `resource-qcz7ck` in namespace `prod`.
The service should listen on port `7095` and be of type `ClusterIP`.

```verify
kubectl get svc resource-qcz7ck -n prod -o jsonpath='{.spec.ports[0].port}' | grep 7095
kubectl get svc resource-qcz7ck -n prod -o jsonpath='{.spec.type}' | grep ClusterIP
```


# Task 18: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-5jefte` in namespace `default`.
Request `1Gi` storage with access mode `ReadWriteMany`.

```verify
kubectl get pvc resource-5jefte -n default -o jsonpath='{.spec.resources.requests.storage}' | grep 1Gi
kubectl get pvc resource-5jefte -n default -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteMany
```


# Task 19: Node Maintenance
Mark node `node-5` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.

```verify
# Check if node exists and is ready (was uncordoned)
kubectl get node node-5 --no-headers | grep Ready | grep -v SchedulingDisabled
```


# Task 20: Expose Service
Expose the deployment `resource-pi7bd7-dep` as a Service named `resource-pi7bd7` in namespace `test`.
The service should listen on port `4164` and be of type `NodePort`.

```verify
kubectl get svc resource-pi7bd7 -n test -o jsonpath='{.spec.ports[0].port}' | grep 4164
kubectl get svc resource-pi7bd7 -n test -o jsonpath='{.spec.type}' | grep NodePort
```


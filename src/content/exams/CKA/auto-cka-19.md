---
id: auto-cka-19
title: Auto CKA Practice (Batch 19)
category: CKA
duration: 120 mins
---

# Auto CKA Practice (Batch 19)

This is an auto-generated exam to provide infinite practice questions.

# Task 1: Expose Service
Expose the deployment `resource-3bnipl-dep` as a Service named `resource-3bnipl` in namespace `staging`.
The service should listen on port `8383` and be of type `NodePort`.

```verify
kubectl get svc resource-3bnipl -n staging -o jsonpath='{.spec.ports[0].port}' | grep 8383
kubectl get svc resource-3bnipl -n staging -o jsonpath='{.spec.type}' | grep NodePort
```


# Task 2: Create a Pod
Create a pod named `resource-hlpyj0` in namespace `default` using image `redis`.
Ensure it has a label `app=web`.

```verify
kubectl get pod resource-hlpyj0 -n default --no-headers | grep Running
kubectl get pod resource-hlpyj0 -n default -o jsonpath='{.metadata.labels.app}' | grep web
```


# Task 3: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-29jyqi` in namespace `frontend`.
Request `10Gi` storage with access mode `ReadWriteMany`.

```verify
kubectl get pvc resource-29jyqi -n frontend -o jsonpath='{.spec.resources.requests.storage}' | grep 10Gi
kubectl get pvc resource-29jyqi -n frontend -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteMany
```


# Task 4: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-u7pth9` in namespace `default`.
Request `5Gi` storage with access mode `ReadWriteOnce`.

```verify
kubectl get pvc resource-u7pth9 -n default -o jsonpath='{.spec.resources.requests.storage}' | grep 5Gi
kubectl get pvc resource-u7pth9 -n default -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteOnce
```


# Task 5: Node Maintenance
Mark node `node-2` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.

```verify
# Check if node exists and is ready (was uncordoned)
kubectl get node node-2 --no-headers | grep Ready | grep -v SchedulingDisabled
```


# Task 6: Scale Deployment
Create a deployment named `resource-opgo9w` in namespace `kube-system` using image `nginx`.
Scale it to `5` replicas.
Then, perform a rolling update to image `nginx:latest`.

```verify
kubectl get deploy resource-opgo9w -n kube-system -o jsonpath='{.spec.replicas}' | grep 5
kubectl get deploy resource-opgo9w -n kube-system -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "nginx:latest"
```


# Task 7: Node Maintenance
Mark node `node-3` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.

```verify
# Check if node exists and is ready (was uncordoned)
kubectl get node node-3 --no-headers | grep Ready | grep -v SchedulingDisabled
```


# Task 8: Expose Service
Expose the deployment `resource-llzz48-dep` as a Service named `resource-llzz48` in namespace `frontend`.
The service should listen on port `5379` and be of type `NodePort`.

```verify
kubectl get svc resource-llzz48 -n frontend -o jsonpath='{.spec.ports[0].port}' | grep 5379
kubectl get svc resource-llzz48 -n frontend -o jsonpath='{.spec.type}' | grep NodePort
```


# Task 9: Expose Service
Expose the deployment `resource-qbsma1-dep` as a Service named `resource-qbsma1` in namespace `kube-system`.
The service should listen on port `6148` and be of type `ClusterIP`.

```verify
kubectl get svc resource-qbsma1 -n kube-system -o jsonpath='{.spec.ports[0].port}' | grep 6148
kubectl get svc resource-qbsma1 -n kube-system -o jsonpath='{.spec.type}' | grep ClusterIP
```


# Task 10: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-9knvrj` in namespace `staging`.
Request `10Gi` storage with access mode `ReadOnlyMany`.

```verify
kubectl get pvc resource-9knvrj -n staging -o jsonpath='{.spec.resources.requests.storage}' | grep 10Gi
kubectl get pvc resource-9knvrj -n staging -o jsonpath='{.spec.accessModes[0]}' | grep ReadOnlyMany
```


# Task 11: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-8383pb` in namespace `default`.
Request `5Gi` storage with access mode `ReadWriteOnce`.

```verify
kubectl get pvc resource-8383pb -n default -o jsonpath='{.spec.resources.requests.storage}' | grep 5Gi
kubectl get pvc resource-8383pb -n default -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteOnce
```


# Task 12: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-wgw0w4` in namespace `prod`.
Request `1Gi` storage with access mode `ReadWriteMany`.

```verify
kubectl get pvc resource-wgw0w4 -n prod -o jsonpath='{.spec.resources.requests.storage}' | grep 1Gi
kubectl get pvc resource-wgw0w4 -n prod -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteMany
```


# Task 13: Scale Deployment
Create a deployment named `resource-6cqbg4` in namespace `dev` using image `mysql`.
Scale it to `4` replicas.
Then, perform a rolling update to image `mysql:latest`.

```verify
kubectl get deploy resource-6cqbg4 -n dev -o jsonpath='{.spec.replicas}' | grep 4
kubectl get deploy resource-6cqbg4 -n dev -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "mysql:latest"
```


# Task 14: Expose Service
Expose the deployment `resource-svxqi5-dep` as a Service named `resource-svxqi5` in namespace `frontend`.
The service should listen on port `4000` and be of type `ClusterIP`.

```verify
kubectl get svc resource-svxqi5 -n frontend -o jsonpath='{.spec.ports[0].port}' | grep 4000
kubectl get svc resource-svxqi5 -n frontend -o jsonpath='{.spec.type}' | grep ClusterIP
```


# Task 15: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-n4w82j` in namespace `test`.
Request `1Gi` storage with access mode `ReadWriteOnce`.

```verify
kubectl get pvc resource-n4w82j -n test -o jsonpath='{.spec.resources.requests.storage}' | grep 1Gi
kubectl get pvc resource-n4w82j -n test -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteOnce
```


# Task 16: Expose Service
Expose the deployment `resource-df4crt-dep` as a Service named `resource-df4crt` in namespace `prod`.
The service should listen on port `8782` and be of type `ClusterIP`.

```verify
kubectl get svc resource-df4crt -n prod -o jsonpath='{.spec.ports[0].port}' | grep 8782
kubectl get svc resource-df4crt -n prod -o jsonpath='{.spec.type}' | grep ClusterIP
```


# Task 17: Expose Service
Expose the deployment `resource-sr13op-dep` as a Service named `resource-sr13op` in namespace `staging`.
The service should listen on port `3818` and be of type `NodePort`.

```verify
kubectl get svc resource-sr13op -n staging -o jsonpath='{.spec.ports[0].port}' | grep 3818
kubectl get svc resource-sr13op -n staging -o jsonpath='{.spec.type}' | grep NodePort
```


# Task 18: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-lp7y8g` in namespace `frontend`.
Request `100Mi` storage with access mode `ReadWriteMany`.

```verify
kubectl get pvc resource-lp7y8g -n frontend -o jsonpath='{.spec.resources.requests.storage}' | grep 100Mi
kubectl get pvc resource-lp7y8g -n frontend -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteMany
```


# Task 19: Scale Deployment
Create a deployment named `resource-mxrnww` in namespace `default` using image `httpd`.
Scale it to `3` replicas.
Then, perform a rolling update to image `httpd:latest`.

```verify
kubectl get deploy resource-mxrnww -n default -o jsonpath='{.spec.replicas}' | grep 3
kubectl get deploy resource-mxrnww -n default -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "httpd:latest"
```


# Task 20: Scale Deployment
Create a deployment named `resource-9wo3n0` in namespace `test` using image `httpd`.
Scale it to `2` replicas.
Then, perform a rolling update to image `httpd:latest`.

```verify
kubectl get deploy resource-9wo3n0 -n test -o jsonpath='{.spec.replicas}' | grep 2
kubectl get deploy resource-9wo3n0 -n test -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "httpd:latest"
```


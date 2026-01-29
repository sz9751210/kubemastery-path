---
id: auto-cka-14
title: Auto CKA Practice (Batch 14)
category: CKA
duration: 120 mins
---

# Auto CKA Practice (Batch 14)

This is an auto-generated exam to provide infinite practice questions.

# Task 1: Scale Deployment
Create a deployment named `resource-309hke` in namespace `backend` using image `nginx`.
Scale it to `2` replicas.
Then, perform a rolling update to image `nginx:latest`.

```verify
kubectl get deploy resource-309hke -n backend -o jsonpath='{.spec.replicas}' | grep 2
kubectl get deploy resource-309hke -n backend -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "nginx:latest"
```


# Task 2: Scale Deployment
Create a deployment named `resource-crygy8` in namespace `backend` using image `node:14`.
Scale it to `3` replicas.
Then, perform a rolling update to image `node:14:latest`.

```verify
kubectl get deploy resource-crygy8 -n backend -o jsonpath='{.spec.replicas}' | grep 3
kubectl get deploy resource-crygy8 -n backend -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "node:14:latest"
```


# Task 3: Expose Service
Expose the deployment `resource-i7wfbp-dep` as a Service named `resource-i7wfbp` in namespace `default`.
The service should listen on port `6276` and be of type `ClusterIP`.

```verify
kubectl get svc resource-i7wfbp -n default -o jsonpath='{.spec.ports[0].port}' | grep 6276
kubectl get svc resource-i7wfbp -n default -o jsonpath='{.spec.type}' | grep ClusterIP
```


# Task 4: Scale Deployment
Create a deployment named `resource-dzjmpc` in namespace `default` using image `httpd`.
Scale it to `2` replicas.
Then, perform a rolling update to image `httpd:latest`.

```verify
kubectl get deploy resource-dzjmpc -n default -o jsonpath='{.spec.replicas}' | grep 2
kubectl get deploy resource-dzjmpc -n default -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "httpd:latest"
```


# Task 5: Scale Deployment
Create a deployment named `resource-updi4s` in namespace `test` using image `node:14`.
Scale it to `4` replicas.
Then, perform a rolling update to image `node:14:latest`.

```verify
kubectl get deploy resource-updi4s -n test -o jsonpath='{.spec.replicas}' | grep 4
kubectl get deploy resource-updi4s -n test -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "node:14:latest"
```


# Task 6: Scale Deployment
Create a deployment named `resource-kda434` in namespace `frontend` using image `redis`.
Scale it to `4` replicas.
Then, perform a rolling update to image `redis:latest`.

```verify
kubectl get deploy resource-kda434 -n frontend -o jsonpath='{.spec.replicas}' | grep 4
kubectl get deploy resource-kda434 -n frontend -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "redis:latest"
```


# Task 7: Create a Pod
Create a pod named `resource-24tlx4` in namespace `staging` using image `httpd`.
Ensure it has a label `env=prod`.

```verify
kubectl get pod resource-24tlx4 -n staging --no-headers | grep Running
kubectl get pod resource-24tlx4 -n staging -o jsonpath='{.metadata.labels.env}' | grep prod
```


# Task 8: Create a Pod
Create a pod named `resource-a9tryg` in namespace `default` using image `mysql`.
Ensure it has a label `app=web`.

```verify
kubectl get pod resource-a9tryg -n default --no-headers | grep Running
kubectl get pod resource-a9tryg -n default -o jsonpath='{.metadata.labels.app}' | grep web
```


# Task 9: Scale Deployment
Create a deployment named `resource-9y9iw8` in namespace `staging` using image `redis`.
Scale it to `4` replicas.
Then, perform a rolling update to image `redis:latest`.

```verify
kubectl get deploy resource-9y9iw8 -n staging -o jsonpath='{.spec.replicas}' | grep 4
kubectl get deploy resource-9y9iw8 -n staging -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "redis:latest"
```


# Task 10: Node Maintenance
Mark node `node-3` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.

```verify
# Check if node exists and is ready (was uncordoned)
kubectl get node node-3 --no-headers | grep Ready | grep -v SchedulingDisabled
```


# Task 11: Scale Deployment
Create a deployment named `resource-8e8u74` in namespace `staging` using image `mysql`.
Scale it to `5` replicas.
Then, perform a rolling update to image `mysql:latest`.

```verify
kubectl get deploy resource-8e8u74 -n staging -o jsonpath='{.spec.replicas}' | grep 5
kubectl get deploy resource-8e8u74 -n staging -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "mysql:latest"
```


# Task 12: Scale Deployment
Create a deployment named `resource-cs92qg` in namespace `prod` using image `httpd`.
Scale it to `2` replicas.
Then, perform a rolling update to image `httpd:latest`.

```verify
kubectl get deploy resource-cs92qg -n prod -o jsonpath='{.spec.replicas}' | grep 2
kubectl get deploy resource-cs92qg -n prod -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "httpd:latest"
```


# Task 13: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-71i94w` in namespace `test`.
Request `100Mi` storage with access mode `ReadOnlyMany`.

```verify
kubectl get pvc resource-71i94w -n test -o jsonpath='{.spec.resources.requests.storage}' | grep 100Mi
kubectl get pvc resource-71i94w -n test -o jsonpath='{.spec.accessModes[0]}' | grep ReadOnlyMany
```


# Task 14: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-1qfb37` in namespace `default`.
Request `5Gi` storage with access mode `ReadOnlyMany`.

```verify
kubectl get pvc resource-1qfb37 -n default -o jsonpath='{.spec.resources.requests.storage}' | grep 5Gi
kubectl get pvc resource-1qfb37 -n default -o jsonpath='{.spec.accessModes[0]}' | grep ReadOnlyMany
```


# Task 15: Expose Service
Expose the deployment `resource-3pfs1n-dep` as a Service named `resource-3pfs1n` in namespace `staging`.
The service should listen on port `8907` and be of type `ClusterIP`.

```verify
kubectl get svc resource-3pfs1n -n staging -o jsonpath='{.spec.ports[0].port}' | grep 8907
kubectl get svc resource-3pfs1n -n staging -o jsonpath='{.spec.type}' | grep ClusterIP
```


# Task 16: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-kzzo28` in namespace `prod`.
Request `100Mi` storage with access mode `ReadWriteMany`.

```verify
kubectl get pvc resource-kzzo28 -n prod -o jsonpath='{.spec.resources.requests.storage}' | grep 100Mi
kubectl get pvc resource-kzzo28 -n prod -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteMany
```


# Task 17: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-ggbnp5` in namespace `test`.
Request `5Gi` storage with access mode `ReadOnlyMany`.

```verify
kubectl get pvc resource-ggbnp5 -n test -o jsonpath='{.spec.resources.requests.storage}' | grep 5Gi
kubectl get pvc resource-ggbnp5 -n test -o jsonpath='{.spec.accessModes[0]}' | grep ReadOnlyMany
```


# Task 18: Expose Service
Expose the deployment `resource-t1wcrx-dep` as a Service named `resource-t1wcrx` in namespace `backend`.
The service should listen on port `5612` and be of type `NodePort`.

```verify
kubectl get svc resource-t1wcrx -n backend -o jsonpath='{.spec.ports[0].port}' | grep 5612
kubectl get svc resource-t1wcrx -n backend -o jsonpath='{.spec.type}' | grep NodePort
```


# Task 19: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-uqjnuz` in namespace `dev`.
Request `5Gi` storage with access mode `ReadOnlyMany`.

```verify
kubectl get pvc resource-uqjnuz -n dev -o jsonpath='{.spec.resources.requests.storage}' | grep 5Gi
kubectl get pvc resource-uqjnuz -n dev -o jsonpath='{.spec.accessModes[0]}' | grep ReadOnlyMany
```


# Task 20: Node Maintenance
Mark node `node-1` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.

```verify
# Check if node exists and is ready (was uncordoned)
kubectl get node node-1 --no-headers | grep Ready | grep -v SchedulingDisabled
```


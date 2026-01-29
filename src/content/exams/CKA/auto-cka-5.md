---
id: auto-cka-5
title: Auto CKA Practice (Batch 5)
category: CKA
duration: 120 mins
---

# Auto CKA Practice (Batch 5)

This is an auto-generated exam to provide infinite practice questions.

# Task 1: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-q0jcgy` in namespace `frontend`.
Request `1Gi` storage with access mode `ReadOnlyMany`.

```verify
kubectl get pvc resource-q0jcgy -n frontend -o jsonpath='{.spec.resources.requests.storage}' | grep 1Gi
kubectl get pvc resource-q0jcgy -n frontend -o jsonpath='{.spec.accessModes[0]}' | grep ReadOnlyMany
```


# Task 2: Scale Deployment
Create a deployment named `resource-n4s31z` in namespace `staging` using image `node:14`.
Scale it to `5` replicas.
Then, perform a rolling update to image `node:14:latest`.

```verify
kubectl get deploy resource-n4s31z -n staging -o jsonpath='{.spec.replicas}' | grep 5
kubectl get deploy resource-n4s31z -n staging -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "node:14:latest"
```


# Task 3: Node Maintenance
Mark node `node-4` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.

```verify
# Check if node exists and is ready (was uncordoned)
kubectl get node node-4 --no-headers | grep Ready | grep -v SchedulingDisabled
```


# Task 4: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-zqmpa8` in namespace `test`.
Request `10Gi` storage with access mode `ReadWriteMany`.

```verify
kubectl get pvc resource-zqmpa8 -n test -o jsonpath='{.spec.resources.requests.storage}' | grep 10Gi
kubectl get pvc resource-zqmpa8 -n test -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteMany
```


# Task 5: Create a Pod
Create a pod named `resource-7arezw` in namespace `backend` using image `httpd`.
Ensure it has a label `app=web`.

```verify
kubectl get pod resource-7arezw -n backend --no-headers | grep Running
kubectl get pod resource-7arezw -n backend -o jsonpath='{.metadata.labels.app}' | grep web
```


# Task 6: Create a Pod
Create a pod named `resource-1oyjr0` in namespace `prod` using image `httpd`.
Ensure it has a label `tier=frontend`.

```verify
kubectl get pod resource-1oyjr0 -n prod --no-headers | grep Running
kubectl get pod resource-1oyjr0 -n prod -o jsonpath='{.metadata.labels.tier}' | grep frontend
```


# Task 7: Scale Deployment
Create a deployment named `resource-o50g7f` in namespace `dev` using image `nginx`.
Scale it to `3` replicas.
Then, perform a rolling update to image `nginx:latest`.

```verify
kubectl get deploy resource-o50g7f -n dev -o jsonpath='{.spec.replicas}' | grep 3
kubectl get deploy resource-o50g7f -n dev -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "nginx:latest"
```


# Task 8: Scale Deployment
Create a deployment named `resource-p738pe` in namespace `staging` using image `mysql`.
Scale it to `5` replicas.
Then, perform a rolling update to image `mysql:latest`.

```verify
kubectl get deploy resource-p738pe -n staging -o jsonpath='{.spec.replicas}' | grep 5
kubectl get deploy resource-p738pe -n staging -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "mysql:latest"
```


# Task 9: Scale Deployment
Create a deployment named `resource-gwxthh` in namespace `default` using image `httpd`.
Scale it to `2` replicas.
Then, perform a rolling update to image `httpd:latest`.

```verify
kubectl get deploy resource-gwxthh -n default -o jsonpath='{.spec.replicas}' | grep 2
kubectl get deploy resource-gwxthh -n default -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "httpd:latest"
```


# Task 10: Create a Pod
Create a pod named `resource-0hxjgq` in namespace `kube-system` using image `mysql`.
Ensure it has a label `env=prod`.

```verify
kubectl get pod resource-0hxjgq -n kube-system --no-headers | grep Running
kubectl get pod resource-0hxjgq -n kube-system -o jsonpath='{.metadata.labels.env}' | grep prod
```


# Task 11: Expose Service
Expose the deployment `resource-guzdpy-dep` as a Service named `resource-guzdpy` in namespace `test`.
The service should listen on port `4589` and be of type `ClusterIP`.

```verify
kubectl get svc resource-guzdpy -n test -o jsonpath='{.spec.ports[0].port}' | grep 4589
kubectl get svc resource-guzdpy -n test -o jsonpath='{.spec.type}' | grep ClusterIP
```


# Task 12: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-pdf7gy` in namespace `prod`.
Request `1Gi` storage with access mode `ReadWriteMany`.

```verify
kubectl get pvc resource-pdf7gy -n prod -o jsonpath='{.spec.resources.requests.storage}' | grep 1Gi
kubectl get pvc resource-pdf7gy -n prod -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteMany
```


# Task 13: Create a Pod
Create a pod named `resource-1zgem7` in namespace `backend` using image `redis`.
Ensure it has a label `team=blue`.

```verify
kubectl get pod resource-1zgem7 -n backend --no-headers | grep Running
kubectl get pod resource-1zgem7 -n backend -o jsonpath='{.metadata.labels.team}' | grep blue
```


# Task 14: Create a Pod
Create a pod named `resource-nkvvhn` in namespace `default` using image `mysql`.
Ensure it has a label `tier=frontend`.

```verify
kubectl get pod resource-nkvvhn -n default --no-headers | grep Running
kubectl get pod resource-nkvvhn -n default -o jsonpath='{.metadata.labels.tier}' | grep frontend
```


# Task 15: Expose Service
Expose the deployment `resource-99pmko-dep` as a Service named `resource-99pmko` in namespace `kube-system`.
The service should listen on port `3158` and be of type `NodePort`.

```verify
kubectl get svc resource-99pmko -n kube-system -o jsonpath='{.spec.ports[0].port}' | grep 3158
kubectl get svc resource-99pmko -n kube-system -o jsonpath='{.spec.type}' | grep NodePort
```


# Task 16: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-l3sez5` in namespace `dev`.
Request `5Gi` storage with access mode `ReadWriteOnce`.

```verify
kubectl get pvc resource-l3sez5 -n dev -o jsonpath='{.spec.resources.requests.storage}' | grep 5Gi
kubectl get pvc resource-l3sez5 -n dev -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteOnce
```


# Task 17: Node Maintenance
Mark node `node-4` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.

```verify
# Check if node exists and is ready (was uncordoned)
kubectl get node node-4 --no-headers | grep Ready | grep -v SchedulingDisabled
```


# Task 18: Expose Service
Expose the deployment `resource-u5xbn5-dep` as a Service named `resource-u5xbn5` in namespace `default`.
The service should listen on port `6759` and be of type `ClusterIP`.

```verify
kubectl get svc resource-u5xbn5 -n default -o jsonpath='{.spec.ports[0].port}' | grep 6759
kubectl get svc resource-u5xbn5 -n default -o jsonpath='{.spec.type}' | grep ClusterIP
```


# Task 19: Create a Pod
Create a pod named `resource-4raqm7` in namespace `frontend` using image `redis`.
Ensure it has a label `app=web`.

```verify
kubectl get pod resource-4raqm7 -n frontend --no-headers | grep Running
kubectl get pod resource-4raqm7 -n frontend -o jsonpath='{.metadata.labels.app}' | grep web
```


# Task 20: Create a Pod
Create a pod named `resource-g770bu` in namespace `frontend` using image `postgres`.
Ensure it has a label `tier=frontend`.

```verify
kubectl get pod resource-g770bu -n frontend --no-headers | grep Running
kubectl get pod resource-g770bu -n frontend -o jsonpath='{.metadata.labels.tier}' | grep frontend
```


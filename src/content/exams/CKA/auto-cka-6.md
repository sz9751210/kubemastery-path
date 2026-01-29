---
id: auto-cka-6
title: Auto CKA Practice (Batch 6)
category: CKA
duration: 120 mins
---

# Auto CKA Practice (Batch 6)

This is an auto-generated exam to provide infinite practice questions.

# Task 1: Expose Service
Expose the deployment `resource-5hk4zh-dep` as a Service named `resource-5hk4zh` in namespace `test`.
The service should listen on port `5899` and be of type `NodePort`.

```verify
kubectl get svc resource-5hk4zh -n test -o jsonpath='{.spec.ports[0].port}' | grep 5899
kubectl get svc resource-5hk4zh -n test -o jsonpath='{.spec.type}' | grep NodePort
```


# Task 2: Expose Service
Expose the deployment `resource-okw2fg-dep` as a Service named `resource-okw2fg` in namespace `test`.
The service should listen on port `3024` and be of type `ClusterIP`.

```verify
kubectl get svc resource-okw2fg -n test -o jsonpath='{.spec.ports[0].port}' | grep 3024
kubectl get svc resource-okw2fg -n test -o jsonpath='{.spec.type}' | grep ClusterIP
```


# Task 3: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-a6cc80` in namespace `test`.
Request `100Mi` storage with access mode `ReadWriteMany`.

```verify
kubectl get pvc resource-a6cc80 -n test -o jsonpath='{.spec.resources.requests.storage}' | grep 100Mi
kubectl get pvc resource-a6cc80 -n test -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteMany
```


# Task 4: Node Maintenance
Mark node `node-3` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.

```verify
# Check if node exists and is ready (was uncordoned)
kubectl get node node-3 --no-headers | grep Ready | grep -v SchedulingDisabled
```


# Task 5: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-d6m99p` in namespace `kube-system`.
Request `2Gi` storage with access mode `ReadWriteOnce`.

```verify
kubectl get pvc resource-d6m99p -n kube-system -o jsonpath='{.spec.resources.requests.storage}' | grep 2Gi
kubectl get pvc resource-d6m99p -n kube-system -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteOnce
```


# Task 6: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-393720` in namespace `dev`.
Request `1Gi` storage with access mode `ReadWriteOnce`.

```verify
kubectl get pvc resource-393720 -n dev -o jsonpath='{.spec.resources.requests.storage}' | grep 1Gi
kubectl get pvc resource-393720 -n dev -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteOnce
```


# Task 7: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-4x4e32` in namespace `frontend`.
Request `2Gi` storage with access mode `ReadOnlyMany`.

```verify
kubectl get pvc resource-4x4e32 -n frontend -o jsonpath='{.spec.resources.requests.storage}' | grep 2Gi
kubectl get pvc resource-4x4e32 -n frontend -o jsonpath='{.spec.accessModes[0]}' | grep ReadOnlyMany
```


# Task 8: Expose Service
Expose the deployment `resource-xa3jwx-dep` as a Service named `resource-xa3jwx` in namespace `staging`.
The service should listen on port `5776` and be of type `NodePort`.

```verify
kubectl get svc resource-xa3jwx -n staging -o jsonpath='{.spec.ports[0].port}' | grep 5776
kubectl get svc resource-xa3jwx -n staging -o jsonpath='{.spec.type}' | grep NodePort
```


# Task 9: Node Maintenance
Mark node `node-3` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.

```verify
# Check if node exists and is ready (was uncordoned)
kubectl get node node-3 --no-headers | grep Ready | grep -v SchedulingDisabled
```


# Task 10: Expose Service
Expose the deployment `resource-fcu0yz-dep` as a Service named `resource-fcu0yz` in namespace `frontend`.
The service should listen on port `4419` and be of type `NodePort`.

```verify
kubectl get svc resource-fcu0yz -n frontend -o jsonpath='{.spec.ports[0].port}' | grep 4419
kubectl get svc resource-fcu0yz -n frontend -o jsonpath='{.spec.type}' | grep NodePort
```


# Task 11: Create a Pod
Create a pod named `resource-ejqebc` in namespace `kube-system` using image `redis`.
Ensure it has a label `release=stable`.

```verify
kubectl get pod resource-ejqebc -n kube-system --no-headers | grep Running
kubectl get pod resource-ejqebc -n kube-system -o jsonpath='{.metadata.labels.release}' | grep stable
```


# Task 12: Create a Pod
Create a pod named `resource-hi6n24` in namespace `dev` using image `memcached`.
Ensure it has a label `env=prod`.

```verify
kubectl get pod resource-hi6n24 -n dev --no-headers | grep Running
kubectl get pod resource-hi6n24 -n dev -o jsonpath='{.metadata.labels.env}' | grep prod
```


# Task 13: Node Maintenance
Mark node `node-5` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.

```verify
# Check if node exists and is ready (was uncordoned)
kubectl get node node-5 --no-headers | grep Ready | grep -v SchedulingDisabled
```


# Task 14: Expose Service
Expose the deployment `resource-y46rjj-dep` as a Service named `resource-y46rjj` in namespace `prod`.
The service should listen on port `8311` and be of type `ClusterIP`.

```verify
kubectl get svc resource-y46rjj -n prod -o jsonpath='{.spec.ports[0].port}' | grep 8311
kubectl get svc resource-y46rjj -n prod -o jsonpath='{.spec.type}' | grep ClusterIP
```


# Task 15: Expose Service
Expose the deployment `resource-ublwa1-dep` as a Service named `resource-ublwa1` in namespace `test`.
The service should listen on port `4108` and be of type `NodePort`.

```verify
kubectl get svc resource-ublwa1 -n test -o jsonpath='{.spec.ports[0].port}' | grep 4108
kubectl get svc resource-ublwa1 -n test -o jsonpath='{.spec.type}' | grep NodePort
```


# Task 16: Expose Service
Expose the deployment `resource-015gdc-dep` as a Service named `resource-015gdc` in namespace `staging`.
The service should listen on port `8997` and be of type `ClusterIP`.

```verify
kubectl get svc resource-015gdc -n staging -o jsonpath='{.spec.ports[0].port}' | grep 8997
kubectl get svc resource-015gdc -n staging -o jsonpath='{.spec.type}' | grep ClusterIP
```


# Task 17: Create a Pod
Create a pod named `resource-wm9jfy` in namespace `dev` using image `python:3.9`.
Ensure it has a label `app=web`.

```verify
kubectl get pod resource-wm9jfy -n dev --no-headers | grep Running
kubectl get pod resource-wm9jfy -n dev -o jsonpath='{.metadata.labels.app}' | grep web
```


# Task 18: Scale Deployment
Create a deployment named `resource-o5qwbt` in namespace `default` using image `python:3.9`.
Scale it to `4` replicas.
Then, perform a rolling update to image `python:3.9:latest`.

```verify
kubectl get deploy resource-o5qwbt -n default -o jsonpath='{.spec.replicas}' | grep 4
kubectl get deploy resource-o5qwbt -n default -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "python:3.9:latest"
```


# Task 19: Scale Deployment
Create a deployment named `resource-bgvcni` in namespace `kube-system` using image `memcached`.
Scale it to `3` replicas.
Then, perform a rolling update to image `memcached:latest`.

```verify
kubectl get deploy resource-bgvcni -n kube-system -o jsonpath='{.spec.replicas}' | grep 3
kubectl get deploy resource-bgvcni -n kube-system -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "memcached:latest"
```


# Task 20: Scale Deployment
Create a deployment named `resource-kozr9a` in namespace `prod` using image `httpd`.
Scale it to `4` replicas.
Then, perform a rolling update to image `httpd:latest`.

```verify
kubectl get deploy resource-kozr9a -n prod -o jsonpath='{.spec.replicas}' | grep 4
kubectl get deploy resource-kozr9a -n prod -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "httpd:latest"
```


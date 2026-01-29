---
id: auto-cka-4
title: Auto CKA Practice (Batch 4)
category: CKA
duration: 120 mins
---

# Auto CKA Practice (Batch 4)

This is an auto-generated exam to provide infinite practice questions.

# Task 1: Expose Service
Expose the deployment `resource-jbfsyw-dep` as a Service named `resource-jbfsyw` in namespace `dev`.
The service should listen on port `6178` and be of type `ClusterIP`.

```verify
kubectl get svc resource-jbfsyw -n dev -o jsonpath='{.spec.ports[0].port}' | grep 6178
kubectl get svc resource-jbfsyw -n dev -o jsonpath='{.spec.type}' | grep ClusterIP
```


# Task 2: Expose Service
Expose the deployment `resource-8sx9bl-dep` as a Service named `resource-8sx9bl` in namespace `frontend`.
The service should listen on port `5130` and be of type `ClusterIP`.

```verify
kubectl get svc resource-8sx9bl -n frontend -o jsonpath='{.spec.ports[0].port}' | grep 5130
kubectl get svc resource-8sx9bl -n frontend -o jsonpath='{.spec.type}' | grep ClusterIP
```


# Task 3: Create a Pod
Create a pod named `resource-mpgqas` in namespace `prod` using image `redis`.
Ensure it has a label `app=web`.

```verify
kubectl get pod resource-mpgqas -n prod --no-headers | grep Running
kubectl get pod resource-mpgqas -n prod -o jsonpath='{.metadata.labels.app}' | grep web
```


# Task 4: Scale Deployment
Create a deployment named `resource-mqxvtc` in namespace `staging` using image `memcached`.
Scale it to `4` replicas.
Then, perform a rolling update to image `memcached:latest`.

```verify
kubectl get deploy resource-mqxvtc -n staging -o jsonpath='{.spec.replicas}' | grep 4
kubectl get deploy resource-mqxvtc -n staging -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "memcached:latest"
```


# Task 5: Expose Service
Expose the deployment `resource-dvg46n-dep` as a Service named `resource-dvg46n` in namespace `default`.
The service should listen on port `3675` and be of type `NodePort`.

```verify
kubectl get svc resource-dvg46n -n default -o jsonpath='{.spec.ports[0].port}' | grep 3675
kubectl get svc resource-dvg46n -n default -o jsonpath='{.spec.type}' | grep NodePort
```


# Task 6: Create a Pod
Create a pod named `resource-lvgqwr` in namespace `backend` using image `mysql`.
Ensure it has a label `env=prod`.

```verify
kubectl get pod resource-lvgqwr -n backend --no-headers | grep Running
kubectl get pod resource-lvgqwr -n backend -o jsonpath='{.metadata.labels.env}' | grep prod
```


# Task 7: Node Maintenance
Mark node `node-3` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.

```verify
# Check if node exists and is ready (was uncordoned)
kubectl get node node-3 --no-headers | grep Ready | grep -v SchedulingDisabled
```


# Task 8: Create a Pod
Create a pod named `resource-fz8snt` in namespace `default` using image `alpine`.
Ensure it has a label `team=blue`.

```verify
kubectl get pod resource-fz8snt -n default --no-headers | grep Running
kubectl get pod resource-fz8snt -n default -o jsonpath='{.metadata.labels.team}' | grep blue
```


# Task 9: Node Maintenance
Mark node `node-2` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.

```verify
# Check if node exists and is ready (was uncordoned)
kubectl get node node-2 --no-headers | grep Ready | grep -v SchedulingDisabled
```


# Task 10: Create a Pod
Create a pod named `resource-07i67u` in namespace `default` using image `nginx`.
Ensure it has a label `app=web`.

```verify
kubectl get pod resource-07i67u -n default --no-headers | grep Running
kubectl get pod resource-07i67u -n default -o jsonpath='{.metadata.labels.app}' | grep web
```


# Task 11: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-yl15rr` in namespace `staging`.
Request `100Mi` storage with access mode `ReadWriteOnce`.

```verify
kubectl get pvc resource-yl15rr -n staging -o jsonpath='{.spec.resources.requests.storage}' | grep 100Mi
kubectl get pvc resource-yl15rr -n staging -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteOnce
```


# Task 12: Expose Service
Expose the deployment `resource-ebuypv-dep` as a Service named `resource-ebuypv` in namespace `staging`.
The service should listen on port `5985` and be of type `NodePort`.

```verify
kubectl get svc resource-ebuypv -n staging -o jsonpath='{.spec.ports[0].port}' | grep 5985
kubectl get svc resource-ebuypv -n staging -o jsonpath='{.spec.type}' | grep NodePort
```


# Task 13: Expose Service
Expose the deployment `resource-0rn4xz-dep` as a Service named `resource-0rn4xz` in namespace `staging`.
The service should listen on port `4816` and be of type `NodePort`.

```verify
kubectl get svc resource-0rn4xz -n staging -o jsonpath='{.spec.ports[0].port}' | grep 4816
kubectl get svc resource-0rn4xz -n staging -o jsonpath='{.spec.type}' | grep NodePort
```


# Task 14: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-1jfm3h` in namespace `prod`.
Request `5Gi` storage with access mode `ReadWriteOnce`.

```verify
kubectl get pvc resource-1jfm3h -n prod -o jsonpath='{.spec.resources.requests.storage}' | grep 5Gi
kubectl get pvc resource-1jfm3h -n prod -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteOnce
```


# Task 15: Expose Service
Expose the deployment `resource-co8r6l-dep` as a Service named `resource-co8r6l` in namespace `frontend`.
The service should listen on port `5773` and be of type `ClusterIP`.

```verify
kubectl get svc resource-co8r6l -n frontend -o jsonpath='{.spec.ports[0].port}' | grep 5773
kubectl get svc resource-co8r6l -n frontend -o jsonpath='{.spec.type}' | grep ClusterIP
```


# Task 16: Create a Pod
Create a pod named `resource-oesr5h` in namespace `kube-system` using image `nginx`.
Ensure it has a label `env=prod`.

```verify
kubectl get pod resource-oesr5h -n kube-system --no-headers | grep Running
kubectl get pod resource-oesr5h -n kube-system -o jsonpath='{.metadata.labels.env}' | grep prod
```


# Task 17: Node Maintenance
Mark node `node-3` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.

```verify
# Check if node exists and is ready (was uncordoned)
kubectl get node node-3 --no-headers | grep Ready | grep -v SchedulingDisabled
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
Expose the deployment `resource-7zmws7-dep` as a Service named `resource-7zmws7` in namespace `test`.
The service should listen on port `3213` and be of type `ClusterIP`.

```verify
kubectl get svc resource-7zmws7 -n test -o jsonpath='{.spec.ports[0].port}' | grep 3213
kubectl get svc resource-7zmws7 -n test -o jsonpath='{.spec.type}' | grep ClusterIP
```


# Task 20: Expose Service
Expose the deployment `resource-9xmoaf-dep` as a Service named `resource-9xmoaf` in namespace `prod`.
The service should listen on port `7650` and be of type `NodePort`.

```verify
kubectl get svc resource-9xmoaf -n prod -o jsonpath='{.spec.ports[0].port}' | grep 7650
kubectl get svc resource-9xmoaf -n prod -o jsonpath='{.spec.type}' | grep NodePort
```


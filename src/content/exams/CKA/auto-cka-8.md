---
id: auto-cka-8
title: Auto CKA Practice (Batch 8)
category: CKA
duration: 120 mins
---

# Auto CKA Practice (Batch 8)

This is an auto-generated exam to provide infinite practice questions.

# Task 1: Node Maintenance
Mark node `node-1` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.

```verify
# Check if node exists and is ready (was uncordoned)
kubectl get node node-1 --no-headers | grep Ready | grep -v SchedulingDisabled
```


# Task 2: Expose Service
Expose the deployment `resource-b46mil-dep` as a Service named `resource-b46mil` in namespace `prod`.
The service should listen on port `6949` and be of type `NodePort`.

```verify
kubectl get svc resource-b46mil -n prod -o jsonpath='{.spec.ports[0].port}' | grep 6949
kubectl get svc resource-b46mil -n prod -o jsonpath='{.spec.type}' | grep NodePort
```


# Task 3: Scale Deployment
Create a deployment named `resource-004kdr` in namespace `kube-system` using image `postgres`.
Scale it to `2` replicas.
Then, perform a rolling update to image `postgres:latest`.

```verify
kubectl get deploy resource-004kdr -n kube-system -o jsonpath='{.spec.replicas}' | grep 2
kubectl get deploy resource-004kdr -n kube-system -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "postgres:latest"
```


# Task 4: Expose Service
Expose the deployment `resource-x5sdcp-dep` as a Service named `resource-x5sdcp` in namespace `dev`.
The service should listen on port `3695` and be of type `ClusterIP`.

```verify
kubectl get svc resource-x5sdcp -n dev -o jsonpath='{.spec.ports[0].port}' | grep 3695
kubectl get svc resource-x5sdcp -n dev -o jsonpath='{.spec.type}' | grep ClusterIP
```


# Task 5: Node Maintenance
Mark node `node-5` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.

```verify
# Check if node exists and is ready (was uncordoned)
kubectl get node node-5 --no-headers | grep Ready | grep -v SchedulingDisabled
```


# Task 6: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-0b6ufp` in namespace `prod`.
Request `5Gi` storage with access mode `ReadWriteOnce`.

```verify
kubectl get pvc resource-0b6ufp -n prod -o jsonpath='{.spec.resources.requests.storage}' | grep 5Gi
kubectl get pvc resource-0b6ufp -n prod -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteOnce
```


# Task 7: Scale Deployment
Create a deployment named `resource-1h0iki` in namespace `backend` using image `busybox`.
Scale it to `4` replicas.
Then, perform a rolling update to image `busybox:latest`.

```verify
kubectl get deploy resource-1h0iki -n backend -o jsonpath='{.spec.replicas}' | grep 4
kubectl get deploy resource-1h0iki -n backend -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "busybox:latest"
```


# Task 8: Node Maintenance
Mark node `node-5` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.

```verify
# Check if node exists and is ready (was uncordoned)
kubectl get node node-5 --no-headers | grep Ready | grep -v SchedulingDisabled
```


# Task 9: Node Maintenance
Mark node `node-5` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.

```verify
# Check if node exists and is ready (was uncordoned)
kubectl get node node-5 --no-headers | grep Ready | grep -v SchedulingDisabled
```


# Task 10: Scale Deployment
Create a deployment named `resource-bo72lc` in namespace `test` using image `httpd`.
Scale it to `4` replicas.
Then, perform a rolling update to image `httpd:latest`.

```verify
kubectl get deploy resource-bo72lc -n test -o jsonpath='{.spec.replicas}' | grep 4
kubectl get deploy resource-bo72lc -n test -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "httpd:latest"
```


# Task 11: Create a Pod
Create a pod named `resource-04q6sq` in namespace `prod` using image `httpd`.
Ensure it has a label `app=web`.

```verify
kubectl get pod resource-04q6sq -n prod --no-headers | grep Running
kubectl get pod resource-04q6sq -n prod -o jsonpath='{.metadata.labels.app}' | grep web
```


# Task 12: Scale Deployment
Create a deployment named `resource-fvz0ix` in namespace `prod` using image `postgres`.
Scale it to `4` replicas.
Then, perform a rolling update to image `postgres:latest`.

```verify
kubectl get deploy resource-fvz0ix -n prod -o jsonpath='{.spec.replicas}' | grep 4
kubectl get deploy resource-fvz0ix -n prod -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "postgres:latest"
```


# Task 13: Node Maintenance
Mark node `node-5` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.

```verify
# Check if node exists and is ready (was uncordoned)
kubectl get node node-5 --no-headers | grep Ready | grep -v SchedulingDisabled
```


# Task 14: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-v6hd3y` in namespace `kube-system`.
Request `5Gi` storage with access mode `ReadWriteOnce`.

```verify
kubectl get pvc resource-v6hd3y -n kube-system -o jsonpath='{.spec.resources.requests.storage}' | grep 5Gi
kubectl get pvc resource-v6hd3y -n kube-system -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteOnce
```


# Task 15: Create a Pod
Create a pod named `resource-xap0p6` in namespace `prod` using image `mysql`.
Ensure it has a label `app=web`.

```verify
kubectl get pod resource-xap0p6 -n prod --no-headers | grep Running
kubectl get pod resource-xap0p6 -n prod -o jsonpath='{.metadata.labels.app}' | grep web
```


# Task 16: Expose Service
Expose the deployment `resource-7uipfn-dep` as a Service named `resource-7uipfn` in namespace `default`.
The service should listen on port `6662` and be of type `ClusterIP`.

```verify
kubectl get svc resource-7uipfn -n default -o jsonpath='{.spec.ports[0].port}' | grep 6662
kubectl get svc resource-7uipfn -n default -o jsonpath='{.spec.type}' | grep ClusterIP
```


# Task 17: Expose Service
Expose the deployment `resource-66n6wl-dep` as a Service named `resource-66n6wl` in namespace `default`.
The service should listen on port `5905` and be of type `NodePort`.

```verify
kubectl get svc resource-66n6wl -n default -o jsonpath='{.spec.ports[0].port}' | grep 5905
kubectl get svc resource-66n6wl -n default -o jsonpath='{.spec.type}' | grep NodePort
```


# Task 18: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-4kd7ob` in namespace `frontend`.
Request `100Mi` storage with access mode `ReadWriteMany`.

```verify
kubectl get pvc resource-4kd7ob -n frontend -o jsonpath='{.spec.resources.requests.storage}' | grep 100Mi
kubectl get pvc resource-4kd7ob -n frontend -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteMany
```


# Task 19: Expose Service
Expose the deployment `resource-0khdpd-dep` as a Service named `resource-0khdpd` in namespace `frontend`.
The service should listen on port `6271` and be of type `NodePort`.

```verify
kubectl get svc resource-0khdpd -n frontend -o jsonpath='{.spec.ports[0].port}' | grep 6271
kubectl get svc resource-0khdpd -n frontend -o jsonpath='{.spec.type}' | grep NodePort
```


# Task 20: Node Maintenance
Mark node `node-1` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.

```verify
# Check if node exists and is ready (was uncordoned)
kubectl get node node-1 --no-headers | grep Ready | grep -v SchedulingDisabled
```


---
id: auto-cka-10
title: Auto CKA Practice (Batch 10)
category: CKA
duration: 120 mins
---

# Auto CKA Practice (Batch 10)

This is an auto-generated exam to provide infinite practice questions.

# Task 1: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-8zb2kb` in namespace `staging`.
Request `1Gi` storage with access mode `ReadOnlyMany`.

```setup
kubectl create ns staging --dry-run=client -o yaml | kubectl apply -f -
kubectl delete pvc resource-8zb2kb -n staging 2>/dev/null || true
```

```verify
kubectl get pvc resource-8zb2kb -n staging -o jsonpath='{.spec.resources.requests.storage}' | grep 1Gi
kubectl get pvc resource-8zb2kb -n staging -o jsonpath='{.spec.accessModes[0]}' | grep ReadOnlyMany
```


# Task 2: Node Maintenance
Mark node `node-4` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.

```setup
# Ensure node is uncordoned first
kubectl uncordon node-4 2>/dev/null || true
```

```verify
# Check if node exists and is ready (was uncordoned)
kubectl get node node-4 --no-headers | grep Ready | grep -v SchedulingDisabled
```


# Task 3: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-90h870` in namespace `backend`.
Request `100Mi` storage with access mode `ReadWriteMany`.

```setup
kubectl create ns backend --dry-run=client -o yaml | kubectl apply -f -
kubectl delete pvc resource-90h870 -n backend 2>/dev/null || true
```

```verify
kubectl get pvc resource-90h870 -n backend -o jsonpath='{.spec.resources.requests.storage}' | grep 100Mi
kubectl get pvc resource-90h870 -n backend -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteMany
```


# Task 4: Node Maintenance
Mark node `node-5` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.

```setup
# Ensure node is uncordoned first
kubectl uncordon node-5 2>/dev/null || true
```

```verify
# Check if node exists and is ready (was uncordoned)
kubectl get node node-5 --no-headers | grep Ready | grep -v SchedulingDisabled
```


# Task 5: Node Maintenance
Mark node `node-4` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.

```setup
# Ensure node is uncordoned first
kubectl uncordon node-4 2>/dev/null || true
```

```verify
# Check if node exists and is ready (was uncordoned)
kubectl get node node-4 --no-headers | grep Ready | grep -v SchedulingDisabled
```


# Task 6: Scale Deployment
Create a deployment named `resource-y228dw` in namespace `dev` using image `python:3.9`.
Scale it to `5` replicas.
Then, perform a rolling update to image `python:3.9:latest`.

```setup
kubectl create ns dev --dry-run=client -o yaml | kubectl apply -f -
kubectl delete deploy resource-y228dw -n dev 2>/dev/null || true
```

```verify
kubectl get deploy resource-y228dw -n dev -o jsonpath='{.spec.replicas}' | grep 5
kubectl get deploy resource-y228dw -n dev -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "python:3.9:latest"
```


# Task 7: Node Maintenance
Mark node `node-2` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.

```setup
# Ensure node is uncordoned first
kubectl uncordon node-2 2>/dev/null || true
```

```verify
# Check if node exists and is ready (was uncordoned)
kubectl get node node-2 --no-headers | grep Ready | grep -v SchedulingDisabled
```


# Task 8: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-t3hsff` in namespace `kube-system`.
Request `100Mi` storage with access mode `ReadWriteMany`.

```setup
kubectl create ns kube-system --dry-run=client -o yaml | kubectl apply -f -
kubectl delete pvc resource-t3hsff -n kube-system 2>/dev/null || true
```

```verify
kubectl get pvc resource-t3hsff -n kube-system -o jsonpath='{.spec.resources.requests.storage}' | grep 100Mi
kubectl get pvc resource-t3hsff -n kube-system -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteMany
```


# Task 9: Create a Pod
Create a pod named `resource-odpn25` in namespace `default` using image `busybox`.
Ensure it has a label `app=web`.

```setup
kubectl create ns default --dry-run=client -o yaml | kubectl apply -f -
# Clean up if exists
kubectl delete pod resource-odpn25 -n default --force --grace-period=0 2>/dev/null || true
```

```verify
kubectl get pod resource-odpn25 -n default --no-headers | grep Running
kubectl get pod resource-odpn25 -n default -o jsonpath='{.metadata.labels.app}' | grep web
```


# Task 10: Create a Pod
Create a pod named `resource-b1lzhx` in namespace `staging` using image `httpd`.
Ensure it has a label `app=web`.

```setup
kubectl create ns staging --dry-run=client -o yaml | kubectl apply -f -
# Clean up if exists
kubectl delete pod resource-b1lzhx -n staging --force --grace-period=0 2>/dev/null || true
```

```verify
kubectl get pod resource-b1lzhx -n staging --no-headers | grep Running
kubectl get pod resource-b1lzhx -n staging -o jsonpath='{.metadata.labels.app}' | grep web
```


# Task 11: Create a Pod
Create a pod named `resource-kkrkq1` in namespace `test` using image `python:3.9`.
Ensure it has a label `release=stable`.

```setup
kubectl create ns test --dry-run=client -o yaml | kubectl apply -f -
# Clean up if exists
kubectl delete pod resource-kkrkq1 -n test --force --grace-period=0 2>/dev/null || true
```

```verify
kubectl get pod resource-kkrkq1 -n test --no-headers | grep Running
kubectl get pod resource-kkrkq1 -n test -o jsonpath='{.metadata.labels.release}' | grep stable
```


# Task 12: Expose Service
Expose the deployment `resource-8vcqap-dep` as a Service named `resource-8vcqap` in namespace `dev`.
The service should listen on port `5504` and be of type `NodePort`.

```setup
kubectl create ns dev --dry-run=client -o yaml | kubectl apply -f -
kubectl create deployment resource-8vcqap-dep --image=nginx -n dev --dry-run=client -o yaml | kubectl apply -f -
kubectl delete svc resource-8vcqap -n dev 2>/dev/null || true
```

```verify
kubectl get svc resource-8vcqap -n dev -o jsonpath='{.spec.ports[0].port}' | grep 5504
kubectl get svc resource-8vcqap -n dev -o jsonpath='{.spec.type}' | grep NodePort
```


# Task 13: Node Maintenance
Mark node `node-3` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.

```setup
# Ensure node is uncordoned first
kubectl uncordon node-3 2>/dev/null || true
```

```verify
# Check if node exists and is ready (was uncordoned)
kubectl get node node-3 --no-headers | grep Ready | grep -v SchedulingDisabled
```


# Task 14: Create a Pod
Create a pod named `resource-3y5uij` in namespace `backend` using image `node:14`.
Ensure it has a label `env=prod`.

```setup
kubectl create ns backend --dry-run=client -o yaml | kubectl apply -f -
# Clean up if exists
kubectl delete pod resource-3y5uij -n backend --force --grace-period=0 2>/dev/null || true
```

```verify
kubectl get pod resource-3y5uij -n backend --no-headers | grep Running
kubectl get pod resource-3y5uij -n backend -o jsonpath='{.metadata.labels.env}' | grep prod
```


# Task 15: Node Maintenance
Mark node `node-4` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.

```setup
# Ensure node is uncordoned first
kubectl uncordon node-4 2>/dev/null || true
```

```verify
# Check if node exists and is ready (was uncordoned)
kubectl get node node-4 --no-headers | grep Ready | grep -v SchedulingDisabled
```


# Task 16: Expose Service
Expose the deployment `resource-vxam4e-dep` as a Service named `resource-vxam4e` in namespace `default`.
The service should listen on port `6670` and be of type `NodePort`.

```setup
kubectl create ns default --dry-run=client -o yaml | kubectl apply -f -
kubectl create deployment resource-vxam4e-dep --image=nginx -n default --dry-run=client -o yaml | kubectl apply -f -
kubectl delete svc resource-vxam4e -n default 2>/dev/null || true
```

```verify
kubectl get svc resource-vxam4e -n default -o jsonpath='{.spec.ports[0].port}' | grep 6670
kubectl get svc resource-vxam4e -n default -o jsonpath='{.spec.type}' | grep NodePort
```


# Task 17: Scale Deployment
Create a deployment named `resource-68xdy7` in namespace `kube-system` using image `memcached`.
Scale it to `3` replicas.
Then, perform a rolling update to image `memcached:latest`.

```setup
kubectl create ns kube-system --dry-run=client -o yaml | kubectl apply -f -
kubectl delete deploy resource-68xdy7 -n kube-system 2>/dev/null || true
```

```verify
kubectl get deploy resource-68xdy7 -n kube-system -o jsonpath='{.spec.replicas}' | grep 3
kubectl get deploy resource-68xdy7 -n kube-system -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "memcached:latest"
```


# Task 18: Expose Service
Expose the deployment `resource-1fil5e-dep` as a Service named `resource-1fil5e` in namespace `frontend`.
The service should listen on port `5922` and be of type `ClusterIP`.

```setup
kubectl create ns frontend --dry-run=client -o yaml | kubectl apply -f -
kubectl create deployment resource-1fil5e-dep --image=nginx -n frontend --dry-run=client -o yaml | kubectl apply -f -
kubectl delete svc resource-1fil5e -n frontend 2>/dev/null || true
```

```verify
kubectl get svc resource-1fil5e -n frontend -o jsonpath='{.spec.ports[0].port}' | grep 5922
kubectl get svc resource-1fil5e -n frontend -o jsonpath='{.spec.type}' | grep ClusterIP
```


# Task 19: Create a Pod
Create a pod named `resource-qt0j6d` in namespace `prod` using image `nginx`.
Ensure it has a label `release=stable`.

```setup
kubectl create ns prod --dry-run=client -o yaml | kubectl apply -f -
# Clean up if exists
kubectl delete pod resource-qt0j6d -n prod --force --grace-period=0 2>/dev/null || true
```

```verify
kubectl get pod resource-qt0j6d -n prod --no-headers | grep Running
kubectl get pod resource-qt0j6d -n prod -o jsonpath='{.metadata.labels.release}' | grep stable
```


# Task 20: Create a Pod
Create a pod named `resource-f8ajdy` in namespace `kube-system` using image `memcached`.
Ensure it has a label `team=blue`.

```setup
kubectl create ns kube-system --dry-run=client -o yaml | kubectl apply -f -
# Clean up if exists
kubectl delete pod resource-f8ajdy -n kube-system --force --grace-period=0 2>/dev/null || true
```

```verify
kubectl get pod resource-f8ajdy -n kube-system --no-headers | grep Running
kubectl get pod resource-f8ajdy -n kube-system -o jsonpath='{.metadata.labels.team}' | grep blue
```


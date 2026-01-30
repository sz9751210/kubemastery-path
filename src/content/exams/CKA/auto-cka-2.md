---
id: auto-cka-2
title: Auto CKA Practice (Batch 2)
category: CKA
duration: 120 mins
---

# Auto CKA Practice (Batch 2)

This is an auto-generated exam to provide infinite practice questions.

# Task 1: Create a Pod
Create a pod named `resource-5nvnbe` in namespace `frontend` using image `node:14`.
Ensure it has a label `env=prod`.

```setup
kubectl create ns frontend --dry-run=client -o yaml | kubectl apply -f -
# Clean up if exists
kubectl delete pod resource-5nvnbe -n frontend --force --grace-period=0 2>/dev/null || true
```

```verify
kubectl get pod resource-5nvnbe -n frontend --no-headers | grep Running
kubectl get pod resource-5nvnbe -n frontend -o jsonpath='{.metadata.labels.env}' | grep prod
```


# Task 2: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-ezwkjp` in namespace `frontend`.
Request `5Gi` storage with access mode `ReadWriteOnce`.

```setup
kubectl create ns frontend --dry-run=client -o yaml | kubectl apply -f -
kubectl delete pvc resource-ezwkjp -n frontend 2>/dev/null || true
```

```verify
kubectl get pvc resource-ezwkjp -n frontend -o jsonpath='{.spec.resources.requests.storage}' | grep 5Gi
kubectl get pvc resource-ezwkjp -n frontend -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteOnce
```


# Task 3: Node Maintenance
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


# Task 4: Expose Service
Expose the deployment `resource-awwhye-dep` as a Service named `resource-awwhye` in namespace `kube-system`.
The service should listen on port `6974` and be of type `ClusterIP`.

```setup
kubectl create ns kube-system --dry-run=client -o yaml | kubectl apply -f -
kubectl create deployment resource-awwhye-dep --image=nginx -n kube-system --dry-run=client -o yaml | kubectl apply -f -
kubectl delete svc resource-awwhye -n kube-system 2>/dev/null || true
```

```verify
kubectl get svc resource-awwhye -n kube-system -o jsonpath='{.spec.ports[0].port}' | grep 6974
kubectl get svc resource-awwhye -n kube-system -o jsonpath='{.spec.type}' | grep ClusterIP
```


# Task 5: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-dpxgy9` in namespace `frontend`.
Request `2Gi` storage with access mode `ReadWriteOnce`.

```setup
kubectl create ns frontend --dry-run=client -o yaml | kubectl apply -f -
kubectl delete pvc resource-dpxgy9 -n frontend 2>/dev/null || true
```

```verify
kubectl get pvc resource-dpxgy9 -n frontend -o jsonpath='{.spec.resources.requests.storage}' | grep 2Gi
kubectl get pvc resource-dpxgy9 -n frontend -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteOnce
```


# Task 6: Expose Service
Expose the deployment `resource-lcas2a-dep` as a Service named `resource-lcas2a` in namespace `default`.
The service should listen on port `5654` and be of type `ClusterIP`.

```setup
kubectl create ns default --dry-run=client -o yaml | kubectl apply -f -
kubectl create deployment resource-lcas2a-dep --image=nginx -n default --dry-run=client -o yaml | kubectl apply -f -
kubectl delete svc resource-lcas2a -n default 2>/dev/null || true
```

```verify
kubectl get svc resource-lcas2a -n default -o jsonpath='{.spec.ports[0].port}' | grep 5654
kubectl get svc resource-lcas2a -n default -o jsonpath='{.spec.type}' | grep ClusterIP
```


# Task 7: Create a Pod
Create a pod named `resource-d0xnxn` in namespace `kube-system` using image `nginx`.
Ensure it has a label `app=web`.

```setup
kubectl create ns kube-system --dry-run=client -o yaml | kubectl apply -f -
# Clean up if exists
kubectl delete pod resource-d0xnxn -n kube-system --force --grace-period=0 2>/dev/null || true
```

```verify
kubectl get pod resource-d0xnxn -n kube-system --no-headers | grep Running
kubectl get pod resource-d0xnxn -n kube-system -o jsonpath='{.metadata.labels.app}' | grep web
```


# Task 8: Create a Pod
Create a pod named `resource-qq888l` in namespace `kube-system` using image `nginx`.
Ensure it has a label `env=prod`.

```setup
kubectl create ns kube-system --dry-run=client -o yaml | kubectl apply -f -
# Clean up if exists
kubectl delete pod resource-qq888l -n kube-system --force --grace-period=0 2>/dev/null || true
```

```verify
kubectl get pod resource-qq888l -n kube-system --no-headers | grep Running
kubectl get pod resource-qq888l -n kube-system -o jsonpath='{.metadata.labels.env}' | grep prod
```


# Task 9: Node Maintenance
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


# Task 10: Node Maintenance
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


# Task 11: Expose Service
Expose the deployment `resource-k9irdd-dep` as a Service named `resource-k9irdd` in namespace `default`.
The service should listen on port `5047` and be of type `ClusterIP`.

```setup
kubectl create ns default --dry-run=client -o yaml | kubectl apply -f -
kubectl create deployment resource-k9irdd-dep --image=nginx -n default --dry-run=client -o yaml | kubectl apply -f -
kubectl delete svc resource-k9irdd -n default 2>/dev/null || true
```

```verify
kubectl get svc resource-k9irdd -n default -o jsonpath='{.spec.ports[0].port}' | grep 5047
kubectl get svc resource-k9irdd -n default -o jsonpath='{.spec.type}' | grep ClusterIP
```


# Task 12: Create a Pod
Create a pod named `resource-s0ro8w` in namespace `backend` using image `memcached`.
Ensure it has a label `env=prod`.

```setup
kubectl create ns backend --dry-run=client -o yaml | kubectl apply -f -
# Clean up if exists
kubectl delete pod resource-s0ro8w -n backend --force --grace-period=0 2>/dev/null || true
```

```verify
kubectl get pod resource-s0ro8w -n backend --no-headers | grep Running
kubectl get pod resource-s0ro8w -n backend -o jsonpath='{.metadata.labels.env}' | grep prod
```


# Task 13: Node Maintenance
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


# Task 14: Node Maintenance
Mark node `node-1` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.

```setup
# Ensure node is uncordoned first
kubectl uncordon node-1 2>/dev/null || true
```

```verify
# Check if node exists and is ready (was uncordoned)
kubectl get node node-1 --no-headers | grep Ready | grep -v SchedulingDisabled
```


# Task 15: Create a Pod
Create a pod named `resource-zwkpke` in namespace `backend` using image `nginx`.
Ensure it has a label `release=stable`.

```setup
kubectl create ns backend --dry-run=client -o yaml | kubectl apply -f -
# Clean up if exists
kubectl delete pod resource-zwkpke -n backend --force --grace-period=0 2>/dev/null || true
```

```verify
kubectl get pod resource-zwkpke -n backend --no-headers | grep Running
kubectl get pod resource-zwkpke -n backend -o jsonpath='{.metadata.labels.release}' | grep stable
```


# Task 16: Scale Deployment
Create a deployment named `resource-hcfsbc` in namespace `kube-system` using image `httpd`.
Scale it to `4` replicas.
Then, perform a rolling update to image `httpd:latest`.

```setup
kubectl create ns kube-system --dry-run=client -o yaml | kubectl apply -f -
kubectl delete deploy resource-hcfsbc -n kube-system 2>/dev/null || true
```

```verify
kubectl get deploy resource-hcfsbc -n kube-system -o jsonpath='{.spec.replicas}' | grep 4
kubectl get deploy resource-hcfsbc -n kube-system -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "httpd:latest"
```


# Task 17: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-gbk7sh` in namespace `dev`.
Request `2Gi` storage with access mode `ReadWriteMany`.

```setup
kubectl create ns dev --dry-run=client -o yaml | kubectl apply -f -
kubectl delete pvc resource-gbk7sh -n dev 2>/dev/null || true
```

```verify
kubectl get pvc resource-gbk7sh -n dev -o jsonpath='{.spec.resources.requests.storage}' | grep 2Gi
kubectl get pvc resource-gbk7sh -n dev -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteMany
```


# Task 18: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-fo8xeo` in namespace `backend`.
Request `10Gi` storage with access mode `ReadWriteOnce`.

```setup
kubectl create ns backend --dry-run=client -o yaml | kubectl apply -f -
kubectl delete pvc resource-fo8xeo -n backend 2>/dev/null || true
```

```verify
kubectl get pvc resource-fo8xeo -n backend -o jsonpath='{.spec.resources.requests.storage}' | grep 10Gi
kubectl get pvc resource-fo8xeo -n backend -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteOnce
```


# Task 19: Expose Service
Expose the deployment `resource-qtys04-dep` as a Service named `resource-qtys04` in namespace `backend`.
The service should listen on port `8300` and be of type `NodePort`.

```setup
kubectl create ns backend --dry-run=client -o yaml | kubectl apply -f -
kubectl create deployment resource-qtys04-dep --image=nginx -n backend --dry-run=client -o yaml | kubectl apply -f -
kubectl delete svc resource-qtys04 -n backend 2>/dev/null || true
```

```verify
kubectl get svc resource-qtys04 -n backend -o jsonpath='{.spec.ports[0].port}' | grep 8300
kubectl get svc resource-qtys04 -n backend -o jsonpath='{.spec.type}' | grep NodePort
```


# Task 20: Create a Pod
Create a pod named `resource-o2agjj` in namespace `backend` using image `postgres`.
Ensure it has a label `release=stable`.

```setup
kubectl create ns backend --dry-run=client -o yaml | kubectl apply -f -
# Clean up if exists
kubectl delete pod resource-o2agjj -n backend --force --grace-period=0 2>/dev/null || true
```

```verify
kubectl get pod resource-o2agjj -n backend --no-headers | grep Running
kubectl get pod resource-o2agjj -n backend -o jsonpath='{.metadata.labels.release}' | grep stable
```


---
id: auto-cka-19
title: Auto CKA Practice (Batch 19)
category: CKA
duration: 120 mins
---

# Auto CKA Practice (Batch 19)

This is an auto-generated exam to provide infinite practice questions.

# Task 1: Create a Pod
Create a pod named `resource-ohy82d` in namespace `frontend` using image `node:14`.
Ensure it has a label `env=prod`.

```setup
kubectl create ns frontend --dry-run=client -o yaml | kubectl apply -f -
# Clean up if exists
kubectl delete pod resource-ohy82d -n frontend --force --grace-period=0 2>/dev/null || true
```

```verify
kubectl get pod resource-ohy82d -n frontend --no-headers | grep Running
kubectl get pod resource-ohy82d -n frontend -o jsonpath='{.metadata.labels.env}' | grep prod
```


# Task 2: Create a Pod
Create a pod named `resource-pwf7sk` in namespace `test` using image `httpd`.
Ensure it has a label `tier=frontend`.

```setup
kubectl create ns test --dry-run=client -o yaml | kubectl apply -f -
# Clean up if exists
kubectl delete pod resource-pwf7sk -n test --force --grace-period=0 2>/dev/null || true
```

```verify
kubectl get pod resource-pwf7sk -n test --no-headers | grep Running
kubectl get pod resource-pwf7sk -n test -o jsonpath='{.metadata.labels.tier}' | grep frontend
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


# Task 4: Node Maintenance
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


# Task 5: Scale Deployment
Create a deployment named `resource-sjohsx` in namespace `frontend` using image `alpine`.
Scale it to `4` replicas.
Then, perform a rolling update to image `alpine:latest`.

```setup
kubectl create ns frontend --dry-run=client -o yaml | kubectl apply -f -
kubectl delete deploy resource-sjohsx -n frontend 2>/dev/null || true
```

```verify
kubectl get deploy resource-sjohsx -n frontend -o jsonpath='{.spec.replicas}' | grep 4
kubectl get deploy resource-sjohsx -n frontend -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "alpine:latest"
```


# Task 6: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-gwhdi9` in namespace `prod`.
Request `1Gi` storage with access mode `ReadWriteOnce`.

```setup
kubectl create ns prod --dry-run=client -o yaml | kubectl apply -f -
kubectl delete pvc resource-gwhdi9 -n prod 2>/dev/null || true
```

```verify
kubectl get pvc resource-gwhdi9 -n prod -o jsonpath='{.spec.resources.requests.storage}' | grep 1Gi
kubectl get pvc resource-gwhdi9 -n prod -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteOnce
```


# Task 7: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-bkbgpt` in namespace `test`.
Request `1Gi` storage with access mode `ReadOnlyMany`.

```setup
kubectl create ns test --dry-run=client -o yaml | kubectl apply -f -
kubectl delete pvc resource-bkbgpt -n test 2>/dev/null || true
```

```verify
kubectl get pvc resource-bkbgpt -n test -o jsonpath='{.spec.resources.requests.storage}' | grep 1Gi
kubectl get pvc resource-bkbgpt -n test -o jsonpath='{.spec.accessModes[0]}' | grep ReadOnlyMany
```


# Task 8: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-73lrm6` in namespace `default`.
Request `1Gi` storage with access mode `ReadWriteMany`.

```setup
kubectl create ns default --dry-run=client -o yaml | kubectl apply -f -
kubectl delete pvc resource-73lrm6 -n default 2>/dev/null || true
```

```verify
kubectl get pvc resource-73lrm6 -n default -o jsonpath='{.spec.resources.requests.storage}' | grep 1Gi
kubectl get pvc resource-73lrm6 -n default -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteMany
```


# Task 9: Create a Pod
Create a pod named `resource-p3bi2o` in namespace `dev` using image `postgres`.
Ensure it has a label `env=prod`.

```setup
kubectl create ns dev --dry-run=client -o yaml | kubectl apply -f -
# Clean up if exists
kubectl delete pod resource-p3bi2o -n dev --force --grace-period=0 2>/dev/null || true
```

```verify
kubectl get pod resource-p3bi2o -n dev --no-headers | grep Running
kubectl get pod resource-p3bi2o -n dev -o jsonpath='{.metadata.labels.env}' | grep prod
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
Expose the deployment `resource-0rmkbk-dep` as a Service named `resource-0rmkbk` in namespace `prod`.
The service should listen on port `6864` and be of type `NodePort`.

```setup
kubectl create ns prod --dry-run=client -o yaml | kubectl apply -f -
kubectl create deployment resource-0rmkbk-dep --image=nginx -n prod --dry-run=client -o yaml | kubectl apply -f -
kubectl delete svc resource-0rmkbk -n prod 2>/dev/null || true
```

```verify
kubectl get svc resource-0rmkbk -n prod -o jsonpath='{.spec.ports[0].port}' | grep 6864
kubectl get svc resource-0rmkbk -n prod -o jsonpath='{.spec.type}' | grep NodePort
```


# Task 12: Scale Deployment
Create a deployment named `resource-kj6e5l` in namespace `kube-system` using image `redis`.
Scale it to `2` replicas.
Then, perform a rolling update to image `redis:latest`.

```setup
kubectl create ns kube-system --dry-run=client -o yaml | kubectl apply -f -
kubectl delete deploy resource-kj6e5l -n kube-system 2>/dev/null || true
```

```verify
kubectl get deploy resource-kj6e5l -n kube-system -o jsonpath='{.spec.replicas}' | grep 2
kubectl get deploy resource-kj6e5l -n kube-system -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "redis:latest"
```


# Task 13: Create a Pod
Create a pod named `resource-2z9dey` in namespace `kube-system` using image `python:3.9`.
Ensure it has a label `tier=frontend`.

```setup
kubectl create ns kube-system --dry-run=client -o yaml | kubectl apply -f -
# Clean up if exists
kubectl delete pod resource-2z9dey -n kube-system --force --grace-period=0 2>/dev/null || true
```

```verify
kubectl get pod resource-2z9dey -n kube-system --no-headers | grep Running
kubectl get pod resource-2z9dey -n kube-system -o jsonpath='{.metadata.labels.tier}' | grep frontend
```


# Task 14: Create a Pod
Create a pod named `resource-j9wzvf` in namespace `test` using image `postgres`.
Ensure it has a label `app=web`.

```setup
kubectl create ns test --dry-run=client -o yaml | kubectl apply -f -
# Clean up if exists
kubectl delete pod resource-j9wzvf -n test --force --grace-period=0 2>/dev/null || true
```

```verify
kubectl get pod resource-j9wzvf -n test --no-headers | grep Running
kubectl get pod resource-j9wzvf -n test -o jsonpath='{.metadata.labels.app}' | grep web
```


# Task 15: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-7qbqmm` in namespace `kube-system`.
Request `10Gi` storage with access mode `ReadWriteMany`.

```setup
kubectl create ns kube-system --dry-run=client -o yaml | kubectl apply -f -
kubectl delete pvc resource-7qbqmm -n kube-system 2>/dev/null || true
```

```verify
kubectl get pvc resource-7qbqmm -n kube-system -o jsonpath='{.spec.resources.requests.storage}' | grep 10Gi
kubectl get pvc resource-7qbqmm -n kube-system -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteMany
```


# Task 16: Create a Pod
Create a pod named `resource-8n6meh` in namespace `test` using image `httpd`.
Ensure it has a label `app=web`.

```setup
kubectl create ns test --dry-run=client -o yaml | kubectl apply -f -
# Clean up if exists
kubectl delete pod resource-8n6meh -n test --force --grace-period=0 2>/dev/null || true
```

```verify
kubectl get pod resource-8n6meh -n test --no-headers | grep Running
kubectl get pod resource-8n6meh -n test -o jsonpath='{.metadata.labels.app}' | grep web
```


# Task 17: Scale Deployment
Create a deployment named `resource-3pwmxq` in namespace `frontend` using image `redis`.
Scale it to `2` replicas.
Then, perform a rolling update to image `redis:latest`.

```setup
kubectl create ns frontend --dry-run=client -o yaml | kubectl apply -f -
kubectl delete deploy resource-3pwmxq -n frontend 2>/dev/null || true
```

```verify
kubectl get deploy resource-3pwmxq -n frontend -o jsonpath='{.spec.replicas}' | grep 2
kubectl get deploy resource-3pwmxq -n frontend -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "redis:latest"
```


# Task 18: Scale Deployment
Create a deployment named `resource-ctln61` in namespace `staging` using image `memcached`.
Scale it to `2` replicas.
Then, perform a rolling update to image `memcached:latest`.

```setup
kubectl create ns staging --dry-run=client -o yaml | kubectl apply -f -
kubectl delete deploy resource-ctln61 -n staging 2>/dev/null || true
```

```verify
kubectl get deploy resource-ctln61 -n staging -o jsonpath='{.spec.replicas}' | grep 2
kubectl get deploy resource-ctln61 -n staging -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "memcached:latest"
```


# Task 19: Node Maintenance
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


# Task 20: Expose Service
Expose the deployment `resource-x8ube8-dep` as a Service named `resource-x8ube8` in namespace `test`.
The service should listen on port `4586` and be of type `NodePort`.

```setup
kubectl create ns test --dry-run=client -o yaml | kubectl apply -f -
kubectl create deployment resource-x8ube8-dep --image=nginx -n test --dry-run=client -o yaml | kubectl apply -f -
kubectl delete svc resource-x8ube8 -n test 2>/dev/null || true
```

```verify
kubectl get svc resource-x8ube8 -n test -o jsonpath='{.spec.ports[0].port}' | grep 4586
kubectl get svc resource-x8ube8 -n test -o jsonpath='{.spec.type}' | grep NodePort
```


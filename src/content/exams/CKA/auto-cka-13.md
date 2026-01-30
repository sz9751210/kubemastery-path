---
id: auto-cka-13
title: Auto CKA Practice (Batch 13)
category: CKA
duration: 120 mins
---

# Auto CKA Practice (Batch 13)

This is an auto-generated exam to provide infinite practice questions.

# Task 1: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-cbupzp` in namespace `kube-system`.
Request `5Gi` storage with access mode `ReadWriteMany`.

```setup
kubectl create ns kube-system --dry-run=client -o yaml | kubectl apply -f -
kubectl delete pvc resource-cbupzp -n kube-system 2>/dev/null || true
```

```verify
kubectl get pvc resource-cbupzp -n kube-system -o jsonpath='{.spec.resources.requests.storage}' | grep 5Gi
kubectl get pvc resource-cbupzp -n kube-system -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteMany
```


# Task 2: Node Maintenance
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


# Task 3: Create a Pod
Create a pod named `resource-23q06u` in namespace `default` using image `mysql`.
Ensure it has a label `tier=frontend`.

```setup
kubectl create ns default --dry-run=client -o yaml | kubectl apply -f -
# Clean up if exists
kubectl delete pod resource-23q06u -n default --force --grace-period=0 2>/dev/null || true
```

```verify
kubectl get pod resource-23q06u -n default --no-headers | grep Running
kubectl get pod resource-23q06u -n default -o jsonpath='{.metadata.labels.tier}' | grep frontend
```


# Task 4: Scale Deployment
Create a deployment named `resource-3sagh0` in namespace `kube-system` using image `postgres`.
Scale it to `3` replicas.
Then, perform a rolling update to image `postgres:latest`.

```setup
kubectl create ns kube-system --dry-run=client -o yaml | kubectl apply -f -
kubectl delete deploy resource-3sagh0 -n kube-system 2>/dev/null || true
```

```verify
kubectl get deploy resource-3sagh0 -n kube-system -o jsonpath='{.spec.replicas}' | grep 3
kubectl get deploy resource-3sagh0 -n kube-system -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "postgres:latest"
```


# Task 5: Scale Deployment
Create a deployment named `resource-morx1w` in namespace `test` using image `nginx`.
Scale it to `3` replicas.
Then, perform a rolling update to image `nginx:latest`.

```setup
kubectl create ns test --dry-run=client -o yaml | kubectl apply -f -
kubectl delete deploy resource-morx1w -n test 2>/dev/null || true
```

```verify
kubectl get deploy resource-morx1w -n test -o jsonpath='{.spec.replicas}' | grep 3
kubectl get deploy resource-morx1w -n test -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "nginx:latest"
```


# Task 6: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-4blrsb` in namespace `staging`.
Request `5Gi` storage with access mode `ReadWriteMany`.

```setup
kubectl create ns staging --dry-run=client -o yaml | kubectl apply -f -
kubectl delete pvc resource-4blrsb -n staging 2>/dev/null || true
```

```verify
kubectl get pvc resource-4blrsb -n staging -o jsonpath='{.spec.resources.requests.storage}' | grep 5Gi
kubectl get pvc resource-4blrsb -n staging -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteMany
```


# Task 7: Node Maintenance
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


# Task 8: Create a Pod
Create a pod named `resource-qjkfdf` in namespace `backend` using image `nginx`.
Ensure it has a label `tier=frontend`.

```setup
kubectl create ns backend --dry-run=client -o yaml | kubectl apply -f -
# Clean up if exists
kubectl delete pod resource-qjkfdf -n backend --force --grace-period=0 2>/dev/null || true
```

```verify
kubectl get pod resource-qjkfdf -n backend --no-headers | grep Running
kubectl get pod resource-qjkfdf -n backend -o jsonpath='{.metadata.labels.tier}' | grep frontend
```


# Task 9: Scale Deployment
Create a deployment named `resource-wm71c5` in namespace `prod` using image `httpd`.
Scale it to `2` replicas.
Then, perform a rolling update to image `httpd:latest`.

```setup
kubectl create ns prod --dry-run=client -o yaml | kubectl apply -f -
kubectl delete deploy resource-wm71c5 -n prod 2>/dev/null || true
```

```verify
kubectl get deploy resource-wm71c5 -n prod -o jsonpath='{.spec.replicas}' | grep 2
kubectl get deploy resource-wm71c5 -n prod -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "httpd:latest"
```


# Task 10: Scale Deployment
Create a deployment named `resource-y42w2l` in namespace `backend` using image `redis`.
Scale it to `3` replicas.
Then, perform a rolling update to image `redis:latest`.

```setup
kubectl create ns backend --dry-run=client -o yaml | kubectl apply -f -
kubectl delete deploy resource-y42w2l -n backend 2>/dev/null || true
```

```verify
kubectl get deploy resource-y42w2l -n backend -o jsonpath='{.spec.replicas}' | grep 3
kubectl get deploy resource-y42w2l -n backend -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "redis:latest"
```


# Task 11: Create a Pod
Create a pod named `resource-m6b6g9` in namespace `frontend` using image `mysql`.
Ensure it has a label `team=blue`.

```setup
kubectl create ns frontend --dry-run=client -o yaml | kubectl apply -f -
# Clean up if exists
kubectl delete pod resource-m6b6g9 -n frontend --force --grace-period=0 2>/dev/null || true
```

```verify
kubectl get pod resource-m6b6g9 -n frontend --no-headers | grep Running
kubectl get pod resource-m6b6g9 -n frontend -o jsonpath='{.metadata.labels.team}' | grep blue
```


# Task 12: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-icjgn4` in namespace `prod`.
Request `2Gi` storage with access mode `ReadWriteMany`.

```setup
kubectl create ns prod --dry-run=client -o yaml | kubectl apply -f -
kubectl delete pvc resource-icjgn4 -n prod 2>/dev/null || true
```

```verify
kubectl get pvc resource-icjgn4 -n prod -o jsonpath='{.spec.resources.requests.storage}' | grep 2Gi
kubectl get pvc resource-icjgn4 -n prod -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteMany
```


# Task 13: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-3wne29` in namespace `default`.
Request `1Gi` storage with access mode `ReadWriteMany`.

```setup
kubectl create ns default --dry-run=client -o yaml | kubectl apply -f -
kubectl delete pvc resource-3wne29 -n default 2>/dev/null || true
```

```verify
kubectl get pvc resource-3wne29 -n default -o jsonpath='{.spec.resources.requests.storage}' | grep 1Gi
kubectl get pvc resource-3wne29 -n default -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteMany
```


# Task 14: Expose Service
Expose the deployment `resource-647fqq-dep` as a Service named `resource-647fqq` in namespace `backend`.
The service should listen on port `3833` and be of type `ClusterIP`.

```setup
kubectl create ns backend --dry-run=client -o yaml | kubectl apply -f -
kubectl create deployment resource-647fqq-dep --image=nginx -n backend --dry-run=client -o yaml | kubectl apply -f -
kubectl delete svc resource-647fqq -n backend 2>/dev/null || true
```

```verify
kubectl get svc resource-647fqq -n backend -o jsonpath='{.spec.ports[0].port}' | grep 3833
kubectl get svc resource-647fqq -n backend -o jsonpath='{.spec.type}' | grep ClusterIP
```


# Task 15: Expose Service
Expose the deployment `resource-9wopd1-dep` as a Service named `resource-9wopd1` in namespace `staging`.
The service should listen on port `5203` and be of type `ClusterIP`.

```setup
kubectl create ns staging --dry-run=client -o yaml | kubectl apply -f -
kubectl create deployment resource-9wopd1-dep --image=nginx -n staging --dry-run=client -o yaml | kubectl apply -f -
kubectl delete svc resource-9wopd1 -n staging 2>/dev/null || true
```

```verify
kubectl get svc resource-9wopd1 -n staging -o jsonpath='{.spec.ports[0].port}' | grep 5203
kubectl get svc resource-9wopd1 -n staging -o jsonpath='{.spec.type}' | grep ClusterIP
```


# Task 16: Node Maintenance
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


# Task 17: Node Maintenance
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


# Task 18: Expose Service
Expose the deployment `resource-2rftli-dep` as a Service named `resource-2rftli` in namespace `prod`.
The service should listen on port `5541` and be of type `ClusterIP`.

```setup
kubectl create ns prod --dry-run=client -o yaml | kubectl apply -f -
kubectl create deployment resource-2rftli-dep --image=nginx -n prod --dry-run=client -o yaml | kubectl apply -f -
kubectl delete svc resource-2rftli -n prod 2>/dev/null || true
```

```verify
kubectl get svc resource-2rftli -n prod -o jsonpath='{.spec.ports[0].port}' | grep 5541
kubectl get svc resource-2rftli -n prod -o jsonpath='{.spec.type}' | grep ClusterIP
```


# Task 19: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-jtj724` in namespace `backend`.
Request `5Gi` storage with access mode `ReadWriteMany`.

```setup
kubectl create ns backend --dry-run=client -o yaml | kubectl apply -f -
kubectl delete pvc resource-jtj724 -n backend 2>/dev/null || true
```

```verify
kubectl get pvc resource-jtj724 -n backend -o jsonpath='{.spec.resources.requests.storage}' | grep 5Gi
kubectl get pvc resource-jtj724 -n backend -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteMany
```


# Task 20: Node Maintenance
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


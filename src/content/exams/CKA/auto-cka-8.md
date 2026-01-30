---
id: auto-cka-8
title: Auto CKA Practice (Batch 8)
category: CKA
duration: 120 mins
---

# Auto CKA Practice (Batch 8)

This is an auto-generated exam to provide infinite practice questions.

# Task 1: Expose Service
Expose the deployment `resource-0fuqy0-dep` as a Service named `resource-0fuqy0` in namespace `kube-system`.
The service should listen on port `7325` and be of type `NodePort`.

```setup
kubectl create ns kube-system --dry-run=client -o yaml | kubectl apply -f -
kubectl create deployment resource-0fuqy0-dep --image=nginx -n kube-system --dry-run=client -o yaml | kubectl apply -f -
kubectl delete svc resource-0fuqy0 -n kube-system 2>/dev/null || true
```

```verify
kubectl get svc resource-0fuqy0 -n kube-system -o jsonpath='{.spec.ports[0].port}' | grep 7325
kubectl get svc resource-0fuqy0 -n kube-system -o jsonpath='{.spec.type}' | grep NodePort
```


# Task 2: Create a Pod
Create a pod named `resource-4i24o3` in namespace `backend` using image `nginx`.
Ensure it has a label `team=blue`.

```setup
kubectl create ns backend --dry-run=client -o yaml | kubectl apply -f -
# Clean up if exists
kubectl delete pod resource-4i24o3 -n backend --force --grace-period=0 2>/dev/null || true
```

```verify
kubectl get pod resource-4i24o3 -n backend --no-headers | grep Running
kubectl get pod resource-4i24o3 -n backend -o jsonpath='{.metadata.labels.team}' | grep blue
```


# Task 3: Create a Pod
Create a pod named `resource-a2jppl` in namespace `frontend` using image `alpine`.
Ensure it has a label `tier=frontend`.

```setup
kubectl create ns frontend --dry-run=client -o yaml | kubectl apply -f -
# Clean up if exists
kubectl delete pod resource-a2jppl -n frontend --force --grace-period=0 2>/dev/null || true
```

```verify
kubectl get pod resource-a2jppl -n frontend --no-headers | grep Running
kubectl get pod resource-a2jppl -n frontend -o jsonpath='{.metadata.labels.tier}' | grep frontend
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


# Task 5: Expose Service
Expose the deployment `resource-q7zeva-dep` as a Service named `resource-q7zeva` in namespace `test`.
The service should listen on port `6053` and be of type `NodePort`.

```setup
kubectl create ns test --dry-run=client -o yaml | kubectl apply -f -
kubectl create deployment resource-q7zeva-dep --image=nginx -n test --dry-run=client -o yaml | kubectl apply -f -
kubectl delete svc resource-q7zeva -n test 2>/dev/null || true
```

```verify
kubectl get svc resource-q7zeva -n test -o jsonpath='{.spec.ports[0].port}' | grep 6053
kubectl get svc resource-q7zeva -n test -o jsonpath='{.spec.type}' | grep NodePort
```


# Task 6: Node Maintenance
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


# Task 7: Scale Deployment
Create a deployment named `resource-q4t8v2` in namespace `backend` using image `busybox`.
Scale it to `2` replicas.
Then, perform a rolling update to image `busybox:latest`.

```setup
kubectl create ns backend --dry-run=client -o yaml | kubectl apply -f -
kubectl delete deploy resource-q4t8v2 -n backend 2>/dev/null || true
```

```verify
kubectl get deploy resource-q4t8v2 -n backend -o jsonpath='{.spec.replicas}' | grep 2
kubectl get deploy resource-q4t8v2 -n backend -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "busybox:latest"
```


# Task 8: Node Maintenance
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


# Task 9: Create a Pod
Create a pod named `resource-o4huvl` in namespace `dev` using image `nginx`.
Ensure it has a label `team=blue`.

```setup
kubectl create ns dev --dry-run=client -o yaml | kubectl apply -f -
# Clean up if exists
kubectl delete pod resource-o4huvl -n dev --force --grace-period=0 2>/dev/null || true
```

```verify
kubectl get pod resource-o4huvl -n dev --no-headers | grep Running
kubectl get pod resource-o4huvl -n dev -o jsonpath='{.metadata.labels.team}' | grep blue
```


# Task 10: Node Maintenance
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


# Task 11: Scale Deployment
Create a deployment named `resource-cmgeyr` in namespace `kube-system` using image `postgres`.
Scale it to `4` replicas.
Then, perform a rolling update to image `postgres:latest`.

```setup
kubectl create ns kube-system --dry-run=client -o yaml | kubectl apply -f -
kubectl delete deploy resource-cmgeyr -n kube-system 2>/dev/null || true
```

```verify
kubectl get deploy resource-cmgeyr -n kube-system -o jsonpath='{.spec.replicas}' | grep 4
kubectl get deploy resource-cmgeyr -n kube-system -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "postgres:latest"
```


# Task 12: Node Maintenance
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


# Task 13: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-sqrtw5` in namespace `default`.
Request `5Gi` storage with access mode `ReadWriteOnce`.

```setup
kubectl create ns default --dry-run=client -o yaml | kubectl apply -f -
kubectl delete pvc resource-sqrtw5 -n default 2>/dev/null || true
```

```verify
kubectl get pvc resource-sqrtw5 -n default -o jsonpath='{.spec.resources.requests.storage}' | grep 5Gi
kubectl get pvc resource-sqrtw5 -n default -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteOnce
```


# Task 14: Node Maintenance
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


# Task 15: Scale Deployment
Create a deployment named `resource-2be1iw` in namespace `dev` using image `redis`.
Scale it to `3` replicas.
Then, perform a rolling update to image `redis:latest`.

```setup
kubectl create ns dev --dry-run=client -o yaml | kubectl apply -f -
kubectl delete deploy resource-2be1iw -n dev 2>/dev/null || true
```

```verify
kubectl get deploy resource-2be1iw -n dev -o jsonpath='{.spec.replicas}' | grep 3
kubectl get deploy resource-2be1iw -n dev -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "redis:latest"
```


# Task 16: Scale Deployment
Create a deployment named `resource-oo21gp` in namespace `default` using image `busybox`.
Scale it to `4` replicas.
Then, perform a rolling update to image `busybox:latest`.

```setup
kubectl create ns default --dry-run=client -o yaml | kubectl apply -f -
kubectl delete deploy resource-oo21gp -n default 2>/dev/null || true
```

```verify
kubectl get deploy resource-oo21gp -n default -o jsonpath='{.spec.replicas}' | grep 4
kubectl get deploy resource-oo21gp -n default -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "busybox:latest"
```


# Task 17: Scale Deployment
Create a deployment named `resource-1g8pnf` in namespace `prod` using image `nginx`.
Scale it to `2` replicas.
Then, perform a rolling update to image `nginx:latest`.

```setup
kubectl create ns prod --dry-run=client -o yaml | kubectl apply -f -
kubectl delete deploy resource-1g8pnf -n prod 2>/dev/null || true
```

```verify
kubectl get deploy resource-1g8pnf -n prod -o jsonpath='{.spec.replicas}' | grep 2
kubectl get deploy resource-1g8pnf -n prod -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "nginx:latest"
```


# Task 18: Node Maintenance
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


# Task 19: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-j5xnwx` in namespace `frontend`.
Request `10Gi` storage with access mode `ReadOnlyMany`.

```setup
kubectl create ns frontend --dry-run=client -o yaml | kubectl apply -f -
kubectl delete pvc resource-j5xnwx -n frontend 2>/dev/null || true
```

```verify
kubectl get pvc resource-j5xnwx -n frontend -o jsonpath='{.spec.resources.requests.storage}' | grep 10Gi
kubectl get pvc resource-j5xnwx -n frontend -o jsonpath='{.spec.accessModes[0]}' | grep ReadOnlyMany
```


# Task 20: Create a Pod
Create a pod named `resource-zbx9vj` in namespace `staging` using image `node:14`.
Ensure it has a label `release=stable`.

```setup
kubectl create ns staging --dry-run=client -o yaml | kubectl apply -f -
# Clean up if exists
kubectl delete pod resource-zbx9vj -n staging --force --grace-period=0 2>/dev/null || true
```

```verify
kubectl get pod resource-zbx9vj -n staging --no-headers | grep Running
kubectl get pod resource-zbx9vj -n staging -o jsonpath='{.metadata.labels.release}' | grep stable
```


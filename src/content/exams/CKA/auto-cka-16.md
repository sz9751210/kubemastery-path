---
id: auto-cka-16
title: Auto CKA Practice (Batch 16)
category: CKA
duration: 120 mins
---

# Auto CKA Practice (Batch 16)

This is an auto-generated exam to provide infinite practice questions.

# Task 1: Node Maintenance
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


# Task 2: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-37snqm` in namespace `staging`.
Request `2Gi` storage with access mode `ReadOnlyMany`.

```setup
kubectl create ns staging --dry-run=client -o yaml | kubectl apply -f -
kubectl delete pvc resource-37snqm -n staging 2>/dev/null || true
```

```verify
kubectl get pvc resource-37snqm -n staging -o jsonpath='{.spec.resources.requests.storage}' | grep 2Gi
kubectl get pvc resource-37snqm -n staging -o jsonpath='{.spec.accessModes[0]}' | grep ReadOnlyMany
```


# Task 3: Node Maintenance
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


# Task 4: Create a Pod
Create a pod named `resource-upup4j` in namespace `prod` using image `httpd`.
Ensure it has a label `team=blue`.

```setup
kubectl create ns prod --dry-run=client -o yaml | kubectl apply -f -
# Clean up if exists
kubectl delete pod resource-upup4j -n prod --force --grace-period=0 2>/dev/null || true
```

```verify
kubectl get pod resource-upup4j -n prod --no-headers | grep Running
kubectl get pod resource-upup4j -n prod -o jsonpath='{.metadata.labels.team}' | grep blue
```


# Task 5: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-ejgz8t` in namespace `test`.
Request `5Gi` storage with access mode `ReadWriteMany`.

```setup
kubectl create ns test --dry-run=client -o yaml | kubectl apply -f -
kubectl delete pvc resource-ejgz8t -n test 2>/dev/null || true
```

```verify
kubectl get pvc resource-ejgz8t -n test -o jsonpath='{.spec.resources.requests.storage}' | grep 5Gi
kubectl get pvc resource-ejgz8t -n test -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteMany
```


# Task 6: Create a Pod
Create a pod named `resource-tz0b8p` in namespace `kube-system` using image `nginx`.
Ensure it has a label `env=prod`.

```setup
kubectl create ns kube-system --dry-run=client -o yaml | kubectl apply -f -
# Clean up if exists
kubectl delete pod resource-tz0b8p -n kube-system --force --grace-period=0 2>/dev/null || true
```

```verify
kubectl get pod resource-tz0b8p -n kube-system --no-headers | grep Running
kubectl get pod resource-tz0b8p -n kube-system -o jsonpath='{.metadata.labels.env}' | grep prod
```


# Task 7: Scale Deployment
Create a deployment named `resource-i533wq` in namespace `prod` using image `alpine`.
Scale it to `4` replicas.
Then, perform a rolling update to image `alpine:latest`.

```setup
kubectl create ns prod --dry-run=client -o yaml | kubectl apply -f -
kubectl delete deploy resource-i533wq -n prod 2>/dev/null || true
```

```verify
kubectl get deploy resource-i533wq -n prod -o jsonpath='{.spec.replicas}' | grep 4
kubectl get deploy resource-i533wq -n prod -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "alpine:latest"
```


# Task 8: Expose Service
Expose the deployment `resource-6pqfzr-dep` as a Service named `resource-6pqfzr` in namespace `frontend`.
The service should listen on port `3697` and be of type `NodePort`.

```setup
kubectl create ns frontend --dry-run=client -o yaml | kubectl apply -f -
kubectl create deployment resource-6pqfzr-dep --image=nginx -n frontend --dry-run=client -o yaml | kubectl apply -f -
kubectl delete svc resource-6pqfzr -n frontend 2>/dev/null || true
```

```verify
kubectl get svc resource-6pqfzr -n frontend -o jsonpath='{.spec.ports[0].port}' | grep 3697
kubectl get svc resource-6pqfzr -n frontend -o jsonpath='{.spec.type}' | grep NodePort
```


# Task 9: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-04830r` in namespace `kube-system`.
Request `100Mi` storage with access mode `ReadOnlyMany`.

```setup
kubectl create ns kube-system --dry-run=client -o yaml | kubectl apply -f -
kubectl delete pvc resource-04830r -n kube-system 2>/dev/null || true
```

```verify
kubectl get pvc resource-04830r -n kube-system -o jsonpath='{.spec.resources.requests.storage}' | grep 100Mi
kubectl get pvc resource-04830r -n kube-system -o jsonpath='{.spec.accessModes[0]}' | grep ReadOnlyMany
```


# Task 10: Scale Deployment
Create a deployment named `resource-pwobt5` in namespace `staging` using image `redis`.
Scale it to `3` replicas.
Then, perform a rolling update to image `redis:latest`.

```setup
kubectl create ns staging --dry-run=client -o yaml | kubectl apply -f -
kubectl delete deploy resource-pwobt5 -n staging 2>/dev/null || true
```

```verify
kubectl get deploy resource-pwobt5 -n staging -o jsonpath='{.spec.replicas}' | grep 3
kubectl get deploy resource-pwobt5 -n staging -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "redis:latest"
```


# Task 11: Create a Pod
Create a pod named `resource-75a7ok` in namespace `test` using image `busybox`.
Ensure it has a label `release=stable`.

```setup
kubectl create ns test --dry-run=client -o yaml | kubectl apply -f -
# Clean up if exists
kubectl delete pod resource-75a7ok -n test --force --grace-period=0 2>/dev/null || true
```

```verify
kubectl get pod resource-75a7ok -n test --no-headers | grep Running
kubectl get pod resource-75a7ok -n test -o jsonpath='{.metadata.labels.release}' | grep stable
```


# Task 12: Create a Pod
Create a pod named `resource-m6fgrt` in namespace `frontend` using image `busybox`.
Ensure it has a label `release=stable`.

```setup
kubectl create ns frontend --dry-run=client -o yaml | kubectl apply -f -
# Clean up if exists
kubectl delete pod resource-m6fgrt -n frontend --force --grace-period=0 2>/dev/null || true
```

```verify
kubectl get pod resource-m6fgrt -n frontend --no-headers | grep Running
kubectl get pod resource-m6fgrt -n frontend -o jsonpath='{.metadata.labels.release}' | grep stable
```


# Task 13: Create a Pod
Create a pod named `resource-9u7ew1` in namespace `prod` using image `memcached`.
Ensure it has a label `team=blue`.

```setup
kubectl create ns prod --dry-run=client -o yaml | kubectl apply -f -
# Clean up if exists
kubectl delete pod resource-9u7ew1 -n prod --force --grace-period=0 2>/dev/null || true
```

```verify
kubectl get pod resource-9u7ew1 -n prod --no-headers | grep Running
kubectl get pod resource-9u7ew1 -n prod -o jsonpath='{.metadata.labels.team}' | grep blue
```


# Task 14: Scale Deployment
Create a deployment named `resource-z7sm28` in namespace `frontend` using image `postgres`.
Scale it to `2` replicas.
Then, perform a rolling update to image `postgres:latest`.

```setup
kubectl create ns frontend --dry-run=client -o yaml | kubectl apply -f -
kubectl delete deploy resource-z7sm28 -n frontend 2>/dev/null || true
```

```verify
kubectl get deploy resource-z7sm28 -n frontend -o jsonpath='{.spec.replicas}' | grep 2
kubectl get deploy resource-z7sm28 -n frontend -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "postgres:latest"
```


# Task 15: Create a Pod
Create a pod named `resource-emn9n5` in namespace `dev` using image `postgres`.
Ensure it has a label `team=blue`.

```setup
kubectl create ns dev --dry-run=client -o yaml | kubectl apply -f -
# Clean up if exists
kubectl delete pod resource-emn9n5 -n dev --force --grace-period=0 2>/dev/null || true
```

```verify
kubectl get pod resource-emn9n5 -n dev --no-headers | grep Running
kubectl get pod resource-emn9n5 -n dev -o jsonpath='{.metadata.labels.team}' | grep blue
```


# Task 16: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-bntd4k` in namespace `staging`.
Request `100Mi` storage with access mode `ReadOnlyMany`.

```setup
kubectl create ns staging --dry-run=client -o yaml | kubectl apply -f -
kubectl delete pvc resource-bntd4k -n staging 2>/dev/null || true
```

```verify
kubectl get pvc resource-bntd4k -n staging -o jsonpath='{.spec.resources.requests.storage}' | grep 100Mi
kubectl get pvc resource-bntd4k -n staging -o jsonpath='{.spec.accessModes[0]}' | grep ReadOnlyMany
```


# Task 17: Node Maintenance
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


# Task 18: Node Maintenance
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


# Task 19: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-lklw59` in namespace `frontend`.
Request `5Gi` storage with access mode `ReadWriteOnce`.

```setup
kubectl create ns frontend --dry-run=client -o yaml | kubectl apply -f -
kubectl delete pvc resource-lklw59 -n frontend 2>/dev/null || true
```

```verify
kubectl get pvc resource-lklw59 -n frontend -o jsonpath='{.spec.resources.requests.storage}' | grep 5Gi
kubectl get pvc resource-lklw59 -n frontend -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteOnce
```


# Task 20: Scale Deployment
Create a deployment named `resource-rlbv2y` in namespace `test` using image `postgres`.
Scale it to `5` replicas.
Then, perform a rolling update to image `postgres:latest`.

```setup
kubectl create ns test --dry-run=client -o yaml | kubectl apply -f -
kubectl delete deploy resource-rlbv2y -n test 2>/dev/null || true
```

```verify
kubectl get deploy resource-rlbv2y -n test -o jsonpath='{.spec.replicas}' | grep 5
kubectl get deploy resource-rlbv2y -n test -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "postgres:latest"
```


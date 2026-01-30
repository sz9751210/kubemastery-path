---
id: auto-cka-9
title: Auto CKA Practice (Batch 9)
category: CKA
duration: 120 mins
---

# Auto CKA Practice (Batch 9)

This is an auto-generated exam to provide infinite practice questions.

# Task 1: Node Maintenance
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


# Task 2: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-d26alj` in namespace `backend`.
Request `1Gi` storage with access mode `ReadWriteMany`.

```setup
kubectl create ns backend --dry-run=client -o yaml | kubectl apply -f -
kubectl delete pvc resource-d26alj -n backend 2>/dev/null || true
```

```verify
kubectl get pvc resource-d26alj -n backend -o jsonpath='{.spec.resources.requests.storage}' | grep 1Gi
kubectl get pvc resource-d26alj -n backend -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteMany
```


# Task 3: Node Maintenance
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


# Task 4: Scale Deployment
Create a deployment named `resource-7suds0` in namespace `test` using image `node:14`.
Scale it to `5` replicas.
Then, perform a rolling update to image `node:14:latest`.

```setup
kubectl create ns test --dry-run=client -o yaml | kubectl apply -f -
kubectl delete deploy resource-7suds0 -n test 2>/dev/null || true
```

```verify
kubectl get deploy resource-7suds0 -n test -o jsonpath='{.spec.replicas}' | grep 5
kubectl get deploy resource-7suds0 -n test -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "node:14:latest"
```


# Task 5: Scale Deployment
Create a deployment named `resource-jqliq6` in namespace `test` using image `mysql`.
Scale it to `5` replicas.
Then, perform a rolling update to image `mysql:latest`.

```setup
kubectl create ns test --dry-run=client -o yaml | kubectl apply -f -
kubectl delete deploy resource-jqliq6 -n test 2>/dev/null || true
```

```verify
kubectl get deploy resource-jqliq6 -n test -o jsonpath='{.spec.replicas}' | grep 5
kubectl get deploy resource-jqliq6 -n test -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "mysql:latest"
```


# Task 6: Expose Service
Expose the deployment `resource-my5wc5-dep` as a Service named `resource-my5wc5` in namespace `staging`.
The service should listen on port `7981` and be of type `NodePort`.

```setup
kubectl create ns staging --dry-run=client -o yaml | kubectl apply -f -
kubectl create deployment resource-my5wc5-dep --image=nginx -n staging --dry-run=client -o yaml | kubectl apply -f -
kubectl delete svc resource-my5wc5 -n staging 2>/dev/null || true
```

```verify
kubectl get svc resource-my5wc5 -n staging -o jsonpath='{.spec.ports[0].port}' | grep 7981
kubectl get svc resource-my5wc5 -n staging -o jsonpath='{.spec.type}' | grep NodePort
```


# Task 7: Node Maintenance
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


# Task 8: Expose Service
Expose the deployment `resource-dnzvl8-dep` as a Service named `resource-dnzvl8` in namespace `backend`.
The service should listen on port `3310` and be of type `ClusterIP`.

```setup
kubectl create ns backend --dry-run=client -o yaml | kubectl apply -f -
kubectl create deployment resource-dnzvl8-dep --image=nginx -n backend --dry-run=client -o yaml | kubectl apply -f -
kubectl delete svc resource-dnzvl8 -n backend 2>/dev/null || true
```

```verify
kubectl get svc resource-dnzvl8 -n backend -o jsonpath='{.spec.ports[0].port}' | grep 3310
kubectl get svc resource-dnzvl8 -n backend -o jsonpath='{.spec.type}' | grep ClusterIP
```


# Task 9: Node Maintenance
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


# Task 10: Create a Pod
Create a pod named `resource-25mrmk` in namespace `frontend` using image `python:3.9`.
Ensure it has a label `tier=frontend`.

```setup
kubectl create ns frontend --dry-run=client -o yaml | kubectl apply -f -
# Clean up if exists
kubectl delete pod resource-25mrmk -n frontend --force --grace-period=0 2>/dev/null || true
```

```verify
kubectl get pod resource-25mrmk -n frontend --no-headers | grep Running
kubectl get pod resource-25mrmk -n frontend -o jsonpath='{.metadata.labels.tier}' | grep frontend
```


# Task 11: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-nycvdu` in namespace `frontend`.
Request `5Gi` storage with access mode `ReadOnlyMany`.

```setup
kubectl create ns frontend --dry-run=client -o yaml | kubectl apply -f -
kubectl delete pvc resource-nycvdu -n frontend 2>/dev/null || true
```

```verify
kubectl get pvc resource-nycvdu -n frontend -o jsonpath='{.spec.resources.requests.storage}' | grep 5Gi
kubectl get pvc resource-nycvdu -n frontend -o jsonpath='{.spec.accessModes[0]}' | grep ReadOnlyMany
```


# Task 12: Scale Deployment
Create a deployment named `resource-pvbju5` in namespace `prod` using image `node:14`.
Scale it to `4` replicas.
Then, perform a rolling update to image `node:14:latest`.

```setup
kubectl create ns prod --dry-run=client -o yaml | kubectl apply -f -
kubectl delete deploy resource-pvbju5 -n prod 2>/dev/null || true
```

```verify
kubectl get deploy resource-pvbju5 -n prod -o jsonpath='{.spec.replicas}' | grep 4
kubectl get deploy resource-pvbju5 -n prod -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "node:14:latest"
```


# Task 13: Expose Service
Expose the deployment `resource-vzc30q-dep` as a Service named `resource-vzc30q` in namespace `staging`.
The service should listen on port `6032` and be of type `NodePort`.

```setup
kubectl create ns staging --dry-run=client -o yaml | kubectl apply -f -
kubectl create deployment resource-vzc30q-dep --image=nginx -n staging --dry-run=client -o yaml | kubectl apply -f -
kubectl delete svc resource-vzc30q -n staging 2>/dev/null || true
```

```verify
kubectl get svc resource-vzc30q -n staging -o jsonpath='{.spec.ports[0].port}' | grep 6032
kubectl get svc resource-vzc30q -n staging -o jsonpath='{.spec.type}' | grep NodePort
```


# Task 14: Node Maintenance
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


# Task 15: Create a Pod
Create a pod named `resource-xd0jmi` in namespace `test` using image `postgres`.
Ensure it has a label `release=stable`.

```setup
kubectl create ns test --dry-run=client -o yaml | kubectl apply -f -
# Clean up if exists
kubectl delete pod resource-xd0jmi -n test --force --grace-period=0 2>/dev/null || true
```

```verify
kubectl get pod resource-xd0jmi -n test --no-headers | grep Running
kubectl get pod resource-xd0jmi -n test -o jsonpath='{.metadata.labels.release}' | grep stable
```


# Task 16: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-cgwstf` in namespace `test`.
Request `1Gi` storage with access mode `ReadWriteMany`.

```setup
kubectl create ns test --dry-run=client -o yaml | kubectl apply -f -
kubectl delete pvc resource-cgwstf -n test 2>/dev/null || true
```

```verify
kubectl get pvc resource-cgwstf -n test -o jsonpath='{.spec.resources.requests.storage}' | grep 1Gi
kubectl get pvc resource-cgwstf -n test -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteMany
```


# Task 17: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-vc1bfu` in namespace `frontend`.
Request `10Gi` storage with access mode `ReadWriteOnce`.

```setup
kubectl create ns frontend --dry-run=client -o yaml | kubectl apply -f -
kubectl delete pvc resource-vc1bfu -n frontend 2>/dev/null || true
```

```verify
kubectl get pvc resource-vc1bfu -n frontend -o jsonpath='{.spec.resources.requests.storage}' | grep 10Gi
kubectl get pvc resource-vc1bfu -n frontend -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteOnce
```


# Task 18: Node Maintenance
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


# Task 19: Scale Deployment
Create a deployment named `resource-geffq8` in namespace `prod` using image `memcached`.
Scale it to `3` replicas.
Then, perform a rolling update to image `memcached:latest`.

```setup
kubectl create ns prod --dry-run=client -o yaml | kubectl apply -f -
kubectl delete deploy resource-geffq8 -n prod 2>/dev/null || true
```

```verify
kubectl get deploy resource-geffq8 -n prod -o jsonpath='{.spec.replicas}' | grep 3
kubectl get deploy resource-geffq8 -n prod -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "memcached:latest"
```


# Task 20: Scale Deployment
Create a deployment named `resource-er52ib` in namespace `prod` using image `httpd`.
Scale it to `2` replicas.
Then, perform a rolling update to image `httpd:latest`.

```setup
kubectl create ns prod --dry-run=client -o yaml | kubectl apply -f -
kubectl delete deploy resource-er52ib -n prod 2>/dev/null || true
```

```verify
kubectl get deploy resource-er52ib -n prod -o jsonpath='{.spec.replicas}' | grep 2
kubectl get deploy resource-er52ib -n prod -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "httpd:latest"
```


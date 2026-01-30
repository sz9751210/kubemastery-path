---
id: auto-cka-11
title: Auto CKA Practice (Batch 11)
category: CKA
duration: 120 mins
---

# Auto CKA Practice (Batch 11)

This is an auto-generated exam to provide infinite practice questions.

# Task 1: Scale Deployment
Create a deployment named `resource-n0f6x1` in namespace `frontend` using image `redis`.
Scale it to `5` replicas.
Then, perform a rolling update to image `redis:latest`.

```setup
kubectl create ns frontend --dry-run=client -o yaml | kubectl apply -f -
kubectl delete deploy resource-n0f6x1 -n frontend 2>/dev/null || true
```

```verify
kubectl get deploy resource-n0f6x1 -n frontend -o jsonpath='{.spec.replicas}' | grep 5
kubectl get deploy resource-n0f6x1 -n frontend -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "redis:latest"
```


# Task 2: Node Maintenance
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


# Task 3: Create a Pod
Create a pod named `resource-4i1g93` in namespace `staging` using image `httpd`.
Ensure it has a label `app=web`.

```setup
kubectl create ns staging --dry-run=client -o yaml | kubectl apply -f -
# Clean up if exists
kubectl delete pod resource-4i1g93 -n staging --force --grace-period=0 2>/dev/null || true
```

```verify
kubectl get pod resource-4i1g93 -n staging --no-headers | grep Running
kubectl get pod resource-4i1g93 -n staging -o jsonpath='{.metadata.labels.app}' | grep web
```


# Task 4: Expose Service
Expose the deployment `resource-6rooj3-dep` as a Service named `resource-6rooj3` in namespace `backend`.
The service should listen on port `7752` and be of type `ClusterIP`.

```setup
kubectl create ns backend --dry-run=client -o yaml | kubectl apply -f -
kubectl create deployment resource-6rooj3-dep --image=nginx -n backend --dry-run=client -o yaml | kubectl apply -f -
kubectl delete svc resource-6rooj3 -n backend 2>/dev/null || true
```

```verify
kubectl get svc resource-6rooj3 -n backend -o jsonpath='{.spec.ports[0].port}' | grep 7752
kubectl get svc resource-6rooj3 -n backend -o jsonpath='{.spec.type}' | grep ClusterIP
```


# Task 5: Node Maintenance
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


# Task 6: Scale Deployment
Create a deployment named `resource-kqhpm8` in namespace `default` using image `memcached`.
Scale it to `5` replicas.
Then, perform a rolling update to image `memcached:latest`.

```setup
kubectl create ns default --dry-run=client -o yaml | kubectl apply -f -
kubectl delete deploy resource-kqhpm8 -n default 2>/dev/null || true
```

```verify
kubectl get deploy resource-kqhpm8 -n default -o jsonpath='{.spec.replicas}' | grep 5
kubectl get deploy resource-kqhpm8 -n default -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "memcached:latest"
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


# Task 8: Node Maintenance
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


# Task 9: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-9r5o17` in namespace `default`.
Request `2Gi` storage with access mode `ReadOnlyMany`.

```setup
kubectl create ns default --dry-run=client -o yaml | kubectl apply -f -
kubectl delete pvc resource-9r5o17 -n default 2>/dev/null || true
```

```verify
kubectl get pvc resource-9r5o17 -n default -o jsonpath='{.spec.resources.requests.storage}' | grep 2Gi
kubectl get pvc resource-9r5o17 -n default -o jsonpath='{.spec.accessModes[0]}' | grep ReadOnlyMany
```


# Task 10: Expose Service
Expose the deployment `resource-raeo8q-dep` as a Service named `resource-raeo8q` in namespace `prod`.
The service should listen on port `8243` and be of type `NodePort`.

```setup
kubectl create ns prod --dry-run=client -o yaml | kubectl apply -f -
kubectl create deployment resource-raeo8q-dep --image=nginx -n prod --dry-run=client -o yaml | kubectl apply -f -
kubectl delete svc resource-raeo8q -n prod 2>/dev/null || true
```

```verify
kubectl get svc resource-raeo8q -n prod -o jsonpath='{.spec.ports[0].port}' | grep 8243
kubectl get svc resource-raeo8q -n prod -o jsonpath='{.spec.type}' | grep NodePort
```


# Task 11: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-161eqq` in namespace `backend`.
Request `100Mi` storage with access mode `ReadWriteOnce`.

```setup
kubectl create ns backend --dry-run=client -o yaml | kubectl apply -f -
kubectl delete pvc resource-161eqq -n backend 2>/dev/null || true
```

```verify
kubectl get pvc resource-161eqq -n backend -o jsonpath='{.spec.resources.requests.storage}' | grep 100Mi
kubectl get pvc resource-161eqq -n backend -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteOnce
```


# Task 12: Node Maintenance
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


# Task 13: Expose Service
Expose the deployment `resource-elfukx-dep` as a Service named `resource-elfukx` in namespace `frontend`.
The service should listen on port `6434` and be of type `ClusterIP`.

```setup
kubectl create ns frontend --dry-run=client -o yaml | kubectl apply -f -
kubectl create deployment resource-elfukx-dep --image=nginx -n frontend --dry-run=client -o yaml | kubectl apply -f -
kubectl delete svc resource-elfukx -n frontend 2>/dev/null || true
```

```verify
kubectl get svc resource-elfukx -n frontend -o jsonpath='{.spec.ports[0].port}' | grep 6434
kubectl get svc resource-elfukx -n frontend -o jsonpath='{.spec.type}' | grep ClusterIP
```


# Task 14: Scale Deployment
Create a deployment named `resource-qzkbgu` in namespace `default` using image `postgres`.
Scale it to `2` replicas.
Then, perform a rolling update to image `postgres:latest`.

```setup
kubectl create ns default --dry-run=client -o yaml | kubectl apply -f -
kubectl delete deploy resource-qzkbgu -n default 2>/dev/null || true
```

```verify
kubectl get deploy resource-qzkbgu -n default -o jsonpath='{.spec.replicas}' | grep 2
kubectl get deploy resource-qzkbgu -n default -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "postgres:latest"
```


# Task 15: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-yw5w4f` in namespace `kube-system`.
Request `10Gi` storage with access mode `ReadWriteMany`.

```setup
kubectl create ns kube-system --dry-run=client -o yaml | kubectl apply -f -
kubectl delete pvc resource-yw5w4f -n kube-system 2>/dev/null || true
```

```verify
kubectl get pvc resource-yw5w4f -n kube-system -o jsonpath='{.spec.resources.requests.storage}' | grep 10Gi
kubectl get pvc resource-yw5w4f -n kube-system -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteMany
```


# Task 16: Node Maintenance
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


# Task 17: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-r53ss8` in namespace `kube-system`.
Request `100Mi` storage with access mode `ReadOnlyMany`.

```setup
kubectl create ns kube-system --dry-run=client -o yaml | kubectl apply -f -
kubectl delete pvc resource-r53ss8 -n kube-system 2>/dev/null || true
```

```verify
kubectl get pvc resource-r53ss8 -n kube-system -o jsonpath='{.spec.resources.requests.storage}' | grep 100Mi
kubectl get pvc resource-r53ss8 -n kube-system -o jsonpath='{.spec.accessModes[0]}' | grep ReadOnlyMany
```


# Task 18: Node Maintenance
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


# Task 19: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-fsje9q` in namespace `prod`.
Request `100Mi` storage with access mode `ReadWriteMany`.

```setup
kubectl create ns prod --dry-run=client -o yaml | kubectl apply -f -
kubectl delete pvc resource-fsje9q -n prod 2>/dev/null || true
```

```verify
kubectl get pvc resource-fsje9q -n prod -o jsonpath='{.spec.resources.requests.storage}' | grep 100Mi
kubectl get pvc resource-fsje9q -n prod -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteMany
```


# Task 20: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-qtaosj` in namespace `backend`.
Request `5Gi` storage with access mode `ReadOnlyMany`.

```setup
kubectl create ns backend --dry-run=client -o yaml | kubectl apply -f -
kubectl delete pvc resource-qtaosj -n backend 2>/dev/null || true
```

```verify
kubectl get pvc resource-qtaosj -n backend -o jsonpath='{.spec.resources.requests.storage}' | grep 5Gi
kubectl get pvc resource-qtaosj -n backend -o jsonpath='{.spec.accessModes[0]}' | grep ReadOnlyMany
```


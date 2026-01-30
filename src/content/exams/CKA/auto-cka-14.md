---
id: auto-cka-14
title: Auto CKA Practice (Batch 14)
category: CKA
duration: 120 mins
---

# Auto CKA Practice (Batch 14)

This is an auto-generated exam to provide infinite practice questions.

# Task 1: Create a Pod
Create a pod named `resource-5bdri5` in namespace `frontend` using image `alpine`.
Ensure it has a label `release=stable`.

```setup
kubectl create ns frontend --dry-run=client -o yaml | kubectl apply -f -
# Clean up if exists
kubectl delete pod resource-5bdri5 -n frontend --force --grace-period=0 2>/dev/null || true
```

```verify
kubectl get pod resource-5bdri5 -n frontend --no-headers | grep Running
kubectl get pod resource-5bdri5 -n frontend -o jsonpath='{.metadata.labels.release}' | grep stable
```


# Task 2: Create a Pod
Create a pod named `resource-3rb4k1` in namespace `prod` using image `mysql`.
Ensure it has a label `app=web`.

```setup
kubectl create ns prod --dry-run=client -o yaml | kubectl apply -f -
# Clean up if exists
kubectl delete pod resource-3rb4k1 -n prod --force --grace-period=0 2>/dev/null || true
```

```verify
kubectl get pod resource-3rb4k1 -n prod --no-headers | grep Running
kubectl get pod resource-3rb4k1 -n prod -o jsonpath='{.metadata.labels.app}' | grep web
```


# Task 3: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-78v90t` in namespace `backend`.
Request `10Gi` storage with access mode `ReadWriteMany`.

```setup
kubectl create ns backend --dry-run=client -o yaml | kubectl apply -f -
kubectl delete pvc resource-78v90t -n backend 2>/dev/null || true
```

```verify
kubectl get pvc resource-78v90t -n backend -o jsonpath='{.spec.resources.requests.storage}' | grep 10Gi
kubectl get pvc resource-78v90t -n backend -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteMany
```


# Task 4: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-er5onz` in namespace `default`.
Request `5Gi` storage with access mode `ReadWriteOnce`.

```setup
kubectl create ns default --dry-run=client -o yaml | kubectl apply -f -
kubectl delete pvc resource-er5onz -n default 2>/dev/null || true
```

```verify
kubectl get pvc resource-er5onz -n default -o jsonpath='{.spec.resources.requests.storage}' | grep 5Gi
kubectl get pvc resource-er5onz -n default -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteOnce
```


# Task 5: Expose Service
Expose the deployment `resource-3a9cdg-dep` as a Service named `resource-3a9cdg` in namespace `staging`.
The service should listen on port `3029` and be of type `NodePort`.

```setup
kubectl create ns staging --dry-run=client -o yaml | kubectl apply -f -
kubectl create deployment resource-3a9cdg-dep --image=nginx -n staging --dry-run=client -o yaml | kubectl apply -f -
kubectl delete svc resource-3a9cdg -n staging 2>/dev/null || true
```

```verify
kubectl get svc resource-3a9cdg -n staging -o jsonpath='{.spec.ports[0].port}' | grep 3029
kubectl get svc resource-3a9cdg -n staging -o jsonpath='{.spec.type}' | grep NodePort
```


# Task 6: Node Maintenance
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


# Task 7: Scale Deployment
Create a deployment named `resource-hytd3r` in namespace `backend` using image `mysql`.
Scale it to `2` replicas.
Then, perform a rolling update to image `mysql:latest`.

```setup
kubectl create ns backend --dry-run=client -o yaml | kubectl apply -f -
kubectl delete deploy resource-hytd3r -n backend 2>/dev/null || true
```

```verify
kubectl get deploy resource-hytd3r -n backend -o jsonpath='{.spec.replicas}' | grep 2
kubectl get deploy resource-hytd3r -n backend -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "mysql:latest"
```


# Task 8: Expose Service
Expose the deployment `resource-e83grv-dep` as a Service named `resource-e83grv` in namespace `kube-system`.
The service should listen on port `4494` and be of type `NodePort`.

```setup
kubectl create ns kube-system --dry-run=client -o yaml | kubectl apply -f -
kubectl create deployment resource-e83grv-dep --image=nginx -n kube-system --dry-run=client -o yaml | kubectl apply -f -
kubectl delete svc resource-e83grv -n kube-system 2>/dev/null || true
```

```verify
kubectl get svc resource-e83grv -n kube-system -o jsonpath='{.spec.ports[0].port}' | grep 4494
kubectl get svc resource-e83grv -n kube-system -o jsonpath='{.spec.type}' | grep NodePort
```


# Task 9: Expose Service
Expose the deployment `resource-5517cy-dep` as a Service named `resource-5517cy` in namespace `kube-system`.
The service should listen on port `7087` and be of type `NodePort`.

```setup
kubectl create ns kube-system --dry-run=client -o yaml | kubectl apply -f -
kubectl create deployment resource-5517cy-dep --image=nginx -n kube-system --dry-run=client -o yaml | kubectl apply -f -
kubectl delete svc resource-5517cy -n kube-system 2>/dev/null || true
```

```verify
kubectl get svc resource-5517cy -n kube-system -o jsonpath='{.spec.ports[0].port}' | grep 7087
kubectl get svc resource-5517cy -n kube-system -o jsonpath='{.spec.type}' | grep NodePort
```


# Task 10: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-3wg5r5` in namespace `dev`.
Request `100Mi` storage with access mode `ReadWriteOnce`.

```setup
kubectl create ns dev --dry-run=client -o yaml | kubectl apply -f -
kubectl delete pvc resource-3wg5r5 -n dev 2>/dev/null || true
```

```verify
kubectl get pvc resource-3wg5r5 -n dev -o jsonpath='{.spec.resources.requests.storage}' | grep 100Mi
kubectl get pvc resource-3wg5r5 -n dev -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteOnce
```


# Task 11: Node Maintenance
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


# Task 12: Node Maintenance
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


# Task 13: Node Maintenance
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


# Task 14: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-x9taqs` in namespace `dev`.
Request `1Gi` storage with access mode `ReadWriteOnce`.

```setup
kubectl create ns dev --dry-run=client -o yaml | kubectl apply -f -
kubectl delete pvc resource-x9taqs -n dev 2>/dev/null || true
```

```verify
kubectl get pvc resource-x9taqs -n dev -o jsonpath='{.spec.resources.requests.storage}' | grep 1Gi
kubectl get pvc resource-x9taqs -n dev -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteOnce
```


# Task 15: Create a Pod
Create a pod named `resource-n345ys` in namespace `test` using image `httpd`.
Ensure it has a label `team=blue`.

```setup
kubectl create ns test --dry-run=client -o yaml | kubectl apply -f -
# Clean up if exists
kubectl delete pod resource-n345ys -n test --force --grace-period=0 2>/dev/null || true
```

```verify
kubectl get pod resource-n345ys -n test --no-headers | grep Running
kubectl get pod resource-n345ys -n test -o jsonpath='{.metadata.labels.team}' | grep blue
```


# Task 16: Expose Service
Expose the deployment `resource-af2nyo-dep` as a Service named `resource-af2nyo` in namespace `backend`.
The service should listen on port `7671` and be of type `NodePort`.

```setup
kubectl create ns backend --dry-run=client -o yaml | kubectl apply -f -
kubectl create deployment resource-af2nyo-dep --image=nginx -n backend --dry-run=client -o yaml | kubectl apply -f -
kubectl delete svc resource-af2nyo -n backend 2>/dev/null || true
```

```verify
kubectl get svc resource-af2nyo -n backend -o jsonpath='{.spec.ports[0].port}' | grep 7671
kubectl get svc resource-af2nyo -n backend -o jsonpath='{.spec.type}' | grep NodePort
```


# Task 17: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-8i4dj1` in namespace `prod`.
Request `10Gi` storage with access mode `ReadWriteMany`.

```setup
kubectl create ns prod --dry-run=client -o yaml | kubectl apply -f -
kubectl delete pvc resource-8i4dj1 -n prod 2>/dev/null || true
```

```verify
kubectl get pvc resource-8i4dj1 -n prod -o jsonpath='{.spec.resources.requests.storage}' | grep 10Gi
kubectl get pvc resource-8i4dj1 -n prod -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteMany
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


# Task 19: Scale Deployment
Create a deployment named `resource-eb8jkq` in namespace `prod` using image `memcached`.
Scale it to `5` replicas.
Then, perform a rolling update to image `memcached:latest`.

```setup
kubectl create ns prod --dry-run=client -o yaml | kubectl apply -f -
kubectl delete deploy resource-eb8jkq -n prod 2>/dev/null || true
```

```verify
kubectl get deploy resource-eb8jkq -n prod -o jsonpath='{.spec.replicas}' | grep 5
kubectl get deploy resource-eb8jkq -n prod -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "memcached:latest"
```


# Task 20: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-dyrwee` in namespace `kube-system`.
Request `100Mi` storage with access mode `ReadWriteOnce`.

```setup
kubectl create ns kube-system --dry-run=client -o yaml | kubectl apply -f -
kubectl delete pvc resource-dyrwee -n kube-system 2>/dev/null || true
```

```verify
kubectl get pvc resource-dyrwee -n kube-system -o jsonpath='{.spec.resources.requests.storage}' | grep 100Mi
kubectl get pvc resource-dyrwee -n kube-system -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteOnce
```


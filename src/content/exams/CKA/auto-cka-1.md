---
id: auto-cka-1
title: Auto CKA Practice (Batch 1)
category: CKA
duration: 120 mins
---

# Auto CKA Practice (Batch 1)

This is an auto-generated exam to provide infinite practice questions.

# Task 1: Create a Pod
Create a pod named `resource-wa4tfj` in namespace `prod` using image `redis`.
Ensure it has a label `env=prod`.

```setup
kubectl create ns prod --dry-run=client -o yaml | kubectl apply -f -
# Clean up if exists
kubectl delete pod resource-wa4tfj -n prod --force --grace-period=0 2>/dev/null || true
```

```verify
kubectl get pod resource-wa4tfj -n prod --no-headers | grep Running
kubectl get pod resource-wa4tfj -n prod -o jsonpath='{.metadata.labels.env}' | grep prod
```


# Task 2: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-cabwwz` in namespace `dev`.
Request `2Gi` storage with access mode `ReadOnlyMany`.

```setup
kubectl create ns dev --dry-run=client -o yaml | kubectl apply -f -
kubectl delete pvc resource-cabwwz -n dev 2>/dev/null || true
```

```verify
kubectl get pvc resource-cabwwz -n dev -o jsonpath='{.spec.resources.requests.storage}' | grep 2Gi
kubectl get pvc resource-cabwwz -n dev -o jsonpath='{.spec.accessModes[0]}' | grep ReadOnlyMany
```


# Task 3: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-ynvtnm` in namespace `kube-system`.
Request `1Gi` storage with access mode `ReadOnlyMany`.

```setup
kubectl create ns kube-system --dry-run=client -o yaml | kubectl apply -f -
kubectl delete pvc resource-ynvtnm -n kube-system 2>/dev/null || true
```

```verify
kubectl get pvc resource-ynvtnm -n kube-system -o jsonpath='{.spec.resources.requests.storage}' | grep 1Gi
kubectl get pvc resource-ynvtnm -n kube-system -o jsonpath='{.spec.accessModes[0]}' | grep ReadOnlyMany
```


# Task 4: Scale Deployment
Create a deployment named `resource-s3ymjk` in namespace `prod` using image `nginx`.
Scale it to `2` replicas.
Then, perform a rolling update to image `nginx:latest`.

```setup
kubectl create ns prod --dry-run=client -o yaml | kubectl apply -f -
kubectl delete deploy resource-s3ymjk -n prod 2>/dev/null || true
```

```verify
kubectl get deploy resource-s3ymjk -n prod -o jsonpath='{.spec.replicas}' | grep 2
kubectl get deploy resource-s3ymjk -n prod -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "nginx:latest"
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


# Task 6: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-ot0kp1` in namespace `staging`.
Request `2Gi` storage with access mode `ReadWriteMany`.

```setup
kubectl create ns staging --dry-run=client -o yaml | kubectl apply -f -
kubectl delete pvc resource-ot0kp1 -n staging 2>/dev/null || true
```

```verify
kubectl get pvc resource-ot0kp1 -n staging -o jsonpath='{.spec.resources.requests.storage}' | grep 2Gi
kubectl get pvc resource-ot0kp1 -n staging -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteMany
```


# Task 7: Scale Deployment
Create a deployment named `resource-tx51yg` in namespace `backend` using image `mysql`.
Scale it to `3` replicas.
Then, perform a rolling update to image `mysql:latest`.

```setup
kubectl create ns backend --dry-run=client -o yaml | kubectl apply -f -
kubectl delete deploy resource-tx51yg -n backend 2>/dev/null || true
```

```verify
kubectl get deploy resource-tx51yg -n backend -o jsonpath='{.spec.replicas}' | grep 3
kubectl get deploy resource-tx51yg -n backend -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "mysql:latest"
```


# Task 8: Scale Deployment
Create a deployment named `resource-jkmiv4` in namespace `backend` using image `nginx`.
Scale it to `5` replicas.
Then, perform a rolling update to image `nginx:latest`.

```setup
kubectl create ns backend --dry-run=client -o yaml | kubectl apply -f -
kubectl delete deploy resource-jkmiv4 -n backend 2>/dev/null || true
```

```verify
kubectl get deploy resource-jkmiv4 -n backend -o jsonpath='{.spec.replicas}' | grep 5
kubectl get deploy resource-jkmiv4 -n backend -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "nginx:latest"
```


# Task 9: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-6b4k6y` in namespace `kube-system`.
Request `1Gi` storage with access mode `ReadWriteMany`.

```setup
kubectl create ns kube-system --dry-run=client -o yaml | kubectl apply -f -
kubectl delete pvc resource-6b4k6y -n kube-system 2>/dev/null || true
```

```verify
kubectl get pvc resource-6b4k6y -n kube-system -o jsonpath='{.spec.resources.requests.storage}' | grep 1Gi
kubectl get pvc resource-6b4k6y -n kube-system -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteMany
```


# Task 10: Scale Deployment
Create a deployment named `resource-a3uvnl` in namespace `staging` using image `nginx`.
Scale it to `3` replicas.
Then, perform a rolling update to image `nginx:latest`.

```setup
kubectl create ns staging --dry-run=client -o yaml | kubectl apply -f -
kubectl delete deploy resource-a3uvnl -n staging 2>/dev/null || true
```

```verify
kubectl get deploy resource-a3uvnl -n staging -o jsonpath='{.spec.replicas}' | grep 3
kubectl get deploy resource-a3uvnl -n staging -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "nginx:latest"
```


# Task 11: Create a Pod
Create a pod named `resource-j8hyct` in namespace `staging` using image `alpine`.
Ensure it has a label `tier=frontend`.

```setup
kubectl create ns staging --dry-run=client -o yaml | kubectl apply -f -
# Clean up if exists
kubectl delete pod resource-j8hyct -n staging --force --grace-period=0 2>/dev/null || true
```

```verify
kubectl get pod resource-j8hyct -n staging --no-headers | grep Running
kubectl get pod resource-j8hyct -n staging -o jsonpath='{.metadata.labels.tier}' | grep frontend
```


# Task 12: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-0f6mlc` in namespace `backend`.
Request `100Mi` storage with access mode `ReadWriteMany`.

```setup
kubectl create ns backend --dry-run=client -o yaml | kubectl apply -f -
kubectl delete pvc resource-0f6mlc -n backend 2>/dev/null || true
```

```verify
kubectl get pvc resource-0f6mlc -n backend -o jsonpath='{.spec.resources.requests.storage}' | grep 100Mi
kubectl get pvc resource-0f6mlc -n backend -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteMany
```


# Task 13: Expose Service
Expose the deployment `resource-kat4m0-dep` as a Service named `resource-kat4m0` in namespace `backend`.
The service should listen on port `6356` and be of type `NodePort`.

```setup
kubectl create ns backend --dry-run=client -o yaml | kubectl apply -f -
kubectl create deployment resource-kat4m0-dep --image=nginx -n backend --dry-run=client -o yaml | kubectl apply -f -
kubectl delete svc resource-kat4m0 -n backend 2>/dev/null || true
```

```verify
kubectl get svc resource-kat4m0 -n backend -o jsonpath='{.spec.ports[0].port}' | grep 6356
kubectl get svc resource-kat4m0 -n backend -o jsonpath='{.spec.type}' | grep NodePort
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


# Task 15: Expose Service
Expose the deployment `resource-xfztjj-dep` as a Service named `resource-xfztjj` in namespace `kube-system`.
The service should listen on port `5796` and be of type `ClusterIP`.

```setup
kubectl create ns kube-system --dry-run=client -o yaml | kubectl apply -f -
kubectl create deployment resource-xfztjj-dep --image=nginx -n kube-system --dry-run=client -o yaml | kubectl apply -f -
kubectl delete svc resource-xfztjj -n kube-system 2>/dev/null || true
```

```verify
kubectl get svc resource-xfztjj -n kube-system -o jsonpath='{.spec.ports[0].port}' | grep 5796
kubectl get svc resource-xfztjj -n kube-system -o jsonpath='{.spec.type}' | grep ClusterIP
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


# Task 17: Scale Deployment
Create a deployment named `resource-m58squ` in namespace `test` using image `python:3.9`.
Scale it to `2` replicas.
Then, perform a rolling update to image `python:3.9:latest`.

```setup
kubectl create ns test --dry-run=client -o yaml | kubectl apply -f -
kubectl delete deploy resource-m58squ -n test 2>/dev/null || true
```

```verify
kubectl get deploy resource-m58squ -n test -o jsonpath='{.spec.replicas}' | grep 2
kubectl get deploy resource-m58squ -n test -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "python:3.9:latest"
```


# Task 18: Scale Deployment
Create a deployment named `resource-k06siv` in namespace `kube-system` using image `python:3.9`.
Scale it to `5` replicas.
Then, perform a rolling update to image `python:3.9:latest`.

```setup
kubectl create ns kube-system --dry-run=client -o yaml | kubectl apply -f -
kubectl delete deploy resource-k06siv -n kube-system 2>/dev/null || true
```

```verify
kubectl get deploy resource-k06siv -n kube-system -o jsonpath='{.spec.replicas}' | grep 5
kubectl get deploy resource-k06siv -n kube-system -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "python:3.9:latest"
```


# Task 19: Expose Service
Expose the deployment `resource-zeid4j-dep` as a Service named `resource-zeid4j` in namespace `kube-system`.
The service should listen on port `4588` and be of type `ClusterIP`.

```setup
kubectl create ns kube-system --dry-run=client -o yaml | kubectl apply -f -
kubectl create deployment resource-zeid4j-dep --image=nginx -n kube-system --dry-run=client -o yaml | kubectl apply -f -
kubectl delete svc resource-zeid4j -n kube-system 2>/dev/null || true
```

```verify
kubectl get svc resource-zeid4j -n kube-system -o jsonpath='{.spec.ports[0].port}' | grep 4588
kubectl get svc resource-zeid4j -n kube-system -o jsonpath='{.spec.type}' | grep ClusterIP
```


# Task 20: Create a Pod
Create a pod named `resource-4glzo0` in namespace `staging` using image `node:14`.
Ensure it has a label `team=blue`.

```setup
kubectl create ns staging --dry-run=client -o yaml | kubectl apply -f -
# Clean up if exists
kubectl delete pod resource-4glzo0 -n staging --force --grace-period=0 2>/dev/null || true
```

```verify
kubectl get pod resource-4glzo0 -n staging --no-headers | grep Running
kubectl get pod resource-4glzo0 -n staging -o jsonpath='{.metadata.labels.team}' | grep blue
```


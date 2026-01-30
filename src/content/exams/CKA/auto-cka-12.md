---
id: auto-cka-12
title: Auto CKA Practice (Batch 12)
category: CKA
duration: 120 mins
---

# Auto CKA Practice (Batch 12)

This is an auto-generated exam to provide infinite practice questions.

# Task 1: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-9s3758` in namespace `prod`.
Request `100Mi` storage with access mode `ReadWriteMany`.

```setup
kubectl create ns prod --dry-run=client -o yaml | kubectl apply -f -
kubectl delete pvc resource-9s3758 -n prod 2>/dev/null || true
```

```verify
kubectl get pvc resource-9s3758 -n prod -o jsonpath='{.spec.resources.requests.storage}' | grep 100Mi
kubectl get pvc resource-9s3758 -n prod -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteMany
```


# Task 2: Scale Deployment
Create a deployment named `resource-lotqkw` in namespace `staging` using image `postgres`.
Scale it to `3` replicas.
Then, perform a rolling update to image `postgres:latest`.

```setup
kubectl create ns staging --dry-run=client -o yaml | kubectl apply -f -
kubectl delete deploy resource-lotqkw -n staging 2>/dev/null || true
```

```verify
kubectl get deploy resource-lotqkw -n staging -o jsonpath='{.spec.replicas}' | grep 3
kubectl get deploy resource-lotqkw -n staging -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "postgres:latest"
```


# Task 3: Node Maintenance
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


# Task 4: Node Maintenance
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


# Task 5: Expose Service
Expose the deployment `resource-j0cqbr-dep` as a Service named `resource-j0cqbr` in namespace `backend`.
The service should listen on port `5155` and be of type `NodePort`.

```setup
kubectl create ns backend --dry-run=client -o yaml | kubectl apply -f -
kubectl create deployment resource-j0cqbr-dep --image=nginx -n backend --dry-run=client -o yaml | kubectl apply -f -
kubectl delete svc resource-j0cqbr -n backend 2>/dev/null || true
```

```verify
kubectl get svc resource-j0cqbr -n backend -o jsonpath='{.spec.ports[0].port}' | grep 5155
kubectl get svc resource-j0cqbr -n backend -o jsonpath='{.spec.type}' | grep NodePort
```


# Task 6: Scale Deployment
Create a deployment named `resource-8ugvus` in namespace `frontend` using image `busybox`.
Scale it to `5` replicas.
Then, perform a rolling update to image `busybox:latest`.

```setup
kubectl create ns frontend --dry-run=client -o yaml | kubectl apply -f -
kubectl delete deploy resource-8ugvus -n frontend 2>/dev/null || true
```

```verify
kubectl get deploy resource-8ugvus -n frontend -o jsonpath='{.spec.replicas}' | grep 5
kubectl get deploy resource-8ugvus -n frontend -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "busybox:latest"
```


# Task 7: Create a Pod
Create a pod named `resource-ufrib3` in namespace `dev` using image `alpine`.
Ensure it has a label `app=web`.

```setup
kubectl create ns dev --dry-run=client -o yaml | kubectl apply -f -
# Clean up if exists
kubectl delete pod resource-ufrib3 -n dev --force --grace-period=0 2>/dev/null || true
```

```verify
kubectl get pod resource-ufrib3 -n dev --no-headers | grep Running
kubectl get pod resource-ufrib3 -n dev -o jsonpath='{.metadata.labels.app}' | grep web
```


# Task 8: Expose Service
Expose the deployment `resource-fcw8l4-dep` as a Service named `resource-fcw8l4` in namespace `kube-system`.
The service should listen on port `8943` and be of type `NodePort`.

```setup
kubectl create ns kube-system --dry-run=client -o yaml | kubectl apply -f -
kubectl create deployment resource-fcw8l4-dep --image=nginx -n kube-system --dry-run=client -o yaml | kubectl apply -f -
kubectl delete svc resource-fcw8l4 -n kube-system 2>/dev/null || true
```

```verify
kubectl get svc resource-fcw8l4 -n kube-system -o jsonpath='{.spec.ports[0].port}' | grep 8943
kubectl get svc resource-fcw8l4 -n kube-system -o jsonpath='{.spec.type}' | grep NodePort
```


# Task 9: Scale Deployment
Create a deployment named `resource-7748o6` in namespace `test` using image `python:3.9`.
Scale it to `2` replicas.
Then, perform a rolling update to image `python:3.9:latest`.

```setup
kubectl create ns test --dry-run=client -o yaml | kubectl apply -f -
kubectl delete deploy resource-7748o6 -n test 2>/dev/null || true
```

```verify
kubectl get deploy resource-7748o6 -n test -o jsonpath='{.spec.replicas}' | grep 2
kubectl get deploy resource-7748o6 -n test -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "python:3.9:latest"
```


# Task 10: Create a Pod
Create a pod named `resource-0k2tjk` in namespace `default` using image `httpd`.
Ensure it has a label `team=blue`.

```setup
kubectl create ns default --dry-run=client -o yaml | kubectl apply -f -
# Clean up if exists
kubectl delete pod resource-0k2tjk -n default --force --grace-period=0 2>/dev/null || true
```

```verify
kubectl get pod resource-0k2tjk -n default --no-headers | grep Running
kubectl get pod resource-0k2tjk -n default -o jsonpath='{.metadata.labels.team}' | grep blue
```


# Task 11: Create a Pod
Create a pod named `resource-f7c3tr` in namespace `backend` using image `mysql`.
Ensure it has a label `env=prod`.

```setup
kubectl create ns backend --dry-run=client -o yaml | kubectl apply -f -
# Clean up if exists
kubectl delete pod resource-f7c3tr -n backend --force --grace-period=0 2>/dev/null || true
```

```verify
kubectl get pod resource-f7c3tr -n backend --no-headers | grep Running
kubectl get pod resource-f7c3tr -n backend -o jsonpath='{.metadata.labels.env}' | grep prod
```


# Task 12: Node Maintenance
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


# Task 14: Expose Service
Expose the deployment `resource-miup0j-dep` as a Service named `resource-miup0j` in namespace `kube-system`.
The service should listen on port `8306` and be of type `ClusterIP`.

```setup
kubectl create ns kube-system --dry-run=client -o yaml | kubectl apply -f -
kubectl create deployment resource-miup0j-dep --image=nginx -n kube-system --dry-run=client -o yaml | kubectl apply -f -
kubectl delete svc resource-miup0j -n kube-system 2>/dev/null || true
```

```verify
kubectl get svc resource-miup0j -n kube-system -o jsonpath='{.spec.ports[0].port}' | grep 8306
kubectl get svc resource-miup0j -n kube-system -o jsonpath='{.spec.type}' | grep ClusterIP
```


# Task 15: Create a Pod
Create a pod named `resource-0r32tc` in namespace `dev` using image `nginx`.
Ensure it has a label `tier=frontend`.

```setup
kubectl create ns dev --dry-run=client -o yaml | kubectl apply -f -
# Clean up if exists
kubectl delete pod resource-0r32tc -n dev --force --grace-period=0 2>/dev/null || true
```

```verify
kubectl get pod resource-0r32tc -n dev --no-headers | grep Running
kubectl get pod resource-0r32tc -n dev -o jsonpath='{.metadata.labels.tier}' | grep frontend
```


# Task 16: Expose Service
Expose the deployment `resource-zwionp-dep` as a Service named `resource-zwionp` in namespace `dev`.
The service should listen on port `3026` and be of type `NodePort`.

```setup
kubectl create ns dev --dry-run=client -o yaml | kubectl apply -f -
kubectl create deployment resource-zwionp-dep --image=nginx -n dev --dry-run=client -o yaml | kubectl apply -f -
kubectl delete svc resource-zwionp -n dev 2>/dev/null || true
```

```verify
kubectl get svc resource-zwionp -n dev -o jsonpath='{.spec.ports[0].port}' | grep 3026
kubectl get svc resource-zwionp -n dev -o jsonpath='{.spec.type}' | grep NodePort
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
Create a PersistentVolumeClaim named `resource-lkg4ap` in namespace `frontend`.
Request `100Mi` storage with access mode `ReadWriteMany`.

```setup
kubectl create ns frontend --dry-run=client -o yaml | kubectl apply -f -
kubectl delete pvc resource-lkg4ap -n frontend 2>/dev/null || true
```

```verify
kubectl get pvc resource-lkg4ap -n frontend -o jsonpath='{.spec.resources.requests.storage}' | grep 100Mi
kubectl get pvc resource-lkg4ap -n frontend -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteMany
```


# Task 20: Node Maintenance
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


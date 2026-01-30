---
id: auto-cka-18
title: Auto CKA Practice (Batch 18)
category: CKA
duration: 120 mins
---

# Auto CKA Practice (Batch 18)

This is an auto-generated exam to provide infinite practice questions.

# Task 1: Create a Pod
Create a pod named `resource-66gkjh` in namespace `prod` using image `mysql`.
Ensure it has a label `app=web`.

```setup
kubectl create ns prod --dry-run=client -o yaml | kubectl apply -f -
# Clean up if exists
kubectl delete pod resource-66gkjh -n prod --force --grace-period=0 2>/dev/null || true
```

```verify
kubectl get pod resource-66gkjh -n prod --no-headers | grep Running
kubectl get pod resource-66gkjh -n prod -o jsonpath='{.metadata.labels.app}' | grep web
```


# Task 2: Node Maintenance
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


# Task 3: Create a Pod
Create a pod named `resource-2umvx8` in namespace `test` using image `postgres`.
Ensure it has a label `release=stable`.

```setup
kubectl create ns test --dry-run=client -o yaml | kubectl apply -f -
# Clean up if exists
kubectl delete pod resource-2umvx8 -n test --force --grace-period=0 2>/dev/null || true
```

```verify
kubectl get pod resource-2umvx8 -n test --no-headers | grep Running
kubectl get pod resource-2umvx8 -n test -o jsonpath='{.metadata.labels.release}' | grep stable
```


# Task 4: Node Maintenance
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
Create a deployment named `resource-4bp2qs` in namespace `frontend` using image `httpd`.
Scale it to `5` replicas.
Then, perform a rolling update to image `httpd:latest`.

```setup
kubectl create ns frontend --dry-run=client -o yaml | kubectl apply -f -
kubectl delete deploy resource-4bp2qs -n frontend 2>/dev/null || true
```

```verify
kubectl get deploy resource-4bp2qs -n frontend -o jsonpath='{.spec.replicas}' | grep 5
kubectl get deploy resource-4bp2qs -n frontend -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "httpd:latest"
```


# Task 7: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-l59e86` in namespace `test`.
Request `1Gi` storage with access mode `ReadOnlyMany`.

```setup
kubectl create ns test --dry-run=client -o yaml | kubectl apply -f -
kubectl delete pvc resource-l59e86 -n test 2>/dev/null || true
```

```verify
kubectl get pvc resource-l59e86 -n test -o jsonpath='{.spec.resources.requests.storage}' | grep 1Gi
kubectl get pvc resource-l59e86 -n test -o jsonpath='{.spec.accessModes[0]}' | grep ReadOnlyMany
```


# Task 8: Create a Pod
Create a pod named `resource-vaihxb` in namespace `kube-system` using image `node:14`.
Ensure it has a label `env=prod`.

```setup
kubectl create ns kube-system --dry-run=client -o yaml | kubectl apply -f -
# Clean up if exists
kubectl delete pod resource-vaihxb -n kube-system --force --grace-period=0 2>/dev/null || true
```

```verify
kubectl get pod resource-vaihxb -n kube-system --no-headers | grep Running
kubectl get pod resource-vaihxb -n kube-system -o jsonpath='{.metadata.labels.env}' | grep prod
```


# Task 9: Scale Deployment
Create a deployment named `resource-r7y0pa` in namespace `staging` using image `alpine`.
Scale it to `2` replicas.
Then, perform a rolling update to image `alpine:latest`.

```setup
kubectl create ns staging --dry-run=client -o yaml | kubectl apply -f -
kubectl delete deploy resource-r7y0pa -n staging 2>/dev/null || true
```

```verify
kubectl get deploy resource-r7y0pa -n staging -o jsonpath='{.spec.replicas}' | grep 2
kubectl get deploy resource-r7y0pa -n staging -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "alpine:latest"
```


# Task 10: Scale Deployment
Create a deployment named `resource-trx7jm` in namespace `prod` using image `postgres`.
Scale it to `2` replicas.
Then, perform a rolling update to image `postgres:latest`.

```setup
kubectl create ns prod --dry-run=client -o yaml | kubectl apply -f -
kubectl delete deploy resource-trx7jm -n prod 2>/dev/null || true
```

```verify
kubectl get deploy resource-trx7jm -n prod -o jsonpath='{.spec.replicas}' | grep 2
kubectl get deploy resource-trx7jm -n prod -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "postgres:latest"
```


# Task 11: Create a Pod
Create a pod named `resource-cvjv7x` in namespace `backend` using image `postgres`.
Ensure it has a label `app=web`.

```setup
kubectl create ns backend --dry-run=client -o yaml | kubectl apply -f -
# Clean up if exists
kubectl delete pod resource-cvjv7x -n backend --force --grace-period=0 2>/dev/null || true
```

```verify
kubectl get pod resource-cvjv7x -n backend --no-headers | grep Running
kubectl get pod resource-cvjv7x -n backend -o jsonpath='{.metadata.labels.app}' | grep web
```


# Task 12: Scale Deployment
Create a deployment named `resource-kx3952` in namespace `staging` using image `alpine`.
Scale it to `4` replicas.
Then, perform a rolling update to image `alpine:latest`.

```setup
kubectl create ns staging --dry-run=client -o yaml | kubectl apply -f -
kubectl delete deploy resource-kx3952 -n staging 2>/dev/null || true
```

```verify
kubectl get deploy resource-kx3952 -n staging -o jsonpath='{.spec.replicas}' | grep 4
kubectl get deploy resource-kx3952 -n staging -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "alpine:latest"
```


# Task 13: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-mvm17s` in namespace `backend`.
Request `100Mi` storage with access mode `ReadWriteOnce`.

```setup
kubectl create ns backend --dry-run=client -o yaml | kubectl apply -f -
kubectl delete pvc resource-mvm17s -n backend 2>/dev/null || true
```

```verify
kubectl get pvc resource-mvm17s -n backend -o jsonpath='{.spec.resources.requests.storage}' | grep 100Mi
kubectl get pvc resource-mvm17s -n backend -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteOnce
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


# Task 15: Scale Deployment
Create a deployment named `resource-73g1r8` in namespace `kube-system` using image `redis`.
Scale it to `2` replicas.
Then, perform a rolling update to image `redis:latest`.

```setup
kubectl create ns kube-system --dry-run=client -o yaml | kubectl apply -f -
kubectl delete deploy resource-73g1r8 -n kube-system 2>/dev/null || true
```

```verify
kubectl get deploy resource-73g1r8 -n kube-system -o jsonpath='{.spec.replicas}' | grep 2
kubectl get deploy resource-73g1r8 -n kube-system -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "redis:latest"
```


# Task 16: Expose Service
Expose the deployment `resource-33banv-dep` as a Service named `resource-33banv` in namespace `dev`.
The service should listen on port `7705` and be of type `NodePort`.

```setup
kubectl create ns dev --dry-run=client -o yaml | kubectl apply -f -
kubectl create deployment resource-33banv-dep --image=nginx -n dev --dry-run=client -o yaml | kubectl apply -f -
kubectl delete svc resource-33banv -n dev 2>/dev/null || true
```

```verify
kubectl get svc resource-33banv -n dev -o jsonpath='{.spec.ports[0].port}' | grep 7705
kubectl get svc resource-33banv -n dev -o jsonpath='{.spec.type}' | grep NodePort
```


# Task 17: Expose Service
Expose the deployment `resource-y2ziyw-dep` as a Service named `resource-y2ziyw` in namespace `test`.
The service should listen on port `5918` and be of type `NodePort`.

```setup
kubectl create ns test --dry-run=client -o yaml | kubectl apply -f -
kubectl create deployment resource-y2ziyw-dep --image=nginx -n test --dry-run=client -o yaml | kubectl apply -f -
kubectl delete svc resource-y2ziyw -n test 2>/dev/null || true
```

```verify
kubectl get svc resource-y2ziyw -n test -o jsonpath='{.spec.ports[0].port}' | grep 5918
kubectl get svc resource-y2ziyw -n test -o jsonpath='{.spec.type}' | grep NodePort
```


# Task 18: Scale Deployment
Create a deployment named `resource-bwpnuc` in namespace `test` using image `nginx`.
Scale it to `4` replicas.
Then, perform a rolling update to image `nginx:latest`.

```setup
kubectl create ns test --dry-run=client -o yaml | kubectl apply -f -
kubectl delete deploy resource-bwpnuc -n test 2>/dev/null || true
```

```verify
kubectl get deploy resource-bwpnuc -n test -o jsonpath='{.spec.replicas}' | grep 4
kubectl get deploy resource-bwpnuc -n test -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "nginx:latest"
```


# Task 19: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-4ttzeo` in namespace `kube-system`.
Request `5Gi` storage with access mode `ReadOnlyMany`.

```setup
kubectl create ns kube-system --dry-run=client -o yaml | kubectl apply -f -
kubectl delete pvc resource-4ttzeo -n kube-system 2>/dev/null || true
```

```verify
kubectl get pvc resource-4ttzeo -n kube-system -o jsonpath='{.spec.resources.requests.storage}' | grep 5Gi
kubectl get pvc resource-4ttzeo -n kube-system -o jsonpath='{.spec.accessModes[0]}' | grep ReadOnlyMany
```


# Task 20: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-3sd9s1` in namespace `frontend`.
Request `100Mi` storage with access mode `ReadWriteMany`.

```setup
kubectl create ns frontend --dry-run=client -o yaml | kubectl apply -f -
kubectl delete pvc resource-3sd9s1 -n frontend 2>/dev/null || true
```

```verify
kubectl get pvc resource-3sd9s1 -n frontend -o jsonpath='{.spec.resources.requests.storage}' | grep 100Mi
kubectl get pvc resource-3sd9s1 -n frontend -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteMany
```


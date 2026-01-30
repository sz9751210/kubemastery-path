---
id: auto-cka-6
title: Auto CKA Practice (Batch 6)
category: CKA
duration: 120 mins
---

# Auto CKA Practice (Batch 6)

This is an auto-generated exam to provide infinite practice questions.

# Task 1: Expose Service
Expose the deployment `resource-c029o1-dep` as a Service named `resource-c029o1` in namespace `prod`.
The service should listen on port `7059` and be of type `NodePort`.

```setup
kubectl create ns prod --dry-run=client -o yaml | kubectl apply -f -
kubectl create deployment resource-c029o1-dep --image=nginx -n prod --dry-run=client -o yaml | kubectl apply -f -
kubectl delete svc resource-c029o1 -n prod 2>/dev/null || true
```

```verify
kubectl get svc resource-c029o1 -n prod -o jsonpath='{.spec.ports[0].port}' | grep 7059
kubectl get svc resource-c029o1 -n prod -o jsonpath='{.spec.type}' | grep NodePort
```


# Task 2: Expose Service
Expose the deployment `resource-la0qh2-dep` as a Service named `resource-la0qh2` in namespace `frontend`.
The service should listen on port `8640` and be of type `NodePort`.

```setup
kubectl create ns frontend --dry-run=client -o yaml | kubectl apply -f -
kubectl create deployment resource-la0qh2-dep --image=nginx -n frontend --dry-run=client -o yaml | kubectl apply -f -
kubectl delete svc resource-la0qh2 -n frontend 2>/dev/null || true
```

```verify
kubectl get svc resource-la0qh2 -n frontend -o jsonpath='{.spec.ports[0].port}' | grep 8640
kubectl get svc resource-la0qh2 -n frontend -o jsonpath='{.spec.type}' | grep NodePort
```


# Task 3: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-9wb1q1` in namespace `kube-system`.
Request `5Gi` storage with access mode `ReadWriteMany`.

```setup
kubectl create ns kube-system --dry-run=client -o yaml | kubectl apply -f -
kubectl delete pvc resource-9wb1q1 -n kube-system 2>/dev/null || true
```

```verify
kubectl get pvc resource-9wb1q1 -n kube-system -o jsonpath='{.spec.resources.requests.storage}' | grep 5Gi
kubectl get pvc resource-9wb1q1 -n kube-system -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteMany
```


# Task 4: Scale Deployment
Create a deployment named `resource-o4pnf9` in namespace `staging` using image `memcached`.
Scale it to `4` replicas.
Then, perform a rolling update to image `memcached:latest`.

```setup
kubectl create ns staging --dry-run=client -o yaml | kubectl apply -f -
kubectl delete deploy resource-o4pnf9 -n staging 2>/dev/null || true
```

```verify
kubectl get deploy resource-o4pnf9 -n staging -o jsonpath='{.spec.replicas}' | grep 4
kubectl get deploy resource-o4pnf9 -n staging -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "memcached:latest"
```


# Task 5: Expose Service
Expose the deployment `resource-p8t35u-dep` as a Service named `resource-p8t35u` in namespace `dev`.
The service should listen on port `7733` and be of type `NodePort`.

```setup
kubectl create ns dev --dry-run=client -o yaml | kubectl apply -f -
kubectl create deployment resource-p8t35u-dep --image=nginx -n dev --dry-run=client -o yaml | kubectl apply -f -
kubectl delete svc resource-p8t35u -n dev 2>/dev/null || true
```

```verify
kubectl get svc resource-p8t35u -n dev -o jsonpath='{.spec.ports[0].port}' | grep 7733
kubectl get svc resource-p8t35u -n dev -o jsonpath='{.spec.type}' | grep NodePort
```


# Task 6: Scale Deployment
Create a deployment named `resource-wv998l` in namespace `default` using image `node:14`.
Scale it to `2` replicas.
Then, perform a rolling update to image `node:14:latest`.

```setup
kubectl create ns default --dry-run=client -o yaml | kubectl apply -f -
kubectl delete deploy resource-wv998l -n default 2>/dev/null || true
```

```verify
kubectl get deploy resource-wv998l -n default -o jsonpath='{.spec.replicas}' | grep 2
kubectl get deploy resource-wv998l -n default -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "node:14:latest"
```


# Task 7: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-hezmww` in namespace `staging`.
Request `10Gi` storage with access mode `ReadOnlyMany`.

```setup
kubectl create ns staging --dry-run=client -o yaml | kubectl apply -f -
kubectl delete pvc resource-hezmww -n staging 2>/dev/null || true
```

```verify
kubectl get pvc resource-hezmww -n staging -o jsonpath='{.spec.resources.requests.storage}' | grep 10Gi
kubectl get pvc resource-hezmww -n staging -o jsonpath='{.spec.accessModes[0]}' | grep ReadOnlyMany
```


# Task 8: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-vqzo3s` in namespace `backend`.
Request `2Gi` storage with access mode `ReadWriteMany`.

```setup
kubectl create ns backend --dry-run=client -o yaml | kubectl apply -f -
kubectl delete pvc resource-vqzo3s -n backend 2>/dev/null || true
```

```verify
kubectl get pvc resource-vqzo3s -n backend -o jsonpath='{.spec.resources.requests.storage}' | grep 2Gi
kubectl get pvc resource-vqzo3s -n backend -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteMany
```


# Task 9: Node Maintenance
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


# Task 10: Node Maintenance
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


# Task 11: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-cb6wxk` in namespace `test`.
Request `1Gi` storage with access mode `ReadWriteOnce`.

```setup
kubectl create ns test --dry-run=client -o yaml | kubectl apply -f -
kubectl delete pvc resource-cb6wxk -n test 2>/dev/null || true
```

```verify
kubectl get pvc resource-cb6wxk -n test -o jsonpath='{.spec.resources.requests.storage}' | grep 1Gi
kubectl get pvc resource-cb6wxk -n test -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteOnce
```


# Task 12: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-w5r1ed` in namespace `backend`.
Request `1Gi` storage with access mode `ReadWriteOnce`.

```setup
kubectl create ns backend --dry-run=client -o yaml | kubectl apply -f -
kubectl delete pvc resource-w5r1ed -n backend 2>/dev/null || true
```

```verify
kubectl get pvc resource-w5r1ed -n backend -o jsonpath='{.spec.resources.requests.storage}' | grep 1Gi
kubectl get pvc resource-w5r1ed -n backend -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteOnce
```


# Task 13: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-1dxcca` in namespace `frontend`.
Request `1Gi` storage with access mode `ReadWriteMany`.

```setup
kubectl create ns frontend --dry-run=client -o yaml | kubectl apply -f -
kubectl delete pvc resource-1dxcca -n frontend 2>/dev/null || true
```

```verify
kubectl get pvc resource-1dxcca -n frontend -o jsonpath='{.spec.resources.requests.storage}' | grep 1Gi
kubectl get pvc resource-1dxcca -n frontend -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteMany
```


# Task 14: Expose Service
Expose the deployment `resource-9pamkd-dep` as a Service named `resource-9pamkd` in namespace `dev`.
The service should listen on port `7388` and be of type `ClusterIP`.

```setup
kubectl create ns dev --dry-run=client -o yaml | kubectl apply -f -
kubectl create deployment resource-9pamkd-dep --image=nginx -n dev --dry-run=client -o yaml | kubectl apply -f -
kubectl delete svc resource-9pamkd -n dev 2>/dev/null || true
```

```verify
kubectl get svc resource-9pamkd -n dev -o jsonpath='{.spec.ports[0].port}' | grep 7388
kubectl get svc resource-9pamkd -n dev -o jsonpath='{.spec.type}' | grep ClusterIP
```


# Task 15: Scale Deployment
Create a deployment named `resource-hdpu1x` in namespace `default` using image `nginx`.
Scale it to `5` replicas.
Then, perform a rolling update to image `nginx:latest`.

```setup
kubectl create ns default --dry-run=client -o yaml | kubectl apply -f -
kubectl delete deploy resource-hdpu1x -n default 2>/dev/null || true
```

```verify
kubectl get deploy resource-hdpu1x -n default -o jsonpath='{.spec.replicas}' | grep 5
kubectl get deploy resource-hdpu1x -n default -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "nginx:latest"
```


# Task 16: Scale Deployment
Create a deployment named `resource-a774y7` in namespace `frontend` using image `httpd`.
Scale it to `2` replicas.
Then, perform a rolling update to image `httpd:latest`.

```setup
kubectl create ns frontend --dry-run=client -o yaml | kubectl apply -f -
kubectl delete deploy resource-a774y7 -n frontend 2>/dev/null || true
```

```verify
kubectl get deploy resource-a774y7 -n frontend -o jsonpath='{.spec.replicas}' | grep 2
kubectl get deploy resource-a774y7 -n frontend -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "httpd:latest"
```


# Task 17: Scale Deployment
Create a deployment named `resource-c0fiso` in namespace `test` using image `nginx`.
Scale it to `2` replicas.
Then, perform a rolling update to image `nginx:latest`.

```setup
kubectl create ns test --dry-run=client -o yaml | kubectl apply -f -
kubectl delete deploy resource-c0fiso -n test 2>/dev/null || true
```

```verify
kubectl get deploy resource-c0fiso -n test -o jsonpath='{.spec.replicas}' | grep 2
kubectl get deploy resource-c0fiso -n test -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "nginx:latest"
```


# Task 18: Scale Deployment
Create a deployment named `resource-gusota` in namespace `default` using image `nginx`.
Scale it to `2` replicas.
Then, perform a rolling update to image `nginx:latest`.

```setup
kubectl create ns default --dry-run=client -o yaml | kubectl apply -f -
kubectl delete deploy resource-gusota -n default 2>/dev/null || true
```

```verify
kubectl get deploy resource-gusota -n default -o jsonpath='{.spec.replicas}' | grep 2
kubectl get deploy resource-gusota -n default -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "nginx:latest"
```


# Task 19: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-swuxj5` in namespace `test`.
Request `10Gi` storage with access mode `ReadOnlyMany`.

```setup
kubectl create ns test --dry-run=client -o yaml | kubectl apply -f -
kubectl delete pvc resource-swuxj5 -n test 2>/dev/null || true
```

```verify
kubectl get pvc resource-swuxj5 -n test -o jsonpath='{.spec.resources.requests.storage}' | grep 10Gi
kubectl get pvc resource-swuxj5 -n test -o jsonpath='{.spec.accessModes[0]}' | grep ReadOnlyMany
```


# Task 20: Create a Pod
Create a pod named `resource-dask0p` in namespace `kube-system` using image `nginx`.
Ensure it has a label `app=web`.

```setup
kubectl create ns kube-system --dry-run=client -o yaml | kubectl apply -f -
# Clean up if exists
kubectl delete pod resource-dask0p -n kube-system --force --grace-period=0 2>/dev/null || true
```

```verify
kubectl get pod resource-dask0p -n kube-system --no-headers | grep Running
kubectl get pod resource-dask0p -n kube-system -o jsonpath='{.metadata.labels.app}' | grep web
```


---
id: auto-cka-7
title: Auto CKA Practice (Batch 7)
category: CKA
duration: 120 mins
---

# Auto CKA Practice (Batch 7)

This is an auto-generated exam to provide infinite practice questions.

# Task 1: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-f44cos` in namespace `staging`.
Request `2Gi` storage with access mode `ReadOnlyMany`.

```setup
kubectl create ns staging --dry-run=client -o yaml | kubectl apply -f -
kubectl delete pvc resource-f44cos -n staging 2>/dev/null || true
```

```verify
kubectl get pvc resource-f44cos -n staging -o jsonpath='{.spec.resources.requests.storage}' | grep 2Gi
kubectl get pvc resource-f44cos -n staging -o jsonpath='{.spec.accessModes[0]}' | grep ReadOnlyMany
```


# Task 2: Create a Pod
Create a pod named `resource-0u1gl0` in namespace `kube-system` using image `postgres`.
Ensure it has a label `app=web`.

```setup
kubectl create ns kube-system --dry-run=client -o yaml | kubectl apply -f -
# Clean up if exists
kubectl delete pod resource-0u1gl0 -n kube-system --force --grace-period=0 2>/dev/null || true
```

```verify
kubectl get pod resource-0u1gl0 -n kube-system --no-headers | grep Running
kubectl get pod resource-0u1gl0 -n kube-system -o jsonpath='{.metadata.labels.app}' | grep web
```


# Task 3: Create a Pod
Create a pod named `resource-ux3m1i` in namespace `default` using image `alpine`.
Ensure it has a label `env=prod`.

```setup
kubectl create ns default --dry-run=client -o yaml | kubectl apply -f -
# Clean up if exists
kubectl delete pod resource-ux3m1i -n default --force --grace-period=0 2>/dev/null || true
```

```verify
kubectl get pod resource-ux3m1i -n default --no-headers | grep Running
kubectl get pod resource-ux3m1i -n default -o jsonpath='{.metadata.labels.env}' | grep prod
```


# Task 4: Scale Deployment
Create a deployment named `resource-lu9cfd` in namespace `default` using image `busybox`.
Scale it to `5` replicas.
Then, perform a rolling update to image `busybox:latest`.

```setup
kubectl create ns default --dry-run=client -o yaml | kubectl apply -f -
kubectl delete deploy resource-lu9cfd -n default 2>/dev/null || true
```

```verify
kubectl get deploy resource-lu9cfd -n default -o jsonpath='{.spec.replicas}' | grep 5
kubectl get deploy resource-lu9cfd -n default -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "busybox:latest"
```


# Task 5: Create a Pod
Create a pod named `resource-cpgy5x` in namespace `frontend` using image `memcached`.
Ensure it has a label `team=blue`.

```setup
kubectl create ns frontend --dry-run=client -o yaml | kubectl apply -f -
# Clean up if exists
kubectl delete pod resource-cpgy5x -n frontend --force --grace-period=0 2>/dev/null || true
```

```verify
kubectl get pod resource-cpgy5x -n frontend --no-headers | grep Running
kubectl get pod resource-cpgy5x -n frontend -o jsonpath='{.metadata.labels.team}' | grep blue
```


# Task 6: Node Maintenance
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


# Task 7: Expose Service
Expose the deployment `resource-vaot9i-dep` as a Service named `resource-vaot9i` in namespace `kube-system`.
The service should listen on port `6480` and be of type `NodePort`.

```setup
kubectl create ns kube-system --dry-run=client -o yaml | kubectl apply -f -
kubectl create deployment resource-vaot9i-dep --image=nginx -n kube-system --dry-run=client -o yaml | kubectl apply -f -
kubectl delete svc resource-vaot9i -n kube-system 2>/dev/null || true
```

```verify
kubectl get svc resource-vaot9i -n kube-system -o jsonpath='{.spec.ports[0].port}' | grep 6480
kubectl get svc resource-vaot9i -n kube-system -o jsonpath='{.spec.type}' | grep NodePort
```


# Task 8: Create a Pod
Create a pod named `resource-9pplpw` in namespace `frontend` using image `redis`.
Ensure it has a label `tier=frontend`.

```setup
kubectl create ns frontend --dry-run=client -o yaml | kubectl apply -f -
# Clean up if exists
kubectl delete pod resource-9pplpw -n frontend --force --grace-period=0 2>/dev/null || true
```

```verify
kubectl get pod resource-9pplpw -n frontend --no-headers | grep Running
kubectl get pod resource-9pplpw -n frontend -o jsonpath='{.metadata.labels.tier}' | grep frontend
```


# Task 9: Node Maintenance
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


# Task 10: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-hhitcs` in namespace `default`.
Request `100Mi` storage with access mode `ReadWriteOnce`.

```setup
kubectl create ns default --dry-run=client -o yaml | kubectl apply -f -
kubectl delete pvc resource-hhitcs -n default 2>/dev/null || true
```

```verify
kubectl get pvc resource-hhitcs -n default -o jsonpath='{.spec.resources.requests.storage}' | grep 100Mi
kubectl get pvc resource-hhitcs -n default -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteOnce
```


# Task 11: Node Maintenance
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


# Task 12: Create a Pod
Create a pod named `resource-k9fn9n` in namespace `kube-system` using image `redis`.
Ensure it has a label `tier=frontend`.

```setup
kubectl create ns kube-system --dry-run=client -o yaml | kubectl apply -f -
# Clean up if exists
kubectl delete pod resource-k9fn9n -n kube-system --force --grace-period=0 2>/dev/null || true
```

```verify
kubectl get pod resource-k9fn9n -n kube-system --no-headers | grep Running
kubectl get pod resource-k9fn9n -n kube-system -o jsonpath='{.metadata.labels.tier}' | grep frontend
```


# Task 13: Create a Pod
Create a pod named `resource-tjnqvr` in namespace `default` using image `httpd`.
Ensure it has a label `tier=frontend`.

```setup
kubectl create ns default --dry-run=client -o yaml | kubectl apply -f -
# Clean up if exists
kubectl delete pod resource-tjnqvr -n default --force --grace-period=0 2>/dev/null || true
```

```verify
kubectl get pod resource-tjnqvr -n default --no-headers | grep Running
kubectl get pod resource-tjnqvr -n default -o jsonpath='{.metadata.labels.tier}' | grep frontend
```


# Task 14: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-806yt7` in namespace `kube-system`.
Request `5Gi` storage with access mode `ReadOnlyMany`.

```setup
kubectl create ns kube-system --dry-run=client -o yaml | kubectl apply -f -
kubectl delete pvc resource-806yt7 -n kube-system 2>/dev/null || true
```

```verify
kubectl get pvc resource-806yt7 -n kube-system -o jsonpath='{.spec.resources.requests.storage}' | grep 5Gi
kubectl get pvc resource-806yt7 -n kube-system -o jsonpath='{.spec.accessModes[0]}' | grep ReadOnlyMany
```


# Task 15: Create a Pod
Create a pod named `resource-mv9str` in namespace `backend` using image `memcached`.
Ensure it has a label `env=prod`.

```setup
kubectl create ns backend --dry-run=client -o yaml | kubectl apply -f -
# Clean up if exists
kubectl delete pod resource-mv9str -n backend --force --grace-period=0 2>/dev/null || true
```

```verify
kubectl get pod resource-mv9str -n backend --no-headers | grep Running
kubectl get pod resource-mv9str -n backend -o jsonpath='{.metadata.labels.env}' | grep prod
```


# Task 16: Expose Service
Expose the deployment `resource-cqas1z-dep` as a Service named `resource-cqas1z` in namespace `test`.
The service should listen on port `4942` and be of type `NodePort`.

```setup
kubectl create ns test --dry-run=client -o yaml | kubectl apply -f -
kubectl create deployment resource-cqas1z-dep --image=nginx -n test --dry-run=client -o yaml | kubectl apply -f -
kubectl delete svc resource-cqas1z -n test 2>/dev/null || true
```

```verify
kubectl get svc resource-cqas1z -n test -o jsonpath='{.spec.ports[0].port}' | grep 4942
kubectl get svc resource-cqas1z -n test -o jsonpath='{.spec.type}' | grep NodePort
```


# Task 17: Create a Pod
Create a pod named `resource-6w3l8c` in namespace `backend` using image `node:14`.
Ensure it has a label `team=blue`.

```setup
kubectl create ns backend --dry-run=client -o yaml | kubectl apply -f -
# Clean up if exists
kubectl delete pod resource-6w3l8c -n backend --force --grace-period=0 2>/dev/null || true
```

```verify
kubectl get pod resource-6w3l8c -n backend --no-headers | grep Running
kubectl get pod resource-6w3l8c -n backend -o jsonpath='{.metadata.labels.team}' | grep blue
```


# Task 18: Create a Pod
Create a pod named `resource-eukkd7` in namespace `frontend` using image `redis`.
Ensure it has a label `app=web`.

```setup
kubectl create ns frontend --dry-run=client -o yaml | kubectl apply -f -
# Clean up if exists
kubectl delete pod resource-eukkd7 -n frontend --force --grace-period=0 2>/dev/null || true
```

```verify
kubectl get pod resource-eukkd7 -n frontend --no-headers | grep Running
kubectl get pod resource-eukkd7 -n frontend -o jsonpath='{.metadata.labels.app}' | grep web
```


# Task 19: Create a Pod
Create a pod named `resource-m8bhra` in namespace `backend` using image `postgres`.
Ensure it has a label `release=stable`.

```setup
kubectl create ns backend --dry-run=client -o yaml | kubectl apply -f -
# Clean up if exists
kubectl delete pod resource-m8bhra -n backend --force --grace-period=0 2>/dev/null || true
```

```verify
kubectl get pod resource-m8bhra -n backend --no-headers | grep Running
kubectl get pod resource-m8bhra -n backend -o jsonpath='{.metadata.labels.release}' | grep stable
```


# Task 20: Scale Deployment
Create a deployment named `resource-2s08q5` in namespace `default` using image `mysql`.
Scale it to `3` replicas.
Then, perform a rolling update to image `mysql:latest`.

```setup
kubectl create ns default --dry-run=client -o yaml | kubectl apply -f -
kubectl delete deploy resource-2s08q5 -n default 2>/dev/null || true
```

```verify
kubectl get deploy resource-2s08q5 -n default -o jsonpath='{.spec.replicas}' | grep 3
kubectl get deploy resource-2s08q5 -n default -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "mysql:latest"
```


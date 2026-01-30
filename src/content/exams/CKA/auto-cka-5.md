---
id: auto-cka-5
title: Auto CKA Practice (Batch 5)
category: CKA
duration: 120 mins
---

# Auto CKA Practice (Batch 5)

This is an auto-generated exam to provide infinite practice questions.

# Task 1: Create a Pod
Create a pod named `resource-3hw102` in namespace `test` using image `node:14`.
Ensure it has a label `app=web`.

```setup
kubectl create ns test --dry-run=client -o yaml | kubectl apply -f -
# Clean up if exists
kubectl delete pod resource-3hw102 -n test --force --grace-period=0 2>/dev/null || true
```

```verify
kubectl get pod resource-3hw102 -n test --no-headers | grep Running
kubectl get pod resource-3hw102 -n test -o jsonpath='{.metadata.labels.app}' | grep web
```


# Task 2: Create a Pod
Create a pod named `resource-c5be3a` in namespace `prod` using image `mysql`.
Ensure it has a label `env=prod`.

```setup
kubectl create ns prod --dry-run=client -o yaml | kubectl apply -f -
# Clean up if exists
kubectl delete pod resource-c5be3a -n prod --force --grace-period=0 2>/dev/null || true
```

```verify
kubectl get pod resource-c5be3a -n prod --no-headers | grep Running
kubectl get pod resource-c5be3a -n prod -o jsonpath='{.metadata.labels.env}' | grep prod
```


# Task 3: Expose Service
Expose the deployment `resource-wd7v93-dep` as a Service named `resource-wd7v93` in namespace `prod`.
The service should listen on port `7035` and be of type `ClusterIP`.

```setup
kubectl create ns prod --dry-run=client -o yaml | kubectl apply -f -
kubectl create deployment resource-wd7v93-dep --image=nginx -n prod --dry-run=client -o yaml | kubectl apply -f -
kubectl delete svc resource-wd7v93 -n prod 2>/dev/null || true
```

```verify
kubectl get svc resource-wd7v93 -n prod -o jsonpath='{.spec.ports[0].port}' | grep 7035
kubectl get svc resource-wd7v93 -n prod -o jsonpath='{.spec.type}' | grep ClusterIP
```


# Task 4: Scale Deployment
Create a deployment named `resource-k0q40k` in namespace `kube-system` using image `node:14`.
Scale it to `5` replicas.
Then, perform a rolling update to image `node:14:latest`.

```setup
kubectl create ns kube-system --dry-run=client -o yaml | kubectl apply -f -
kubectl delete deploy resource-k0q40k -n kube-system 2>/dev/null || true
```

```verify
kubectl get deploy resource-k0q40k -n kube-system -o jsonpath='{.spec.replicas}' | grep 5
kubectl get deploy resource-k0q40k -n kube-system -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "node:14:latest"
```


# Task 5: Create a Pod
Create a pod named `resource-b18g5p` in namespace `test` using image `alpine`.
Ensure it has a label `team=blue`.

```setup
kubectl create ns test --dry-run=client -o yaml | kubectl apply -f -
# Clean up if exists
kubectl delete pod resource-b18g5p -n test --force --grace-period=0 2>/dev/null || true
```

```verify
kubectl get pod resource-b18g5p -n test --no-headers | grep Running
kubectl get pod resource-b18g5p -n test -o jsonpath='{.metadata.labels.team}' | grep blue
```


# Task 6: Node Maintenance
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


# Task 7: Expose Service
Expose the deployment `resource-2kdxrr-dep` as a Service named `resource-2kdxrr` in namespace `kube-system`.
The service should listen on port `4461` and be of type `ClusterIP`.

```setup
kubectl create ns kube-system --dry-run=client -o yaml | kubectl apply -f -
kubectl create deployment resource-2kdxrr-dep --image=nginx -n kube-system --dry-run=client -o yaml | kubectl apply -f -
kubectl delete svc resource-2kdxrr -n kube-system 2>/dev/null || true
```

```verify
kubectl get svc resource-2kdxrr -n kube-system -o jsonpath='{.spec.ports[0].port}' | grep 4461
kubectl get svc resource-2kdxrr -n kube-system -o jsonpath='{.spec.type}' | grep ClusterIP
```


# Task 8: Expose Service
Expose the deployment `resource-lwcs94-dep` as a Service named `resource-lwcs94` in namespace `staging`.
The service should listen on port `8454` and be of type `ClusterIP`.

```setup
kubectl create ns staging --dry-run=client -o yaml | kubectl apply -f -
kubectl create deployment resource-lwcs94-dep --image=nginx -n staging --dry-run=client -o yaml | kubectl apply -f -
kubectl delete svc resource-lwcs94 -n staging 2>/dev/null || true
```

```verify
kubectl get svc resource-lwcs94 -n staging -o jsonpath='{.spec.ports[0].port}' | grep 8454
kubectl get svc resource-lwcs94 -n staging -o jsonpath='{.spec.type}' | grep ClusterIP
```


# Task 9: Create a Pod
Create a pod named `resource-bqlrk3` in namespace `default` using image `httpd`.
Ensure it has a label `app=web`.

```setup
kubectl create ns default --dry-run=client -o yaml | kubectl apply -f -
# Clean up if exists
kubectl delete pod resource-bqlrk3 -n default --force --grace-period=0 2>/dev/null || true
```

```verify
kubectl get pod resource-bqlrk3 -n default --no-headers | grep Running
kubectl get pod resource-bqlrk3 -n default -o jsonpath='{.metadata.labels.app}' | grep web
```


# Task 10: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-h4s1au` in namespace `prod`.
Request `100Mi` storage with access mode `ReadWriteMany`.

```setup
kubectl create ns prod --dry-run=client -o yaml | kubectl apply -f -
kubectl delete pvc resource-h4s1au -n prod 2>/dev/null || true
```

```verify
kubectl get pvc resource-h4s1au -n prod -o jsonpath='{.spec.resources.requests.storage}' | grep 100Mi
kubectl get pvc resource-h4s1au -n prod -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteMany
```


# Task 11: Expose Service
Expose the deployment `resource-l4ntnd-dep` as a Service named `resource-l4ntnd` in namespace `backend`.
The service should listen on port `8081` and be of type `NodePort`.

```setup
kubectl create ns backend --dry-run=client -o yaml | kubectl apply -f -
kubectl create deployment resource-l4ntnd-dep --image=nginx -n backend --dry-run=client -o yaml | kubectl apply -f -
kubectl delete svc resource-l4ntnd -n backend 2>/dev/null || true
```

```verify
kubectl get svc resource-l4ntnd -n backend -o jsonpath='{.spec.ports[0].port}' | grep 8081
kubectl get svc resource-l4ntnd -n backend -o jsonpath='{.spec.type}' | grep NodePort
```


# Task 12: Scale Deployment
Create a deployment named `resource-tczrwd` in namespace `test` using image `nginx`.
Scale it to `2` replicas.
Then, perform a rolling update to image `nginx:latest`.

```setup
kubectl create ns test --dry-run=client -o yaml | kubectl apply -f -
kubectl delete deploy resource-tczrwd -n test 2>/dev/null || true
```

```verify
kubectl get deploy resource-tczrwd -n test -o jsonpath='{.spec.replicas}' | grep 2
kubectl get deploy resource-tczrwd -n test -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "nginx:latest"
```


# Task 13: Node Maintenance
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


# Task 14: Scale Deployment
Create a deployment named `resource-i0sv7f` in namespace `dev` using image `alpine`.
Scale it to `3` replicas.
Then, perform a rolling update to image `alpine:latest`.

```setup
kubectl create ns dev --dry-run=client -o yaml | kubectl apply -f -
kubectl delete deploy resource-i0sv7f -n dev 2>/dev/null || true
```

```verify
kubectl get deploy resource-i0sv7f -n dev -o jsonpath='{.spec.replicas}' | grep 3
kubectl get deploy resource-i0sv7f -n dev -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "alpine:latest"
```


# Task 15: Create a Pod
Create a pod named `resource-3lqpsf` in namespace `kube-system` using image `postgres`.
Ensure it has a label `release=stable`.

```setup
kubectl create ns kube-system --dry-run=client -o yaml | kubectl apply -f -
# Clean up if exists
kubectl delete pod resource-3lqpsf -n kube-system --force --grace-period=0 2>/dev/null || true
```

```verify
kubectl get pod resource-3lqpsf -n kube-system --no-headers | grep Running
kubectl get pod resource-3lqpsf -n kube-system -o jsonpath='{.metadata.labels.release}' | grep stable
```


# Task 16: Expose Service
Expose the deployment `resource-3ueal4-dep` as a Service named `resource-3ueal4` in namespace `test`.
The service should listen on port `3998` and be of type `NodePort`.

```setup
kubectl create ns test --dry-run=client -o yaml | kubectl apply -f -
kubectl create deployment resource-3ueal4-dep --image=nginx -n test --dry-run=client -o yaml | kubectl apply -f -
kubectl delete svc resource-3ueal4 -n test 2>/dev/null || true
```

```verify
kubectl get svc resource-3ueal4 -n test -o jsonpath='{.spec.ports[0].port}' | grep 3998
kubectl get svc resource-3ueal4 -n test -o jsonpath='{.spec.type}' | grep NodePort
```


# Task 17: Scale Deployment
Create a deployment named `resource-dcr5gx` in namespace `test` using image `postgres`.
Scale it to `4` replicas.
Then, perform a rolling update to image `postgres:latest`.

```setup
kubectl create ns test --dry-run=client -o yaml | kubectl apply -f -
kubectl delete deploy resource-dcr5gx -n test 2>/dev/null || true
```

```verify
kubectl get deploy resource-dcr5gx -n test -o jsonpath='{.spec.replicas}' | grep 4
kubectl get deploy resource-dcr5gx -n test -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "postgres:latest"
```


# Task 18: Node Maintenance
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


# Task 19: Create a Pod
Create a pod named `resource-t28vg0` in namespace `staging` using image `nginx`.
Ensure it has a label `tier=frontend`.

```setup
kubectl create ns staging --dry-run=client -o yaml | kubectl apply -f -
# Clean up if exists
kubectl delete pod resource-t28vg0 -n staging --force --grace-period=0 2>/dev/null || true
```

```verify
kubectl get pod resource-t28vg0 -n staging --no-headers | grep Running
kubectl get pod resource-t28vg0 -n staging -o jsonpath='{.metadata.labels.tier}' | grep frontend
```


# Task 20: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-75a1ty` in namespace `backend`.
Request `10Gi` storage with access mode `ReadOnlyMany`.

```setup
kubectl create ns backend --dry-run=client -o yaml | kubectl apply -f -
kubectl delete pvc resource-75a1ty -n backend 2>/dev/null || true
```

```verify
kubectl get pvc resource-75a1ty -n backend -o jsonpath='{.spec.resources.requests.storage}' | grep 10Gi
kubectl get pvc resource-75a1ty -n backend -o jsonpath='{.spec.accessModes[0]}' | grep ReadOnlyMany
```


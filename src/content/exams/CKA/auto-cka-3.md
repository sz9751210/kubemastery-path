---
id: auto-cka-3
title: Auto CKA Practice (Batch 3)
category: CKA
duration: 120 mins
---

# Auto CKA Practice (Batch 3)

This is an auto-generated exam to provide infinite practice questions.

# Task 1: Node Maintenance
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


# Task 2: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-3k8x7f` in namespace `test`.
Request `1Gi` storage with access mode `ReadWriteMany`.

```setup
kubectl create ns test --dry-run=client -o yaml | kubectl apply -f -
kubectl delete pvc resource-3k8x7f -n test 2>/dev/null || true
```

```verify
kubectl get pvc resource-3k8x7f -n test -o jsonpath='{.spec.resources.requests.storage}' | grep 1Gi
kubectl get pvc resource-3k8x7f -n test -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteMany
```


# Task 3: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-bik7eh` in namespace `prod`.
Request `5Gi` storage with access mode `ReadWriteMany`.

```setup
kubectl create ns prod --dry-run=client -o yaml | kubectl apply -f -
kubectl delete pvc resource-bik7eh -n prod 2>/dev/null || true
```

```verify
kubectl get pvc resource-bik7eh -n prod -o jsonpath='{.spec.resources.requests.storage}' | grep 5Gi
kubectl get pvc resource-bik7eh -n prod -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteMany
```


# Task 4: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-kqmp61` in namespace `test`.
Request `10Gi` storage with access mode `ReadOnlyMany`.

```setup
kubectl create ns test --dry-run=client -o yaml | kubectl apply -f -
kubectl delete pvc resource-kqmp61 -n test 2>/dev/null || true
```

```verify
kubectl get pvc resource-kqmp61 -n test -o jsonpath='{.spec.resources.requests.storage}' | grep 10Gi
kubectl get pvc resource-kqmp61 -n test -o jsonpath='{.spec.accessModes[0]}' | grep ReadOnlyMany
```


# Task 5: Scale Deployment
Create a deployment named `resource-vbvbxr` in namespace `kube-system` using image `postgres`.
Scale it to `4` replicas.
Then, perform a rolling update to image `postgres:latest`.

```setup
kubectl create ns kube-system --dry-run=client -o yaml | kubectl apply -f -
kubectl delete deploy resource-vbvbxr -n kube-system 2>/dev/null || true
```

```verify
kubectl get deploy resource-vbvbxr -n kube-system -o jsonpath='{.spec.replicas}' | grep 4
kubectl get deploy resource-vbvbxr -n kube-system -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "postgres:latest"
```


# Task 6: Expose Service
Expose the deployment `resource-jfftxs-dep` as a Service named `resource-jfftxs` in namespace `backend`.
The service should listen on port `5768` and be of type `NodePort`.

```setup
kubectl create ns backend --dry-run=client -o yaml | kubectl apply -f -
kubectl create deployment resource-jfftxs-dep --image=nginx -n backend --dry-run=client -o yaml | kubectl apply -f -
kubectl delete svc resource-jfftxs -n backend 2>/dev/null || true
```

```verify
kubectl get svc resource-jfftxs -n backend -o jsonpath='{.spec.ports[0].port}' | grep 5768
kubectl get svc resource-jfftxs -n backend -o jsonpath='{.spec.type}' | grep NodePort
```


# Task 7: Scale Deployment
Create a deployment named `resource-au2srh` in namespace `default` using image `redis`.
Scale it to `5` replicas.
Then, perform a rolling update to image `redis:latest`.

```setup
kubectl create ns default --dry-run=client -o yaml | kubectl apply -f -
kubectl delete deploy resource-au2srh -n default 2>/dev/null || true
```

```verify
kubectl get deploy resource-au2srh -n default -o jsonpath='{.spec.replicas}' | grep 5
kubectl get deploy resource-au2srh -n default -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "redis:latest"
```


# Task 8: Create a Pod
Create a pod named `resource-4jec9c` in namespace `test` using image `memcached`.
Ensure it has a label `env=prod`.

```setup
kubectl create ns test --dry-run=client -o yaml | kubectl apply -f -
# Clean up if exists
kubectl delete pod resource-4jec9c -n test --force --grace-period=0 2>/dev/null || true
```

```verify
kubectl get pod resource-4jec9c -n test --no-headers | grep Running
kubectl get pod resource-4jec9c -n test -o jsonpath='{.metadata.labels.env}' | grep prod
```


# Task 9: Expose Service
Expose the deployment `resource-dv6pzm-dep` as a Service named `resource-dv6pzm` in namespace `backend`.
The service should listen on port `8264` and be of type `NodePort`.

```setup
kubectl create ns backend --dry-run=client -o yaml | kubectl apply -f -
kubectl create deployment resource-dv6pzm-dep --image=nginx -n backend --dry-run=client -o yaml | kubectl apply -f -
kubectl delete svc resource-dv6pzm -n backend 2>/dev/null || true
```

```verify
kubectl get svc resource-dv6pzm -n backend -o jsonpath='{.spec.ports[0].port}' | grep 8264
kubectl get svc resource-dv6pzm -n backend -o jsonpath='{.spec.type}' | grep NodePort
```


# Task 10: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-lnjk2l` in namespace `prod`.
Request `5Gi` storage with access mode `ReadWriteMany`.

```setup
kubectl create ns prod --dry-run=client -o yaml | kubectl apply -f -
kubectl delete pvc resource-lnjk2l -n prod 2>/dev/null || true
```

```verify
kubectl get pvc resource-lnjk2l -n prod -o jsonpath='{.spec.resources.requests.storage}' | grep 5Gi
kubectl get pvc resource-lnjk2l -n prod -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteMany
```


# Task 11: Expose Service
Expose the deployment `resource-1nzzsp-dep` as a Service named `resource-1nzzsp` in namespace `kube-system`.
The service should listen on port `7571` and be of type `NodePort`.

```setup
kubectl create ns kube-system --dry-run=client -o yaml | kubectl apply -f -
kubectl create deployment resource-1nzzsp-dep --image=nginx -n kube-system --dry-run=client -o yaml | kubectl apply -f -
kubectl delete svc resource-1nzzsp -n kube-system 2>/dev/null || true
```

```verify
kubectl get svc resource-1nzzsp -n kube-system -o jsonpath='{.spec.ports[0].port}' | grep 7571
kubectl get svc resource-1nzzsp -n kube-system -o jsonpath='{.spec.type}' | grep NodePort
```


# Task 12: Expose Service
Expose the deployment `resource-y19sn5-dep` as a Service named `resource-y19sn5` in namespace `test`.
The service should listen on port `6574` and be of type `NodePort`.

```setup
kubectl create ns test --dry-run=client -o yaml | kubectl apply -f -
kubectl create deployment resource-y19sn5-dep --image=nginx -n test --dry-run=client -o yaml | kubectl apply -f -
kubectl delete svc resource-y19sn5 -n test 2>/dev/null || true
```

```verify
kubectl get svc resource-y19sn5 -n test -o jsonpath='{.spec.ports[0].port}' | grep 6574
kubectl get svc resource-y19sn5 -n test -o jsonpath='{.spec.type}' | grep NodePort
```


# Task 13: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-rjesh8` in namespace `kube-system`.
Request `100Mi` storage with access mode `ReadOnlyMany`.

```setup
kubectl create ns kube-system --dry-run=client -o yaml | kubectl apply -f -
kubectl delete pvc resource-rjesh8 -n kube-system 2>/dev/null || true
```

```verify
kubectl get pvc resource-rjesh8 -n kube-system -o jsonpath='{.spec.resources.requests.storage}' | grep 100Mi
kubectl get pvc resource-rjesh8 -n kube-system -o jsonpath='{.spec.accessModes[0]}' | grep ReadOnlyMany
```


# Task 14: Create a Pod
Create a pod named `resource-5vbv89` in namespace `staging` using image `httpd`.
Ensure it has a label `env=prod`.

```setup
kubectl create ns staging --dry-run=client -o yaml | kubectl apply -f -
# Clean up if exists
kubectl delete pod resource-5vbv89 -n staging --force --grace-period=0 2>/dev/null || true
```

```verify
kubectl get pod resource-5vbv89 -n staging --no-headers | grep Running
kubectl get pod resource-5vbv89 -n staging -o jsonpath='{.metadata.labels.env}' | grep prod
```


# Task 15: Create a Pod
Create a pod named `resource-91a63z` in namespace `staging` using image `nginx`.
Ensure it has a label `env=prod`.

```setup
kubectl create ns staging --dry-run=client -o yaml | kubectl apply -f -
# Clean up if exists
kubectl delete pod resource-91a63z -n staging --force --grace-period=0 2>/dev/null || true
```

```verify
kubectl get pod resource-91a63z -n staging --no-headers | grep Running
kubectl get pod resource-91a63z -n staging -o jsonpath='{.metadata.labels.env}' | grep prod
```


# Task 16: Expose Service
Expose the deployment `resource-duk0od-dep` as a Service named `resource-duk0od` in namespace `kube-system`.
The service should listen on port `4767` and be of type `NodePort`.

```setup
kubectl create ns kube-system --dry-run=client -o yaml | kubectl apply -f -
kubectl create deployment resource-duk0od-dep --image=nginx -n kube-system --dry-run=client -o yaml | kubectl apply -f -
kubectl delete svc resource-duk0od -n kube-system 2>/dev/null || true
```

```verify
kubectl get svc resource-duk0od -n kube-system -o jsonpath='{.spec.ports[0].port}' | grep 4767
kubectl get svc resource-duk0od -n kube-system -o jsonpath='{.spec.type}' | grep NodePort
```


# Task 17: Expose Service
Expose the deployment `resource-3rvvmd-dep` as a Service named `resource-3rvvmd` in namespace `prod`.
The service should listen on port `6624` and be of type `NodePort`.

```setup
kubectl create ns prod --dry-run=client -o yaml | kubectl apply -f -
kubectl create deployment resource-3rvvmd-dep --image=nginx -n prod --dry-run=client -o yaml | kubectl apply -f -
kubectl delete svc resource-3rvvmd -n prod 2>/dev/null || true
```

```verify
kubectl get svc resource-3rvvmd -n prod -o jsonpath='{.spec.ports[0].port}' | grep 6624
kubectl get svc resource-3rvvmd -n prod -o jsonpath='{.spec.type}' | grep NodePort
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


# Task 19: Scale Deployment
Create a deployment named `resource-lv8c6g` in namespace `staging` using image `nginx`.
Scale it to `5` replicas.
Then, perform a rolling update to image `nginx:latest`.

```setup
kubectl create ns staging --dry-run=client -o yaml | kubectl apply -f -
kubectl delete deploy resource-lv8c6g -n staging 2>/dev/null || true
```

```verify
kubectl get deploy resource-lv8c6g -n staging -o jsonpath='{.spec.replicas}' | grep 5
kubectl get deploy resource-lv8c6g -n staging -o jsonpath='{.spec.template.spec.containers[0].image}' | grep "nginx:latest"
```


# Task 20: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-wqju5i` in namespace `dev`.
Request `5Gi` storage with access mode `ReadWriteOnce`.

```setup
kubectl create ns dev --dry-run=client -o yaml | kubectl apply -f -
kubectl delete pvc resource-wqju5i -n dev 2>/dev/null || true
```

```verify
kubectl get pvc resource-wqju5i -n dev -o jsonpath='{.spec.resources.requests.storage}' | grep 5Gi
kubectl get pvc resource-wqju5i -n dev -o jsonpath='{.spec.accessModes[0]}' | grep ReadWriteOnce
```


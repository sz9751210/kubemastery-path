---
id: cka-mock-auto-01
title: Automated CKA Mock Exam 1
category: CKA
duration: 120 mins
---

# Task 1: Create a Pod
Create a pod named `nginx` with image `nginx`.

```bash
kubectl run nginx --image=nginx
```

```setup
kubectl delete pod nginx --force --grace-period=0 2>/dev/null || true
```

```verify
kubectl get pod nginx -o jsonpath='{.spec.containers[0].image}' | grep nginx
```

# Task 2: Service Limit
Create a service named `my-service` of type `NodePort`.

```setup
kubectl delete svc my-service 2>/dev/null || true
```

```verify
kubectl get svc my-service -o jsonpath='{.spec.type}' | grep NodePort
```

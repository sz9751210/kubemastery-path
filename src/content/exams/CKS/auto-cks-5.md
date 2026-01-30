---
id: auto-cks-5
title: Auto CKS Practice (Batch 5)
category: CKS
duration: 120 mins
---

# Auto CKS Practice (Batch 5)

This is an auto-generated exam to provide infinite practice questions.

# Task 1: Network Policy
Create a NetworkPolicy named `cks-ahrv98` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-ahrv98 --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-ahrv98 2>/dev/null || true
```

```verify
kubectl get netpol cks-ahrv98 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-ahrv98 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-ahrv98 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 2: Network Policy
Create a NetworkPolicy named `cks-w9wgtq` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-w9wgtq --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-w9wgtq 2>/dev/null || true
```

```verify
kubectl get netpol cks-w9wgtq -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-w9wgtq -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-w9wgtq -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 3: Network Policy
Create a NetworkPolicy named `cks-12xqnb` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-12xqnb --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-12xqnb 2>/dev/null || true
```

```verify
kubectl get netpol cks-12xqnb -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-12xqnb -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-12xqnb -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 4: Network Policy
Create a NetworkPolicy named `cks-dp4wj7` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-dp4wj7 --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-dp4wj7 2>/dev/null || true
```

```verify
kubectl get netpol cks-dp4wj7 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-dp4wj7 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-dp4wj7 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 5: Network Policy
Create a NetworkPolicy named `cks-s2ami4` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-s2ami4 --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-s2ami4 2>/dev/null || true
```

```verify
kubectl get netpol cks-s2ami4 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-s2ami4 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-s2ami4 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 6: Network Policy
Create a NetworkPolicy named `cks-oer3i8` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-oer3i8 --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-oer3i8 2>/dev/null || true
```

```verify
kubectl get netpol cks-oer3i8 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-oer3i8 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-oer3i8 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 7: Network Policy
Create a NetworkPolicy named `cks-oll1my` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-oll1my --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-oll1my 2>/dev/null || true
```

```verify
kubectl get netpol cks-oll1my -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-oll1my -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-oll1my -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 8: Network Policy
Create a NetworkPolicy named `cks-7ezs46` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-7ezs46 --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-7ezs46 2>/dev/null || true
```

```verify
kubectl get netpol cks-7ezs46 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-7ezs46 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-7ezs46 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 9: Network Policy
Create a NetworkPolicy named `cks-ac6ezl` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-ac6ezl --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-ac6ezl 2>/dev/null || true
```

```verify
kubectl get netpol cks-ac6ezl -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-ac6ezl -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-ac6ezl -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 10: Network Policy
Create a NetworkPolicy named `cks-43kz7u` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-43kz7u --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-43kz7u 2>/dev/null || true
```

```verify
kubectl get netpol cks-43kz7u -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-43kz7u -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-43kz7u -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 11: Network Policy
Create a NetworkPolicy named `cks-9rv7k6` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-9rv7k6 --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-9rv7k6 2>/dev/null || true
```

```verify
kubectl get netpol cks-9rv7k6 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-9rv7k6 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-9rv7k6 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 12: Network Policy
Create a NetworkPolicy named `cks-3r88pw` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-3r88pw --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-3r88pw 2>/dev/null || true
```

```verify
kubectl get netpol cks-3r88pw -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-3r88pw -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-3r88pw -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 13: Network Policy
Create a NetworkPolicy named `cks-a6tn7p` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-a6tn7p --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-a6tn7p 2>/dev/null || true
```

```verify
kubectl get netpol cks-a6tn7p -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-a6tn7p -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-a6tn7p -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 14: Network Policy
Create a NetworkPolicy named `cks-ya4rw4` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-ya4rw4 --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-ya4rw4 2>/dev/null || true
```

```verify
kubectl get netpol cks-ya4rw4 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-ya4rw4 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-ya4rw4 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 15: Network Policy
Create a NetworkPolicy named `cks-u6vp7j` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-u6vp7j --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-u6vp7j 2>/dev/null || true
```

```verify
kubectl get netpol cks-u6vp7j -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-u6vp7j -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-u6vp7j -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 16: Network Policy
Create a NetworkPolicy named `cks-bgik2q` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-bgik2q --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-bgik2q 2>/dev/null || true
```

```verify
kubectl get netpol cks-bgik2q -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-bgik2q -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-bgik2q -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 17: Network Policy
Create a NetworkPolicy named `cks-0xjyjq` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-0xjyjq --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-0xjyjq 2>/dev/null || true
```

```verify
kubectl get netpol cks-0xjyjq -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-0xjyjq -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-0xjyjq -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 18: Network Policy
Create a NetworkPolicy named `cks-3mbr5v` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-3mbr5v --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-3mbr5v 2>/dev/null || true
```

```verify
kubectl get netpol cks-3mbr5v -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-3mbr5v -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-3mbr5v -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 19: Network Policy
Create a NetworkPolicy named `cks-psce49` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-psce49 --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-psce49 2>/dev/null || true
```

```verify
kubectl get netpol cks-psce49 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-psce49 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-psce49 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 20: Network Policy
Create a NetworkPolicy named `cks-erqb02` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-erqb02 --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-erqb02 2>/dev/null || true
```

```verify
kubectl get netpol cks-erqb02 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-erqb02 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-erqb02 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


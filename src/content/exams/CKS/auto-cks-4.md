---
id: auto-cks-4
title: Auto CKS Practice (Batch 4)
category: CKS
duration: 120 mins
---

# Auto CKS Practice (Batch 4)

This is an auto-generated exam to provide infinite practice questions.

# Task 1: Network Policy
Create a NetworkPolicy named `cks-thgtyt` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-thgtyt --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-thgtyt 2>/dev/null || true
```

```verify
kubectl get netpol cks-thgtyt -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-thgtyt -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-thgtyt -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 2: Network Policy
Create a NetworkPolicy named `cks-0uyzvf` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-0uyzvf --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-0uyzvf 2>/dev/null || true
```

```verify
kubectl get netpol cks-0uyzvf -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-0uyzvf -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-0uyzvf -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 3: Network Policy
Create a NetworkPolicy named `cks-tbl5sd` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-tbl5sd --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-tbl5sd 2>/dev/null || true
```

```verify
kubectl get netpol cks-tbl5sd -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-tbl5sd -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-tbl5sd -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 4: Network Policy
Create a NetworkPolicy named `cks-yuyb85` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-yuyb85 --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-yuyb85 2>/dev/null || true
```

```verify
kubectl get netpol cks-yuyb85 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-yuyb85 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-yuyb85 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 5: Network Policy
Create a NetworkPolicy named `cks-iqfq64` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-iqfq64 --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-iqfq64 2>/dev/null || true
```

```verify
kubectl get netpol cks-iqfq64 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-iqfq64 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-iqfq64 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 6: Network Policy
Create a NetworkPolicy named `cks-2iap2f` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-2iap2f --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-2iap2f 2>/dev/null || true
```

```verify
kubectl get netpol cks-2iap2f -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-2iap2f -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-2iap2f -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 7: Network Policy
Create a NetworkPolicy named `cks-gbtk0d` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-gbtk0d --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-gbtk0d 2>/dev/null || true
```

```verify
kubectl get netpol cks-gbtk0d -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-gbtk0d -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-gbtk0d -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 8: Network Policy
Create a NetworkPolicy named `cks-sn3zxu` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-sn3zxu --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-sn3zxu 2>/dev/null || true
```

```verify
kubectl get netpol cks-sn3zxu -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-sn3zxu -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-sn3zxu -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 9: Network Policy
Create a NetworkPolicy named `cks-clixwt` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-clixwt --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-clixwt 2>/dev/null || true
```

```verify
kubectl get netpol cks-clixwt -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-clixwt -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-clixwt -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 10: Network Policy
Create a NetworkPolicy named `cks-uua8zp` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-uua8zp --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-uua8zp 2>/dev/null || true
```

```verify
kubectl get netpol cks-uua8zp -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-uua8zp -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-uua8zp -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 11: Network Policy
Create a NetworkPolicy named `cks-ajspin` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-ajspin --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-ajspin 2>/dev/null || true
```

```verify
kubectl get netpol cks-ajspin -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-ajspin -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-ajspin -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 12: Network Policy
Create a NetworkPolicy named `cks-menyqk` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-menyqk --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-menyqk 2>/dev/null || true
```

```verify
kubectl get netpol cks-menyqk -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-menyqk -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-menyqk -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 13: Network Policy
Create a NetworkPolicy named `cks-ervgei` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-ervgei --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-ervgei 2>/dev/null || true
```

```verify
kubectl get netpol cks-ervgei -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-ervgei -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-ervgei -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 14: Network Policy
Create a NetworkPolicy named `cks-p3fif9` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-p3fif9 --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-p3fif9 2>/dev/null || true
```

```verify
kubectl get netpol cks-p3fif9 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-p3fif9 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-p3fif9 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 15: Network Policy
Create a NetworkPolicy named `cks-5rjjym` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-5rjjym --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-5rjjym 2>/dev/null || true
```

```verify
kubectl get netpol cks-5rjjym -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-5rjjym -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-5rjjym -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 16: Network Policy
Create a NetworkPolicy named `cks-f3u7j8` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-f3u7j8 --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-f3u7j8 2>/dev/null || true
```

```verify
kubectl get netpol cks-f3u7j8 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-f3u7j8 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-f3u7j8 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 17: Network Policy
Create a NetworkPolicy named `cks-nq6ar7` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-nq6ar7 --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-nq6ar7 2>/dev/null || true
```

```verify
kubectl get netpol cks-nq6ar7 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-nq6ar7 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-nq6ar7 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 18: Network Policy
Create a NetworkPolicy named `cks-53zjx5` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-53zjx5 --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-53zjx5 2>/dev/null || true
```

```verify
kubectl get netpol cks-53zjx5 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-53zjx5 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-53zjx5 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 19: Network Policy
Create a NetworkPolicy named `cks-kjb1w1` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-kjb1w1 --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-kjb1w1 2>/dev/null || true
```

```verify
kubectl get netpol cks-kjb1w1 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-kjb1w1 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-kjb1w1 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 20: Network Policy
Create a NetworkPolicy named `cks-lu6tmp` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-lu6tmp --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-lu6tmp 2>/dev/null || true
```

```verify
kubectl get netpol cks-lu6tmp -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-lu6tmp -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-lu6tmp -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


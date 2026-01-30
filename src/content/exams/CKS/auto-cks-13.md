---
id: auto-cks-13
title: Auto CKS Practice (Batch 13)
category: CKS
duration: 120 mins
---

# Auto CKS Practice (Batch 13)

This is an auto-generated exam to provide infinite practice questions.

# Task 1: Network Policy
Create a NetworkPolicy named `cks-e9g1a0` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-e9g1a0 --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-e9g1a0 2>/dev/null || true
```

```verify
kubectl get netpol cks-e9g1a0 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-e9g1a0 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-e9g1a0 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 2: Network Policy
Create a NetworkPolicy named `cks-ay7qkp` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-ay7qkp --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-ay7qkp 2>/dev/null || true
```

```verify
kubectl get netpol cks-ay7qkp -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-ay7qkp -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-ay7qkp -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 3: Network Policy
Create a NetworkPolicy named `cks-om39qa` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-om39qa --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-om39qa 2>/dev/null || true
```

```verify
kubectl get netpol cks-om39qa -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-om39qa -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-om39qa -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 4: Network Policy
Create a NetworkPolicy named `cks-iwho66` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-iwho66 --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-iwho66 2>/dev/null || true
```

```verify
kubectl get netpol cks-iwho66 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-iwho66 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-iwho66 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 5: Network Policy
Create a NetworkPolicy named `cks-dsj08x` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-dsj08x --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-dsj08x 2>/dev/null || true
```

```verify
kubectl get netpol cks-dsj08x -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-dsj08x -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-dsj08x -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 6: Network Policy
Create a NetworkPolicy named `cks-sxvndk` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-sxvndk --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-sxvndk 2>/dev/null || true
```

```verify
kubectl get netpol cks-sxvndk -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-sxvndk -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-sxvndk -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 7: Network Policy
Create a NetworkPolicy named `cks-tv1vqb` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-tv1vqb --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-tv1vqb 2>/dev/null || true
```

```verify
kubectl get netpol cks-tv1vqb -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-tv1vqb -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-tv1vqb -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 8: Network Policy
Create a NetworkPolicy named `cks-quhqha` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-quhqha --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-quhqha 2>/dev/null || true
```

```verify
kubectl get netpol cks-quhqha -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-quhqha -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-quhqha -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 9: Network Policy
Create a NetworkPolicy named `cks-im8uwj` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-im8uwj --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-im8uwj 2>/dev/null || true
```

```verify
kubectl get netpol cks-im8uwj -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-im8uwj -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-im8uwj -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 10: Network Policy
Create a NetworkPolicy named `cks-mjv6uk` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-mjv6uk --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-mjv6uk 2>/dev/null || true
```

```verify
kubectl get netpol cks-mjv6uk -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-mjv6uk -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-mjv6uk -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 11: Network Policy
Create a NetworkPolicy named `cks-3pac2t` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-3pac2t --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-3pac2t 2>/dev/null || true
```

```verify
kubectl get netpol cks-3pac2t -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-3pac2t -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-3pac2t -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 12: Network Policy
Create a NetworkPolicy named `cks-7lswc1` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-7lswc1 --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-7lswc1 2>/dev/null || true
```

```verify
kubectl get netpol cks-7lswc1 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-7lswc1 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-7lswc1 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 13: Network Policy
Create a NetworkPolicy named `cks-ccz1br` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-ccz1br --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-ccz1br 2>/dev/null || true
```

```verify
kubectl get netpol cks-ccz1br -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-ccz1br -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-ccz1br -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 14: Network Policy
Create a NetworkPolicy named `cks-0o97j8` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-0o97j8 --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-0o97j8 2>/dev/null || true
```

```verify
kubectl get netpol cks-0o97j8 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-0o97j8 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-0o97j8 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 15: Network Policy
Create a NetworkPolicy named `cks-t3cbni` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-t3cbni --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-t3cbni 2>/dev/null || true
```

```verify
kubectl get netpol cks-t3cbni -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-t3cbni -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-t3cbni -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 16: Network Policy
Create a NetworkPolicy named `cks-iqdj0k` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-iqdj0k --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-iqdj0k 2>/dev/null || true
```

```verify
kubectl get netpol cks-iqdj0k -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-iqdj0k -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-iqdj0k -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 17: Network Policy
Create a NetworkPolicy named `cks-imrq8v` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-imrq8v --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-imrq8v 2>/dev/null || true
```

```verify
kubectl get netpol cks-imrq8v -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-imrq8v -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-imrq8v -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 18: Network Policy
Create a NetworkPolicy named `cks-n19avl` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-n19avl --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-n19avl 2>/dev/null || true
```

```verify
kubectl get netpol cks-n19avl -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-n19avl -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-n19avl -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 19: Network Policy
Create a NetworkPolicy named `cks-vixoq1` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-vixoq1 --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-vixoq1 2>/dev/null || true
```

```verify
kubectl get netpol cks-vixoq1 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-vixoq1 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-vixoq1 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 20: Network Policy
Create a NetworkPolicy named `cks-iszibp` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-iszibp --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-iszibp 2>/dev/null || true
```

```verify
kubectl get netpol cks-iszibp -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-iszibp -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-iszibp -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


---
id: auto-cks-2
title: Auto CKS Practice (Batch 2)
category: CKS
duration: 120 mins
---

# Auto CKS Practice (Batch 2)

This is an auto-generated exam to provide infinite practice questions.

# Task 1: Network Policy
Create a NetworkPolicy named `cks-fpvyex` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-fpvyex --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-fpvyex 2>/dev/null || true
```

```verify
kubectl get netpol cks-fpvyex -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-fpvyex -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-fpvyex -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 2: Network Policy
Create a NetworkPolicy named `cks-ig3dr8` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-ig3dr8 --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-ig3dr8 2>/dev/null || true
```

```verify
kubectl get netpol cks-ig3dr8 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-ig3dr8 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-ig3dr8 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 3: Network Policy
Create a NetworkPolicy named `cks-kvynnq` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-kvynnq --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-kvynnq 2>/dev/null || true
```

```verify
kubectl get netpol cks-kvynnq -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-kvynnq -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-kvynnq -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 4: Network Policy
Create a NetworkPolicy named `cks-6ek222` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-6ek222 --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-6ek222 2>/dev/null || true
```

```verify
kubectl get netpol cks-6ek222 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-6ek222 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-6ek222 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 5: Network Policy
Create a NetworkPolicy named `cks-0rg0v4` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-0rg0v4 --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-0rg0v4 2>/dev/null || true
```

```verify
kubectl get netpol cks-0rg0v4 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-0rg0v4 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-0rg0v4 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 6: Network Policy
Create a NetworkPolicy named `cks-hyjvsz` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-hyjvsz --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-hyjvsz 2>/dev/null || true
```

```verify
kubectl get netpol cks-hyjvsz -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-hyjvsz -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-hyjvsz -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 7: Network Policy
Create a NetworkPolicy named `cks-rgcou5` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-rgcou5 --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-rgcou5 2>/dev/null || true
```

```verify
kubectl get netpol cks-rgcou5 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-rgcou5 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-rgcou5 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 8: Network Policy
Create a NetworkPolicy named `cks-jcwixa` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-jcwixa --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-jcwixa 2>/dev/null || true
```

```verify
kubectl get netpol cks-jcwixa -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-jcwixa -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-jcwixa -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 9: Network Policy
Create a NetworkPolicy named `cks-jnku8m` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-jnku8m --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-jnku8m 2>/dev/null || true
```

```verify
kubectl get netpol cks-jnku8m -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-jnku8m -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-jnku8m -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 10: Network Policy
Create a NetworkPolicy named `cks-bgo5a0` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-bgo5a0 --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-bgo5a0 2>/dev/null || true
```

```verify
kubectl get netpol cks-bgo5a0 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-bgo5a0 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-bgo5a0 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 11: Network Policy
Create a NetworkPolicy named `cks-14jifb` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-14jifb --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-14jifb 2>/dev/null || true
```

```verify
kubectl get netpol cks-14jifb -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-14jifb -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-14jifb -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 12: Network Policy
Create a NetworkPolicy named `cks-ib0thf` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-ib0thf --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-ib0thf 2>/dev/null || true
```

```verify
kubectl get netpol cks-ib0thf -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-ib0thf -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-ib0thf -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 13: Network Policy
Create a NetworkPolicy named `cks-8e9erg` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-8e9erg --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-8e9erg 2>/dev/null || true
```

```verify
kubectl get netpol cks-8e9erg -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-8e9erg -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-8e9erg -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 14: Network Policy
Create a NetworkPolicy named `cks-ydc1b2` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-ydc1b2 --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-ydc1b2 2>/dev/null || true
```

```verify
kubectl get netpol cks-ydc1b2 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-ydc1b2 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-ydc1b2 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 15: Network Policy
Create a NetworkPolicy named `cks-pffe03` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-pffe03 --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-pffe03 2>/dev/null || true
```

```verify
kubectl get netpol cks-pffe03 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-pffe03 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-pffe03 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 16: Network Policy
Create a NetworkPolicy named `cks-7vb1es` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-7vb1es --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-7vb1es 2>/dev/null || true
```

```verify
kubectl get netpol cks-7vb1es -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-7vb1es -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-7vb1es -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 17: Network Policy
Create a NetworkPolicy named `cks-4u7ps2` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-4u7ps2 --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-4u7ps2 2>/dev/null || true
```

```verify
kubectl get netpol cks-4u7ps2 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-4u7ps2 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-4u7ps2 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 18: Network Policy
Create a NetworkPolicy named `cks-n8gm7u` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-n8gm7u --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-n8gm7u 2>/dev/null || true
```

```verify
kubectl get netpol cks-n8gm7u -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-n8gm7u -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-n8gm7u -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 19: Network Policy
Create a NetworkPolicy named `cks-x2jvqy` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-x2jvqy --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-x2jvqy 2>/dev/null || true
```

```verify
kubectl get netpol cks-x2jvqy -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-x2jvqy -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-x2jvqy -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 20: Network Policy
Create a NetworkPolicy named `cks-eqe4x4` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-eqe4x4 --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-eqe4x4 2>/dev/null || true
```

```verify
kubectl get netpol cks-eqe4x4 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-eqe4x4 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-eqe4x4 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


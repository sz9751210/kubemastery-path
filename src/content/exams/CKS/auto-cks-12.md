---
id: auto-cks-12
title: Auto CKS Practice (Batch 12)
category: CKS
duration: 120 mins
---

# Auto CKS Practice (Batch 12)

This is an auto-generated exam to provide infinite practice questions.

# Task 1: Network Policy
Create a NetworkPolicy named `cks-bhsn52` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-bhsn52 --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-bhsn52 2>/dev/null || true
```

```verify
kubectl get netpol cks-bhsn52 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-bhsn52 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-bhsn52 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 2: Network Policy
Create a NetworkPolicy named `cks-0l4ziu` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-0l4ziu --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-0l4ziu 2>/dev/null || true
```

```verify
kubectl get netpol cks-0l4ziu -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-0l4ziu -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-0l4ziu -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 3: Network Policy
Create a NetworkPolicy named `cks-srxerj` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-srxerj --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-srxerj 2>/dev/null || true
```

```verify
kubectl get netpol cks-srxerj -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-srxerj -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-srxerj -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 4: Network Policy
Create a NetworkPolicy named `cks-3j9fdw` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-3j9fdw --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-3j9fdw 2>/dev/null || true
```

```verify
kubectl get netpol cks-3j9fdw -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-3j9fdw -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-3j9fdw -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 5: Network Policy
Create a NetworkPolicy named `cks-35ftyy` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-35ftyy --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-35ftyy 2>/dev/null || true
```

```verify
kubectl get netpol cks-35ftyy -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-35ftyy -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-35ftyy -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 6: Network Policy
Create a NetworkPolicy named `cks-9592qk` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-9592qk --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-9592qk 2>/dev/null || true
```

```verify
kubectl get netpol cks-9592qk -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-9592qk -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-9592qk -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 7: Network Policy
Create a NetworkPolicy named `cks-gz4h4v` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-gz4h4v --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-gz4h4v 2>/dev/null || true
```

```verify
kubectl get netpol cks-gz4h4v -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-gz4h4v -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-gz4h4v -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 8: Network Policy
Create a NetworkPolicy named `cks-xmujwd` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-xmujwd --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-xmujwd 2>/dev/null || true
```

```verify
kubectl get netpol cks-xmujwd -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-xmujwd -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-xmujwd -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 9: Network Policy
Create a NetworkPolicy named `cks-p6y0xp` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-p6y0xp --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-p6y0xp 2>/dev/null || true
```

```verify
kubectl get netpol cks-p6y0xp -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-p6y0xp -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-p6y0xp -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 10: Network Policy
Create a NetworkPolicy named `cks-uty5ck` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-uty5ck --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-uty5ck 2>/dev/null || true
```

```verify
kubectl get netpol cks-uty5ck -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-uty5ck -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-uty5ck -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 11: Network Policy
Create a NetworkPolicy named `cks-dkxt3p` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-dkxt3p --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-dkxt3p 2>/dev/null || true
```

```verify
kubectl get netpol cks-dkxt3p -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-dkxt3p -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-dkxt3p -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 12: Network Policy
Create a NetworkPolicy named `cks-d3tp25` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-d3tp25 --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-d3tp25 2>/dev/null || true
```

```verify
kubectl get netpol cks-d3tp25 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-d3tp25 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-d3tp25 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 13: Network Policy
Create a NetworkPolicy named `cks-i4y9l3` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-i4y9l3 --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-i4y9l3 2>/dev/null || true
```

```verify
kubectl get netpol cks-i4y9l3 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-i4y9l3 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-i4y9l3 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 14: Network Policy
Create a NetworkPolicy named `cks-a5b7pb` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-a5b7pb --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-a5b7pb 2>/dev/null || true
```

```verify
kubectl get netpol cks-a5b7pb -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-a5b7pb -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-a5b7pb -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 15: Network Policy
Create a NetworkPolicy named `cks-jti0lh` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-jti0lh --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-jti0lh 2>/dev/null || true
```

```verify
kubectl get netpol cks-jti0lh -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-jti0lh -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-jti0lh -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 16: Network Policy
Create a NetworkPolicy named `cks-rpg6eg` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-rpg6eg --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-rpg6eg 2>/dev/null || true
```

```verify
kubectl get netpol cks-rpg6eg -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-rpg6eg -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-rpg6eg -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 17: Network Policy
Create a NetworkPolicy named `cks-7tys98` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-7tys98 --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-7tys98 2>/dev/null || true
```

```verify
kubectl get netpol cks-7tys98 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-7tys98 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-7tys98 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 18: Network Policy
Create a NetworkPolicy named `cks-l04x5b` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-l04x5b --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-l04x5b 2>/dev/null || true
```

```verify
kubectl get netpol cks-l04x5b -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-l04x5b -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-l04x5b -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 19: Network Policy
Create a NetworkPolicy named `cks-78x2i7` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-78x2i7 --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-78x2i7 2>/dev/null || true
```

```verify
kubectl get netpol cks-78x2i7 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-78x2i7 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-78x2i7 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 20: Network Policy
Create a NetworkPolicy named `cks-lwr2l7` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-lwr2l7 --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-lwr2l7 2>/dev/null || true
```

```verify
kubectl get netpol cks-lwr2l7 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-lwr2l7 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-lwr2l7 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


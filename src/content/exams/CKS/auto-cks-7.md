---
id: auto-cks-7
title: Auto CKS Practice (Batch 7)
category: CKS
duration: 120 mins
---

# Auto CKS Practice (Batch 7)

This is an auto-generated exam to provide infinite practice questions.

# Task 1: Network Policy
Create a NetworkPolicy named `cks-mbcnd4` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```verify
kubectl get netpol cks-mbcnd4 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-mbcnd4 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-mbcnd4 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 2: Network Policy
Create a NetworkPolicy named `cks-lkedvc` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```verify
kubectl get netpol cks-lkedvc -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-lkedvc -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-lkedvc -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 3: Network Policy
Create a NetworkPolicy named `cks-8miiqe` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```verify
kubectl get netpol cks-8miiqe -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-8miiqe -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-8miiqe -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 4: Network Policy
Create a NetworkPolicy named `cks-uvn6md` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```verify
kubectl get netpol cks-uvn6md -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-uvn6md -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-uvn6md -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 5: Network Policy
Create a NetworkPolicy named `cks-bw1qfg` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```verify
kubectl get netpol cks-bw1qfg -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-bw1qfg -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-bw1qfg -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 6: Network Policy
Create a NetworkPolicy named `cks-tjw16v` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```verify
kubectl get netpol cks-tjw16v -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-tjw16v -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-tjw16v -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 7: Network Policy
Create a NetworkPolicy named `cks-wek32e` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```verify
kubectl get netpol cks-wek32e -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-wek32e -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-wek32e -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 8: Network Policy
Create a NetworkPolicy named `cks-j8tb1x` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```verify
kubectl get netpol cks-j8tb1x -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-j8tb1x -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-j8tb1x -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 9: Network Policy
Create a NetworkPolicy named `cks-v6x659` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```verify
kubectl get netpol cks-v6x659 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-v6x659 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-v6x659 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 10: Network Policy
Create a NetworkPolicy named `cks-eef9fo` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```verify
kubectl get netpol cks-eef9fo -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-eef9fo -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-eef9fo -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 11: Network Policy
Create a NetworkPolicy named `cks-3uaio6` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```verify
kubectl get netpol cks-3uaio6 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-3uaio6 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-3uaio6 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 12: Network Policy
Create a NetworkPolicy named `cks-00urqw` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```verify
kubectl get netpol cks-00urqw -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-00urqw -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-00urqw -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 13: Network Policy
Create a NetworkPolicy named `cks-5ppmj9` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```verify
kubectl get netpol cks-5ppmj9 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-5ppmj9 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-5ppmj9 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 14: Network Policy
Create a NetworkPolicy named `cks-3bk7td` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```verify
kubectl get netpol cks-3bk7td -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-3bk7td -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-3bk7td -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 15: Network Policy
Create a NetworkPolicy named `cks-a4skbl` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```verify
kubectl get netpol cks-a4skbl -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-a4skbl -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-a4skbl -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 16: Network Policy
Create a NetworkPolicy named `cks-1y04l9` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```verify
kubectl get netpol cks-1y04l9 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-1y04l9 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-1y04l9 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 17: Network Policy
Create a NetworkPolicy named `cks-d82faw` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```verify
kubectl get netpol cks-d82faw -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-d82faw -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-d82faw -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 18: Network Policy
Create a NetworkPolicy named `cks-sa6ef4` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```verify
kubectl get netpol cks-sa6ef4 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-sa6ef4 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-sa6ef4 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 19: Network Policy
Create a NetworkPolicy named `cks-46z773` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```verify
kubectl get netpol cks-46z773 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-46z773 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-46z773 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 20: Network Policy
Create a NetworkPolicy named `cks-6p6i4x` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```verify
kubectl get netpol cks-6p6i4x -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-6p6i4x -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-6p6i4x -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


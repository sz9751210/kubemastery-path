---
id: auto-cks-2
title: Auto CKS Practice (Batch 2)
category: CKS
duration: 120 mins
---

# Auto CKS Practice (Batch 2)

This is an auto-generated exam to provide infinite practice questions.

# Task 1: Network Policy
Create a NetworkPolicy named `cks-jehq27` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```verify
kubectl get netpol cks-jehq27 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-jehq27 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-jehq27 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 2: Network Policy
Create a NetworkPolicy named `cks-t49ow9` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```verify
kubectl get netpol cks-t49ow9 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-t49ow9 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-t49ow9 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 3: Network Policy
Create a NetworkPolicy named `cks-jlwnek` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```verify
kubectl get netpol cks-jlwnek -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-jlwnek -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-jlwnek -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 4: Network Policy
Create a NetworkPolicy named `cks-ewwnnc` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```verify
kubectl get netpol cks-ewwnnc -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-ewwnnc -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-ewwnnc -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 5: Network Policy
Create a NetworkPolicy named `cks-lr7rcf` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```verify
kubectl get netpol cks-lr7rcf -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-lr7rcf -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-lr7rcf -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 6: Network Policy
Create a NetworkPolicy named `cks-qwyump` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```verify
kubectl get netpol cks-qwyump -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-qwyump -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-qwyump -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 7: Network Policy
Create a NetworkPolicy named `cks-q81e93` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```verify
kubectl get netpol cks-q81e93 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-q81e93 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-q81e93 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 8: Network Policy
Create a NetworkPolicy named `cks-m4e183` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```verify
kubectl get netpol cks-m4e183 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-m4e183 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-m4e183 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 9: Network Policy
Create a NetworkPolicy named `cks-bxhqai` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```verify
kubectl get netpol cks-bxhqai -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-bxhqai -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-bxhqai -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 10: Network Policy
Create a NetworkPolicy named `cks-ny3qu8` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```verify
kubectl get netpol cks-ny3qu8 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-ny3qu8 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-ny3qu8 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 11: Network Policy
Create a NetworkPolicy named `cks-4yoir8` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```verify
kubectl get netpol cks-4yoir8 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-4yoir8 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-4yoir8 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 12: Network Policy
Create a NetworkPolicy named `cks-5d7f0s` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```verify
kubectl get netpol cks-5d7f0s -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-5d7f0s -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-5d7f0s -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 13: Network Policy
Create a NetworkPolicy named `cks-5l1rd1` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```verify
kubectl get netpol cks-5l1rd1 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-5l1rd1 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-5l1rd1 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 14: Network Policy
Create a NetworkPolicy named `cks-zgbl17` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```verify
kubectl get netpol cks-zgbl17 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-zgbl17 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-zgbl17 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 15: Network Policy
Create a NetworkPolicy named `cks-ptvox0` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```verify
kubectl get netpol cks-ptvox0 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-ptvox0 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-ptvox0 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 16: Network Policy
Create a NetworkPolicy named `cks-oo31im` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```verify
kubectl get netpol cks-oo31im -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-oo31im -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-oo31im -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 17: Network Policy
Create a NetworkPolicy named `cks-auywyi` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```verify
kubectl get netpol cks-auywyi -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-auywyi -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-auywyi -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 18: Network Policy
Create a NetworkPolicy named `cks-kwixhb` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```verify
kubectl get netpol cks-kwixhb -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-kwixhb -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-kwixhb -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 19: Network Policy
Create a NetworkPolicy named `cks-th7uf2` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```verify
kubectl get netpol cks-th7uf2 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-th7uf2 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-th7uf2 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 20: Network Policy
Create a NetworkPolicy named `cks-z8xcdi` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```verify
kubectl get netpol cks-z8xcdi -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-z8xcdi -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-z8xcdi -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


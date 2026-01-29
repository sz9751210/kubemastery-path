---
id: auto-cks-5
title: Auto CKS Practice (Batch 5)
category: CKS
duration: 120 mins
---

# Auto CKS Practice (Batch 5)

This is an auto-generated exam to provide infinite practice questions.

# Task 1: Network Policy
Create a NetworkPolicy named `cks-4r8m62` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```verify
kubectl get netpol cks-4r8m62 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-4r8m62 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-4r8m62 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 2: Network Policy
Create a NetworkPolicy named `cks-stjdci` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```verify
kubectl get netpol cks-stjdci -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-stjdci -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-stjdci -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 3: Network Policy
Create a NetworkPolicy named `cks-5gzvii` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```verify
kubectl get netpol cks-5gzvii -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-5gzvii -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-5gzvii -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 4: Network Policy
Create a NetworkPolicy named `cks-21hjlh` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```verify
kubectl get netpol cks-21hjlh -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-21hjlh -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-21hjlh -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 5: Network Policy
Create a NetworkPolicy named `cks-m2kqlf` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```verify
kubectl get netpol cks-m2kqlf -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-m2kqlf -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-m2kqlf -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 6: Network Policy
Create a NetworkPolicy named `cks-jflk8q` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```verify
kubectl get netpol cks-jflk8q -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-jflk8q -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-jflk8q -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 7: Network Policy
Create a NetworkPolicy named `cks-f7btqp` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```verify
kubectl get netpol cks-f7btqp -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-f7btqp -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-f7btqp -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 8: Network Policy
Create a NetworkPolicy named `cks-qlxsim` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```verify
kubectl get netpol cks-qlxsim -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-qlxsim -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-qlxsim -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 9: Network Policy
Create a NetworkPolicy named `cks-jk4kpo` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```verify
kubectl get netpol cks-jk4kpo -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-jk4kpo -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-jk4kpo -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 10: Network Policy
Create a NetworkPolicy named `cks-dn1p1m` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```verify
kubectl get netpol cks-dn1p1m -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-dn1p1m -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-dn1p1m -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 11: Network Policy
Create a NetworkPolicy named `cks-uvpygz` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```verify
kubectl get netpol cks-uvpygz -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-uvpygz -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-uvpygz -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 12: Network Policy
Create a NetworkPolicy named `cks-ey49qv` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```verify
kubectl get netpol cks-ey49qv -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-ey49qv -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-ey49qv -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 13: Network Policy
Create a NetworkPolicy named `cks-rbjzdp` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```verify
kubectl get netpol cks-rbjzdp -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-rbjzdp -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-rbjzdp -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 14: Network Policy
Create a NetworkPolicy named `cks-0sglqk` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```verify
kubectl get netpol cks-0sglqk -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-0sglqk -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-0sglqk -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 15: Network Policy
Create a NetworkPolicy named `cks-cfwm8p` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```verify
kubectl get netpol cks-cfwm8p -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-cfwm8p -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-cfwm8p -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 16: Network Policy
Create a NetworkPolicy named `cks-3hfogh` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```verify
kubectl get netpol cks-3hfogh -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-3hfogh -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-3hfogh -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 17: Network Policy
Create a NetworkPolicy named `cks-oodmf0` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```verify
kubectl get netpol cks-oodmf0 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-oodmf0 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-oodmf0 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 18: Network Policy
Create a NetworkPolicy named `cks-oj8sol` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```verify
kubectl get netpol cks-oj8sol -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-oj8sol -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-oj8sol -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 19: Network Policy
Create a NetworkPolicy named `cks-qrxgr3` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```verify
kubectl get netpol cks-qrxgr3 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-qrxgr3 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-qrxgr3 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 20: Network Policy
Create a NetworkPolicy named `cks-8yb25v` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```verify
kubectl get netpol cks-8yb25v -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-8yb25v -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-8yb25v -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


---
id: auto-cks-3
title: Auto CKS Practice (Batch 3)
category: CKS
duration: 120 mins
---

# Auto CKS Practice (Batch 3)

This is an auto-generated exam to provide infinite practice questions.

# Task 1: Network Policy
Create a NetworkPolicy named `cks-u075r7` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```verify
kubectl get netpol cks-u075r7 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-u075r7 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-u075r7 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 2: Network Policy
Create a NetworkPolicy named `cks-ykogyc` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```verify
kubectl get netpol cks-ykogyc -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-ykogyc -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-ykogyc -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 3: Network Policy
Create a NetworkPolicy named `cks-4thezk` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```verify
kubectl get netpol cks-4thezk -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-4thezk -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-4thezk -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 4: Network Policy
Create a NetworkPolicy named `cks-93o5a7` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```verify
kubectl get netpol cks-93o5a7 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-93o5a7 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-93o5a7 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 5: Network Policy
Create a NetworkPolicy named `cks-nx4ah9` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```verify
kubectl get netpol cks-nx4ah9 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-nx4ah9 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-nx4ah9 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 6: Network Policy
Create a NetworkPolicy named `cks-5cfnui` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```verify
kubectl get netpol cks-5cfnui -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-5cfnui -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-5cfnui -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 7: Network Policy
Create a NetworkPolicy named `cks-au4xtp` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```verify
kubectl get netpol cks-au4xtp -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-au4xtp -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-au4xtp -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 8: Network Policy
Create a NetworkPolicy named `cks-svuki9` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```verify
kubectl get netpol cks-svuki9 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-svuki9 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-svuki9 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 9: Network Policy
Create a NetworkPolicy named `cks-b8469p` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```verify
kubectl get netpol cks-b8469p -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-b8469p -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-b8469p -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 10: Network Policy
Create a NetworkPolicy named `cks-eug1zy` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```verify
kubectl get netpol cks-eug1zy -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-eug1zy -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-eug1zy -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 11: Network Policy
Create a NetworkPolicy named `cks-oc5ler` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```verify
kubectl get netpol cks-oc5ler -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-oc5ler -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-oc5ler -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 12: Network Policy
Create a NetworkPolicy named `cks-k3hx0j` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```verify
kubectl get netpol cks-k3hx0j -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-k3hx0j -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-k3hx0j -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 13: Network Policy
Create a NetworkPolicy named `cks-pvixyk` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```verify
kubectl get netpol cks-pvixyk -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-pvixyk -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-pvixyk -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 14: Network Policy
Create a NetworkPolicy named `cks-zv2c56` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```verify
kubectl get netpol cks-zv2c56 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-zv2c56 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-zv2c56 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 15: Network Policy
Create a NetworkPolicy named `cks-vfmhui` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```verify
kubectl get netpol cks-vfmhui -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-vfmhui -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-vfmhui -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 16: Network Policy
Create a NetworkPolicy named `cks-11nj9q` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```verify
kubectl get netpol cks-11nj9q -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-11nj9q -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-11nj9q -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 17: Network Policy
Create a NetworkPolicy named `cks-q3u0gh` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```verify
kubectl get netpol cks-q3u0gh -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-q3u0gh -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-q3u0gh -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 18: Network Policy
Create a NetworkPolicy named `cks-foo9d3` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```verify
kubectl get netpol cks-foo9d3 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-foo9d3 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-foo9d3 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 19: Network Policy
Create a NetworkPolicy named `cks-9w0yq6` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```verify
kubectl get netpol cks-9w0yq6 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-9w0yq6 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-9w0yq6 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 20: Network Policy
Create a NetworkPolicy named `cks-2evz92` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```verify
kubectl get netpol cks-2evz92 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-2evz92 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-2evz92 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


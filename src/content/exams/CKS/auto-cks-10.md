---
id: auto-cks-10
title: Auto CKS Practice (Batch 10)
category: CKS
duration: 120 mins
---

# Auto CKS Practice (Batch 10)

This is an auto-generated exam to provide infinite practice questions.

# Task 1: Network Policy
Create a NetworkPolicy named `cks-pj7cec` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```verify
kubectl get netpol cks-pj7cec -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-pj7cec -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-pj7cec -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 2: Network Policy
Create a NetworkPolicy named `cks-rrmda1` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```verify
kubectl get netpol cks-rrmda1 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-rrmda1 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-rrmda1 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 3: Network Policy
Create a NetworkPolicy named `cks-covhuz` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```verify
kubectl get netpol cks-covhuz -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-covhuz -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-covhuz -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 4: Network Policy
Create a NetworkPolicy named `cks-c3gyhx` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```verify
kubectl get netpol cks-c3gyhx -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-c3gyhx -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-c3gyhx -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 5: Network Policy
Create a NetworkPolicy named `cks-brp6t3` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```verify
kubectl get netpol cks-brp6t3 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-brp6t3 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-brp6t3 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 6: Network Policy
Create a NetworkPolicy named `cks-4pskf4` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```verify
kubectl get netpol cks-4pskf4 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-4pskf4 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-4pskf4 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 7: Network Policy
Create a NetworkPolicy named `cks-2cc2jv` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```verify
kubectl get netpol cks-2cc2jv -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-2cc2jv -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-2cc2jv -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 8: Network Policy
Create a NetworkPolicy named `cks-y9od1v` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```verify
kubectl get netpol cks-y9od1v -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-y9od1v -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-y9od1v -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 9: Network Policy
Create a NetworkPolicy named `cks-s9webq` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```verify
kubectl get netpol cks-s9webq -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-s9webq -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-s9webq -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 10: Network Policy
Create a NetworkPolicy named `cks-igm210` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```verify
kubectl get netpol cks-igm210 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-igm210 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-igm210 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 11: Network Policy
Create a NetworkPolicy named `cks-jilkrc` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```verify
kubectl get netpol cks-jilkrc -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-jilkrc -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-jilkrc -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 12: Network Policy
Create a NetworkPolicy named `cks-nz35iz` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```verify
kubectl get netpol cks-nz35iz -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-nz35iz -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-nz35iz -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 13: Network Policy
Create a NetworkPolicy named `cks-qvpsnv` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```verify
kubectl get netpol cks-qvpsnv -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-qvpsnv -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-qvpsnv -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 14: Network Policy
Create a NetworkPolicy named `cks-19f5te` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```verify
kubectl get netpol cks-19f5te -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-19f5te -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-19f5te -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 15: Network Policy
Create a NetworkPolicy named `cks-xxeh0h` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```verify
kubectl get netpol cks-xxeh0h -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-xxeh0h -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-xxeh0h -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 16: Network Policy
Create a NetworkPolicy named `cks-qh3a7q` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```verify
kubectl get netpol cks-qh3a7q -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-qh3a7q -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-qh3a7q -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 17: Network Policy
Create a NetworkPolicy named `cks-bm0tgk` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```verify
kubectl get netpol cks-bm0tgk -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-bm0tgk -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-bm0tgk -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 18: Network Policy
Create a NetworkPolicy named `cks-ovfb54` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```verify
kubectl get netpol cks-ovfb54 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-ovfb54 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-ovfb54 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 19: Network Policy
Create a NetworkPolicy named `cks-k0n2v6` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```verify
kubectl get netpol cks-k0n2v6 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-k0n2v6 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-k0n2v6 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 20: Network Policy
Create a NetworkPolicy named `cks-vbxq41` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```verify
kubectl get netpol cks-vbxq41 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-vbxq41 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-vbxq41 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


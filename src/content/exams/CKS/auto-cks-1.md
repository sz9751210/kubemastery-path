---
id: auto-cks-1
title: Auto CKS Practice (Batch 1)
category: CKS
duration: 120 mins
---

# Auto CKS Practice (Batch 1)

This is an auto-generated exam to provide infinite practice questions.

# Task 1: Network Policy
Create a NetworkPolicy named `cks-ine0m2` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-ine0m2 --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-ine0m2 2>/dev/null || true
```

```verify
kubectl get netpol cks-ine0m2 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-ine0m2 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-ine0m2 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 2: Network Policy
Create a NetworkPolicy named `cks-tpmd71` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-tpmd71 --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-tpmd71 2>/dev/null || true
```

```verify
kubectl get netpol cks-tpmd71 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-tpmd71 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-tpmd71 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 3: Network Policy
Create a NetworkPolicy named `cks-oiha52` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-oiha52 --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-oiha52 2>/dev/null || true
```

```verify
kubectl get netpol cks-oiha52 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-oiha52 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-oiha52 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 4: Network Policy
Create a NetworkPolicy named `cks-68yi3a` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-68yi3a --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-68yi3a 2>/dev/null || true
```

```verify
kubectl get netpol cks-68yi3a -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-68yi3a -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-68yi3a -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 5: Network Policy
Create a NetworkPolicy named `cks-5wy505` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-5wy505 --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-5wy505 2>/dev/null || true
```

```verify
kubectl get netpol cks-5wy505 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-5wy505 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-5wy505 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 6: Network Policy
Create a NetworkPolicy named `cks-11a93n` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-11a93n --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-11a93n 2>/dev/null || true
```

```verify
kubectl get netpol cks-11a93n -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-11a93n -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-11a93n -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 7: Network Policy
Create a NetworkPolicy named `cks-7cxu38` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-7cxu38 --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-7cxu38 2>/dev/null || true
```

```verify
kubectl get netpol cks-7cxu38 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-7cxu38 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-7cxu38 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 8: Network Policy
Create a NetworkPolicy named `cks-07t21u` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-07t21u --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-07t21u 2>/dev/null || true
```

```verify
kubectl get netpol cks-07t21u -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-07t21u -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-07t21u -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 9: Network Policy
Create a NetworkPolicy named `cks-tnwtrz` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-tnwtrz --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-tnwtrz 2>/dev/null || true
```

```verify
kubectl get netpol cks-tnwtrz -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-tnwtrz -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-tnwtrz -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 10: Network Policy
Create a NetworkPolicy named `cks-45ob59` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-45ob59 --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-45ob59 2>/dev/null || true
```

```verify
kubectl get netpol cks-45ob59 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-45ob59 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-45ob59 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 11: Network Policy
Create a NetworkPolicy named `cks-uasbup` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-uasbup --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-uasbup 2>/dev/null || true
```

```verify
kubectl get netpol cks-uasbup -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-uasbup -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-uasbup -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 12: Network Policy
Create a NetworkPolicy named `cks-1n43cx` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-1n43cx --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-1n43cx 2>/dev/null || true
```

```verify
kubectl get netpol cks-1n43cx -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-1n43cx -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-1n43cx -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 13: Network Policy
Create a NetworkPolicy named `cks-r2teqm` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-r2teqm --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-r2teqm 2>/dev/null || true
```

```verify
kubectl get netpol cks-r2teqm -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-r2teqm -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-r2teqm -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 14: Network Policy
Create a NetworkPolicy named `cks-u12hgb` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-u12hgb --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-u12hgb 2>/dev/null || true
```

```verify
kubectl get netpol cks-u12hgb -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-u12hgb -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-u12hgb -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 15: Network Policy
Create a NetworkPolicy named `cks-oazp58` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-oazp58 --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-oazp58 2>/dev/null || true
```

```verify
kubectl get netpol cks-oazp58 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-oazp58 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-oazp58 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 16: Network Policy
Create a NetworkPolicy named `cks-tkzmnq` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-tkzmnq --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-tkzmnq 2>/dev/null || true
```

```verify
kubectl get netpol cks-tkzmnq -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-tkzmnq -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-tkzmnq -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 17: Network Policy
Create a NetworkPolicy named `cks-etkxrq` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-etkxrq --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-etkxrq 2>/dev/null || true
```

```verify
kubectl get netpol cks-etkxrq -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-etkxrq -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-etkxrq -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 18: Network Policy
Create a NetworkPolicy named `cks-e9quqa` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-e9quqa --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-e9quqa 2>/dev/null || true
```

```verify
kubectl get netpol cks-e9quqa -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-e9quqa -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-e9quqa -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 19: Network Policy
Create a NetworkPolicy named `cks-lhyq1i` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-lhyq1i --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-lhyq1i 2>/dev/null || true
```

```verify
kubectl get netpol cks-lhyq1i -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-lhyq1i -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-lhyq1i -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 20: Network Policy
Create a NetworkPolicy named `cks-roalk1` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-roalk1 --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-roalk1 2>/dev/null || true
```

```verify
kubectl get netpol cks-roalk1 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-roalk1 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-roalk1 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


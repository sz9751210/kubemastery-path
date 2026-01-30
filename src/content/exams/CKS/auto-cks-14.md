---
id: auto-cks-14
title: Auto CKS Practice (Batch 14)
category: CKS
duration: 120 mins
---

# Auto CKS Practice (Batch 14)

This is an auto-generated exam to provide infinite practice questions.

# Task 1: Network Policy
Create a NetworkPolicy named `cks-afhx42` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-afhx42 --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-afhx42 2>/dev/null || true
```

```verify
kubectl get netpol cks-afhx42 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-afhx42 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-afhx42 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 2: Network Policy
Create a NetworkPolicy named `cks-iah9ku` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-iah9ku --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-iah9ku 2>/dev/null || true
```

```verify
kubectl get netpol cks-iah9ku -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-iah9ku -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-iah9ku -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 3: Network Policy
Create a NetworkPolicy named `cks-1eon1e` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-1eon1e --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-1eon1e 2>/dev/null || true
```

```verify
kubectl get netpol cks-1eon1e -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-1eon1e -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-1eon1e -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 4: Network Policy
Create a NetworkPolicy named `cks-h2w3zr` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-h2w3zr --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-h2w3zr 2>/dev/null || true
```

```verify
kubectl get netpol cks-h2w3zr -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-h2w3zr -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-h2w3zr -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 5: Network Policy
Create a NetworkPolicy named `cks-lpthl7` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-lpthl7 --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-lpthl7 2>/dev/null || true
```

```verify
kubectl get netpol cks-lpthl7 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-lpthl7 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-lpthl7 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 6: Network Policy
Create a NetworkPolicy named `cks-3dp635` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-3dp635 --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-3dp635 2>/dev/null || true
```

```verify
kubectl get netpol cks-3dp635 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-3dp635 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-3dp635 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 7: Network Policy
Create a NetworkPolicy named `cks-4y7rff` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-4y7rff --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-4y7rff 2>/dev/null || true
```

```verify
kubectl get netpol cks-4y7rff -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-4y7rff -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-4y7rff -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 8: Network Policy
Create a NetworkPolicy named `cks-guc6d1` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-guc6d1 --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-guc6d1 2>/dev/null || true
```

```verify
kubectl get netpol cks-guc6d1 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-guc6d1 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-guc6d1 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 9: Network Policy
Create a NetworkPolicy named `cks-so66a1` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-so66a1 --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-so66a1 2>/dev/null || true
```

```verify
kubectl get netpol cks-so66a1 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-so66a1 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-so66a1 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 10: Network Policy
Create a NetworkPolicy named `cks-t2zspl` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-t2zspl --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-t2zspl 2>/dev/null || true
```

```verify
kubectl get netpol cks-t2zspl -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-t2zspl -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-t2zspl -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 11: Network Policy
Create a NetworkPolicy named `cks-ie0azd` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-ie0azd --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-ie0azd 2>/dev/null || true
```

```verify
kubectl get netpol cks-ie0azd -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-ie0azd -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-ie0azd -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 12: Network Policy
Create a NetworkPolicy named `cks-55lve1` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-55lve1 --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-55lve1 2>/dev/null || true
```

```verify
kubectl get netpol cks-55lve1 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-55lve1 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-55lve1 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 13: Network Policy
Create a NetworkPolicy named `cks-rmp7np` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-rmp7np --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-rmp7np 2>/dev/null || true
```

```verify
kubectl get netpol cks-rmp7np -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-rmp7np -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-rmp7np -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 14: Network Policy
Create a NetworkPolicy named `cks-hhnaht` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-hhnaht --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-hhnaht 2>/dev/null || true
```

```verify
kubectl get netpol cks-hhnaht -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-hhnaht -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-hhnaht -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 15: Network Policy
Create a NetworkPolicy named `cks-896fwa` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-896fwa --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-896fwa 2>/dev/null || true
```

```verify
kubectl get netpol cks-896fwa -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-896fwa -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-896fwa -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 16: Network Policy
Create a NetworkPolicy named `cks-r4ddal` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-r4ddal --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-r4ddal 2>/dev/null || true
```

```verify
kubectl get netpol cks-r4ddal -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-r4ddal -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-r4ddal -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 17: Network Policy
Create a NetworkPolicy named `cks-6t2qzq` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-6t2qzq --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-6t2qzq 2>/dev/null || true
```

```verify
kubectl get netpol cks-6t2qzq -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-6t2qzq -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-6t2qzq -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 18: Network Policy
Create a NetworkPolicy named `cks-tj1y4e` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-tj1y4e --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-tj1y4e 2>/dev/null || true
```

```verify
kubectl get netpol cks-tj1y4e -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-tj1y4e -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-tj1y4e -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 19: Network Policy
Create a NetworkPolicy named `cks-s7uaps` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-s7uaps --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-s7uaps 2>/dev/null || true
```

```verify
kubectl get netpol cks-s7uaps -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-s7uaps -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-s7uaps -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 20: Network Policy
Create a NetworkPolicy named `cks-2mao1m` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-2mao1m --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-2mao1m 2>/dev/null || true
```

```verify
kubectl get netpol cks-2mao1m -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-2mao1m -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-2mao1m -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


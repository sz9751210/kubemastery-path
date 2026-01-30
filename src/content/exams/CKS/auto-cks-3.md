---
id: auto-cks-3
title: Auto CKS Practice (Batch 3)
category: CKS
duration: 120 mins
---

# Auto CKS Practice (Batch 3)

This is an auto-generated exam to provide infinite practice questions.

# Task 1: Network Policy
Create a NetworkPolicy named `cks-h9y848` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-h9y848 --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-h9y848 2>/dev/null || true
```

```verify
kubectl get netpol cks-h9y848 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-h9y848 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-h9y848 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 2: Network Policy
Create a NetworkPolicy named `cks-gdjg87` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-gdjg87 --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-gdjg87 2>/dev/null || true
```

```verify
kubectl get netpol cks-gdjg87 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-gdjg87 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-gdjg87 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 3: Network Policy
Create a NetworkPolicy named `cks-ol8lwk` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-ol8lwk --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-ol8lwk 2>/dev/null || true
```

```verify
kubectl get netpol cks-ol8lwk -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-ol8lwk -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-ol8lwk -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 4: Network Policy
Create a NetworkPolicy named `cks-zoqqz5` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-zoqqz5 --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-zoqqz5 2>/dev/null || true
```

```verify
kubectl get netpol cks-zoqqz5 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-zoqqz5 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-zoqqz5 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 5: Network Policy
Create a NetworkPolicy named `cks-diwhyj` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-diwhyj --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-diwhyj 2>/dev/null || true
```

```verify
kubectl get netpol cks-diwhyj -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-diwhyj -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-diwhyj -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 6: Network Policy
Create a NetworkPolicy named `cks-255m3g` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-255m3g --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-255m3g 2>/dev/null || true
```

```verify
kubectl get netpol cks-255m3g -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-255m3g -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-255m3g -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 7: Network Policy
Create a NetworkPolicy named `cks-9ru34d` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-9ru34d --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-9ru34d 2>/dev/null || true
```

```verify
kubectl get netpol cks-9ru34d -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-9ru34d -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-9ru34d -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 8: Network Policy
Create a NetworkPolicy named `cks-glmo0p` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-glmo0p --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-glmo0p 2>/dev/null || true
```

```verify
kubectl get netpol cks-glmo0p -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-glmo0p -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-glmo0p -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 9: Network Policy
Create a NetworkPolicy named `cks-o8dxx1` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-o8dxx1 --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-o8dxx1 2>/dev/null || true
```

```verify
kubectl get netpol cks-o8dxx1 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-o8dxx1 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-o8dxx1 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 10: Network Policy
Create a NetworkPolicy named `cks-bk229p` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-bk229p --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-bk229p 2>/dev/null || true
```

```verify
kubectl get netpol cks-bk229p -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-bk229p -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-bk229p -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 11: Network Policy
Create a NetworkPolicy named `cks-9gk1jr` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-9gk1jr --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-9gk1jr 2>/dev/null || true
```

```verify
kubectl get netpol cks-9gk1jr -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-9gk1jr -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-9gk1jr -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 12: Network Policy
Create a NetworkPolicy named `cks-va51o8` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-va51o8 --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-va51o8 2>/dev/null || true
```

```verify
kubectl get netpol cks-va51o8 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-va51o8 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-va51o8 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 13: Network Policy
Create a NetworkPolicy named `cks-kp36bs` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-kp36bs --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-kp36bs 2>/dev/null || true
```

```verify
kubectl get netpol cks-kp36bs -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-kp36bs -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-kp36bs -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 14: Network Policy
Create a NetworkPolicy named `cks-moeh54` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-moeh54 --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-moeh54 2>/dev/null || true
```

```verify
kubectl get netpol cks-moeh54 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-moeh54 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-moeh54 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 15: Network Policy
Create a NetworkPolicy named `cks-nvvzg0` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-nvvzg0 --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-nvvzg0 2>/dev/null || true
```

```verify
kubectl get netpol cks-nvvzg0 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-nvvzg0 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-nvvzg0 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 16: Network Policy
Create a NetworkPolicy named `cks-y4zatx` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-y4zatx --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-y4zatx 2>/dev/null || true
```

```verify
kubectl get netpol cks-y4zatx -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-y4zatx -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-y4zatx -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 17: Network Policy
Create a NetworkPolicy named `cks-q15911` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-q15911 --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-q15911 2>/dev/null || true
```

```verify
kubectl get netpol cks-q15911 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-q15911 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-q15911 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 18: Network Policy
Create a NetworkPolicy named `cks-k779xb` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-k779xb --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-k779xb 2>/dev/null || true
```

```verify
kubectl get netpol cks-k779xb -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-k779xb -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-k779xb -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 19: Network Policy
Create a NetworkPolicy named `cks-yhcmvc` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-yhcmvc --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-yhcmvc 2>/dev/null || true
```

```verify
kubectl get netpol cks-yhcmvc -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-yhcmvc -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-yhcmvc -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 20: Network Policy
Create a NetworkPolicy named `cks-ubuibi` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-ubuibi --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-ubuibi 2>/dev/null || true
```

```verify
kubectl get netpol cks-ubuibi -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-ubuibi -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-ubuibi -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


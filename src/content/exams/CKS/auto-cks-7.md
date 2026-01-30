---
id: auto-cks-7
title: Auto CKS Practice (Batch 7)
category: CKS
duration: 120 mins
---

# Auto CKS Practice (Batch 7)

This is an auto-generated exam to provide infinite practice questions.

# Task 1: Network Policy
Create a NetworkPolicy named `cks-jwd24y` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-jwd24y --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-jwd24y 2>/dev/null || true
```

```verify
kubectl get netpol cks-jwd24y -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-jwd24y -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-jwd24y -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 2: Network Policy
Create a NetworkPolicy named `cks-1ubovm` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-1ubovm --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-1ubovm 2>/dev/null || true
```

```verify
kubectl get netpol cks-1ubovm -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-1ubovm -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-1ubovm -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 3: Network Policy
Create a NetworkPolicy named `cks-yn50gz` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-yn50gz --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-yn50gz 2>/dev/null || true
```

```verify
kubectl get netpol cks-yn50gz -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-yn50gz -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-yn50gz -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 4: Network Policy
Create a NetworkPolicy named `cks-5imybr` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-5imybr --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-5imybr 2>/dev/null || true
```

```verify
kubectl get netpol cks-5imybr -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-5imybr -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-5imybr -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 5: Network Policy
Create a NetworkPolicy named `cks-687o4w` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-687o4w --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-687o4w 2>/dev/null || true
```

```verify
kubectl get netpol cks-687o4w -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-687o4w -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-687o4w -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 6: Network Policy
Create a NetworkPolicy named `cks-wco2tc` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-wco2tc --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-wco2tc 2>/dev/null || true
```

```verify
kubectl get netpol cks-wco2tc -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-wco2tc -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-wco2tc -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 7: Network Policy
Create a NetworkPolicy named `cks-naasnj` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-naasnj --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-naasnj 2>/dev/null || true
```

```verify
kubectl get netpol cks-naasnj -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-naasnj -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-naasnj -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 8: Network Policy
Create a NetworkPolicy named `cks-r2jm0s` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-r2jm0s --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-r2jm0s 2>/dev/null || true
```

```verify
kubectl get netpol cks-r2jm0s -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-r2jm0s -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-r2jm0s -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 9: Network Policy
Create a NetworkPolicy named `cks-f2ptbd` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-f2ptbd --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-f2ptbd 2>/dev/null || true
```

```verify
kubectl get netpol cks-f2ptbd -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-f2ptbd -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-f2ptbd -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 10: Network Policy
Create a NetworkPolicy named `cks-tn7cno` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-tn7cno --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-tn7cno 2>/dev/null || true
```

```verify
kubectl get netpol cks-tn7cno -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-tn7cno -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-tn7cno -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 11: Network Policy
Create a NetworkPolicy named `cks-k2yo7v` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-k2yo7v --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-k2yo7v 2>/dev/null || true
```

```verify
kubectl get netpol cks-k2yo7v -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-k2yo7v -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-k2yo7v -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 12: Network Policy
Create a NetworkPolicy named `cks-hlw77g` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-hlw77g --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-hlw77g 2>/dev/null || true
```

```verify
kubectl get netpol cks-hlw77g -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-hlw77g -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-hlw77g -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 13: Network Policy
Create a NetworkPolicy named `cks-rkq9y0` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-rkq9y0 --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-rkq9y0 2>/dev/null || true
```

```verify
kubectl get netpol cks-rkq9y0 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-rkq9y0 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-rkq9y0 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 14: Network Policy
Create a NetworkPolicy named `cks-f3kyqf` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-f3kyqf --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-f3kyqf 2>/dev/null || true
```

```verify
kubectl get netpol cks-f3kyqf -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-f3kyqf -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-f3kyqf -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 15: Network Policy
Create a NetworkPolicy named `cks-jbfzza` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-jbfzza --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-jbfzza 2>/dev/null || true
```

```verify
kubectl get netpol cks-jbfzza -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-jbfzza -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-jbfzza -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 16: Network Policy
Create a NetworkPolicy named `cks-y6gqth` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-y6gqth --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-y6gqth 2>/dev/null || true
```

```verify
kubectl get netpol cks-y6gqth -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-y6gqth -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-y6gqth -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 17: Network Policy
Create a NetworkPolicy named `cks-9a5ia9` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-9a5ia9 --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-9a5ia9 2>/dev/null || true
```

```verify
kubectl get netpol cks-9a5ia9 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-9a5ia9 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-9a5ia9 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 18: Network Policy
Create a NetworkPolicy named `cks-70j0mm` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-70j0mm --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-70j0mm 2>/dev/null || true
```

```verify
kubectl get netpol cks-70j0mm -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-70j0mm -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-70j0mm -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 19: Network Policy
Create a NetworkPolicy named `cks-shsf64` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-shsf64 --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-shsf64 2>/dev/null || true
```

```verify
kubectl get netpol cks-shsf64 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-shsf64 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-shsf64 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 20: Network Policy
Create a NetworkPolicy named `cks-e7bry0` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-e7bry0 --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-e7bry0 2>/dev/null || true
```

```verify
kubectl get netpol cks-e7bry0 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-e7bry0 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-e7bry0 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


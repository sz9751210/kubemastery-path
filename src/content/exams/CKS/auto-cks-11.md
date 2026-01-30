---
id: auto-cks-11
title: Auto CKS Practice (Batch 11)
category: CKS
duration: 120 mins
---

# Auto CKS Practice (Batch 11)

This is an auto-generated exam to provide infinite practice questions.

# Task 1: Network Policy
Create a NetworkPolicy named `cks-js2clv` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-js2clv --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-js2clv 2>/dev/null || true
```

```verify
kubectl get netpol cks-js2clv -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-js2clv -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-js2clv -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 2: Network Policy
Create a NetworkPolicy named `cks-drccor` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-drccor --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-drccor 2>/dev/null || true
```

```verify
kubectl get netpol cks-drccor -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-drccor -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-drccor -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 3: Network Policy
Create a NetworkPolicy named `cks-rzwrxa` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-rzwrxa --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-rzwrxa 2>/dev/null || true
```

```verify
kubectl get netpol cks-rzwrxa -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-rzwrxa -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-rzwrxa -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 4: Network Policy
Create a NetworkPolicy named `cks-88iny9` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-88iny9 --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-88iny9 2>/dev/null || true
```

```verify
kubectl get netpol cks-88iny9 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-88iny9 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-88iny9 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 5: Network Policy
Create a NetworkPolicy named `cks-kgufco` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-kgufco --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-kgufco 2>/dev/null || true
```

```verify
kubectl get netpol cks-kgufco -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-kgufco -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-kgufco -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 6: Network Policy
Create a NetworkPolicy named `cks-3bw8eg` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-3bw8eg --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-3bw8eg 2>/dev/null || true
```

```verify
kubectl get netpol cks-3bw8eg -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-3bw8eg -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-3bw8eg -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 7: Network Policy
Create a NetworkPolicy named `cks-zz0l99` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-zz0l99 --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-zz0l99 2>/dev/null || true
```

```verify
kubectl get netpol cks-zz0l99 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-zz0l99 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-zz0l99 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 8: Network Policy
Create a NetworkPolicy named `cks-3enh2l` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-3enh2l --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-3enh2l 2>/dev/null || true
```

```verify
kubectl get netpol cks-3enh2l -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-3enh2l -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-3enh2l -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 9: Network Policy
Create a NetworkPolicy named `cks-gfdz5w` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-gfdz5w --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-gfdz5w 2>/dev/null || true
```

```verify
kubectl get netpol cks-gfdz5w -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-gfdz5w -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-gfdz5w -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 10: Network Policy
Create a NetworkPolicy named `cks-32cy7k` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-32cy7k --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-32cy7k 2>/dev/null || true
```

```verify
kubectl get netpol cks-32cy7k -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-32cy7k -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-32cy7k -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 11: Network Policy
Create a NetworkPolicy named `cks-gvnugg` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-gvnugg --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-gvnugg 2>/dev/null || true
```

```verify
kubectl get netpol cks-gvnugg -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-gvnugg -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-gvnugg -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 12: Network Policy
Create a NetworkPolicy named `cks-217qaq` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-217qaq --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-217qaq 2>/dev/null || true
```

```verify
kubectl get netpol cks-217qaq -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-217qaq -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-217qaq -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 13: Network Policy
Create a NetworkPolicy named `cks-exjk5x` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-exjk5x --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-exjk5x 2>/dev/null || true
```

```verify
kubectl get netpol cks-exjk5x -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-exjk5x -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-exjk5x -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 14: Network Policy
Create a NetworkPolicy named `cks-ok0ojy` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-ok0ojy --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-ok0ojy 2>/dev/null || true
```

```verify
kubectl get netpol cks-ok0ojy -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-ok0ojy -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-ok0ojy -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 15: Network Policy
Create a NetworkPolicy named `cks-3vd8ai` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-3vd8ai --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-3vd8ai 2>/dev/null || true
```

```verify
kubectl get netpol cks-3vd8ai -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-3vd8ai -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-3vd8ai -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 16: Network Policy
Create a NetworkPolicy named `cks-2je9q6` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-2je9q6 --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-2je9q6 2>/dev/null || true
```

```verify
kubectl get netpol cks-2je9q6 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-2je9q6 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-2je9q6 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 17: Network Policy
Create a NetworkPolicy named `cks-h0m65z` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-h0m65z --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-h0m65z 2>/dev/null || true
```

```verify
kubectl get netpol cks-h0m65z -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-h0m65z -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-h0m65z -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 18: Network Policy
Create a NetworkPolicy named `cks-2m0fhz` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-2m0fhz --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-2m0fhz 2>/dev/null || true
```

```verify
kubectl get netpol cks-2m0fhz -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-2m0fhz -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-2m0fhz -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 19: Network Policy
Create a NetworkPolicy named `cks-fsdk1v` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-fsdk1v --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-fsdk1v 2>/dev/null || true
```

```verify
kubectl get netpol cks-fsdk1v -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-fsdk1v -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-fsdk1v -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 20: Network Policy
Create a NetworkPolicy named `cks-aern1g` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-aern1g --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-aern1g 2>/dev/null || true
```

```verify
kubectl get netpol cks-aern1g -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-aern1g -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-aern1g -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


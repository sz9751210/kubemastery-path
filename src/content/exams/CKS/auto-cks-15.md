---
id: auto-cks-15
title: Auto CKS Practice (Batch 15)
category: CKS
duration: 120 mins
---

# Auto CKS Practice (Batch 15)

This is an auto-generated exam to provide infinite practice questions.

# Task 1: Network Policy
Create a NetworkPolicy named `cks-r3s0jk` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-r3s0jk --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-r3s0jk 2>/dev/null || true
```

```verify
kubectl get netpol cks-r3s0jk -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-r3s0jk -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-r3s0jk -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 2: Network Policy
Create a NetworkPolicy named `cks-2ltmjg` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-2ltmjg --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-2ltmjg 2>/dev/null || true
```

```verify
kubectl get netpol cks-2ltmjg -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-2ltmjg -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-2ltmjg -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 3: Network Policy
Create a NetworkPolicy named `cks-pnrbz1` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-pnrbz1 --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-pnrbz1 2>/dev/null || true
```

```verify
kubectl get netpol cks-pnrbz1 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-pnrbz1 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-pnrbz1 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 4: Network Policy
Create a NetworkPolicy named `cks-cw3h6k` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-cw3h6k --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-cw3h6k 2>/dev/null || true
```

```verify
kubectl get netpol cks-cw3h6k -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-cw3h6k -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-cw3h6k -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 5: Network Policy
Create a NetworkPolicy named `cks-nu3oys` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-nu3oys --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-nu3oys 2>/dev/null || true
```

```verify
kubectl get netpol cks-nu3oys -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-nu3oys -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-nu3oys -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 6: Network Policy
Create a NetworkPolicy named `cks-czhih3` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-czhih3 --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-czhih3 2>/dev/null || true
```

```verify
kubectl get netpol cks-czhih3 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-czhih3 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-czhih3 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 7: Network Policy
Create a NetworkPolicy named `cks-qyq06u` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-qyq06u --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-qyq06u 2>/dev/null || true
```

```verify
kubectl get netpol cks-qyq06u -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-qyq06u -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-qyq06u -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 8: Network Policy
Create a NetworkPolicy named `cks-icupv3` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-icupv3 --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-icupv3 2>/dev/null || true
```

```verify
kubectl get netpol cks-icupv3 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-icupv3 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-icupv3 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 9: Network Policy
Create a NetworkPolicy named `cks-6opfnu` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-6opfnu --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-6opfnu 2>/dev/null || true
```

```verify
kubectl get netpol cks-6opfnu -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-6opfnu -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-6opfnu -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 10: Network Policy
Create a NetworkPolicy named `cks-52hsnw` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-52hsnw --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-52hsnw 2>/dev/null || true
```

```verify
kubectl get netpol cks-52hsnw -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-52hsnw -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-52hsnw -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 11: Network Policy
Create a NetworkPolicy named `cks-u74u9n` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-u74u9n --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-u74u9n 2>/dev/null || true
```

```verify
kubectl get netpol cks-u74u9n -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-u74u9n -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-u74u9n -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 12: Network Policy
Create a NetworkPolicy named `cks-6a2r1a` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-6a2r1a --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-6a2r1a 2>/dev/null || true
```

```verify
kubectl get netpol cks-6a2r1a -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-6a2r1a -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-6a2r1a -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 13: Network Policy
Create a NetworkPolicy named `cks-glaq77` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-glaq77 --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-glaq77 2>/dev/null || true
```

```verify
kubectl get netpol cks-glaq77 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-glaq77 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-glaq77 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 14: Network Policy
Create a NetworkPolicy named `cks-97ut3o` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-97ut3o --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-97ut3o 2>/dev/null || true
```

```verify
kubectl get netpol cks-97ut3o -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-97ut3o -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-97ut3o -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 15: Network Policy
Create a NetworkPolicy named `cks-hu6fqz` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-hu6fqz --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-hu6fqz 2>/dev/null || true
```

```verify
kubectl get netpol cks-hu6fqz -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-hu6fqz -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-hu6fqz -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 16: Network Policy
Create a NetworkPolicy named `cks-dkryxm` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-dkryxm --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-dkryxm 2>/dev/null || true
```

```verify
kubectl get netpol cks-dkryxm -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-dkryxm -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-dkryxm -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 17: Network Policy
Create a NetworkPolicy named `cks-9h7p8g` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-9h7p8g --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-9h7p8g 2>/dev/null || true
```

```verify
kubectl get netpol cks-9h7p8g -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-9h7p8g -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-9h7p8g -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 18: Network Policy
Create a NetworkPolicy named `cks-dfijv5` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-dfijv5 --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-dfijv5 2>/dev/null || true
```

```verify
kubectl get netpol cks-dfijv5 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-dfijv5 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-dfijv5 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 19: Network Policy
Create a NetworkPolicy named `cks-31pwdx` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-31pwdx --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-31pwdx 2>/dev/null || true
```

```verify
kubectl get netpol cks-31pwdx -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-31pwdx -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-31pwdx -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 20: Network Policy
Create a NetworkPolicy named `cks-nk6c6s` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-nk6c6s --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-nk6c6s 2>/dev/null || true
```

```verify
kubectl get netpol cks-nk6c6s -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-nk6c6s -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-nk6c6s -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


---
id: auto-cks-6
title: Auto CKS Practice (Batch 6)
category: CKS
duration: 120 mins
---

# Auto CKS Practice (Batch 6)

This is an auto-generated exam to provide infinite practice questions.

# Task 1: Network Policy
Create a NetworkPolicy named `cks-7svncn` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-7svncn --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-7svncn 2>/dev/null || true
```

```verify
kubectl get netpol cks-7svncn -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-7svncn -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-7svncn -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 2: Network Policy
Create a NetworkPolicy named `cks-6ymetv` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-6ymetv --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-6ymetv 2>/dev/null || true
```

```verify
kubectl get netpol cks-6ymetv -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-6ymetv -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-6ymetv -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 3: Network Policy
Create a NetworkPolicy named `cks-64rkxo` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-64rkxo --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-64rkxo 2>/dev/null || true
```

```verify
kubectl get netpol cks-64rkxo -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-64rkxo -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-64rkxo -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 4: Network Policy
Create a NetworkPolicy named `cks-n07bjx` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-n07bjx --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-n07bjx 2>/dev/null || true
```

```verify
kubectl get netpol cks-n07bjx -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-n07bjx -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-n07bjx -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 5: Network Policy
Create a NetworkPolicy named `cks-ecrqyq` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-ecrqyq --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-ecrqyq 2>/dev/null || true
```

```verify
kubectl get netpol cks-ecrqyq -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-ecrqyq -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-ecrqyq -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 6: Network Policy
Create a NetworkPolicy named `cks-sv5b5p` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-sv5b5p --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-sv5b5p 2>/dev/null || true
```

```verify
kubectl get netpol cks-sv5b5p -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-sv5b5p -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-sv5b5p -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 7: Network Policy
Create a NetworkPolicy named `cks-df3ijq` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-df3ijq --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-df3ijq 2>/dev/null || true
```

```verify
kubectl get netpol cks-df3ijq -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-df3ijq -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-df3ijq -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 8: Network Policy
Create a NetworkPolicy named `cks-l8wral` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-l8wral --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-l8wral 2>/dev/null || true
```

```verify
kubectl get netpol cks-l8wral -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-l8wral -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-l8wral -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 9: Network Policy
Create a NetworkPolicy named `cks-i6m54k` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-i6m54k --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-i6m54k 2>/dev/null || true
```

```verify
kubectl get netpol cks-i6m54k -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-i6m54k -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-i6m54k -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 10: Network Policy
Create a NetworkPolicy named `cks-nhg95q` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-nhg95q --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-nhg95q 2>/dev/null || true
```

```verify
kubectl get netpol cks-nhg95q -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-nhg95q -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-nhg95q -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 11: Network Policy
Create a NetworkPolicy named `cks-05cinb` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-05cinb --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-05cinb 2>/dev/null || true
```

```verify
kubectl get netpol cks-05cinb -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-05cinb -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-05cinb -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 12: Network Policy
Create a NetworkPolicy named `cks-74ihvb` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-74ihvb --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-74ihvb 2>/dev/null || true
```

```verify
kubectl get netpol cks-74ihvb -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-74ihvb -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-74ihvb -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 13: Network Policy
Create a NetworkPolicy named `cks-cnr39o` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-cnr39o --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-cnr39o 2>/dev/null || true
```

```verify
kubectl get netpol cks-cnr39o -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-cnr39o -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-cnr39o -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 14: Network Policy
Create a NetworkPolicy named `cks-fay2qk` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-fay2qk --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-fay2qk 2>/dev/null || true
```

```verify
kubectl get netpol cks-fay2qk -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-fay2qk -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-fay2qk -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 15: Network Policy
Create a NetworkPolicy named `cks-cuu080` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-cuu080 --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-cuu080 2>/dev/null || true
```

```verify
kubectl get netpol cks-cuu080 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-cuu080 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-cuu080 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 16: Network Policy
Create a NetworkPolicy named `cks-pod0v7` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-pod0v7 --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-pod0v7 2>/dev/null || true
```

```verify
kubectl get netpol cks-pod0v7 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-pod0v7 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-pod0v7 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 17: Network Policy
Create a NetworkPolicy named `cks-dwxlc8` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-dwxlc8 --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-dwxlc8 2>/dev/null || true
```

```verify
kubectl get netpol cks-dwxlc8 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-dwxlc8 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-dwxlc8 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 18: Network Policy
Create a NetworkPolicy named `cks-4vn9qn` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-4vn9qn --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-4vn9qn 2>/dev/null || true
```

```verify
kubectl get netpol cks-4vn9qn -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-4vn9qn -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-4vn9qn -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 19: Network Policy
Create a NetworkPolicy named `cks-ndomaj` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-ndomaj --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-ndomaj 2>/dev/null || true
```

```verify
kubectl get netpol cks-ndomaj -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-ndomaj -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-ndomaj -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 20: Network Policy
Create a NetworkPolicy named `cks-5gh2io` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-5gh2io --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-5gh2io 2>/dev/null || true
```

```verify
kubectl get netpol cks-5gh2io -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-5gh2io -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-5gh2io -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


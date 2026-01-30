---
id: auto-cks-9
title: Auto CKS Practice (Batch 9)
category: CKS
duration: 120 mins
---

# Auto CKS Practice (Batch 9)

This is an auto-generated exam to provide infinite practice questions.

# Task 1: Network Policy
Create a NetworkPolicy named `cks-0o9dln` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-0o9dln --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-0o9dln 2>/dev/null || true
```

```verify
kubectl get netpol cks-0o9dln -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-0o9dln -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-0o9dln -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 2: Network Policy
Create a NetworkPolicy named `cks-rwz5vu` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-rwz5vu --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-rwz5vu 2>/dev/null || true
```

```verify
kubectl get netpol cks-rwz5vu -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-rwz5vu -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-rwz5vu -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 3: Network Policy
Create a NetworkPolicy named `cks-0w04xm` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-0w04xm --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-0w04xm 2>/dev/null || true
```

```verify
kubectl get netpol cks-0w04xm -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-0w04xm -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-0w04xm -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 4: Network Policy
Create a NetworkPolicy named `cks-n8q051` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-n8q051 --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-n8q051 2>/dev/null || true
```

```verify
kubectl get netpol cks-n8q051 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-n8q051 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-n8q051 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 5: Network Policy
Create a NetworkPolicy named `cks-1m6bkg` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-1m6bkg --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-1m6bkg 2>/dev/null || true
```

```verify
kubectl get netpol cks-1m6bkg -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-1m6bkg -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-1m6bkg -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 6: Network Policy
Create a NetworkPolicy named `cks-btid6b` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-btid6b --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-btid6b 2>/dev/null || true
```

```verify
kubectl get netpol cks-btid6b -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-btid6b -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-btid6b -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 7: Network Policy
Create a NetworkPolicy named `cks-zun9at` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-zun9at --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-zun9at 2>/dev/null || true
```

```verify
kubectl get netpol cks-zun9at -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-zun9at -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-zun9at -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 8: Network Policy
Create a NetworkPolicy named `cks-4rfn3k` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-4rfn3k --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-4rfn3k 2>/dev/null || true
```

```verify
kubectl get netpol cks-4rfn3k -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-4rfn3k -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-4rfn3k -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 9: Network Policy
Create a NetworkPolicy named `cks-cw2dfw` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-cw2dfw --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-cw2dfw 2>/dev/null || true
```

```verify
kubectl get netpol cks-cw2dfw -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-cw2dfw -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-cw2dfw -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 10: Network Policy
Create a NetworkPolicy named `cks-sdlefm` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-sdlefm --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-sdlefm 2>/dev/null || true
```

```verify
kubectl get netpol cks-sdlefm -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-sdlefm -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-sdlefm -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 11: Network Policy
Create a NetworkPolicy named `cks-t3w306` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-t3w306 --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-t3w306 2>/dev/null || true
```

```verify
kubectl get netpol cks-t3w306 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-t3w306 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-t3w306 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 12: Network Policy
Create a NetworkPolicy named `cks-oakvby` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-oakvby --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-oakvby 2>/dev/null || true
```

```verify
kubectl get netpol cks-oakvby -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-oakvby -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-oakvby -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 13: Network Policy
Create a NetworkPolicy named `cks-mds10z` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-mds10z --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-mds10z 2>/dev/null || true
```

```verify
kubectl get netpol cks-mds10z -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-mds10z -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-mds10z -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 14: Network Policy
Create a NetworkPolicy named `cks-07p8p2` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-07p8p2 --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-07p8p2 2>/dev/null || true
```

```verify
kubectl get netpol cks-07p8p2 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-07p8p2 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-07p8p2 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 15: Network Policy
Create a NetworkPolicy named `cks-5ttamu` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-5ttamu --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-5ttamu 2>/dev/null || true
```

```verify
kubectl get netpol cks-5ttamu -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-5ttamu -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-5ttamu -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 16: Network Policy
Create a NetworkPolicy named `cks-t9yz7q` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-t9yz7q --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-t9yz7q 2>/dev/null || true
```

```verify
kubectl get netpol cks-t9yz7q -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-t9yz7q -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-t9yz7q -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 17: Network Policy
Create a NetworkPolicy named `cks-89ecgv` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-89ecgv --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-89ecgv 2>/dev/null || true
```

```verify
kubectl get netpol cks-89ecgv -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-89ecgv -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-89ecgv -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 18: Network Policy
Create a NetworkPolicy named `cks-1wwiaq` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-1wwiaq --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-1wwiaq 2>/dev/null || true
```

```verify
kubectl get netpol cks-1wwiaq -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-1wwiaq -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-1wwiaq -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 19: Network Policy
Create a NetworkPolicy named `cks-eimele` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-eimele --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-eimele 2>/dev/null || true
```

```verify
kubectl get netpol cks-eimele -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-eimele -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-eimele -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 20: Network Policy
Create a NetworkPolicy named `cks-kyz4kh` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-kyz4kh --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-kyz4kh 2>/dev/null || true
```

```verify
kubectl get netpol cks-kyz4kh -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-kyz4kh -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-kyz4kh -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


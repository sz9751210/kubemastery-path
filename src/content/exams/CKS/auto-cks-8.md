---
id: auto-cks-8
title: Auto CKS Practice (Batch 8)
category: CKS
duration: 120 mins
---

# Auto CKS Practice (Batch 8)

This is an auto-generated exam to provide infinite practice questions.

# Task 1: Network Policy
Create a NetworkPolicy named `cks-s68uu0` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-s68uu0 --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-s68uu0 2>/dev/null || true
```

```verify
kubectl get netpol cks-s68uu0 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-s68uu0 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-s68uu0 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 2: Network Policy
Create a NetworkPolicy named `cks-utrdgl` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-utrdgl --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-utrdgl 2>/dev/null || true
```

```verify
kubectl get netpol cks-utrdgl -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-utrdgl -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-utrdgl -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 3: Network Policy
Create a NetworkPolicy named `cks-yd2s92` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-yd2s92 --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-yd2s92 2>/dev/null || true
```

```verify
kubectl get netpol cks-yd2s92 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-yd2s92 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-yd2s92 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 4: Network Policy
Create a NetworkPolicy named `cks-nfq80c` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-nfq80c --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-nfq80c 2>/dev/null || true
```

```verify
kubectl get netpol cks-nfq80c -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-nfq80c -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-nfq80c -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 5: Network Policy
Create a NetworkPolicy named `cks-lqt5et` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-lqt5et --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-lqt5et 2>/dev/null || true
```

```verify
kubectl get netpol cks-lqt5et -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-lqt5et -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-lqt5et -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 6: Network Policy
Create a NetworkPolicy named `cks-8tock4` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-8tock4 --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-8tock4 2>/dev/null || true
```

```verify
kubectl get netpol cks-8tock4 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-8tock4 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-8tock4 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 7: Network Policy
Create a NetworkPolicy named `cks-skhbui` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-skhbui --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-skhbui 2>/dev/null || true
```

```verify
kubectl get netpol cks-skhbui -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-skhbui -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-skhbui -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 8: Network Policy
Create a NetworkPolicy named `cks-vs2fxk` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-vs2fxk --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-vs2fxk 2>/dev/null || true
```

```verify
kubectl get netpol cks-vs2fxk -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-vs2fxk -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-vs2fxk -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 9: Network Policy
Create a NetworkPolicy named `cks-2e1s85` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-2e1s85 --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-2e1s85 2>/dev/null || true
```

```verify
kubectl get netpol cks-2e1s85 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-2e1s85 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-2e1s85 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 10: Network Policy
Create a NetworkPolicy named `cks-rk2cyx` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-rk2cyx --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-rk2cyx 2>/dev/null || true
```

```verify
kubectl get netpol cks-rk2cyx -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-rk2cyx -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-rk2cyx -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 11: Network Policy
Create a NetworkPolicy named `cks-r0mm4s` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-r0mm4s --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-r0mm4s 2>/dev/null || true
```

```verify
kubectl get netpol cks-r0mm4s -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-r0mm4s -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-r0mm4s -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 12: Network Policy
Create a NetworkPolicy named `cks-y8dkse` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-y8dkse --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-y8dkse 2>/dev/null || true
```

```verify
kubectl get netpol cks-y8dkse -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-y8dkse -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-y8dkse -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 13: Network Policy
Create a NetworkPolicy named `cks-3av96i` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-3av96i --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-3av96i 2>/dev/null || true
```

```verify
kubectl get netpol cks-3av96i -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-3av96i -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-3av96i -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 14: Network Policy
Create a NetworkPolicy named `cks-xl0wba` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-xl0wba --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-xl0wba 2>/dev/null || true
```

```verify
kubectl get netpol cks-xl0wba -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-xl0wba -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-xl0wba -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 15: Network Policy
Create a NetworkPolicy named `cks-5j7ut5` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-5j7ut5 --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-5j7ut5 2>/dev/null || true
```

```verify
kubectl get netpol cks-5j7ut5 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-5j7ut5 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-5j7ut5 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 16: Network Policy
Create a NetworkPolicy named `cks-qwkmvt` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-qwkmvt --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-qwkmvt 2>/dev/null || true
```

```verify
kubectl get netpol cks-qwkmvt -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-qwkmvt -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-qwkmvt -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 17: Network Policy
Create a NetworkPolicy named `cks-m9rxds` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-m9rxds --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-m9rxds 2>/dev/null || true
```

```verify
kubectl get netpol cks-m9rxds -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-m9rxds -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-m9rxds -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 18: Network Policy
Create a NetworkPolicy named `cks-brfomy` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-brfomy --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-brfomy 2>/dev/null || true
```

```verify
kubectl get netpol cks-brfomy -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-brfomy -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-brfomy -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 19: Network Policy
Create a NetworkPolicy named `cks-3yfhrb` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-3yfhrb --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-3yfhrb 2>/dev/null || true
```

```verify
kubectl get netpol cks-3yfhrb -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-3yfhrb -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-3yfhrb -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 20: Network Policy
Create a NetworkPolicy named `cks-o0yfws` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-o0yfws --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-o0yfws 2>/dev/null || true
```

```verify
kubectl get netpol cks-o0yfws -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-o0yfws -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-o0yfws -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


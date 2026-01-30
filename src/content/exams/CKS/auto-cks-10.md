---
id: auto-cks-10
title: Auto CKS Practice (Batch 10)
category: CKS
duration: 120 mins
---

# Auto CKS Practice (Batch 10)

This is an auto-generated exam to provide infinite practice questions.

# Task 1: Network Policy
Create a NetworkPolicy named `cks-wszopj` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-wszopj --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-wszopj 2>/dev/null || true
```

```verify
kubectl get netpol cks-wszopj -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-wszopj -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-wszopj -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 2: Network Policy
Create a NetworkPolicy named `cks-p04qpi` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-p04qpi --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-p04qpi 2>/dev/null || true
```

```verify
kubectl get netpol cks-p04qpi -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-p04qpi -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-p04qpi -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 3: Network Policy
Create a NetworkPolicy named `cks-j0jado` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-j0jado --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-j0jado 2>/dev/null || true
```

```verify
kubectl get netpol cks-j0jado -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-j0jado -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-j0jado -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 4: Network Policy
Create a NetworkPolicy named `cks-3dx8us` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-3dx8us --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-3dx8us 2>/dev/null || true
```

```verify
kubectl get netpol cks-3dx8us -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-3dx8us -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-3dx8us -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 5: Network Policy
Create a NetworkPolicy named `cks-2hssz3` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-2hssz3 --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-2hssz3 2>/dev/null || true
```

```verify
kubectl get netpol cks-2hssz3 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-2hssz3 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-2hssz3 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 6: Network Policy
Create a NetworkPolicy named `cks-vrvl7w` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-vrvl7w --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-vrvl7w 2>/dev/null || true
```

```verify
kubectl get netpol cks-vrvl7w -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-vrvl7w -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-vrvl7w -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 7: Network Policy
Create a NetworkPolicy named `cks-xkwaaw` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-xkwaaw --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-xkwaaw 2>/dev/null || true
```

```verify
kubectl get netpol cks-xkwaaw -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-xkwaaw -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-xkwaaw -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 8: Network Policy
Create a NetworkPolicy named `cks-8q8jrn` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-8q8jrn --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-8q8jrn 2>/dev/null || true
```

```verify
kubectl get netpol cks-8q8jrn -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-8q8jrn -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-8q8jrn -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 9: Network Policy
Create a NetworkPolicy named `cks-ea0qwe` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-ea0qwe --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-ea0qwe 2>/dev/null || true
```

```verify
kubectl get netpol cks-ea0qwe -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-ea0qwe -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-ea0qwe -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 10: Network Policy
Create a NetworkPolicy named `cks-5cl60c` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-5cl60c --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-5cl60c 2>/dev/null || true
```

```verify
kubectl get netpol cks-5cl60c -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-5cl60c -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-5cl60c -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 11: Network Policy
Create a NetworkPolicy named `cks-q2q0cp` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-q2q0cp --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-q2q0cp 2>/dev/null || true
```

```verify
kubectl get netpol cks-q2q0cp -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-q2q0cp -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-q2q0cp -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 12: Network Policy
Create a NetworkPolicy named `cks-w008tg` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-w008tg --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-w008tg 2>/dev/null || true
```

```verify
kubectl get netpol cks-w008tg -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-w008tg -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-w008tg -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 13: Network Policy
Create a NetworkPolicy named `cks-6y391q` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-6y391q --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-6y391q 2>/dev/null || true
```

```verify
kubectl get netpol cks-6y391q -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-6y391q -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-6y391q -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 14: Network Policy
Create a NetworkPolicy named `cks-hxo8xn` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-hxo8xn --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-hxo8xn 2>/dev/null || true
```

```verify
kubectl get netpol cks-hxo8xn -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-hxo8xn -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-hxo8xn -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 15: Network Policy
Create a NetworkPolicy named `cks-asavsl` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-asavsl --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-asavsl 2>/dev/null || true
```

```verify
kubectl get netpol cks-asavsl -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-asavsl -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-asavsl -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 16: Network Policy
Create a NetworkPolicy named `cks-81ab9k` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-81ab9k --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-81ab9k 2>/dev/null || true
```

```verify
kubectl get netpol cks-81ab9k -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-81ab9k -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-81ab9k -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 17: Network Policy
Create a NetworkPolicy named `cks-e85cu2` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-e85cu2 --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-e85cu2 2>/dev/null || true
```

```verify
kubectl get netpol cks-e85cu2 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-e85cu2 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-e85cu2 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 18: Network Policy
Create a NetworkPolicy named `cks-m66u36` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-m66u36 --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-m66u36 2>/dev/null || true
```

```verify
kubectl get netpol cks-m66u36 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-m66u36 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-m66u36 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 19: Network Policy
Create a NetworkPolicy named `cks-j8rpj1` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-j8rpj1 --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-j8rpj1 2>/dev/null || true
```

```verify
kubectl get netpol cks-j8rpj1 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-j8rpj1 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-j8rpj1 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


# Task 20: Network Policy
Create a NetworkPolicy named `cks-sijoi9` in namespace `default`.
Deny all ingress traffic to pods with label `role=db`.
Allow egress only to port 53 (DNS).

```setup
kubectl run db-pod-cks-sijoi9 --image=nginx --labels=role=db --restart=Never
kubectl delete netpol cks-sijoi9 2>/dev/null || true
```

```verify
kubectl get netpol cks-sijoi9 -n default -o jsonpath='{.spec.podSelector.matchLabels.role}' | grep db
kubectl get netpol cks-sijoi9 -n default -o jsonpath='{.spec.policyTypes}' | grep Ingress
kubectl get netpol cks-sijoi9 -n default -o jsonpath='{.spec.egress[0].ports[0].port}' | grep 53
```


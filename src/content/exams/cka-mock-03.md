---
id: cka-mock-03
title: CKA Mock Exam 3 (Pool)
category: CKA
duration: 120 mins
---

# Task 1: Node Affinity
Create a deployment `nginx` with 2 replicas. Ensure they land on nodes with label `disk=ssd`.

```setup
kubectl delete deployment nginx 2>/dev/null || true
# Ensure at least one node has the label or this task is unsolvable
kubectl label nodes --all disk=ssd --overwrite 2>/dev/null || true
```

```verify
kubectl get deployment nginx -o jsonpath='{.spec.template.spec.affinity.nodeAffinity}' | grep disk
```

# Task 2: Sidecar Container
Edit the pod `logging-pod`. Add a sidecar container image `busybox` that runs `tail -f /var/log/app.log`.
The volume `log-volume` is already mounted at `/var/log`.

```setup
kubectl run logging-pod --image=busybox --restart=Never --dry-run=client -o yaml > /tmp/pod.yaml
# (Setup logic simplified for brevity, assume pod exists)
kubectl run logging-pod --image=busybox --restart=Never -- /bin/sh -c "while true; do echo hello >> /var/log/app.log; sleep 1; done" 2>/dev/null || true
```

```verify
kubectl get pod logging-pod -o jsonpath='{.spec.containers[*].name}' | grep sidecar
```

# Task 3: ClusterUpgrade
Upgrade the control plane to version 1.29.0.
Remember to drain the node first!

```setup
echo "Ready"
```

```verify
kubeadm version | grep 1.29
```

# Task 4: Network Policy Access
Allow traffic from pods with label `role=frontend` to pods with label `role=backend` on port 80.
Deny all other ingress traffic to backend.

```setup
kubectl create ns default 2>/dev/null || true
kubectl delete netpol --all 2>/dev/null || true
```

```verify
kubectl get netpol -o jsonpath='{.items[*].spec.ingress[*].from[*].podSelector.matchLabels.role}' | grep frontend
```

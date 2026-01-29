---
id: cka-mock-03
title: CKA Mock Exam 3 (Pool)
category: CKA
duration: 120 mins
---

# Task 1: Node Affinity
Create a deployment `nginx` with 2 replicas. Ensure they land on nodes with label `disk=ssd`.

# Task 2: Sidecar Container
Edit the pod `logging-pod`. Add a sidecar container image `busybox` that runs `tail -f /var/log/app.log`.
The volume `log-volume` is already mounted at `/var/log`.

# Task 3: ClusterUpgrade
Upgrade the control plane to version 1.29.0.
Remember to drain the node first!

# Task 4: Network Policy Access
Allow traffic from pods with label `role=frontend` to pods with label `role=backend` on port 80.
Deny all other ingress traffic to backend.

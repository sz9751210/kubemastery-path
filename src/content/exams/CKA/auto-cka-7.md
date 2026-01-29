---
id: auto-cka-7
title: Auto CKA Practice (Batch 7)
category: CKA
duration: 120 mins
---

# Auto CKA Practice (Batch 7)

This is an auto-generated exam to provide infinite practice questions.

# Task 1: Create a Pod
Create a pod named `resource-k7iml1` in namespace `default` using image `memcached`.
Ensure it has a label `env=prod`.


# Task 2: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-9vuqhe` in namespace `frontend`.
Request `100Mi` storage with access mode `ReadWriteOnce`.


# Task 3: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-9qwd47` in namespace `frontend`.
Request `10Gi` storage with access mode `ReadWriteOnce`.


# Task 4: Node Maintenance
Mark node `node-1` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.


# Task 5: Create a Pod
Create a pod named `resource-p7q4d3` in namespace `test` using image `node:14`.
Ensure it has a label `env=prod`.


# Task 6: Create a Pod
Create a pod named `resource-7wccrr` in namespace `test` using image `busybox`.
Ensure it has a label `team=blue`.


# Task 7: Expose Service
Expose the deployment `resource-kzuqjr-dep` as a Service named `resource-kzuqjr` in namespace `test`.
The service should listen on port `4394` and be of type `NodePort`.


# Task 8: Node Maintenance
Mark node `node-3` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.


# Task 9: Node Maintenance
Mark node `node-3` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.


# Task 10: Node Maintenance
Mark node `node-1` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.


# Task 11: Create a Pod
Create a pod named `resource-ajy79a` in namespace `kube-system` using image `busybox`.
Ensure it has a label `team=blue`.


# Task 12: Create a Pod
Create a pod named `resource-aectl9` in namespace `kube-system` using image `postgres`.
Ensure it has a label `app=web`.


# Task 13: Expose Service
Expose the deployment `resource-9yo2am-dep` as a Service named `resource-9yo2am` in namespace `default`.
The service should listen on port `7236` and be of type `ClusterIP`.


# Task 14: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-z6lgwf` in namespace `test`.
Request `2Gi` storage with access mode `ReadOnlyMany`.


# Task 15: Node Maintenance
Mark node `node-5` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.


# Task 16: Expose Service
Expose the deployment `resource-8gvm73-dep` as a Service named `resource-8gvm73` in namespace `prod`.
The service should listen on port `3879` and be of type `ClusterIP`.


# Task 17: Expose Service
Expose the deployment `resource-2jvxeq-dep` as a Service named `resource-2jvxeq` in namespace `frontend`.
The service should listen on port `7037` and be of type `ClusterIP`.


# Task 18: Expose Service
Expose the deployment `resource-b412sp-dep` as a Service named `resource-b412sp` in namespace `kube-system`.
The service should listen on port `4594` and be of type `NodePort`.


# Task 19: Expose Service
Expose the deployment `resource-k6547z-dep` as a Service named `resource-k6547z` in namespace `dev`.
The service should listen on port `7802` and be of type `NodePort`.


# Task 20: Scale Deployment
Create a deployment named `resource-ceyiw0` in namespace `kube-system` using image `node:14`.
Scale it to `5` replicas.
Then, perform a rolling update to image `node:14:latest`.


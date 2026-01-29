---
id: auto-cka-5
title: Auto CKA Practice (Batch 5)
category: CKA
duration: 120 mins
---

# Auto CKA Practice (Batch 5)

This is an auto-generated exam to provide infinite practice questions.

# Task 1: Scale Deployment
Create a deployment named `resource-9a1y6e` in namespace `test` using image `mysql`.
Scale it to `9` replicas.
Then, perform a rolling update to image `mysql:latest`.


# Task 2: Scale Deployment
Create a deployment named `resource-m9a1qn` in namespace `default` using image `memcached`.
Scale it to `4` replicas.
Then, perform a rolling update to image `memcached:latest`.


# Task 3: Expose Service
Expose the deployment `resource-9i101y-dep` as a Service named `resource-9i101y` in namespace `dev`.
The service should listen on port `5097` and be of type `ClusterIP`.


# Task 4: Create a Pod
Create a pod named `resource-06cbbd` in namespace `default` using image `mysql`.
Ensure it has a label `env=prod`.


# Task 5: Node Maintenance
Mark node `node-2` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.


# Task 6: Expose Service
Expose the deployment `resource-it1yzy-dep` as a Service named `resource-it1yzy` in namespace `default`.
The service should listen on port `8175` and be of type `ClusterIP`.


# Task 7: Node Maintenance
Mark node `node-4` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.


# Task 8: Scale Deployment
Create a deployment named `resource-1k9yn4` in namespace `dev` using image `node:14`.
Scale it to `7` replicas.
Then, perform a rolling update to image `node:14:latest`.


# Task 9: Node Maintenance
Mark node `node-5` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.


# Task 10: Create a Pod
Create a pod named `resource-b3ane7` in namespace `dev` using image `httpd`.
Ensure it has a label `release=stable`.


# Task 11: Node Maintenance
Mark node `node-2` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.


# Task 12: Scale Deployment
Create a deployment named `resource-6s959h` in namespace `prod` using image `busybox`.
Scale it to `10` replicas.
Then, perform a rolling update to image `busybox:latest`.


# Task 13: Scale Deployment
Create a deployment named `resource-rs62wk` in namespace `dev` using image `nginx`.
Scale it to `9` replicas.
Then, perform a rolling update to image `nginx:latest`.


# Task 14: Create a Pod
Create a pod named `resource-8hos1v` in namespace `backend` using image `python:3.9`.
Ensure it has a label `release=stable`.


# Task 15: Create a Pod
Create a pod named `resource-exj316` in namespace `default` using image `redis`.
Ensure it has a label `app=web`.


# Task 16: Create a Pod
Create a pod named `resource-z1edsn` in namespace `default` using image `nginx`.
Ensure it has a label `env=prod`.


# Task 17: Node Maintenance
Mark node `node-3` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.


# Task 18: Node Maintenance
Mark node `node-2` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.


# Task 19: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-m562au` in namespace `default`.
Request `100Mi` storage with access mode `ReadWriteMany`.


# Task 20: Create a Pod
Create a pod named `resource-enu9vt` in namespace `test` using image `postgres`.
Ensure it has a label `team=blue`.


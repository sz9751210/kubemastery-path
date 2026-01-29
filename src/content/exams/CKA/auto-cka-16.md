---
id: auto-cka-16
title: Auto CKA Practice (Batch 16)
category: CKA
duration: 120 mins
---

# Auto CKA Practice (Batch 16)

This is an auto-generated exam to provide infinite practice questions.

# Task 1: Scale Deployment
Create a deployment named `resource-50la3m` in namespace `kube-system` using image `python:3.9`.
Scale it to `4` replicas.
Then, perform a rolling update to image `python:3.9:latest`.


# Task 2: Expose Service
Expose the deployment `resource-qsnd88-dep` as a Service named `resource-qsnd88` in namespace `backend`.
The service should listen on port `6463` and be of type `NodePort`.


# Task 3: Expose Service
Expose the deployment `resource-7ebexs-dep` as a Service named `resource-7ebexs` in namespace `prod`.
The service should listen on port `5722` and be of type `ClusterIP`.


# Task 4: Create a Pod
Create a pod named `resource-14ah4d` in namespace `default` using image `mysql`.
Ensure it has a label `tier=frontend`.


# Task 5: Scale Deployment
Create a deployment named `resource-pw3jl2` in namespace `frontend` using image `postgres`.
Scale it to `9` replicas.
Then, perform a rolling update to image `postgres:latest`.


# Task 6: Expose Service
Expose the deployment `resource-sr71d0-dep` as a Service named `resource-sr71d0` in namespace `staging`.
The service should listen on port `6485` and be of type `ClusterIP`.


# Task 7: Expose Service
Expose the deployment `resource-ebj4o1-dep` as a Service named `resource-ebj4o1` in namespace `prod`.
The service should listen on port `8760` and be of type `ClusterIP`.


# Task 8: Node Maintenance
Mark node `node-3` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.


# Task 9: Scale Deployment
Create a deployment named `resource-ks8dut` in namespace `backend` using image `node:14`.
Scale it to `4` replicas.
Then, perform a rolling update to image `node:14:latest`.


# Task 10: Create a Pod
Create a pod named `resource-d7p01a` in namespace `test` using image `node:14`.
Ensure it has a label `release=stable`.


# Task 11: Create a Pod
Create a pod named `resource-orvuzo` in namespace `staging` using image `alpine`.
Ensure it has a label `release=stable`.


# Task 12: Expose Service
Expose the deployment `resource-hurrqq-dep` as a Service named `resource-hurrqq` in namespace `test`.
The service should listen on port `7369` and be of type `NodePort`.


# Task 13: Scale Deployment
Create a deployment named `resource-67dso6` in namespace `frontend` using image `mysql`.
Scale it to `3` replicas.
Then, perform a rolling update to image `mysql:latest`.


# Task 14: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-93lf3z` in namespace `kube-system`.
Request `1Gi` storage with access mode `ReadOnlyMany`.


# Task 15: Scale Deployment
Create a deployment named `resource-r7oojs` in namespace `dev` using image `httpd`.
Scale it to `3` replicas.
Then, perform a rolling update to image `httpd:latest`.


# Task 16: Scale Deployment
Create a deployment named `resource-5ebpvb` in namespace `default` using image `redis`.
Scale it to `7` replicas.
Then, perform a rolling update to image `redis:latest`.


# Task 17: Scale Deployment
Create a deployment named `resource-oycuxg` in namespace `prod` using image `node:14`.
Scale it to `3` replicas.
Then, perform a rolling update to image `node:14:latest`.


# Task 18: Expose Service
Expose the deployment `resource-3umr51-dep` as a Service named `resource-3umr51` in namespace `staging`.
The service should listen on port `3520` and be of type `NodePort`.


# Task 19: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-56yiy7` in namespace `prod`.
Request `10Gi` storage with access mode `ReadWriteMany`.


# Task 20: Node Maintenance
Mark node `node-4` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.


---
id: auto-cka-1
title: Auto CKA Practice (Batch 1)
category: CKA
duration: 120 mins
---

# Auto CKA Practice (Batch 1)

This is an auto-generated exam to provide infinite practice questions.

# Task 1: Expose Service
Expose the deployment `resource-f4rpfh-dep` as a Service named `resource-f4rpfh` in namespace `prod`.
The service should listen on port `4998` and be of type `ClusterIP`.


# Task 2: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-85nv95` in namespace `prod`.
Request `100Mi` storage with access mode `ReadWriteOnce`.


# Task 3: Expose Service
Expose the deployment `resource-6irg33-dep` as a Service named `resource-6irg33` in namespace `backend`.
The service should listen on port `5984` and be of type `NodePort`.


# Task 4: Create a Pod
Create a pod named `resource-ncggbt` in namespace `backend` using image `python:3.9`.
Ensure it has a label `release=stable`.


# Task 5: Scale Deployment
Create a deployment named `resource-83boei` in namespace `test` using image `memcached`.
Scale it to `8` replicas.
Then, perform a rolling update to image `memcached:latest`.


# Task 6: Node Maintenance
Mark node `node-2` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.


# Task 7: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-kkg46y` in namespace `backend`.
Request `2Gi` storage with access mode `ReadWriteOnce`.


# Task 8: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-ydxbsh` in namespace `staging`.
Request `100Mi` storage with access mode `ReadOnlyMany`.


# Task 9: Create a Pod
Create a pod named `resource-dqfupz` in namespace `backend` using image `alpine`.
Ensure it has a label `app=web`.


# Task 10: Node Maintenance
Mark node `node-3` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.


# Task 11: Create a Pod
Create a pod named `resource-heue9s` in namespace `test` using image `python:3.9`.
Ensure it has a label `app=web`.


# Task 12: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-03vgsw` in namespace `staging`.
Request `2Gi` storage with access mode `ReadWriteMany`.


# Task 13: Create a Pod
Create a pod named `resource-awu6bp` in namespace `kube-system` using image `alpine`.
Ensure it has a label `release=stable`.


# Task 14: Scale Deployment
Create a deployment named `resource-h3wdc4` in namespace `prod` using image `nginx`.
Scale it to `2` replicas.
Then, perform a rolling update to image `nginx:latest`.


# Task 15: Expose Service
Expose the deployment `resource-8wjwp2-dep` as a Service named `resource-8wjwp2` in namespace `frontend`.
The service should listen on port `6701` and be of type `ClusterIP`.


# Task 16: Create a Pod
Create a pod named `resource-0qxf75` in namespace `kube-system` using image `postgres`.
Ensure it has a label `tier=frontend`.


# Task 17: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-lwqg0j` in namespace `frontend`.
Request `2Gi` storage with access mode `ReadWriteOnce`.


# Task 18: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-opbrnd` in namespace `staging`.
Request `10Gi` storage with access mode `ReadOnlyMany`.


# Task 19: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-62ytby` in namespace `backend`.
Request `1Gi` storage with access mode `ReadWriteMany`.


# Task 20: Scale Deployment
Create a deployment named `resource-kf4mrb` in namespace `prod` using image `alpine`.
Scale it to `8` replicas.
Then, perform a rolling update to image `alpine:latest`.


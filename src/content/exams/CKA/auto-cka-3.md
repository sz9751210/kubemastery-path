---
id: auto-cka-3
title: Auto CKA Practice (Batch 3)
category: CKA
duration: 120 mins
---

# Auto CKA Practice (Batch 3)

This is an auto-generated exam to provide infinite practice questions.

# Task 1: Expose Service
Expose the deployment `resource-9cn91h-dep` as a Service named `resource-9cn91h` in namespace `staging`.
The service should listen on port `5708` and be of type `ClusterIP`.


# Task 2: Expose Service
Expose the deployment `resource-gbs8js-dep` as a Service named `resource-gbs8js` in namespace `frontend`.
The service should listen on port `8339` and be of type `ClusterIP`.


# Task 3: Node Maintenance
Mark node `node-1` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.


# Task 4: Create a Pod
Create a pod named `resource-6qudlw` in namespace `test` using image `nginx`.
Ensure it has a label `app=web`.


# Task 5: Node Maintenance
Mark node `node-4` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.


# Task 6: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-ep4kbc` in namespace `test`.
Request `10Gi` storage with access mode `ReadOnlyMany`.


# Task 7: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-ttntw5` in namespace `test`.
Request `100Mi` storage with access mode `ReadOnlyMany`.


# Task 8: Scale Deployment
Create a deployment named `resource-a5um9q` in namespace `staging` using image `node:14`.
Scale it to `3` replicas.
Then, perform a rolling update to image `node:14:latest`.


# Task 9: Expose Service
Expose the deployment `resource-3mudz9-dep` as a Service named `resource-3mudz9` in namespace `staging`.
The service should listen on port `7898` and be of type `ClusterIP`.


# Task 10: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-za4r23` in namespace `kube-system`.
Request `1Gi` storage with access mode `ReadWriteMany`.


# Task 11: Create a Pod
Create a pod named `resource-gvrfcg` in namespace `kube-system` using image `mysql`.
Ensure it has a label `app=web`.


# Task 12: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-ml2eat` in namespace `backend`.
Request `100Mi` storage with access mode `ReadWriteOnce`.


# Task 13: Scale Deployment
Create a deployment named `resource-d08boz` in namespace `test` using image `node:14`.
Scale it to `10` replicas.
Then, perform a rolling update to image `node:14:latest`.


# Task 14: Scale Deployment
Create a deployment named `resource-y6662x` in namespace `backend` using image `python:3.9`.
Scale it to `7` replicas.
Then, perform a rolling update to image `python:3.9:latest`.


# Task 15: Create a Pod
Create a pod named `resource-u6equr` in namespace `dev` using image `nginx`.
Ensure it has a label `app=web`.


# Task 16: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-ltt2ve` in namespace `dev`.
Request `10Gi` storage with access mode `ReadWriteMany`.


# Task 17: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-5k3ddm` in namespace `frontend`.
Request `1Gi` storage with access mode `ReadWriteMany`.


# Task 18: Expose Service
Expose the deployment `resource-ufqxwa-dep` as a Service named `resource-ufqxwa` in namespace `frontend`.
The service should listen on port `5999` and be of type `ClusterIP`.


# Task 19: Create a Pod
Create a pod named `resource-v6k9nf` in namespace `prod` using image `memcached`.
Ensure it has a label `release=stable`.


# Task 20: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-4z0l5z` in namespace `staging`.
Request `2Gi` storage with access mode `ReadOnlyMany`.


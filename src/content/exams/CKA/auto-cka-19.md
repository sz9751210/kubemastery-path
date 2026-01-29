---
id: auto-cka-19
title: Auto CKA Practice (Batch 19)
category: CKA
duration: 120 mins
---

# Auto CKA Practice (Batch 19)

This is an auto-generated exam to provide infinite practice questions.

# Task 1: Expose Service
Expose the deployment `resource-btv00p-dep` as a Service named `resource-btv00p` in namespace `default`.
The service should listen on port `8183` and be of type `NodePort`.


# Task 2: Expose Service
Expose the deployment `resource-203n19-dep` as a Service named `resource-203n19` in namespace `frontend`.
The service should listen on port `8562` and be of type `ClusterIP`.


# Task 3: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-z3u4gz` in namespace `backend`.
Request `2Gi` storage with access mode `ReadWriteMany`.


# Task 4: Scale Deployment
Create a deployment named `resource-43yx2u` in namespace `test` using image `nginx`.
Scale it to `4` replicas.
Then, perform a rolling update to image `nginx:latest`.


# Task 5: Scale Deployment
Create a deployment named `resource-ixi9qc` in namespace `test` using image `nginx`.
Scale it to `8` replicas.
Then, perform a rolling update to image `nginx:latest`.


# Task 6: Scale Deployment
Create a deployment named `resource-xu9b39` in namespace `dev` using image `nginx`.
Scale it to `5` replicas.
Then, perform a rolling update to image `nginx:latest`.


# Task 7: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-18kwaq` in namespace `frontend`.
Request `5Gi` storage with access mode `ReadWriteMany`.


# Task 8: Create a Pod
Create a pod named `resource-chd864` in namespace `test` using image `memcached`.
Ensure it has a label `tier=frontend`.


# Task 9: Create a Pod
Create a pod named `resource-vrvx6o` in namespace `test` using image `nginx`.
Ensure it has a label `team=blue`.


# Task 10: Create a Pod
Create a pod named `resource-skivwr` in namespace `dev` using image `mysql`.
Ensure it has a label `team=blue`.


# Task 11: Scale Deployment
Create a deployment named `resource-owkn05` in namespace `kube-system` using image `mysql`.
Scale it to `6` replicas.
Then, perform a rolling update to image `mysql:latest`.


# Task 12: Expose Service
Expose the deployment `resource-ia0ass-dep` as a Service named `resource-ia0ass` in namespace `prod`.
The service should listen on port `5660` and be of type `NodePort`.


# Task 13: Persistent Volume Claim
Create a PersistentVolumeClaim named `resource-nbaztj` in namespace `prod`.
Request `10Gi` storage with access mode `ReadWriteOnce`.


# Task 14: Scale Deployment
Create a deployment named `resource-zo9cu5` in namespace `backend` using image `redis`.
Scale it to `4` replicas.
Then, perform a rolling update to image `redis:latest`.


# Task 15: Create a Pod
Create a pod named `resource-pxtxy1` in namespace `staging` using image `httpd`.
Ensure it has a label `tier=frontend`.


# Task 16: Expose Service
Expose the deployment `resource-2wj5k0-dep` as a Service named `resource-2wj5k0` in namespace `frontend`.
The service should listen on port `6682` and be of type `NodePort`.


# Task 17: Scale Deployment
Create a deployment named `resource-yyycw6` in namespace `dev` using image `nginx`.
Scale it to `7` replicas.
Then, perform a rolling update to image `nginx:latest`.


# Task 18: Node Maintenance
Mark node `node-1` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.


# Task 19: Node Maintenance
Mark node `node-2` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.


# Task 20: Expose Service
Expose the deployment `resource-6o17ul-dep` as a Service named `resource-6o17ul` in namespace `test`.
The service should listen on port `6072` and be of type `NodePort`.


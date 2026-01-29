---
id: cka-mock-02
title: CKA Mock Exam 2 (Pool)
category: CKA
duration: 120 mins
---

# Task 1: ETCD Snapshot
Create a snapshot of the etcd instance running on the controlplane node.
Save it to /opt/etcd-backup.db.

```bash
ETCDCTL_API=3 etcdctl --endpoints=https://127.0.0.1:2379 \
  --cacert=/etc/kubernetes/pki/etcd/ca.crt \
  --cert=/etc/kubernetes/pki/etcd/server.crt \
  --key=/etc/kubernetes/pki/etcd/server.key \
  snapshot save /opt/etcd-backup.db
```

# Task 2: Fix a broken node
The node `worker-1` is in `NotReady` state. Investigate why and fix it.
Check `systemctl status kubelet`.

# Task 3: Ingress Resource
Create an ingress named `my-ingress` that routes path `/hello` to service `hello-service` on port 80.

# Task 4: Private Registry Secret
Create a secret named `my-registry-key` of type `docker-registry` with username `user` and password `pass`.
Then patch the default service account to use it.

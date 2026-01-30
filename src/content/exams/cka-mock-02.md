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

```setup
sudo rm -f /opt/etcd-backup.db
```

```verify
ls /opt/etcd-backup.db > /dev/null
```

# Task 2: Fix a broken node
The node `worker-1` is in `NotReady` state. Investigate why and fix it.
Check `systemctl status kubelet`.

```setup
# Break the node (simulation)
kubectl cordon worker-1 2>/dev/null || true
```

```verify
kubectl get node worker-1 --no-headers | grep " Ready"
```

# Task 3: Ingress Resource
Create an ingress named `my-ingress` that routes path `/hello` to service `hello-service` on port 80.

```setup
kubectl create svc clusterip hello-service --tcp=80:80 2>/dev/null || true
kubectl delete ingress my-ingress 2>/dev/null || true
```

```verify
kubectl get ingress my-ingress -o jsonpath='{.spec.rules[*].http.paths[?(@.path=="/hello")].backend.service.name}' | grep hello-service
```

# Task 4: Private Registry Secret
Create a secret named `my-registry-key` of type `docker-registry` with username `user` and password `pass`.
Then patch the default service account to use it.

```setup
kubectl delete secret my-registry-key 2>/dev/null || true
# Reset service account patch if possible, or just ignore
```

```verify
kubectl get secret my-registry-key -o jsonpath='{.type}' | grep docker-registry && \
kubectl get sa default -o jsonpath='{.imagePullSecrets[*].name}' | grep my-registry-key
```

export interface Lesson {
  id: string;
  title: string;
  category: 'Novice' | 'Admin' | 'Security';
  duration: string;
  markdown: string;
}

const lessons: Record<string, Lesson> = {
  // --- LEVEL 1: NOVICE (CKAD Focus) ---
  '1': {
    id: '1',
    title: 'Container Basics',
    category: 'Novice',
    duration: '20 mins',
    markdown: `
# Container Basics: Beyond Docker

Welcome to your first step in mastering Kubernetes! To understand K8s, we must first understand the atomic unit it manages: the **Container**.

## What is a Container?
A container is a standard unit of software that packages up code and all its dependencies so the application runs quickly and reliably from one computing environment to another.

### Core Technologies
Containers are not "magic"; they are processes isolated by Linux kernel features:
1. **Namespaces**: Provide isolation (Process ID, Network, Mounts, IPC). Each container thinks it's the only Thing running.
2. **Cgroups (Control Groups)**: Controls resource usage (CPU, Memory limits). Prevents one container from eating all server RAM.
3. **Union Filesystem (OverlayFS)**: Layered images which allow efficient storage and caching.

## Docker vs. CRI (Container Runtime Interface)
Kubernetes doesn't just "run Docker". It uses an interface called **CRI** to communicate with container runtimes.

> [!IMPORTANT]
> **Deprecation Alert**: As of Kubernetes v1.24, the "Dockershim" was removed. K8s now primarily uses **containerd** or **CRI-O**. Understanding \`crictl\` is now important for CKA exams.

\`\`\`bash
# Checking your runtime
kubectl get nodes -o wide
# Output helps identify if you are running containerd or docker shim
\`\`\`

## Hands-on Lab: Inspecting a Container
In the browser terminal, try creating a simple Nginx pod and executing strict commands inside it.

\`\`\`bash
kubectl run nginx --image=nginx:alpine
kubectl exec -it nginx -- sh
# Inside the container, run 'ps aux' to see PID 1
\`\`\`
    `
  },
  '2': {
    id: '2',
    title: 'Pod Lifecycle',
    category: 'Novice',
    duration: '25 mins',
    markdown: `
# The Pod Lifecycle

In Kubernetes, the smallest deployable unit is not a container, but a **Pod**.

## What is a Pod?
A Pod represents a single instance of a running process in your cluster. It encapsulates:
- One or more containers (usually one).
- Storage resources (Volumes).
- A unique network IP.
- Options that govern how the container(s) should run.

> [!NOTE]
> Pods are **ephemeral**. They are designed to die and be replaced. Never rely on a Pod IP staying the same.

## Pod Phases
1. **Pending**: Accepted by the cluster, but not scheduled to a node yet (downloading images, etc.).
2. **Running**: Bound to a node, all containers created, at least one is running.
3. **Succeeded**: Terminated with exit code 0 (common in Jobs).
4. **Failed**: Terminated with non-zero exit code (crashed).
5. **Unknown**: State cannot be obtained (network partition).

## YAML Definition
Every Pod is defined by a Manifest.

\`\`\`yaml
apiVersion: v1
kind: Pod
metadata:
  name: nginx-pod
  labels:
    app: nginx
spec:
  containers:
  - name: nginx
    image: nginx:1.14.2
    ports:
    - containerPort: 80
    resources:
      limits:
        memory: "128Mi"
        cpu: "500m"
\`\`\`
    `
  },
  '3': {
    id: '3',
    title: 'YAML & Configuration',
    category: 'Novice',
    duration: '30 mins',
    markdown: `
# Mastering YAML for Kubernetes

Kubernetes uses YAML (Yet Another Markup Language) for almost everything. It is **declarative**: you tell K8s *what* you want (desired state), not *how* to do it (imperative).

## Anatomy of a Manifest
Every K8s resource has 4 top-level fields:
1. **apiVersion**: Which version of the API to use (e.g., \`v1\`, \`apps/v1\`, \`networking.k8s.io/v1\`).
2. **kind**: The type of resource (Pod, Service, Deployment).
3. **metadata**: Name, labels, annotations (crucial for organization).
4. **spec**: The desired state (containers, replicas, ports).

## ConfigMaps & Secrets
**The 12-Factor App methodology** states that config should be separated from code.
- **ConfigMap**: For non-sensitive data (env vars, config files).
- **Secret**: For sensitive data (passwords, keys), base64 encoded.

### Managing Secrets
Secrets are **not encrypted** by default; they are just base64 encoded!
\`\`\`bash
# Create a secret imperatively
kubectl create secret generic db-pass --from-literal=password='hunter2'
\`\`\`

> [!WARNING]
> In production, use external secret stores (Vault, AWS Secrets Manager) or enable Encryption at Rest in etcd.
    `
  },
  '4': {
    id: '4',
    title: 'Multi-Container Pods',
    category: 'Novice',
    duration: '20 mins',
    markdown: `
# Multi-Container Pods

While most Pods run a single container, sometimes you need helper containers to assist the main application. This is a core **CKAD** concept.

## Design Patterns
1. **Sidecar**: Extends the functionality of the main container (e.g., log shipper, proxy, config reloader). The helper runs *alongside* the app.
2. **Adapter**: Transforms output to a standard format (e.g., converting custom metrics to Prometheus format).
3. **Ambassador**: Proxies connection to the outside world (e.g., connecting to a database through a local proxy).

## Shared Context
All containers in a Pod share:
- **Network Namespace**: They share the same IP and define ports on \`localhost\`.
- **IPC Namespace**: They can communicate via SystemV IPC or POSIX message queues.
- **Volumes**: They can mount the same disk volumes to share files.

### Lab Scenario: Log Sidecar
Create a Pod where a main container writes logs to \`/var/log/app.log\`, and a sidecar container tails that file to stdout.

\`\`\`yaml
apiVersion: v1
kind: Pod
metadata:
  name: multi-container-pod
spec:
  volumes:
  - name: shared-logs
    emptyDir: {}
  containers:
  - name: app
    image: busybox
    command: ['sh', '-c', 'while true; do echo "$(date) - Running" >> /var/log/app.log; sleep 5; done']
    volumeMounts:
    - name: shared-logs
      mountPath: /var/log
  - name: sidecar
    image: busybox
    command: ['sh', '-c', 'tail -f /var/log/app.log']
    volumeMounts:
    - name: shared-logs
      mountPath: /var/log
\`\`\`
    `
  },

  // --- LEVEL 2: ADMIN (CKA Focus) ---
  '5': {
    id: '5',
    title: 'Cluster Architecture',
    category: 'Admin',
    duration: '40 mins',
    markdown: `
# Kubernetes Cluster Architecture

A K8s cluster consists of **Control Plane** nodes and **Worker** nodes.

## Control Plane Components (The Brain)
1. **kube-apiserver**: The frontend for the K8s control plane. All components talk to this. The only component that talks to etcd.
2. **etcd**: Consistent and highly-available key value store for all cluster data.
3. **kube-scheduler**: Watches for newly created Pods with no assigned node, and selects a node for them to run on.
4. **kube-controller-manager**: Runs controller processes (Node controller, Job controller, EndpointSlice controller).

## Worker Node Components (The Muscle)
1. **kubelet**: An agent that runs on each node. It ensures that containers are running in a Pod.
2. **kube-proxy**: Maintains network rules on nodes. These rules allow network communication to your Pods.
3. **Container Runtime**: Software that is responsible for running containers (containerd, CRI-O).
    `
  },
  '6': {
    id: '6',
    title: 'Services & Networking',
    category: 'Admin',
    duration: '45 mins',
    markdown: `
# Services & Networking

Kubernetes networking is a massive topic. For CKA, focus on how Pods communicate and how to expose them.

## The Model
- Every Pod gets its own IP address.
- Pods on any node can communicate with all other Pods on all other nodes without NAT.

## Service Types
Services provide a stable network abstraction over a set of ephemeral Pods.
1. **ClusterIP** (Default): Exposes the Service on a cluster-internal IP. Reachable only from within the cluster.
2. **NodePort**: Exposes the Service on each Node's IP at a static port (30000-32767).
3. **LoadBalancer**: Exposes the Service externally using a cloud provider's load balancer.

## DNS
Kubernetes runs an internal DNS service (CoreDNS).
- Service A in namespace \`default\` is reachable at \`http://service-a:80\`.
- Service B in namespace \`dev\` is reachable at \`http://service-b.dev:80\`.
    `
  },
  '7': {
    id: '7',
    title: 'Storage (PV/PVC)',
    category: 'Admin',
    duration: '35 mins',
    markdown: `
# Storage Orchestration

Containers have ephemeral filesystems. If a container crashes, changes are lost. **Volumes** solve this.

## The PV / PVC Abstraction
Admin manages underlying storage; Developer requests storage.

1. **PersistentVolume (PV)**: A piece of storage in the cluster provisioning by an administrator or dynamically via a StorageClass.
2. **PersistentVolumeClaim (PVC)**: A request for storage by a user. It mimics a Pod. Pods consume node resources; PVCs consume PV resources.

## Access Modes
- **ReadWriteOnce (RWO)**: Mounted by a single node as read-write.
- **ReadOnlyMany (ROX)**: Mounted by many nodes as read-only.
- **ReadWriteMany (RWX)**: Mounted by many nodes as read-write (requires support like NFS).

\`\`\`yaml
# PVC Example
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: my-claim
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 3Gi
\`\`\`
    `
  },
  '8': {
    id: '8',
    title: 'Scheduling',
    category: 'Admin',
    duration: '30 mins',
    markdown: `
# Scheduling

How does Kubernetes decide where to place a Pod?

## Manual Scheduling
You can force a Pod to a node by setting \`nodeName\` in the spec (bypassing the scheduler).

## Taints and Tolerations
A "Taint" on a Node repels Pods. **Taints** are applied to nodes; **Tolerations** are applied to Pods.
- **Effect**: \`NoSchedule\`, \`PreferNoSchedule\`, \`NoExecute\`.
- Master nodes usually have a \`NoSchedule\` taint so user apps don't run there.

## Node Affinity
Allows you to constrain which nodes your pod is eligible to be scheduled on based on labels on the node.
- \`requiredDuringSchedulingIgnoredDuringExecution\` (Hard rule)
- \`preferredDuringSchedulingIgnoredDuringExecution\` (Soft rule)
    `
  },

  // --- LEVEL 3: SECURITY (CKS Focus) ---
  '9': {
    id: '9',
    title: 'Cluster Hardening',
    category: 'Security',
    duration: '40 mins',
    markdown: `
# Cluster Hardening (CKS)
Security starts at the setup.

## Limiting API Access
- Use **RBAC** (Role Based Access Control) strictly. No \`cluster-admin\` for everyone!
- Disable anonymous access (\`--anonymous-auth=false\`).

## Securing Kubelet
- Ensure the kubelet API is authenticated and authorized.
- Disable the read-only port (10255).

## Upgrade Kubernetes
Keeping the cluster up to date is the best security patch.
\`\`\`bash
# Drain node before upgrade
kubectl drain node-1 --ignore-daemonsets
# Upgrade kubeadm, kubelet, kubectl
apt-get install -y kubeadm=1.30.0-00
\`\`\`
    `
  },
  '10': {
    id: '10',
    title: 'Network Policies',
    category: 'Security',
    duration: '35 mins',
    markdown: `
# Network Policies

By default, all Pods in a cluster can talk to each other (Flat Network). This is insecure for multi-tenant clusters.

## Features
- Implemented by the CNI plugin (Calico, weave, Cilium). **Flannel does NOT support NetworkPolicy**.
- Acts as a Layer 3/4 Firewall for Pods.

## The "Default Deny" Pattern
Best practice: Deny all traffic, then whitelist what you need.

\`\`\`yaml
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: default-deny-all
spec:
  podSelector: {}
  policyTypes:
  - Ingress
  - Egress
\`\`\`
    `
  },
  '11': {
    id: '11',
    title: 'System Hardening',
    category: 'Security',
    duration: '45 mins',
    markdown: `
# System Hardening

Securing the host on which Kubernetes runs.

## AppArmor & Seccomp
- **AppArmor**: Restricts capabilities of individual programs (Linux security module). defined in profiles.
- **Seccomp** (Secure Computing Mode): Restricts the system calls a process can make.
  - e.g., Prevent a container from making \`time_set\` or \`reboot\` calls.

## Runtime Classes
Use **gVisor** (runsc) or **Kata Containers** for untrusted workloads to provide stronger isolation than standard runc containers.

\`\`\`yaml
apiVersion: node.k8s.io/v1
kind: RuntimeClass
metadata:
  name: gvisor
handler: runsc
\`\`\`
    `
  }
};

export const getLessonById = (id: string): Lesson | null => {
  return lessons[id] || null;
};

export const getLessons = () => lessons;

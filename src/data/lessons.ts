export interface Lesson {
  id: string;
  title: string;
  category: 'Novice' | 'Admin' | 'Security' | 'Expert';
  duration: string;
  markdown: string;
}

const lessons: Record<string, Lesson> = {
  // ==========================================
  // LEVEL 1: NOVICE (Foundations)
  // ==========================================
  '1': {
    id: '1',
    title: 'Container Basics',
    category: 'Novice',
    duration: '20 mins',
    markdown: `
# Container Basics: Beyond Docker

To master Kubernetes, you must strictly understand concepts like **Namespaces**, **Cgroups**, and the **CRI**.

## What is a Container?
It's just a process! But it's isolated.
- **Namespaces**: Isolate what the process *sees* (PID, Network, Mounts).
- **Cgroups**: Isolate what the process *uses* (CPU, RAM).
- **Union Filesystem**: Efficient, layered storage (OverlayFS).

## Docker vs CRI
Kubernetes uses the **Container Runtime Interface (CRI)**.
> [!IMPORTANT]
> \`dockershim\` is dead. You are likely using **containerd** or **CRI-O**. Learn \`crictl\`.

\`\`\`bash
# List containers using CRI
crictl ps
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

A **Pod** is the atomic unit of K8s. It wraps one or more containers.

## States
1. **Pending**: Scheduler is finding a node.
2. **ContainerCreating**: Pulling images.
3. **Running**: At least one container is up.
4. **Succeeded/Failed**: Process exited.

## Sidecars (Multi-Container)
Containers in a Pod share **Network (localhost)** and **Volumes**.
    `
  },
  '3': {
    id: '3',
    title: 'YAML Configuration',
    category: 'Novice',
    duration: '30 mins',
    markdown: `
# Mastering YAML

Kubernetes is **Declarative**. syntax matters.

## The 4 Pillars
1. **apiVersion**: \`v1\`, \`apps/v1\`.
2. **kind**: \`Pod\`, \`Service\`.
3. **metadata**: \`name\`, \`labels\`.
4. **spec**: The desired state.

\`\`\`yaml
apiVersion: v1
kind: Pod
metadata:
  name: demo
spec:
  containers:
  - name: nginx
    image: nginx
\`\`\`
    `
  },

  // ==========================================
  // LEVEL 2: ADMIN (CKA - Orchestration)
  // ==========================================
  '20': {
    id: '20',
    title: 'Workloads: Deployments',
    category: 'Admin',
    duration: '45 mins',
    markdown: `
# Workloads: Deployments & ReplicaSets

Pods are ephemeral. **Deployments** provide declarative updates for Pods and ReplicaSets.

## The Hierarchy
\`Deployment\` manages \`ReplicaSet\` manages \`Pod\`.

## Features
- **Self-healing**: Restarts crashed pods.
- **Scaling**: \`kubectl scale deployment my-app --replicas=5\`
- **Rolling Updates**: Zero-downtime deployments.

\`\`\`yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:1.14.2
\`\`\`
    `
  },
  '21': {
    id: '21',
    title: 'StatefulSets & DaemonSets',
    category: 'Admin',
    duration: '40 mins',
    markdown: `
# StatefulSets & DaemonSets

Not everything is a stateless web server.

## StatefulSet
Used for databases or apps needing:
- **Stable Network ID**: \`web-0\`, \`web-1\`.
- **Stable Storage**: VolumeClaims templates.
- **Ordered Deployment**: 0 -> 1 -> 2.

## DaemonSet
Ensures a copy of a Pod runs on **all** (or some) Nodes.
- Examples: \`kube-proxy\`, \`fluentd\` (logging), \`weave-net\` (CNI).

> [!NOTE]
> DaemonSets bypass the scheduler mostly, though they respect taints/tolerations.
    `
  },
  '6': {
    id: '6',
    title: 'Services & Networking',
    category: 'Admin',
    duration: '45 mins',
    markdown: `
# Services: Exposing Applications

## Service Types
1. **ClusterIP**: Internal only.
2. **NodePort**: Exposure on static port (30000+).
3. **LoadBalancer**: Cloud provider LB.

## Service Discovery
DNS names are formatted:
\`<service-name>.<namespace>.svc.cluster.local\`

\`\`\`yaml
apiVersion: v1
kind: Service
metadata:
  name: my-service
spec:
  selector:
    app: MyApp
  ports:
    - protocol: TCP
      port: 80
      targetPort: 9376
\`\`\`
    `
  },
  '22': {
    id: '22',
    title: 'Ingress & DNS',
    category: 'Admin',
    duration: '50 mins',
    markdown: `
# Ingress & Advanced Networking

**Services** operate at Layer 4 (TCP/UDP). **Ingress** operates at Layer 7 (HTTP/HTTPS).

## Ingress Controller
An Ingress resource does nothing without a controller (e.g., Nginx, Traefik).

## Ingress Resource
Defines rules to route traffic.
- **Path Based**: \`/api\` -> Service A, \`/web\` -> Service B.
- **Host Based**: \`foo.bar.com\` -> Service A.

\`\`\`yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: minimal-ingress
spec:
  rules:
  - http:
      paths:
      - path: /testpath
        pathType: Prefix
        backend:
          service:
            name: test
            port:
              number: 80
\`\`\`
    `
  },
  '7': {
    id: '7',
    title: 'Storage (PV/PVC)',
    category: 'Admin',
    duration: '35 mins',
    markdown: `
# Storage Orchestration

Decoupling storage from Pod lifecycle.

## PV vs PVC
- **PV (PersistentVolume)**: The physical storage resource (provisioned by Admin).
- **PVC (Claim)**: The request for storage (by Developer).

## Access Modes
- **RWO**: ReadWriteOnce (Block storage usually).
- **RWX**: ReadWriteMany (NFS/File storage).
    `
  },
  '8': {
    id: '8',
    title: 'Scheduling',
    category: 'Admin',
    duration: '30 mins',
    markdown: `
# Scheduling

Controlling where Pods go.

## Taints & Tolerations
"Repel" pods from nodes.
- Master nodes are tainted \`NoSchedule\`.

## Affinity
"Attract" pods to nodes.
- \`nodeAffinity\`: Run on nodes with SSD.
- \`podAffinity\`: Run co-located with Redis pod.
    `
  },

  // ==========================================
  // LEVEL 3: SECURITY (CKS - Hardening)
  // ==========================================
  '30': {
    id: '30',
    title: 'RBAC: Authorization',
    category: 'Security',
    duration: '60 mins',
    markdown: `
# Role Based Access Control (RBAC)

**Authentication** (Who are you?) vs **Authorization** (What can you do?).

## Core Objects
1. **Role**: Rules (verbs + resources) scoped to a **Namespace**.
2. **ClusterRole**: Rules scoped linearly (Cluster-wide).
3. **RoleBinding**: Connecting a Subject (User/ServiceAccount) to a Role.
4. **ClusterRoleBinding**: Connecting a Subject to a ClusterRole.

\`\`\`yaml
# Can view pods in 'default' ns
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  namespace: default
  name: pod-reader
rules:
- apiGroups: [""]
  resources: ["pods", "pods/log"]
  verbs: ["get", "watch", "list"]
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

The firewall for Kubernetes.

> [!WARNING]
> By default, K8s is a **Flat Network**. Any pod can talk to any pod.

## Default Deny Logic
Start by denying everything, then allow specific traffic.

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
  '31': {
    id: '31',
    title: 'Secrets Management',
    category: 'Security',
    duration: '40 mins',
    markdown: `
# Secrets & Security Contexts

## Secrets
Base64 encoded data. NOT encrypted by default unless EncryptionAtRest is enabled in etcd.
- Mount as Environment Variables.
- Mount as Files (Volume).

## Security Contexts
Define privileges and access control for a Pod/Container.
- \`runAsUser\`: UID to run process.
- \`fsGroup\`: GID for volumes.
- \`privileged\`: Give full host access (Danger!).

\`\`\`yaml
spec:
  securityContext:
    runAsUser: 1000
    runAsGroup: 3000
    fsGroup: 2000
\`\`\`
    `
  },

  // ==========================================
  // LEVEL 4: EXPERT (Scale & Ops)
  // ==========================================
  '40': {
    id: '40',
    title: 'Helm: Package Management',
    category: 'Expert',
    duration: '50 mins',
    markdown: `
# Helm: Kubernetes Package Manager

Managing thousands of YAML files is painful. **Helm** solves this using **Charts**.

## Concepts
- **Chart**: A bundle of information necessary to create an instance of a Kubernetes application.
- **Config**: Contains configuration information that can be merged into a packaged chart to create a releaseable object.
- **Release**: A running instance of a chart, combined with a specific config.

## Templating
Helm uses Go templates.

\`\`\`yaml
# values.yaml
replicaCount: 2

# deploy.yaml
replicas: {{ .Values.replicaCount }}
\`\`\`
    `
  },
  '41': {
    id: '41',
    title: 'Operators & CRDs',
    category: 'Expert',
    duration: '60 mins',
    markdown: `
# Operators & Custom Resource Definitions (CRDs)

Extending the Kubernetes API.

## CRD (Custom Resource Definition)
Allows you to create your own API types. e.g., \`kind: MySQLDatabase\`.

## The Operator Pattern
An Operator is a Controller that watches a CRD and acts on it.
- Replaces human operation knowledge with code.
- Example: **Prometheus Operator** automatically manages Prometheus config based on \`ServiceMonitor\` resources.
    `
  },
  '42': {
    id: '42',
    title: 'Service Mesh (Istio)',
    category: 'Expert',
    duration: '60 mins',
    markdown: `
# Service Mesh

Managing network traffic between services (East-West traffic).

## Why use a Mesh?
1. **Observability**: Tracing, Metrics (Graphana/Prometheus automatic).
2. **Traffic Control**: Canary types, Split traffic (90% v1, 10% v2).
3. **Security**: mTLS (Mutual TLS) between all pods automatically.

## Sidecar Proxy
Istio injects an \`envoy\` proxy container into every Pod to intercept all network traffic.
    `
  }
};

export const getLessonById = (id: string): Lesson | null => {
  return lessons[id] || null;
};

export const getLessons = () => lessons;

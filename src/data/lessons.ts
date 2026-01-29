export interface Lesson {
  id: string;
  title: string;
  category: 'CORE' | 'CKA' | 'CKAD' | 'CKA/CKAD' | 'CKS' | 'EXPERT' | 'INTERNALS';
  duration: string;
  markdown: string;
  flashcards?: { question: string; answer: string }[];
}

const lessons: Record<string, Lesson> = {
  // LEVEL 1: NOVICE
  '1': {
    id: '1',
    title: 'Container Basics',
    category: 'CORE',
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
# Check the container runtime version
crictl version

# List running containers
crictl ps
\`\`\`
    `,
    flashcards: [
      { question: 'What isolates what a process SEES?', answer: 'Namespaces' },
      { question: 'What isolates what a process USES?', answer: 'Cgroups' },
      { question: 'Which runtime interface does K8s use instead of Docker?', answer: 'CRI' }
    ]
  },
  '2': {
    id: '2',
    title: 'Pod Lifecycle',
    category: 'CORE',
    duration: '25 mins',
    markdown: `
# The Pod Lifecycle

A **Pod** is the atomic unit of K8s. It wraps one or more containers.

## States
1. **Pending**: Scheduler is finding a node.
2. **ContainerCreating**: Pulling images.
3. **Running**: At least one container is up.
4. **Succeeded/Failed**: Process exited.

\`\`\`bash
# Create a simple Nginx pod
kubectl run nginx-demo --image=nginx

# Watch the pod status change
kubectl get pod nginx-demo -w
\`\`\`
    `,
    flashcards: [
      { question: 'What is the state when a Pod is waiting for a node?', answer: 'Pending' },
      { question: 'In a multi-container Pod, what do containers share?', answer: 'Network (localhost) and Volumes' }
    ]
  },
  '3': {
    id: '3',
    title: 'YAML Configuration',
    category: 'CORE',
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
  '4': {
    id: '4',
    title: 'Multi-Container Pods',
    category: 'CORE',
    duration: '35 mins',
    markdown: `
# Multi-Container Pods

Sharing is caring. Sometimes one container isn't enough.

## Patterns
1.  **Sidecar**: Helper container (e.g., Log shipper, Proxy).
2.  **Adapter**: Standardizes output (e.g., Metrics converter).
3.  **Ambassador**: Proxies connection to outside world.

## Shared Resources
Containers in a Pod share:
-   **Network Namespace**: Same IP, same localhost.
-   **Volumes**: Shared filesystems.

\`\`\`yaml
apiVersion: v1
kind: Pod
metadata:
  name: sidecar-demo
spec:
  containers:
  - name: main-app
    image: nginx
    volumeMounts:
    - name: shared-logs
      mountPath: /var/log/nginx
  - name: log-shipper
    image: busybox
    command: ["sh", "-c", "tail -f /var/log/nginx/access.log"]
    volumeMounts:
    - name: shared-logs
      mountPath: /var/log/nginx
  volumes:
  - name: shared-logs
    emptyDir: {}
\`\`\`
    `
  },
  '12': {
    id: '12',
    title: 'ReplicaSets & Deployments',
    category: 'CORE',
    duration: '25 mins',
    markdown: `
# ReplicaSets & Deployments

Ensuring your application is always running and easily updated.

## ReplicaSet
The primary goal of a **ReplicaSet** is to maintain a stable set of replica Pods running at any given time.

\`\`\`bash
# Look at the replicasets in your cluster
kubectl get rs
\`\`\`

## Deployment
**Deployments** allow you to manage the rollout of new versions of your application.

\`\`\`bash
# Create a deployment with 3 replicas
kubectl create deployment web-server --image=nginx --replicas=3

# Update the image
kubectl set image deployment/web-server nginx=nginx:1.16.1
\`\`\`
    `
  },
  '13': {
    id: '13',
    title: 'Jobs & CronJobs',
    category: 'CORE',
    duration: '20 mins',
    markdown: `
# Jobs & CronJobs

For tasks that are intended to run to completion.

## Jobs
A **Job** creates one or more Pods and will continue to retry execution of the Pods until a specified number of them successfully terminate.

\`\`\`bash
# Run a one-off job
kubectl create job hello --image=busybox -- echo "Hello Kubernetes"
\`\`\`

## CronJobs
A **CronJob** creates Jobs on a repeating schedule.

\`\`\`bash
# Create a cronjob
kubectl create cronjob heartbeat --image=busybox --schedule="*/1 * * * *" -- echo "Beating..."
\`\`\`
    `
  },


  // LEVEL 2: ADMIN
  '5': {
    id: '5',
    title: 'Cluster Architecture',
    category: 'CKA/CKAD',
    duration: '40 mins',
    markdown: `
# Cluster Architecture

Understand the machine you are driving.

## The Two Planes
1.  **Control Plane** (The Brain):
    -   Manages the state of the cluster.
    -   Components: API Server, Etcd, Scheduler, Controller Manager.
2.  **Data Plane** (The Muscle):
    -   Runs the workloads.
    -   Components: Kubelet, Kube-Proxy, Container Runtime.

## Kubelet
The agent that runs on every node. It registers the node with the apiserver and ensures Pods are running and healthy.

\`\`\`bash
# Check node status
kubectl get nodes -o wide
\`\`\`
    `
  },
  '14': {
    id: '14',
    title: 'Control Plane & API Server',
    category: 'CKA/CKAD',
    duration: '45 mins',
    markdown: `
# Control Plane & API Server

The brains of the cluster.

## Components
- **kube-apiserver**: The gateway for all REST commands.
- **etcd**: Consistent and highly-available key value store.
- **kube-scheduler**: Watches for newly created Pods with no assigned node.
- **kube-controller-manager**: Runs controller processes.

\`\`\`bash
# Check the status of control plane components
kubectl get pods -n kube-system -l tier=control-plane
\`\`\`
    `
  },
  '6': {
    id: '6',
    title: 'Services & Networking',
    category: 'CKA/CKAD',
    duration: '45 mins',
    markdown: `
# Services: Exposing Applications

## Service Types
1. **ClusterIP**: Internal only.
2. **NodePort**: Exposure on static port (30000+).
3. **LoadBalancer**: Cloud provider LB.

\`\`\`bash
# Expose a deployment
kubectl expose deployment my-dep --port=80 --target-port=80 --type=NodePort --name=my-svc

# Get the service details
kubectl get svc my-svc
\`\`\`
    `
  },
  '7': {
    id: '7',
    title: 'Storage (PV/PVC)',
    category: 'CKA/CKAD',
    duration: '35 mins',
    markdown: `
# Storage Orchestration

Decoupling storage from Pod lifecycle.

## PV vs PVC
- **PV (PersistentVolume)**: The physical storage resource.
- **PVC (Claim)**: The request for storage.

\`\`\`bash
# List Persistent Volumes
kubectl get pv
\`\`\`

## Access Modes
- **RWO**: ReadWriteOnce (Block storage usually).
- **RWX**: ReadWriteMany (NFS/File storage).
    `
  },
  '8': {
    id: '8',
    title: 'Scheduling',
    category: 'CKA/CKAD',
    duration: '30 mins',
    markdown: `
# Scheduling

Controlling where Pods go.

## Taints & Tolerations
"Repel" pods from nodes.
- Master nodes are tainted \`NoSchedule\`.

\`\`\`bash
# View taints on nodes
kubectl describe node controlplane | grep Taint
\`\`\`

## Affinity
"Attract" pods to nodes.
- \`nodeAffinity\`: Run on nodes with SSD.
    `
  },
  '15': {
    id: '15',
    title: 'Troubleshooting & Logs',
    category: 'CKA/CKAD',
    duration: '40 mins',
    markdown: `
# Troubleshooting & Logs

When things go wrong, here is how to find out why.

## Basic Commands
- \`kubectl describe\`: Detailed information about a resource.
- \`kubectl logs\`: Print the logs for a container in a pod.

## Common Pod States
- **Pending**: Scheduler can't find a node (CPU/RAM insufficient, Taints).
- **CrashLoopBackOff**: Application is starting and immediately failing. Check logs!
- **ImagePullBackOff**: Can't pull image (Auth, Typo, Network).

## Debugging Services
Service not working? Check the **Endpoints**.
\`\`\`bash
# Does the service have endpoints?
kubectl get endpoints my-svc
\`\`\`

\`\`\`bash
# Describe a failing pod
kubectl describe pod <pod-name>

# Check logs for a specific pod (and previous instance if crashed)
kubectl logs <pod-name> --previous
\`\`\`
    `
  },
  '90': {
    id: '90',
    title: 'Command Line Fu: JSONPath',
    category: 'CKA/CKAD',
    duration: '45 mins',
    markdown: `
# Command Line Fu: JSONPath & Custom Columns

Mastering \`kubectl\` output is mandatory for CKA/CKAD.

## JSONPath
Filter and format output programmatically.
- **Syntax**: \`{.items[*].metadata.name}\`

\`\`\`bash
# Get all pod names
kubectl get pods -o jsonpath='{.items[*].metadata.name}'

# Get InternalIP of all nodes
kubectl get nodes -o jsonpath='{.items[*].status.addresses[?(@.type=="InternalIP")].address}'
\`\`\`

## Custom Columns
Create your own table output.
\`\`\`bash
# Show Pod Name and Node Name
kubectl get pods -o custom-columns=POD:.metadata.name,NODE:.spec.nodeName
\`\`\`
    `
  },
  '91': {
    id: '91',
    title: 'Cluster Bootstrap Deep Dive',
    category: 'CKA',
    duration: '60 mins',
    markdown: `
# Cluster Bootstrap: Kubeadm

Understanding how the cluster comes alive.

## The Init Process (\`kubeadm init\`)
1.  **Pre-flight checks**: Kernel version, Swap disabled?
2.  **Certs**: Generates CA, API server, Etcd certs in \`/etc/kubernetes/pki\`.
3.  **Kubeconfigs**: Generates admin.conf, kubelet.conf.
4.  **Manifests**: Static pods for Control Plane (API, Controller, Sched, Etcd) in \`/etc/kubernetes/manifests\`.
5.  **Taints**: Marks node as ControlPlane (NoSchedule).
6.  **Bootstrap Token**: For workers to join.

## CNI Installation
The cluster is **NotReady** until a CNI (Network Plugin) is installed.
- The CNI binaires go to \`/opt/cni/bin\`.
- The config goes to \`/etc/cni/net.d\`.
    `
  },
  '20': {
    id: '20',
    title: 'Workloads: Deployments',
    category: 'CKA/CKAD',
    duration: '45 mins',
    markdown: `
# Workloads: Deployments & ReplicaSets

Pods are ephemeral. **Deployments** provide declarative updates for Pods and ReplicaSets.

## The Hierarchy
\`Deployment\` manages \`ReplicaSet\` manages \`Pod\`.

\`\`\`bash
# Create a deployment
kubectl create deployment my-dep --image=nginx --replicas=3
\`\`\`

## Features
- **Self-healing**: Restarts crashed pods.
- **Scaling**: 
\`\`\`bash
kubectl scale deployment my-dep --replicas=5
\`\`\`
    `
  },
  '21': {
    id: '21',
    title: 'StatefulSets & DaemonSets',
    category: 'CKA/CKAD',
    duration: '40 mins',
    markdown: `
# StatefulSets & DaemonSets

Not everything is a stateless web server.

## StatefulSet
Used for databases or apps needing:
- **Stable Network ID**: \`web-0\`, \`web-1\`.
- **Stable Storage**: VolumeClaims templates.

## DaemonSet
Ensures a copy of a Pod runs on **all** (or some) Nodes.
- Examples: \`kube-proxy\`, \`fluentd\` (logging).

\`\`\`bash
# Check the kube-proxy daemonset
kubectl get ds -n kube-system
\`\`\`
    `
  },
  '22': {
    id: '22',
    title: 'Ingress & DNS',
    category: 'CKA/CKAD',
    duration: '50 mins',
    markdown: `
# Ingress & Advanced Networking

**Services** operate at Layer 4 (TCP/UDP). **Ingress** operates at Layer 7 (HTTP/HTTPS).

## Ingress Controller
An Ingress resource does nothing without a controller (e.g., Nginx, Traefik).

\`\`\`bash
# Check for ingress controllers
kubectl get pods -n ingress-nginx
\`\`\`
    `
  },

  // LEVEL 3: SECURITY
  '9': {
    id: '9',
    title: 'Cluster Hardening',
    category: 'CKS',
    duration: '50 mins',
    markdown: `
# Cluster Hardening

Locking down the fortress.

## Center for Internet Security (CIS) Benchmarks
The gold standard for K8s security. \`kube-bench\` is a common tool to check these.

## Key Principles
1.  **Least Privilege**: RBAC, SecurityContexts.
2.  **Minimize Attack Surface**: Remove shells, use distroless images.
3.  **encrypt-secret-data-at-rest**: Check etcd configuration.

## Platform Binary Verification
Ensure the binaries (kubelet, kubectl, kube-apiserver) are legitimate.
- Check SHA512 sums against official releases.

## Minimize GUI Use
The Kubernetes Dashboard is a frequent attack vector.
- **Best Practice**: Disable it in production.

\`\`\`bash
# Check if anonymous auth is enabled (Should be false)
ps -ef | grep kube-apiserver | grep anonymous-auth
\`\`\`
    `
  },
  '30': {
    id: '30',
    title: 'RBAC: Authorization',
    category: 'CKS',
    duration: '60 mins',
    markdown: `
# Role Based Access Control (RBAC)

**Authentication** (Who are you?) vs **Authorization** (What can you do?).

## Core Objects
1. **Role**: Rules (verbs + resources) scoped to a **Namespace**.
2. **ClusterRole**: Rules scoped linearly (Cluster-wide).
3. **RoleBinding**: Connecting a Subject (User/ServiceAccount) to a Role.
4. **ClusterRoleBinding**: Connecting a Subject to a ClusterRole.

\`\`\`bash
# Check my permissions
kubectl auth can-i create pods
\`\`\`
    `
  },
  '10': {
    id: '10',
    title: 'Network Policies',
    category: 'CKS',
    duration: '35 mins',
    markdown: `
# Network Policies

The firewall for Kubernetes.

> [!WARNING]
> By default, K8s is a **Flat Network**. Any pod can talk to any pod.

## Default Deny Logic
Start by denying everything, then allow specific traffic.

\`\`\`bash
# See if any policies exist
kubectl get networkpolicies
\`\`\`
    `
  },
  '16': {
    id: '16',
    title: 'Admission Controllers',
    category: 'CKS',
    duration: '50 mins',
    markdown: `
# Admission Controllers

Intercepting requests to the API server before an object is persisted.

## Types
- **Mutating**: Can modify the object.
- **Validating**: Can only accept or reject.

\`\`\`bash
# Check which admission plugins are enabled
kubectl exec -it kube-apiserver-controlplane -n kube-system -- kube-apiserver -h | grep enable-admission-plugins
\`\`\`
    `
  },
  '17': {
    id: '17',
    title: 'Runtime Security',
    category: 'CKS',
    duration: '45 mins',
    markdown: `
# Runtime Security

Protecting the running process.

## Tools
- **Falco**: The runtime security engine. Uses rules to detect abnormal behavior (e.g., shell in container, modifying /etc).
- **AppArmor**: Restrict programs' capabilities with per-program profiles.
- **Seccomp**: Restrict system calls a process can make.

## Behavioral Analytics
Detecting threats based on *patterns* rather than known signatures.
- Process spawning unexpected children.
- Unexpected outbound network connections.
    `
  },
  '11': {
    id: '11',
    title: 'System Hardening',
    category: 'CKS',
    duration: '45 mins',
    markdown: `
# System Hardening

Kubernetes is only as secure as the Linux nodes it runs on.

## Kernel Hardening
-   **Seccomp**: Restrict syscalls.
-   **AppArmor**: Restrict file access / capabilities.

## Container Sandboxing
For high-risk workloads, standard containers (shared kernel) might not be enough.
-   **gVisor (runsc)**: Userspace kernel, intercepts syscalls.
-   **Kata Containers**: Lightweight VMs for strong isolation.

## Reducing Attack Surface
-   Disable unused services (SSH, FTP).
-   Firewall rules (UFW/IPTables) to restrict node-to-node access outside of K8s ports.

\`\`\`bash
# Check open ports on the node
netstat -tulpn
\`\`\`
    `
  },
  '31': {
    id: '31',
    title: 'Secrets Management',
    category: 'CKS',
    duration: '40 mins',
    markdown: `
# Secrets & Security Contexts

## Secrets
Base64 encoded data. NOT encrypted by default unless EncryptionAtRest is enabled in etcd.

\`\`\`bash
# Create a generic secret
kubectl create secret generic my-pass --from-literal=password=secret123
\`\`\`

## Security Contexts
Define privileges and access control for a Pod/Container.
- \`runAsUser\`: UID to run process.
- \`fsGroup\`: GID for volumes.
    `
  },

  '60': {
    id: '60',
    title: 'Supply Chain Security',
    category: 'CKS',
    duration: '45 mins',
    markdown: `
# Supply Chain Security

Securing the pipeline from code to cluster.

## Image Scanning
Find vulnerabilities (CVEs) in your images *before* they run.
- **Tools**: Trivy, Clair.
- **Action**: Fix Critical/High CVEs.

\`\`\`bash
# Scan an image with Trivy
trivy image nginx:latest
\`\`\`

## Image Signing
Prove the image comes from you and hasn't been tampered with.
- **Cosign (Sigstore)**: Sign and verify container images.

## Static Analysis
Scan your YAML manifests for misconfigurations.
- **Kubesec**: Security risk analysis for Kubernetes resources.
- **KubeLinter**: Static analysis tool.
    `
  },
  '61': {
    id: '61',
    title: 'Audit Logging & Monitoring',
    category: 'CKS',
    duration: '50 mins',
    markdown: `
# Audit Logging & Monitoring

If you didn't log it, it didn't happen.

## Audit Logs
Records the sequence of actions taken by the cluster (API Server).
- **Stages**: RequestReceived, ResponseStarted, ResponseComplete, Panic.
- **Policy**: Defines rules for what to log and how much detail.

\`\`\`yaml
# audit-policy.yaml example
apiVersion: audit.k8s.io/v1
kind: Policy
rules:
  - level: Metadata
    resources:
    - group: ""
      resources: ["secrets"]
\`\`\`

## Monitoring (Syscall)
Using **Falco** to monitor system calls at the kernel level.
- Detects: File access, Process execution, Network activity.
    `
  },
  '62': {
    id: '62',
    title: 'Advanced Pod Security',
    category: 'CKS',
    duration: '45 mins',
    markdown: `
# Advanced Pod Security

## Pod Security Standards (PSS)
Replaced PodSecurityPolicies (PSP). Defined in 3 levels:
1. **Privileged**: Unrestricted (Admin level).
2. **Baseline**: Minimally restrictive (Default).
3. **Restricted**: Heavily restricted (Best practice).

## Pod Security Admission (PSA)
The built-in admission controller to enforce PSS via Namespace labels.

\`\`\`bash
# Enforce restricted standard on 'dev' namespace
kubectl label ns dev pod-security.kubernetes.io/enforce=restricted
\`\`\`

## mTLS (Mutual TLS)
Encrypting traffic *between* pods.
- Usually handled by a Service Mesh (Linkerd, Istio), but understanding the concept is key for CKS.
    `
  },

  // LEVEL 4: EXPERT
  '40': {
    id: '40',
    title: 'Helm: Package Management',
    category: 'EXPERT',
    duration: '50 mins',
    markdown: `
# Helm: Kubernetes Package Manager

Managing thousands of YAML files is painful. **Helm** solves this using **Charts**.

## Concepts
- **Chart**: A bundle of information necessary to create an instance of a Kubernetes application.
- **Release**: A running instance of a chart.

\`\`\`bash
# List helm releases
helm list -A
\`\`\`
    `
  },
  '41': {
    id: '41',
    title: 'Operators & CRDs',
    category: 'EXPERT',
    duration: '60 mins',
    markdown: `
# Operators & Custom Resource Definitions (CRDs)

Extending the Kubernetes API.

## CRD (Custom Resource Definition)
Allows you to define your own API resources.

\`\`\`bash
# List custom resources
kubectl get crd
\`\`\`

## The Operator Pattern
An Operator is a Controller that watches a CRD and acts on it.
    `
  },
  '42': {
    id: '42',
    title: 'Service Mesh (Istio)',
    category: 'EXPERT',
    duration: '60 mins',
    markdown: `
# Service Mesh

Managing network traffic between services (East-West traffic).

## Why use a Mesh?
1. **Observability**: Tracing, Metrics.
2. **Traffic Control**: Canary types.
3. **Security**: mTLS.

\`\`\`bash
# Check for istio proxy sidecars
kubectl get pods -l istio-injection=enabled
\`\`\`
    `
  },
  '18': {
    id: '18',
    title: 'CRDs & API Extensions',
    category: 'EXPERT',
    duration: '60 mins',
    markdown: `
# CRDs & API Extensions (Deep Dive)

Making Kubernetes your own.

## Aggregation Layer
Allows the Kubernetes API server to be extended with additional APIs.
    `
  },
  '99': {
    id: '99',
    title: 'Chaos Challenge: The Broken Cluster',
    category: 'EXPERT',
    duration: '60 mins',
    markdown: `
# Chaos Challenge: The Broken Cluster

> [!WARNING]
> This is a **live fire** exercise. We have deliberately broken this cluster.

## Scenario
You are the on-call Site Reliability Engineer. Minutes ago, all \`kubectl\` commands started failing.

## Your Mission
1.  **Diagnose** why the API Server is failing.
2.  **Fix** the underlying issue.
3.  **Restore** cluster connectivity.
    `
  },
  '70': {
    id: '70',
    title: 'Application Build & Images',
    category: 'CKAD',
    duration: '40 mins',
    markdown: `
# Application Build & Images

## Dockerfile Best Practices
- **Multi-stage builds**: Keep the final image small by separating build and runtime environments.
- **User Permissions**: Never run as root. Use \`USER\`.
- **Layers**: Combine commands to reduce layers.

\`\`\`dockerfile
# Multi-stage example
FROM golang:1.21 as builder
WORKDIR /app
COPY . .
RUN go build -o myapp

FROM alpine:latest
WORKDIR /root/
COPY --from=builder /app/myapp .
CMD ["./myapp"]
\`\`\`
    `
  },
  '71': {
    id: '71',
    title: 'Advanced Deployment Strategies',
    category: 'CKAD',
    duration: '50 mins',
    markdown: `
# Advanced Deployment Strategies

## Blue/Green Deployment
- Two identical environments.
- **Switch**: Update the Service selector to point to the new version.
- **Pros**: Instant rollback. **Cons**: Double resources.

## Canary Deployment
- Roll out to a small subset of users.
- **Implementation**: Two Deployments (Stable & Canary) with common labels targeted by one Service.
- **Traffic Splitting**: Use Ingress or Service Mesh for % based splitting.

## Rolling Update
- Default strategy.
- **Parameters**: \`maxSurge\` (how many extra) and \`maxUnavailable\` (how many down).
    `
  },
  '72': {
    id: '72',
    title: 'Application Observability',
    category: 'CKAD',
    duration: '45 mins',
    markdown: `
# Application Observability

## Probes
Kubelet needs to know if your app is okay.
1.  **Liveness**: Restart if dead (deadlock).
2.  **Readiness**: Don't send traffic until ready (loading data).
3.  **Startup**: Wait for slow starts before other probes kick in.

\`\`\`yaml
livenessProbe:
  httpGet:
    path: /healthz
    port: 8080
  initialDelaySeconds: 3
  periodSeconds: 3
\`\`\`

## Debugging
- **Logs**: \`kubectl logs my-pod -c my-container\`
- **Exec**: \`kubectl exec -it my-pod -- sh\`
- **Ephemeral Containers**: \`kubectl debug -it my-pod --image=busybox --target=my-container\` (Great for distroless images).
    `
  },
  '73': {
    id: '73',
    title: 'Services & Networking Design',
    category: 'CKAD',
    duration: '40 mins',
    markdown: `
# Services & Networking Design

## Network Policies
Isolate your applications.
- **Ingress**: Incoming traffic.
- **Egress**: Outgoing traffic.

## Service Discovery
- **DNS**: Every Service gets a DNS name.
- **Debugging DNS**: Use \`nslookup\` or \`dig\` from within a pod.

\`\`\`bash
# Test connectivity
kubectl run test --rm -it --image=busybox -- wget -O- http://my-service
\`\`\`
    `
  },
  // LEVEL 2+: CKA ADVANCED
  '50': {
    id: '50',
    title: 'Cluster Maintenance',
    category: 'CKA',
    duration: '45 mins',
    markdown: `
# Cluster Maintenance

Keeping the lights on.

## Cluster Upgrade
Using \`kubeadm\` to upgrade the cluster.
1.  Upgrade Control Plane node.
2.  Upgrade Worker nodes.

\`\`\`bash
# Drain the node first
kubectl drain node-1 --ignore-daemonsets

# Upgrade kubeadm
apt-get update && apt-get install -y kubeadm=1.27.0-00

# Plan the upgrade
kubeadm upgrade plan

# Apply
kubeadm upgrade apply v1.27.0
\`\`\`

## Backup & Restore
**Etcd** is the source of truth. You MUST know how to snapshot it.

\`\`\`bash
# Take a snapshot
ETCDCTL_API=3 etcdctl --endpoints=https://127.0.0.1:2379 \\
  --cacert=/etc/kubernetes/pki/etcd/ca.crt \\
  --cert=/etc/kubernetes/pki/etcd/server.crt \\
  --key=/etc/kubernetes/pki/etcd/server.key \\
  snapshot save /tmp/etcd-backup.db
\`\`\`
    `
  },
  '51': {
    id: '51',
    title: 'Security & Identity',
    category: 'CKA',
    duration: '40 mins',
    markdown: `
# Security & Identity

## Authentication (AuthN)
Who are you?
-   **Certificates**: Most common for users/admins (CN=User, O=Group).
-   **ServiceAccounts**: For Pods.

\`\`\`bash
# Create a CSR (CertificateSigningRequest)
kubectl create -f my-user-csr.yaml
kubectl certificate approve my-user
\`\`\`

## Authorization (AuthZ) & RBAC
What can you do?
See 'RBAC: Authorization' lesson for details. Kubeadm enables Node and RBAC authorizers by default.
    `
  },
  '52': {
    id: '52',
    title: 'Advanced Storage',
    category: 'CKA/CKAD',
    duration: '35 mins',
    markdown: `
# Advanced Storage

## Storage Class
Defines "classes" of storage (e.g., "fast", "slow"). Enables **Dynamic Provisioning**.

\`\`\`yaml
apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  name: fast
provisioner: k8s.io/minikube-hostpath
\`\`\`

## Dynamic Provisioning
Instead of creating a PV manually, creating a PVC with a \`storageClassName\` triggers the provisioner to create the PV automatically.
    `
  },
  '53': {
    id: '53',
    title: 'Cluster Networking',
    category: 'CKA',
    duration: '50 mins',
    markdown: `
# Cluster Networking

## CNI (Container Network Interface)
The plugin that configures network interfaces.
-   **Flannel, Calico, Weave**.
-   Every Pod gets a unique IP.

## DNS (CoreDNS)
Service discovery.
-   Service: \`my-svc.my-ns.svc.cluster.local\`
-   Pod: \`1-2-3-4.my-ns.pod.cluster.local\`

\`\`\`bash
# Debug DNS
kubectl run busybox --image=busybox:1.28 --restart=Never -- sleep 3600
kubectl exec -it busybox -- nslookup kubernetes
\`\`\`
    `
  },
  '54': {
    id: '54',
    title: 'Observability',
    category: 'CKA',
    duration: '30 mins',
    markdown: `
# Observability

## Metrics Server
Aggregates resource usage data. Required for \`kubectl top\` and HPA (Horizontal Pod Autoscaler).

\`\`\`bash
# Check node usage
kubectl top nodes

# Check pod usage
kubectl top pods
\`\`\`

## Logging architecture
-   **Node level**: \`/var/log/containers\`
-   **Cluster level**: Fluentd/Prometheus stack (usually).
    `
  },
  '201': {
    id: '201',
    title: 'CKA Mock Exam 1',
    category: 'CKA',
    duration: '120 mins',
    markdown: `
# CKA Mock Exam 1

Time: 2 Hours. Pass: 66%.

## Task 1: Backup Etcd
Save a snapshot of etcd to \`/opt/etcd-backup.db\`.

## Task 2: Upgrade Master Node
Upgrade the controlplane node to version \`1.27.0\`.

## Task 3: Create a Pod with Sidecar
Create a pod named \`legacy-app\` with image \`busybox\` that logs to \`/var/log/legacy.log\`. Add a sidecar container that prints this log file to stdout.

## Task 4: Troubleshoot Node
Node \`worker-1\` is NotReady. Fix it.
    `
  },
  '202': {
    id: '202',
    title: 'CKA Mock Exam 2',
    category: 'CKA',
    duration: '120 mins',
    markdown: `
# CKA Mock Exam 2

Time: 2 Hours. Pass: 66%.

## Task 1: Network Policy
Create a NetworkPolicy named \`deny-all\` in namespace \`probation\` that denies all ingress traffic.

## Task 2: RBAC
Create a Role \`developer\` that can \`create\`, \`get\`, \`list\` pods in namespace \`dev\`. Bind it to user \`jane\`.

## Task 3: Ingress
Expose service \`frontend\` on path \`/store\` using an Ingress resource.

## Task 4: Persistent Volume
Create a PV named \`local-pv\` with capacity \`1Gi\`, access mode \`RWO\`, hostPath \`/mnt/data\`.
    `
  },
  // LEVEL 5: INTERNALS
  '100': {
    id: '100',
    title: 'Service Internals: Iptables vs IPVS',
    category: 'INTERNALS',
    duration: '60 mins',
    markdown: `
# Service Implementation: Deep Dive

How does a Service IP (ClusterIP) actually work? It's virtual! It doesn't exist on any interface.

## kube-proxy
The component responsible for watching the API Server for Services/Endpoints and configuring rules.

## Iptables Mode (Default)
Traffic is captured by PREROUTING/OUTPUT chains and redirected.
- **Chain KUBE-SERVICES**: The entry point.
- **Chain KUBE-SVC-***: Round-robin load balancing (using statistic mode random probability).
- **Chain KUBE-SEP-***: Service EndPoint (DNAT to actual Pod IP).

\`\`\`bash
# View service rules
sudo iptables -t nat -L KUBE-SERVICES
\`\`\`

## IPVS Mode
Uses Linux Kernel's IP Virtual Server (Netfilter).
- **Performance**: O(1) matching vs O(n) for iptables (sequential scan).
- **Scalability**: Better for thousands of services.
    `
  },
  '101': {
    id: '101',
    title: 'CNI Deep Dive: Pod Networking',
    category: 'INTERNALS',
    duration: '75 mins',
    markdown: `
# CNI Deep Dive

How do Pods talk to each other across nodes?

## The "Pause" Container
Exists solely to hold the Network Namespace. Application containers join this namespace (share localhost).

## VETH Pairs (Virtual Ethernet)
Connects the Pod namespace to the Host namespace.
- **eth0 (Pod)** <--> **veth*** (Host).

## Bridge Mode (e.g., cbr0)
VETH ends on the host are connected to a Bridge. The Bridge acts as a virtual switch.

## Overlay Networks (VXLAN / IPIP)
Encapsulating L2 frames inside L3 packets to cross node boundaries.
- **Flannel**: UDP/VXLAN.
- **Calico**: BGP (Direct Routing) or IPIP.
    `
  },
  '102': {
    id: '102',
    title: 'CRI & Container Runtime Internals',
    category: 'INTERNALS',
    duration: '60 mins',
    markdown: `
# CRI & Runtime Internals

Docker is gone (from K8s). Long live CRI.

## CRI (Container Runtime Interface)
Standard gRPC protocol for Kubelet to talk to runtimes.
- **Images Service**: Pull/List images.
- **Runtime Service**: Run/Stop containers.

## OCI (Open Container Initiative)
1.  **Image Spec**: How the filesystem layers + JSON config are packed.
2.  **Runtime Spec**: \`config.json\` + \`rootfs\` -> Running process.

## The Flow
1.  **Kubelet** calls CRI (containerd).
2.  **containerd** sets up snapshot/storage.
3.  **containerd** calls OCI Runtime (runc).
4.  **runc** interacts with kernel (namespaces/cgroups) to spawn process.

## Shims
\`containerd-shim\` sits between containerd and runc to allow daemonless containers (runc exits after creating the container).
    `
  }
};

export const getLessonById = (id: string): Lesson | null => {
  return lessons[id] || null;
};

export const getLessons = () => lessons;

export interface K8sResource {
    metadata: {
        name: string;
        namespace?: string;
        uid?: string;
        [key: string]: any;
    };
    [key: string]: any; // To allow other fields like spec, status
}

export interface ScenarioState {
    pods: K8sResource[];
    nodes: K8sResource[];
    deployments: K8sResource[];
    services: K8sResource[];
    [key: string]: any;
}

const defaultState: ScenarioState = {
    pods: [
        {
            metadata: { name: 'nginx-demo', namespace: 'default', uid: '1' },
            status: { phase: 'Running' },
            spec: { containers: [{ image: 'nginx', name: 'nginx' }] }
        },
        {
            metadata: { name: 'kube-apiserver-controlplane', namespace: 'kube-system', uid: '2' },
            status: { phase: 'Running' },
            spec: { containers: [{ image: 'kube-apiserver', name: 'kube-apiserver' }] }
        }
    ],
    nodes: [
        {
            metadata: { name: 'controlplane', uid: 'node-1' },
            status: { conditions: [{ type: 'Ready', status: 'True' }], nodeInfo: { kubeletVersion: 'v1.30.0' } }
        }
    ],
    deployments: [],
    services: []
};

// Lesson 20: Deployments
const lesson20State: ScenarioState = {
    ...defaultState,
    deployments: [
        {
            apiVersion: 'apps/v1',
            kind: 'Deployment',
            metadata: { name: 'my-dep', namespace: 'default', uid: 'dep-1' },
            spec: {
                replicas: 3,
                selector: { matchLabels: { app: 'nginx' } },
                template: {
                    metadata: { labels: { app: 'nginx' } },
                    spec: { containers: [{ name: 'nginx', image: 'nginx:1.14.2' }] }
                }
            },
            status: { availableReplicas: 3, readyReplicas: 3, replicas: 3 }
        }
    ],
    // Also add the pods managed by the deployment
    pods: [
        ...defaultState.pods,
        {
            metadata: { name: 'my-dep-p1', namespace: 'default', uid: 'p-1', labels: { app: 'nginx' }, ownerReferences: [{ kind: 'ReplicaSet', name: 'my-dep-rs' }] },
            status: { phase: 'Running' },
            spec: { containers: [{ image: 'nginx', name: 'nginx' }] }
        },
        {
            metadata: { name: 'my-dep-p2', namespace: 'default', uid: 'p-2', labels: { app: 'nginx' }, ownerReferences: [{ kind: 'ReplicaSet', name: 'my-dep-rs' }] },
            status: { phase: 'Running' },
            spec: { containers: [{ image: 'nginx', name: 'nginx' }] }
        },
        {
            metadata: { name: 'my-dep-p3', namespace: 'default', uid: 'p-3', labels: { app: 'nginx' }, ownerReferences: [{ kind: 'ReplicaSet', name: 'my-dep-rs' }] },
            status: { phase: 'Running' },
            spec: { containers: [{ image: 'nginx', name: 'nginx' }] }
        }
    ]
};

// Lesson 99: Broken Cluster (Chaos)
const lesson99State: ScenarioState = {
    ...defaultState,
    pods: [
        // No kube-apiserver pod visible initially? Or maybe crashlooping?
        // Let's hide the apiserver pod to simulate "it's gone" or "crashing"
        {
            metadata: { name: 'nginx-demo', namespace: 'default', uid: '1' },
            status: { phase: 'Running' }
        }
    ],
    isBroken: true // Custom flag for mockK8s to intercept handling
};


export const scenarios: Record<string, ScenarioState> = {
    'default': defaultState,
    '20': lesson20State,
    '99': lesson99State
};

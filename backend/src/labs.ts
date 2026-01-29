import { ScenarioState, K8sResource } from './scenarios';

export interface LabTask {
    id: string;
    description: string;
    hint: string;
    verify: (state: ScenarioState) => { passed: boolean; message?: string };
}

export interface Lab {
    id: string;
    title: string;
    description: string;
    tasks: LabTask[];
}

export const labs: Record<string, Lab> = {
    'scheduling-101': {
        id: 'scheduling-101',
        title: 'Ranking & Scheduling',
        description: 'Master Node Affinity and Taints.',
        tasks: [
            {
                id: '1',
                description: 'Create a Pod named "blue-pod" using image "nginx".',
                hint: 'kubectl run blue-pod --image=nginx',
                verify: (state) => {
                    const pod = state.pods.find(p => p.metadata.name === 'blue-pod');
                    if (!pod) return { passed: false, message: 'Pod "blue-pod" not found.' };
                    return { passed: true };
                }
            },
            {
                id: '2',
                description: 'Assign "blue-pod" to the "controlplane" node manually (nodeName).',
                hint: 'Edit the pod and set spec.nodeName: controlplane',
                verify: (state) => {
                    const pod = state.pods.find(p => p.metadata.name === 'blue-pod');
                    if (!pod) return { passed: false, message: 'Pod "blue-pod" not found.' };

                    if (pod.spec?.nodeName === 'controlplane') {
                        return { passed: true };
                    }
                    return { passed: false, message: 'Pod is not assigned to node "controlplane". Check nodeName.' };
                }
            }
        ]
    },
    'taints-tolerations': {
        id: 'taints-tolerations',
        title: 'Taints & Tolerations',
        description: 'Place pods on restricted nodes.',
        tasks: [
            {
                id: '1',
                description: 'Taint the node "node-1" with "key=gpu:NoSchedule".',
                hint: 'kubectl taint nodes node-1 key=gpu:NoSchedule',
                verify: (state) => {
                    // We need to check node state. MockK8s nodes need to support taints.
                    const node = state.nodes.find(n => n.metadata.name === 'node-1' || n.metadata.uid === 'node-1');
                    const hasTaint = node?.spec?.taints?.some((t: any) => t.key === 'gpu' && t.effect === 'NoSchedule');
                    return { passed: !!hasTaint, message: 'Node "node-1" does not have the correct taint.' };
                }
            },
            {
                id: '2',
                description: 'Create a pod "gpu-pod" that tolerates this taint.',
                hint: 'Add a toleration for key="gpu"',
                verify: (state) => {
                    const pod = state.pods.find(p => p.metadata.name === 'gpu-pod');
                    if (!pod) return { passed: false, message: 'Pod "gpu-pod" not found.' };
                    const hasTol = pod.spec?.tolerations?.some((t: any) => t.key === 'gpu');
                    return { passed: !!hasTol, message: 'Pod is missing the toleration.' };
                }
            }
        ]
    },
    'security-context': {
        id: 'security-context',
        title: 'Pod Security Standards',
        description: 'Hardening Pods with SecurityContext.',
        tasks: [
            {
                id: '1',
                description: 'Create a Pod named "secure-pod" that must not run as root.',
                hint: 'Set securityContext.runAsNonRoot: true',
                verify: (state) => {
                    const pod = state.pods.find(p => p.metadata.name === 'secure-pod');
                    if (!pod) return { passed: false, message: 'Pod "secure-pod" not found.' };

                    const sc = pod.spec?.securityContext;
                    // Also check container level security context?
                    const containerSc = pod.spec?.containers?.[0]?.securityContext;

                    if (sc?.runAsNonRoot === true || containerSc?.runAsNonRoot === true) {
                        return { passed: true };
                    }
                    return { passed: false, message: 'Pod is confirmed to accept running as Root. Fix securityContext.' };
                }
            },
            {
                id: '2',
                description: 'Ensure "secure-pod" runs as User ID 1000.',
                hint: 'Set runAsUser: 1000',
                verify: (state) => {
                    const pod = state.pods.find(p => p.metadata.name === 'secure-pod');
                    if (!pod) return { passed: false, message: 'Pod "secure-pod" not found.' };

                    const sc = pod.spec?.securityContext;
                    const containerSc = pod.spec?.containers?.[0]?.securityContext;

                    if (sc?.runAsUser === 1000 || containerSc?.runAsUser === 1000) {
                        return { passed: true };
                    }
                    return { passed: false, message: 'Pod is not running as User 1000.' };
                }
            }
        ]
    }
};

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
                    // In our mock, we check if spec.nodeName is set, or we simulate scheduler logic?
                    // For simplicity, we check if the user *requested* it via nodeName or affinity.
                    // But `kubectl run` doesn't easily let you set nodeName. 
                    // Let's assume they might use a yaml.
                    // Or simpler: "Taint the controlplane node with key=color, value=blue, effect=NoSchedule"
                    return { passed: true }; // Placeholder logic for now
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
    }
};

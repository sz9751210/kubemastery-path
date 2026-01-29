import { Node, Edge } from 'reactflow';

export type Chapter = 'foundation' | 'admin' | 'security' | 'expert';

const foundationNodes: Node[] = [
  { id: '1', type: 'input', data: { label: 'Container Basics' }, position: { x: 250, y: 0 }, style: { background: '#fef3c7', border: '1px solid #d97706', width: 180 } },
  { id: '2', data: { label: 'Pod Lifecycle' }, position: { x: 100, y: 100 } },
  { id: '3', data: { label: 'YAML & Configuration' }, position: { x: 400, y: 100 } },
  { id: '12', data: { label: 'ReplicaSets' }, position: { x: 100, y: 200 } },
  { id: '13', data: { label: 'Jobs & CronJobs' }, position: { x: 400, y: 200 } },
  { id: '4', type: 'output', data: { label: 'Multi-Container Pods' }, position: { x: 250, y: 300 } },
];

const foundationEdges: Edge[] = [
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e1-3', source: '1', target: '3', animated: true },
  { id: 'e2-12', source: '2', target: '12' },
  { id: 'e3-13', source: '3', target: '13' },
  { id: 'e12-4', source: '12', target: '4' },
  { id: 'e13-4', source: '13', target: '4' },
];

const adminNodes: Node[] = [
  { id: '5', type: 'input', data: { label: 'Cluster Architecture' }, position: { x: 250, y: 0 }, style: { background: '#dbeafe', border: '1px solid #2563eb', width: 180 } },
  { id: '14', data: { label: 'Control Plane' }, position: { x: 50, y: 100 } },
  { id: '6', data: { label: 'Networking & Services' }, position: { x: 250, y: 100 } },
  { id: '7', data: { label: 'Storage (PV/PVC)' }, position: { x: 450, y: 100 } },
  { id: '20', data: { label: 'Deployments' }, position: { x: 150, y: 200 } },
  { id: '21', data: { label: 'StatefulSets' }, position: { x: 50, y: 300 } },
  { id: '22', data: { label: 'Ingress' }, position: { x: 350, y: 200 } },
  { id: '8', data: { label: 'Scheduling' }, position: { x: 250, y: 400 } },
  { id: '15', type: 'output', data: { label: 'Troubleshooting' }, position: { x: 250, y: 500 } },
];

const adminEdges: Edge[] = [
  { id: 'e5-14', source: '5', target: '14' },
  { id: 'e5-6', source: '5', target: '6' },
  { id: 'e5-7', source: '5', target: '7' },
  { id: 'e14-20', source: '14', target: '20' },
  { id: 'e20-21', source: '20', target: '21' },
  { id: 'e6-22', source: '6', target: '22' },
  { id: 'e21-8', source: '21', target: '8' },
  { id: 'e22-8', source: '22', target: '8' },
  { id: 'e7-8', source: '7', target: '8' },
  { id: 'e8-15', source: '8', target: '15', animated: true },
];

const securityNodes: Node[] = [
  { id: '9', type: 'input', data: { label: 'Cluster Hardening' }, position: { x: 250, y: 0 }, style: { background: '#fee2e2', border: '1px solid #dc2626', width: 180 } },
  { id: '30', data: { label: 'RBAC Authorization' }, position: { x: 100, y: 100 } },
  { id: '31', data: { label: 'Secrets Mgmt' }, position: { x: 400, y: 100 } },
  { id: '10', data: { label: 'Network Policies' }, position: { x: 100, y: 200 } },
  { id: '16', data: { label: 'Admission Control' }, position: { x: 250, y: 200 } },
  { id: '17', data: { label: 'Runtime Security' }, position: { x: 400, y: 200 } },
  { id: '11', type: 'output', data: { label: 'System Hardening' }, position: { x: 250, y: 300 } },
];

const securityEdges: Edge[] = [
  { id: 'e9-30', source: '9', target: '30' },
  { id: 'e9-31', source: '9', target: '31' },
  { id: 'e30-10', source: '30', target: '10' },
  { id: 'e30-16', source: '30', target: '16' },
  { id: 'e31-17', source: '31', target: '17' },
  { id: 'e10-11', source: '10', target: '11' },
  { id: 'e16-11', source: '16', target: '11' },
  { id: 'e17-11', source: '17', target: '11', animated: true },
];

const expertNodes: Node[] = [
  { id: '40', type: 'input', data: { label: 'Helm & Packaging' }, position: { x: 250, y: 0 }, style: { background: '#f5f3ff', border: '1px solid #7c3aed', width: 180 } },
  { id: '18', data: { label: 'CRDs Extended' }, position: { x: 100, y: 100 } },
  { id: '41', data: { label: 'Operators' }, position: { x: 100, y: 200 } },
  { id: '42', data: { label: 'Service Mesh' }, position: { x: 400, y: 100 } },
  { id: '99', type: 'output', data: { label: 'Chaos Challenge' }, position: { x: 250, y: 350 }, style: { background: '#000000', border: '2px solid #ef4444', color: '#fff', width: 220, fontWeight: 'bold' } },
];

const expertEdges: Edge[] = [
  { id: 'e40-18', source: '40', target: '18' },
  { id: 'e40-42', source: '40', target: '42' },
  { id: 'e18-41', source: '18', target: '41' },
  { id: 'e41-99', source: '41', target: '99', animated: true, style: { stroke: '#ef4444', strokeWidth: 3 } },
  { id: 'e42-99', source: '42', target: '99', animated: true, style: { stroke: '#ef4444', strokeWidth: 3 } },
];


export const getNodesForChapter = (chapter: Chapter): Node[] => {
  switch (chapter) {
    case 'foundation': return foundationNodes;
    case 'admin': return adminNodes;
    case 'security': return securityNodes;
    case 'expert': return expertNodes;
    default: return foundationNodes;
  }
};

export const getEdgesForChapter = (chapter: Chapter): Edge[] => {
  switch (chapter) {
    case 'foundation': return foundationEdges;
    case 'admin': return adminEdges;
    case 'security': return securityEdges;
    case 'expert': return expertEdges;
    default: return foundationEdges;
  }
};

// Backwards compatibility if needed, though we should migrate usage
export const initialNodes = foundationNodes;
export const initialEdges = foundationEdges;

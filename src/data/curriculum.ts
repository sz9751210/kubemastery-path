import { Node, Edge } from 'reactflow';

export const initialNodes: Node[] = [
  // Level 1: Foundation (CKAD)
  {
    id: '1',
    type: 'input',
    data: { label: 'Container Basics' },
    position: { x: 250, y: 0 },
    style: { background: '#fef3c7', border: '1px solid #d97706', width: 180 }, // Amber
  },
  {
    id: '2',
    data: { label: 'Pod Lifecycle' },
    position: { x: 100, y: 100 },
  },
  {
    id: '3',
    data: { label: 'YAML & Configuration' },
    position: { x: 400, y: 100 },
  },
  {
    id: '12',
    data: { label: 'ReplicaSets & Deployments' },
    position: { x: 100, y: 200 },
  },
  {
    id: '13',
    data: { label: 'Jobs & CronJobs' },
    position: { x: 400, y: 200 },
  },
  {
    id: '4',
    data: { label: 'Multi-Container Pods' },
    position: { x: 250, y: 300 },
  },

  // Level 2: Administration (CKA)
  {
    id: '5',
    data: { label: 'Cluster Architecture' },
    position: { x: 250, y: 400 },
    style: { background: '#dbeafe', border: '1px solid #2563eb', width: 180 }, // Blue
  },
  {
    id: '14',
    data: { label: 'Control Plane & API' },
    position: { x: 50, y: 500 },
  },
  {
    id: '6',
    data: { label: 'Networking & Services' },
    position: { x: 250, y: 500 },
  },
  {
    id: '7',
    data: { label: 'Storage (PV/PVC)' },
    position: { x: 450, y: 500 },
  },
  {
    id: '8',
    data: { label: 'Scheduling' },
    position: { x: 150, y: 600 },
  },
  {
    id: '15',
    data: { label: 'Troubleshooting' },
    position: { x: 350, y: 600 },
  },

  // Level 3: Security (CKS)
  {
    id: '9',
    data: { label: 'Cluster Hardening' },
    position: { x: 250, y: 750 },
    style: { background: '#fee2e2', border: '1px solid #dc2626', width: 180 }, // Red
  },
  {
    id: '10',
    data: { label: 'Network Policies' },
    position: { x: 50, y: 850 },
  },
  {
    id: '16',
    data: { label: 'Admission Controllers' },
    position: { x: 250, y: 850 },
  },
  {
    id: '17',
    data: { label: 'Runtime Security' },
    position: { x: 450, y: 850 },
  },
  {
    id: '11',
    data: { label: 'System Hardening' },
    position: { x: 250, y: 950 },
  },

  // Level 4: Expert
  {
    id: '18',
    data: { label: 'CRDs & API Extensions' },
    position: { x: 250, y: 1100 },
    style: { background: '#f5f3ff', border: '1px solid #7c3aed', width: 180 }, // Purple
  },
  {
    id: '99',
    type: 'output',
    data: { label: 'Chaos Challenge' },
    position: { x: 250, y: 1250 },
    style: { background: '#000000', border: '2px solid #ef4444', color: '#fff', width: 220, fontWeight: 'bold' },
  },
];

export const initialEdges: Edge[] = [
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e1-3', source: '1', target: '3', animated: true },
  { id: 'e2-12', source: '2', target: '12' },
  { id: 'e3-13', source: '3', target: '13' },
  { id: 'e12-4', source: '12', target: '4' },
  { id: 'e13-4', source: '13', target: '4' },
  { id: 'e4-5', source: '4', target: '5', animated: true },

  { id: 'e5-14', source: '5', target: '14' },
  { id: 'e5-6', source: '5', target: '6' },
  { id: 'e5-7', source: '5', target: '7' },
  { id: 'e14-8', source: '14', target: '8' },
  { id: 'e6-15', source: '6', target: '15' },
  { id: 'e7-15', source: '7', target: '15' },

  { id: 'e8-9', source: '8', target: '9', animated: true },
  { id: 'e15-9', source: '15', target: '9', animated: true },

  { id: 'e9-10', source: '9', target: '10' },
  { id: 'e9-16', source: '9', target: '16' },
  { id: 'e9-17', source: '9', target: '17' },

  { id: 'e10-11', source: '10', target: '11' },
  { id: 'e16-11', source: '16', target: '11' },
  { id: 'e17-11', source: '17', target: '11' },

  { id: 'e11-18', source: '11', target: '18', animated: true },
  { id: 'e18-99', source: '18', target: '99', animated: true, style: { stroke: '#ef4444', strokeWidth: 3 } },
];

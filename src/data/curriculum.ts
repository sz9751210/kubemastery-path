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
    id: '4',
    data: { label: 'Multi-Container Pods' },
    position: { x: 250, y: 200 },
  },

  // Level 2: Administration (CKA)
  {
    id: '5',
    data: { label: 'Cluster Architecture' },
    position: { x: 250, y: 300 },
    style: { background: '#dbeafe', border: '1px solid #2563eb', width: 180 }, // Blue
  },
  {
    id: '6',
    data: { label: 'Networking & Services' },
    position: { x: 50, y: 400 },
  },
  {
    id: '7',
    data: { label: 'Storage (PV/PVC)' },
    position: { x: 250, y: 400 },
  },
  {
    id: '8',
    data: { label: 'Scheduling' },
    position: { x: 450, y: 400 },
  },

  // Level 3: Security (CKS)
  {
    id: '9',
    data: { label: 'Cluster Hardening' },
    position: { x: 250, y: 550 },
    style: { background: '#fee2e2', border: '1px solid #dc2626', width: 180 }, // Red
  },
  {
    id: '10',
    data: { label: 'Network Policies' },
    position: { x: 150, y: 650 },
  },
  {
    id: '11',
    type: 'output', // Final goal
    data: { label: 'System Hardening' },
    position: { x: 350, y: 650 },
  },
];

export const initialEdges: Edge[] = [
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e1-3', source: '1', target: '3', animated: true },
  { id: 'e2-4', source: '2', target: '4' },
  { id: 'e3-4', source: '3', target: '4' },
  { id: 'e4-5', source: '4', target: '5', animated: true }, // Transition to Level 2
  { id: 'e5-6', source: '5', target: '6' },
  { id: 'e5-7', source: '5', target: '7' },
  { id: 'e5-8', source: '5', target: '8' },
  { id: 'e6-9', source: '6', target: '9', animated: true }, // Transition to Level 3
  { id: 'e7-9', source: '7', target: '9', animated: true },
  { id: 'e9-10', source: '9', target: '10' },
  { id: 'e9-11', source: '9', target: '11' },
];

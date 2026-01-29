
import fs from 'fs';
import path from 'path';

const EXAMS_DIR = path.join(process.cwd(), 'src/content/exams');

// Helper for random choices
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
const randInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const uuid = () => Math.random().toString(36).substring(2, 8);

// Data Pools
const IMAGES = ['nginx', 'busybox', 'redis', 'postgres', 'httpd', 'alpine', 'memcached', 'mysql', 'python:3.9', 'node:14'];
const NAMESPACES = ['default', 'kube-system', 'prod', 'dev', 'test', 'staging', 'backend', 'frontend'];
const LABELS = ['app=web', 'tier=frontend', 'env=prod', 'team=blue', 'release=stable'];
const CAPACITIES = ['1Gi', '2Gi', '5Gi', '10Gi', '100Mi'];
const ACCESS_MODES = ['ReadWriteOnce', 'ReadOnlyMany', 'ReadWriteMany'];

function generateCKATasks(count) {
    const tasks = [];
    for (let i = 0; i < count; i++) {
        const type = pick(['pod', 'deployment', 'service', 'pvc', 'node']);
        const name = `resource-${uuid()}`;
        const ns = pick(NAMESPACES);

        if (type === 'pod') {
            const img = pick(IMAGES);
            const lbl = pick(LABELS);
            tasks.push(`# Task ${i + 1}: Create a Pod
Create a pod named \`${name}\` in namespace \`${ns}\` using image \`${img}\`.
Ensure it has a label \`${lbl}\`.
`);
        } else if (type === 'deployment') {
            const replicas = randInt(2, 10);
            const img = pick(IMAGES);
            tasks.push(`# Task ${i + 1}: Scale Deployment
Create a deployment named \`${name}\` in namespace \`${ns}\` using image \`${img}\`.
Scale it to \`${replicas}\` replicas.
Then, perform a rolling update to image \`${img}:latest\`.
`);
        } else if (type === 'service') {
            const port = randInt(3000, 9000);
            const type = pick(['ClusterIP', 'NodePort']);
            tasks.push(`# Task ${i + 1}: Expose Service
Expose the deployment \`${name}-dep\` as a Service named \`${name}\` in namespace \`${ns}\`.
The service should listen on port \`${port}\` and be of type \`${type}\`.
`);
        } else if (type === 'pvc') {
            const cap = pick(CAPACITIES);
            const mode = pick(ACCESS_MODES);
            tasks.push(`# Task ${i + 1}: Persistent Volume Claim
Create a PersistentVolumeClaim named \`${name}\` in namespace \`${ns}\`.
Request \`${cap}\` storage with access mode \`${mode}\`.
`);
        } else if (type === 'node') {
            const nodeName = `node-${randInt(1, 5)}`;
            tasks.push(`# Task ${i + 1}: Node Maintenance
Mark node \`${nodeName}\` as unschedulable (cordon).
Then drain the node, ignoring daemonsets.
Finally, uncordon the node.
`);
        }
    }
    return tasks;
}

function generateCKADTasks(count) {
    const tasks = [];
    for (let i = 0; i < count; i++) {
        const name = `ckad-${uuid()}`;
        tasks.push(`# Task ${i + 1}: Multi-Container Pod
Create a pod named \`${name}\` with two containers.
Container 1: image \`nginx\`, name \`c1\`.
Container 2: image \`busybox\`, name \`c2\`, command "sleep 3600".
`);
    }
    return tasks;
}


function generateCKSTasks(count) {
    const tasks = [];
    for (let i = 0; i < count; i++) {
        const name = `cks-${uuid()}`;
        tasks.push(`# Task ${i + 1}: Network Policy
Create a NetworkPolicy named \`${name}\` in namespace \`default\`.
Deny all ingress traffic to pods with label \`role=db\`.
Allow egress only to port 53 (DNS).
`);
    }
    return tasks;
}

function writeExamFile(filename, title, category, tasks) {
    const content = `---
id: ${path.basename(filename, '.md')}
title: ${title}
category: ${category}
duration: 120 mins
---

# ${title}

This is an auto-generated exam to provide infinite practice questions.

${tasks.join('\n\n')}
`;
    const dir = path.join(EXAMS_DIR, category === 'CKA' ? 'CKA' : category === 'CKAD' ? 'CKAD' : 'CKS');
    // Ensure dir exists
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    fs.writeFileSync(path.join(dir, filename), content);
    console.log(`Generated ${filename} with ${tasks.length} tasks.`);
}

// MAIN
const TOTAL_CKA = 400;
const TOTAL_CKAD = 300;
const TOTAL_CKS = 300;

function generateBatches(total, genFunc, prefix, title, category) {
    const BATCH_SIZE = 20;
    let count = 0;
    while (count < total) {
        const batchTasks = genFunc(Math.min(BATCH_SIZE, total - count));
        const filename = `${prefix}-${Math.floor(count / BATCH_SIZE) + 1}.md`;
        writeExamFile(filename, `${title} (Batch ${Math.floor(count / BATCH_SIZE) + 1})`, category, batchTasks);
        count += batchTasks.length;
    }
}

generateBatches(TOTAL_CKA, generateCKATasks, 'auto-cka', 'Auto CKA Practice', 'CKA');
generateBatches(TOTAL_CKAD, generateCKADTasks, 'auto-ckad', 'Auto CKAD Practice', 'CKAD');
generateBatches(TOTAL_CKS, generateCKSTasks, 'auto-cks', 'Auto CKS Practice', 'CKS');

console.log('DONE. Generated 1000+ questions.');

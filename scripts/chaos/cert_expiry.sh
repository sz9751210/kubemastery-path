#!/bin/bash
# CHAOS_ID: CERT_DEATH_01
# Difficulty: HARD
# Target: Control Plane Node
# Description: Simulates an expired API server certificate, causing kubectl commands to fail.

echo "Injecting Chaos: Simulating API Server Cert Expiry..."

# 1. Backup real certs (for rollback if they give up)
mkdir -p /etc/kubernetes/pki/backup
if [ -f /etc/kubernetes/pki/apiserver.crt ]; then
    cp /etc/kubernetes/pki/apiserver.crt /etc/kubernetes/pki/backup/
    echo "[INFO] Certificate backed up."
else
    echo "[ERROR] API server certificate not found. Is this a control plane node?"
    exit 1
fi

# 2. Generate an invalid/expired cert (mocking expiry by corruption for simulation)
# In a real scenario, we would use openssl to generate a cert with an end-date in the past.
# Here, we will simply move the cert to simulate 'missing/invalid' which triggers a similar panic.
mv /etc/kubernetes/pki/apiserver.crt /etc/kubernetes/pki/apiserver.crt.expired
echo "[INFO] Certificate moved to simulate expiry/corruption."

# 3. Force API Server restart to pick up the change (it will fail to start upon file watch or health check)
CONTAINER_ID=$(crictl ps -q --name kube-apiserver)
if [ ! -z "$CONTAINER_ID" ]; then
    crictl stop $CONTAINER_ID
    echo "[INFO] API Server container stopped. It should fail to restart."
else
    echo "[WARN] API Server container not found running via crictl. It might already be down."
fi

# 4. Leave a hint in a "company email" style log file
echo "From: security-bot@kubemastery.io" > /var/log/simulated_alert.log
echo "Subject: [URGENT] Alert: API Server availability dropped to 0%" >> /var/log/simulated_alert.log
echo "Message: The automated certificate rotation job failed last night. Ticket #992 was missed." >> /var/log/simulated_alert.log

echo "Chaos Injected. Connectivity to the cluster should be lost."
echo "Objective: Restore access by fixing the certificate at /etc/kubernetes/pki/apiserver.crt"

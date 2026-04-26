ECGforCPU 

ECGforCPU is a real-time system monitoring dashboard that visualizes CPU, RAM, Disk, Network, and GPU usage using Prometheus and Grafana.

Features
- Real-time system monitoring
- Grafana dashboard integration
- Clean UI with system insights
- One-click monitoring setup

Technologies Used
- Node.js
- Prometheus
- Grafana
- Windows Exporter

Setup

1. Install Prometheus, Grafana, and exporters
        i. Prometheus
        Download from:
        https://prometheus.io/download/
        
        ii. Grafana
        Download from:
        https://grafana.com/grafana/download
        
        iii. Windows Exporter
        Download from:
        https://github.com/prometheus-community/windows_exporter/releases
        
        iv. NVIDIA GPU Exporter (optional)
        Download from:
        https://github.com/utkuozdemir/nvidia_gpu_exporter/releases
        
        v. Node.js
        Download from:
        https://nodejs.org/
(copy paste the links in your browser)
2. Run setup_monitoring.bat
3. Run:
   node app.js
4. Open:
   http://localhost:4000

Concept

Inspired by ECG (heart monitoring), this project visualizes system performance patterns to detect anomalies.

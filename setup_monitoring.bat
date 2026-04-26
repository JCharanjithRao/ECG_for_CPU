@echo off
echo Starting ECGforCPU Monitoring...

start cmd /k "C:\DEV OPS\Windows Exporter\windows_exporter-0.31.6-amd64.exe"

start cmd /k "C:\DEV OPS\Gpu\extracts\nvidia_gpu_exporter.exe"

start cmd /k "C:\DEV OPS\prometheus-3.11.0.windows-amd64\prometheus.exe"

start http://localhost:3000/d/ad2kvzv/system-monitoring?orgId=1&from=now-6h&to=now&timezone=browser
start http://localhost:9090/targets
echo All services started
pause
const http = require('http');
const { exec } = require('child_process');

let status = "Stopped";

const server = http.createServer((req, res) => {

  if (req.url === '/start') {
    exec('start setup_monitoring.bat');
    status = "Running";
    res.end("Started");
    return;
  }

  if (req.url === '/stop') {
    status = "Stopped";
    res.end("Stopped");
    return;
  }

  const html = `
<!DOCTYPE html>
<html>
<head>
  <title>ECGforCPU</title>
</head>

<body style="margin:0; font-family:Segoe UI; background:#0b1220; color:white;">

  <!-- HEADER -->
  <div style="display:flex; align-items:center; justify-content:space-between; padding:15px 30px; background:#020617;">
    
    <!-- Logo + Name -->
    <div style="display:flex; align-items:center; gap:10px;">
      <img src="https://cdn-icons-png.flaticon.com/512/1688/1688400.png" width="40"/>
      <h2 style="margin:0;">ECGforCPU</h2>
    </div>

    <!-- Controls -->
    <div style="display:flex; align-items:center; gap:15px;">

      <button onclick="fetch('/start').then(()=>location.reload())"
        style="padding:8px 15px; background:#22c55e; border:none; color:white; cursor:pointer; border-radius:6px;">
        Start
      </button>

      <button onclick="fetch('/stop').then(()=>location.reload())"
        style="padding:8px 15px; background:#ef4444; border:none; color:white; cursor:pointer; border-radius:6px;">
        Stop
      </button>

      <div style="font-weight:bold; color:${status === "Running" ? "#22c55e" : "#ef4444"};">
        ● ${status}
      </div>

    </div>
  </div>

  <!-- DESCRIPTION -->
  <div style="text-align:center; padding:10px; opacity:0.8;">
    Real-time system monitoring (CPU, Memory, Disk, Network, GPU)
  </div>

  <!-- DASHBOARD -->
  <div style="height:85vh; overflow:scroll;">
  <iframe 
    src="http://localhost:3000/d/ad2kvzv/system-monitoring"
    style="width:100%; height:110vh; border:none; margin-top:-60px;">
  </iframe>
</div>

  <!-- INFO SECTION -->
  <div style="padding:20px; display:grid; grid-template-columns:repeat(2,1fr); gap:20px;">

    <div style="background:#111827; padding:15px; border-radius:10px;">
      <h3>CPU Usage</h3>
      <p>Normal: 10% - 60%</p>
      <p>High Load: 70% - 90%</p>
      <p style="color:#ef4444;">Critical: >90%</p>
    </div>

    <div style="background:#111827; padding:15px; border-radius:10px;">
      <h3>Memory (RAM)</h3>
      <p>Normal: 30% - 70%</p>
      <p>High: 70% - 85%</p>
      <p style="color:#ef4444;">Critical: >90%</p>
    </div>

    <div style="background:#111827; padding:15px; border-radius:10px;">
      <h3>Disk</h3>
      <p>Spikes during file access are normal</p>
      <p style="color:#ef4444;">Constant high = problem</p>
    </div>

    <div style="background:#111827; padding:15px; border-radius:10px;">
      <h3>Network</h3>
      <p>Spikes during downloads/uploads</p>
      <p style="color:#ef4444;">Continuous high = suspicious</p>
    </div>

    <div style="background:#111827; padding:15px; border-radius:10px;">
      <h3>GPU</h3>
      <p>Idle: 0% - 20%</p>
      <p>Heavy use: 60% - 100%</p>
      <p style="color:#ef4444;">High at idle = issue</p>
    </div>

  </div>

</body>
</html>
`;

  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(html);
});

server.listen(4000, () => {
  console.log("ECGforCPU running at http://localhost:4000");
});
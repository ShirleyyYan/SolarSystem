
const Process = require('child_process');

Process.exec('http-server -p 9000');
Process.exec('open http://127.0.0.1:9000');
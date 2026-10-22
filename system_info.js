const os = require("os");

console.log("Hostname:", os.hostname());
console.log("Platform:", os.platform());
console.log("Architecture:", os.arch());
console.log("Free memory (MB):", Math.round(os.freemem() / 1024 / 1024));
console.log("Total memory (MB):", Math.round(os.totalmem() / 1024 / 1024));

import { spawn } from "node:child_process";
const port = process.env.PORT || "3000";
if (!/^\d+$/.test(port) || Number(port) < 1 || Number(port) > 65535)
  throw new Error("PORT must be between 1 and 65535");
const server = spawn(
  process.execPath,
  [
    "node_modules/next/dist/bin/next",
    "start",
    "--hostname",
    "0.0.0.0",
    "--port",
    port,
  ],
  { stdio: "inherit", env: process.env },
);
for (const signal of ["SIGTERM", "SIGINT"])
  process.on(signal, () => server.kill(signal));
server.on("error", (error) => {
  console.error("Unable to start portfolio:", error);
  process.exit(1);
});
server.on("exit", (code) => process.exit(code ?? 1));

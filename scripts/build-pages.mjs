import { randomUUID } from "node:crypto";
import { rm, writeFile } from "node:fs/promises";
import { spawn } from "node:child_process";

const versionFile = new URL("../public/version.json", import.meta.url);
const buildId = process.env.GITHUB_SHA || randomUUID();

await writeFile(versionFile, JSON.stringify({ buildId }));

const command = process.platform === "win32" ? "npm.cmd" : "npm";
const build = spawn(command, ["exec", "--", "next", "build"], {
  stdio: "inherit",
  env: {
    ...process.env,
    GITHUB_PAGES: "true",
    NEXT_PUBLIC_BUILD_ID: buildId,
  },
});

const exitCode = await new Promise((resolve, reject) => {
  build.on("error", reject);
  build.on("exit", (code) => resolve(code ?? 1));
});

await rm(versionFile, { force: true });
process.exit(exitCode);

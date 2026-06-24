#!/usr/bin/env node
import fs from "node:fs";
import { spawnSync } from "node:child_process";
import path from "node:path";
import process from "node:process";

const argv = process.argv.slice(2);
const help = argv.includes("--help") || argv.includes("-h");

function printUsage() {
  console.log("Usage: plan-and-research [--repo <path>]");
  console.log("");
  console.log("Starts the SMC intake pipeline via the global agent-pipeline CLI.");
  console.log("If --repo is omitted, the current working directory is used.");
}

if (help) {
  printUsage();
  process.exit(0);
}

let repoPath = process.cwd();
for (let i = 0; i < argv.length; i++) {
  if (argv[i] === "--repo" && argv[i + 1]) {
    repoPath = path.resolve(argv[i + 1]);
    i++;
  }
}

const localAgentPipeline = path.join(process.cwd(), "scripts", "agent-pipeline.js");
const useLocal = fs.existsSync(localAgentPipeline);
const command = useLocal ? process.execPath : "agent-pipeline";
const args = useLocal
  ? [localAgentPipeline, "start", "--repo", repoPath]
  : ["start", "--repo", repoPath];

const result = spawnSync(command, args, {
  stdio: "inherit",
  shell: false,
});

if (result.error) {
  console.error("Failed to start the global SMC intake pipeline:", result.error.message);
  if (!useLocal) {
    console.error("Make sure the agent-pipeline CLI is installed and available on PATH, or add it to this repo.");
  }
  process.exit(1);
}

process.exit(result.status ?? 1);

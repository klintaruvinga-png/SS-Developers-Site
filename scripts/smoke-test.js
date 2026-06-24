#!/usr/bin/env node

/**
 * Smoke Test for SS Developers Pipeline
 * Validates build integrity, critical pages, and deployment readiness
 * Exit code 0 = all checks passed; non-zero = failure
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Color codes for terminal output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
};

// Counters
let checksPassed = 0;
let checksFailed = 0;

// Helper functions
function checkStatus(checkName, exitCode) {
  if (exitCode === 0) {
    console.log(`${colors.green}✓${colors.reset} ${checkName}`);
    checksPassed++;
  } else {
    console.log(`${colors.red}✗${colors.reset} ${checkName}`);
    checksFailed++;
  }
}

function failCritical(message) {
  console.log(`${colors.red}✗ CRITICAL: ${message}${colors.reset}`);
  checksFailed++;
}

function warn(message) {
  console.log(`${colors.yellow}⚠ WARNING: ${message}${colors.reset}`);
}

function fileExists(filePath) {
  try {
    return fs.existsSync(filePath);
  } catch {
    return false;
  }
}

function dirExists(dirPath) {
  try {
    const stats = fs.statSync(dirPath);
    return stats.isDirectory();
  } catch {
    return false;
  }
}

function getFileSize(filePath) {
  try {
    const stats = fs.statSync(filePath);
    return stats.size;
  } catch {
    return 0;
  }
}

function readFile(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf-8');
  } catch {
    return '';
  }
}

// Main execution
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const distDir = path.join(projectRoot, 'dist');

console.log('==========================================');
console.log('Running SS Developers Smoke Tests');
console.log('==========================================');
console.log('');

// ============================================================================
// 1. BUILD ARTIFACTS CHECK
// ============================================================================
console.log('1. Checking build artifacts...');
console.log('');

// Check if dist directory exists
if (dirExists(distDir)) {
  console.log(`${colors.green}✓${colors.reset} dist/ directory exists`);
  checksPassed++;
} else {
  failCritical('dist/ directory does not exist. Run "npm run build" first.');
  process.exit(1);
}

// Check if assets directory exists
const assetsDir = path.join(distDir, 'assets');
if (dirExists(assetsDir)) {
  console.log(`${colors.green}✓${colors.reset} dist/assets/ directory exists`);
  checksPassed++;
} else {
  failCritical('dist/assets/ directory missing. Build may have failed.');
}

console.log('');

// ============================================================================
// 2. CRITICAL PAGES CHECK
// ============================================================================
console.log('2. Checking critical pages...');
console.log('');

const criticalPages = [
  'index.html',
  'contact/index.html',
  'projects/index.html',
  'architecture/index.html',
  'how-i-work/index.html',
  'work-with-me/index.html',
  'now/index.html',
];

for (const page of criticalPages) {
  const pagePath = path.join(distDir, page);
  if (fileExists(pagePath)) {
    checkStatus(`Page exists: ${page}`, 0);
  } else {
    failCritical(`Critical page missing: ${page}`);
  }
}

console.log('');

// ============================================================================
// 3. PROJECT CASE STUDIES CHECK
// ============================================================================
console.log('3. Checking project case study pages...');
console.log('');

const projectPages = [
  'projects/stokvel/index.html',
  'projects/superfib/index.html',
];

for (const page of projectPages) {
  const pagePath = path.join(distDir, page);
  if (fileExists(pagePath)) {
    checkStatus(`Project page exists: ${page}`, 0);
  } else {
    failCritical(`Project page missing: ${page}`);
  }
}

console.log('');

// ============================================================================
// 4. HTML CONTENT VALIDITY CHECK
// ============================================================================
console.log('4. Checking HTML content validity...');
console.log('');

for (const page of criticalPages) {
  const pagePath = path.join(distDir, page);
  if (fileExists(pagePath)) {
    const fileSize = getFileSize(pagePath);
    if (fileSize > 100) {
      checkStatus(`HTML not empty: ${page} (${fileSize} bytes)`, 0);
    } else {
      failCritical(
        `HTML file too small (likely empty or generated incorrectly): ${page}`
      );
    }
  }
}

console.log('');

// ============================================================================
// 5. HTML STRUCTURE SPOT CHECK
// ============================================================================
console.log('5. Checking HTML structure (spot check)...');
console.log('');

const indexPath = path.join(distDir, 'index.html');
if (fileExists(indexPath)) {
  const indexContent = readFile(indexPath);

  if (indexContent.includes('<html') && indexContent.includes('</html>')) {
    checkStatus('HTML structure valid (opening/closing tags): index.html', 0);
  } else {
    failCritical('index.html missing HTML tags');
  }

  if (indexContent.includes('<head') && indexContent.includes('<body')) {
    checkStatus('HTML contains head and body: index.html', 0);
  } else {
    failCritical('index.html missing head or body tags');
  }
} else {
  failCritical('index.html not found');
}

console.log('');

// ============================================================================
// 6. BROKEN SYMBOLIC LINK CHECK
// ============================================================================
console.log('6. Checking for broken symbolic links...');
console.log('');

function findBrokenSymlinks(dir) {
  let brokenCount = 0;
  try {
    const files = fs.readdirSync(dir, { withFileTypes: true });
    for (const file of files) {
      const fullPath = path.join(dir, file.name);
      if (file.isSymbolicLink()) {
        try {
          fs.statSync(fullPath);
        } catch {
          brokenCount++;
        }
      } else if (file.isDirectory()) {
        brokenCount += findBrokenSymlinks(fullPath);
      }
    }
  } catch {
    // Directory doesn't exist or can't be read
  }
  return brokenCount;
}

const brokenLinks = findBrokenSymlinks(distDir);
if (brokenLinks === 0) {
  checkStatus('No broken symbolic links', 0);
} else {
  warn(`${brokenLinks} broken symbolic link(s) found`);
  checksFailed++;
}

console.log('');

// ============================================================================
// 7. DEPLOYMENT CONFIGURATION CHECK
// ============================================================================
console.log('7. Checking deployment configuration...');
console.log('');

const wranglerConfig = path.join(projectRoot, 'wrangler.jsonc');
if (fileExists(wranglerConfig)) {
  const configContent = readFile(wranglerConfig);
  if (
    configContent.includes('name') ||
    configContent.includes('main') ||
    configContent.includes('build')
  ) {
    checkStatus('wrangler.jsonc exists and contains expected fields', 0);
  } else {
    warn('wrangler.jsonc exists but may be misconfigured');
    checksFailed++;
  }
} else {
  failCritical('wrangler.jsonc not found. Deployment will fail.');
}

console.log('');

// ============================================================================
// SUMMARY
// ============================================================================
console.log('==========================================');
console.log('Smoke Test Summary');
console.log('==========================================');
console.log(
  `Checks passed: ${colors.green}${checksPassed}${colors.reset}`
);
console.log(
  `Checks failed: ${colors.red}${checksFailed}${colors.reset}`
);
console.log('');

if (checksFailed === 0) {
  console.log(
    `${colors.green}✓ All smoke tests passed! Pipeline is healthy.${colors.reset}`
  );
  process.exit(0);
} else {
  console.log(
    `${colors.red}✗ Smoke tests failed. Fix the issues above and try again.${colors.reset}`
  );
  process.exit(1);
}

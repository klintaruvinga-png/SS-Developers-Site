#!/bin/bash

# Smoke Test for SS Developers Pipeline
# Validates build integrity, critical pages, and deployment readiness
# Exit code 0 = all checks passed; non-zero = failure

set -e  # Exit on first error

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
DIST_DIR="$PROJECT_ROOT/dist"

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Counters
CHECKS_PASSED=0
CHECKS_FAILED=0

# Helper function to print status
check_status() {
  local check_name=$1
  local exit_code=$2

  if [ $exit_code -eq 0 ]; then
    echo -e "${GREEN}✓${NC} $check_name"
    ((CHECKS_PASSED++))
  else
    echo -e "${RED}✗${NC} $check_name"
    ((CHECKS_FAILED++))
  fi
}

# Helper function for critical failures
fail_critical() {
  echo -e "${RED}✗ CRITICAL: $1${NC}"
  ((CHECKS_FAILED++))
}

# Helper function for warnings
warn() {
  echo -e "${YELLOW}⚠ WARNING: $1${NC}"
}

echo "=========================================="
echo "Running SS Developers Smoke Tests"
echo "=========================================="
echo ""

# ============================================================================
# 1. BUILD ARTIFACTS CHECK
# ============================================================================
echo "1. Checking build artifacts..."
echo ""

# Check if dist directory exists
if [ -d "$DIST_DIR" ]; then
  echo -e "${GREEN}✓${NC} dist/ directory exists"
  ((CHECKS_PASSED++))
else
  fail_critical "dist/ directory does not exist. Run 'npm run build' first."
  exit 1
fi

# Check if assets directory exists
if [ -d "$DIST_DIR/assets" ]; then
  echo -e "${GREEN}✓${NC} dist/assets/ directory exists"
  ((CHECKS_PASSED++))
else
  fail_critical "dist/assets/ directory missing. Build may have failed."
  ((CHECKS_FAILED++))
fi

echo ""

# ============================================================================
# 2. CRITICAL PAGES CHECK
# ============================================================================
echo "2. Checking critical pages..."
echo ""

CRITICAL_PAGES=(
  "index.html"
  "contact.html"
  "projects.html"
  "architecture.html"
  "how-i-work.html"
  "work-with-me.html"
  "now.html"
)

for page in "${CRITICAL_PAGES[@]}"; do
  PAGE_PATH="$DIST_DIR/$page"
  if [ -f "$PAGE_PATH" ]; then
    check_status "Page exists: $page" 0
  else
    fail_critical "Critical page missing: $page"
  fi
done

echo ""

# ============================================================================
# 3. PROJECT CASE STUDIES CHECK
# ============================================================================
echo "3. Checking project case study pages..."
echo ""

PROJECT_PAGES=(
  "projects/stokvel/index.html"
  "projects/superfib/index.html"
)

for page in "${PROJECT_PAGES[@]}"; do
  PAGE_PATH="$DIST_DIR/$page"
  if [ -f "$PAGE_PATH" ]; then
    check_status "Project page exists: $page" 0
  else
    fail_critical "Project page missing: $page"
  fi
done

echo ""

# ============================================================================
# 4. HTML CONTENT VALIDITY CHECK
# ============================================================================
echo "4. Checking HTML content validity..."
echo ""

# Check if critical HTML files are not empty
for page in "${CRITICAL_PAGES[@]}"; do
  PAGE_PATH="$DIST_DIR/$page"
  if [ -f "$PAGE_PATH" ]; then
    FILE_SIZE=$(stat -f%z "$PAGE_PATH" 2>/dev/null || stat -c%s "$PAGE_PATH" 2>/dev/null || echo "0")
    if [ "$FILE_SIZE" -gt 100 ]; then
      check_status "HTML not empty: $page ($FILE_SIZE bytes)" 0
    else
      fail_critical "HTML file too small (likely empty or generated incorrectly): $page"
    fi
  fi
done

echo ""

# ============================================================================
# 5. HTML STRUCTURE SPOT CHECK
# ============================================================================
echo "5. Checking HTML structure (spot check)..."
echo ""

# Sample check on index.html
INDEX_PATH="$DIST_DIR/index.html"
if [ -f "$INDEX_PATH" ]; then
  if grep -q "<html" "$INDEX_PATH" && grep -q "</html>" "$INDEX_PATH"; then
    check_status "HTML structure valid (opening/closing tags): index.html" 0
  else
    fail_critical "index.html missing HTML tags"
  fi

  if grep -q "<head" "$INDEX_PATH" && grep -q "<body" "$INDEX_PATH"; then
    check_status "HTML contains head and body: index.html" 0
  else
    fail_critical "index.html missing head or body tags"
  fi
else
  fail_critical "index.html not found"
fi

echo ""

# ============================================================================
# 6. SYMBOLIC LINK CHECK
# ============================================================================
echo "6. Checking for broken symbolic links..."
echo ""

if [ -d "$DIST_DIR" ]; then
  BROKEN_LINKS=$(find "$DIST_DIR" -type l ! -exec test -e {} \; -print 2>/dev/null | wc -l)
  if [ "$BROKEN_LINKS" -eq 0 ]; then
    check_status "No broken symbolic links" 0
  else
    warn "$BROKEN_LINKS broken symbolic link(s) found"
    ((CHECKS_FAILED++))
  fi
else
  warn "Cannot check symbolic links: dist/ not found"
fi

echo ""

# ============================================================================
# 7. DEPLOYMENT CONFIGURATION CHECK
# ============================================================================
echo "7. Checking deployment configuration..."
echo ""

WRANGLER_CONFIG="$PROJECT_ROOT/wrangler.jsonc"
if [ -f "$WRANGLER_CONFIG" ]; then
  # Basic JSONC validation (just check it's readable, not perfect JSON parsing)
  if grep -q "name\|main\|build" "$WRANGLER_CONFIG"; then
    check_status "wrangler.jsonc exists and contains expected fields" 0
  else
    warn "wrangler.jsonc exists but may be misconfigured"
    ((CHECKS_FAILED++))
  fi
else
  fail_critical "wrangler.jsonc not found. Deployment will fail."
fi

echo ""

# ============================================================================
# SUMMARY
# ============================================================================
echo "=========================================="
echo "Smoke Test Summary"
echo "=========================================="
echo -e "Checks passed: ${GREEN}$CHECKS_PASSED${NC}"
echo -e "Checks failed: ${RED}$CHECKS_FAILED${NC}"
echo ""

if [ $CHECKS_FAILED -eq 0 ]; then
  echo -e "${GREEN}✓ All smoke tests passed! Pipeline is healthy.${NC}"
  exit 0
else
  echo -e "${RED}✗ Smoke tests failed. Fix the issues above and try again.${NC}"
  exit 1
fi

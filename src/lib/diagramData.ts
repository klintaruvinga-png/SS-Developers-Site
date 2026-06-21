/**
 * Design tokens and topology definitions for hand‑drawn diagrams.
 *
 * This file follows the PRD Section 6 requirements:
 * – Hand‑drawn/sketch style (whiteboard‑feel linework)
 * – Structurally precise flow only (no calculation details)
 * – Supports SuperFIB and Stokvel Society diagrams.
 */

export interface DiagramStyle {
  stroke: string;
  strokeWidth: number;
  strokeDasharray?: string;
  fill?: string;
  opacity?: number;
  animated?: boolean;
}

export interface DesignTokens {
  colors: {
    diagram: {
      line: string;
      primary: string;
      secondary: string;
      accent: string;
      live: string;
      background: string;
      text: string;
      group: {
        pine: string;
        php: string;
        mt5: string;
        react: string;
      };
      stokvel: {
        member: string;
        ledger: string;
        payout: string;
      };
    };
  };
  spacing: {
    nodePadding: number;
    arrowOffset: number;
    groupGap: number;
  };
  animation: {
    flowDuration: number;
    pulseDuration: number;
    groupExpand: number;
  };
  breakpoints: {
    mobile: number;
    tablet: number;
    desktop: number;
  };
}

export const designTokens: DesignTokens = {
  colors: {
    diagram: {
      line: 'hsl(0, 0%, 20%)', // --ink
      primary: 'hsl(0, 0%, 10%)',
      secondary: 'hsl(0, 0%, 40%)', // --gray-mid
      accent: 'hsl(145, 50%, 45%)', // --accent (signal green)
      live: 'hsl(145, 70%, 35%)',
      background: 'hsl(0, 0%, 98%)', // --paper
      text: 'hsl(0, 0%, 15%)',
      group: {
        pine: 'hsl(210, 60%, 45%)', // TradingView blue
        php: 'hsl(220, 50%, 50%)', // WordPress blue
        mt5: 'hsl(145, 50%, 35%)', // MT5 green
        react: 'hsl(195, 70%, 50%)', // React blue
      },
      stokvel: {
        member: 'hsl(35, 60%, 55%)', // Warm orange
        ledger: 'hsl(280, 40%, 55%)', // Purple
        payout: 'hsl(340, 50%, 55%)', // Pink
      },
    },
  },
  spacing: {
    nodePadding: 12,
    arrowOffset: 8,
    groupGap: 16,
  },
  animation: {
    flowDuration: 2000,
    pulseDuration: 1500,
    groupExpand: 300,
  },
  breakpoints: {
    mobile: 640,
    tablet: 768,
    desktop: 1024,
  },
};

/** SuperFIB hub‑and‑spoke topology */
export interface SuperFIBMappings {
  pineToPhp: { from: string; to: string };
  phpToMt5: { from: string; to: string };
  mt5ToReact: { from: string; to: string };
}
export const superfibTopology: SuperFIBMappings = {
  pineToPhp: { from: 'node-pine', to: 'node-php' },
  phpToMt5: { from: 'node-php', to: 'node-mt5' },
  mt5ToReact: { from: 'node-mt5', to: 'node-react' },
};

/** Stokvel Society contribution flow */
export interface StokvelTopology {
  memberToLedger: { from: string; to: string };
  ledgerToPayout: { from: string; to: string };
}
export const stokvelTopology: StokvelTopology = {
  memberToLedger: { from: 'node-member', to: 'node-ledger' },
  ledgerToPayout: { from: 'node-ledger', to: 'node-payout' },
};

/** Escape special XML/SVG characters to prevent injection vulnerabilities */
function escapeSvg(value: string | number): string {
  const str = String(value);
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

/** Utility to generate a simple SVG node element */
export function createFlowNode(
  id: string,
  label: string,
  x: number,
  y: number,
  style?: Partial<DiagramStyle>
): string {
  const s = {
    stroke: designTokens.colors.diagram.line,
    strokeWidth: 1.5,
    fill: designTokens.colors.diagram.background,
    ...style,
  };
  return `
<g id="${escapeSvg(id)}" class="flow-node">
  <rect x="${escapeSvg(x)}" y="${escapeSvg(y)}" width="120" height="40" rx="2" ry="2"
        stroke="${escapeSvg(s.stroke)}" stroke-width="${escapeSvg(s.strokeWidth)}" fill="${escapeSvg(s.fill)}" />
  <text x="${escapeSvg(x + 60)}" y="${escapeSvg(y + 25)}" text-anchor="middle"
        font-family="monospace" font-size="12" fill="${escapeSvg(designTokens.colors.diagram.text)}">
    ${escapeSvg(label)}
  </text>
</g>`;
}

/** Utility to generate a simple SVG arrow element */
export function createFlowArrow(
  fromX: number, fromY: number,
  toX: number, toY: number,
  style?: Partial<DiagramStyle>
): string {
  const s = {
    stroke: designTokens.colors.diagram.line,
    strokeWidth: 1,
    ...style,
  };
  const angle = Math.atan2(toY - fromY, toX - fromX) * (180 / Math.PI);
  return `
<g class="flow-arrow">
  <path d="M ${escapeSvg(fromX)} ${escapeSvg(fromY)} L ${escapeSvg(toX)} ${escapeSvg(toY)}" stroke="${escapeSvg(s.stroke)}" stroke-width="${escapeSvg(s.strokeWidth)}" fill="none" />
  <polygon points="0,0 8,4 0,8" transform="translate(${escapeSvg(toX)}, ${escapeSvg(toY)}) rotate(${escapeSvg(angle)})" stroke="${escapeSvg(s.stroke)}" fill="${escapeSvg(s.stroke)}" />
</g>`;
}

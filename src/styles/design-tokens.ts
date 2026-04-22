/**
 * ⚠️  REFERENCE ONLY — This file documents the design system
 * but does NOT drive the UI directly.
 *
 * The live design system lives in src/app/globals.css
 * All Tailwind utilities pull from CSS variables defined there.
 *
 * When updating the design system, edit globals.css directly.
 * Keep this file in sync manually as a human-readable reference.
 *
 * Design Tokens — API Global Solutions
 *
 * Navy primary for executive authority and trust.
 * Green secondary for operational activity and forward motion.
 * Ink neutrals (navy-tinted) for all chrome and surface work.
 *
 * Typography: Mulish (UI/display) · Questrial (docs) · JetBrains Mono (data)
 * Style: Operational SaaS — confident, data-dense, calm, unmistakably navy-and-green.
 *
 * All status colors are WCAG AA 3:1 compliant against white.
 */

export const designTokens = {
  colors: {
    // ── Brand palette (from API brand guidelines) ──
    brand: {
      navy:      '#273B6E',
      green:     '#78BC43',
      gray:      '#7F7F7F',
      lightGray: '#D4D9E1',
    },

    // ── Navy ramp ──
    navy: {
      50:  '#EEF1F8',
      100: '#D9DFEE',
      200: '#B3BFDC',
      300: '#8592BE',
      400: '#556C9E',
      500: '#273B6E', // brand navy
      600: '#1F3160',
      700: '#18264B',
      800: '#121D3A',
      900: '#0B1428',
      DEFAULT: '#273B6E',
      foreground: '#FFFFFF',
    },

    // ── Green ramp ──
    green: {
      50:  '#F2FAEA',
      100: '#DCF1C4',
      200: '#BAE391',
      300: '#9CD668',
      400: '#8AC852',
      500: '#78BC43', // brand green
      600: '#61A331',
      700: '#4A8524',
      800: '#35641A',
      900: '#244611',
      DEFAULT: '#78BC43',
      foreground: '#0B1428',
    },

    // ── Ink neutrals (cool, navy-tinted) ──
    ink: {
      50:  '#F7F8FB',
      100: '#EEF0F5',
      200: '#D4D9E1', // brand light gray
      300: '#B6BECB',
      400: '#8C95A6',
      500: '#7F7F7F', // brand mid gray
      600: '#5B6472',
      700: '#3F4754',
      800: '#262D39',
      900: '#11151E',
    },

    // ── shadcn semantic aliases ──
    primary: {
      DEFAULT:    '#273B6E',
      foreground: '#FFFFFF',
    },
    secondary: {
      DEFAULT:    '#78BC43',
      foreground: '#0B1428',
    },
    accent: {
      DEFAULT:    '#78BC43',
      foreground: '#0B1428',
    },
    muted: {
      DEFAULT:    '#EEF0F5',
      foreground: '#5B6472',
    },

    semantic: {
      success: {
        bg:      '#E9F6EC',
        DEFAULT: '#2E8F3E',
        foreground: '#FFFFFF',
      },
      warning: {
        bg:      '#FDF3E0',
        DEFAULT: '#C47A0B',
        foreground: '#FFFFFF',
      },
      error: {
        bg:      '#FBECEB',
        DEFAULT: '#C6342C',
        foreground: '#FFFFFF',
      },
      info: {
        bg:      '#EEF1F8',
        DEFAULT: '#273B6E',
        foreground: '#FFFFFF',
      },
    },

    chart: {
      1: '#273B6E', // navy
      2: '#78BC43', // green
      3: '#C47A0B', // amber
      4: '#556C9E', // mid navy
      5: '#2E8F3E', // dark green
    },
  },

  fonts: {
    sans: {
      family: "'Mulish', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif",
      weights: { light: 300, regular: 400, medium: 500, semibold: 600, bold: 700, extrabold: 800 },
    },
    heading: {
      family: "'Mulish', ui-sans-serif, system-ui, sans-serif",
      weights: { semibold: 600, bold: 700, extrabold: 800 },
      letterSpacing: '-0.02em',
    },
    docs: {
      family: "'Questrial', ui-sans-serif, sans-serif",
      weights: { regular: 400 },
      note: 'Documents and presentations only — replaces Century Gothic',
    },
    mono: {
      family: "'JetBrains Mono', ui-monospace, 'SF Mono', Menlo, monospace",
      weights: { regular: 400, medium: 500 },
      note: 'Data values, PNRs, IDs, money, chart ticks',
    },
  },

  // Type scale — 1.2 minor-third ratio at 16px base
  typography: {
    xs:   { size: '12px', lineHeight: '1.5' },
    sm:   { size: '14px', lineHeight: '1.5' },
    base: { size: '16px', lineHeight: '1.5' },
    md:   { size: '18px', lineHeight: '1.5' },
    lg:   { size: '20px', lineHeight: '1.25' },
    xl:   { size: '24px', lineHeight: '1.25' },
    '2xl': { size: '30px', lineHeight: '1.1' },
    '3xl': { size: '38px', lineHeight: '1.1' },
    '4xl': { size: '48px', lineHeight: '1.1' },
    '5xl': { size: '60px', lineHeight: '1' },
    kpi:  { size: '48px', lineHeight: '1', letterSpacing: '-0.02em', fontFamily: 'Mulish', fontVariantNumeric: 'tabular-nums' },
  },

  // Spacing — 4px base grid
  spacing: {
    0:  '0',
    1:  '4px',
    2:  '8px',
    3:  '12px',
    4:  '16px',
    5:  '20px',
    6:  '24px',
    8:  '32px',
    10: '40px',
    12: '48px',
    16: '64px',
    20: '80px',
    24: '96px',
  },

  borderRadius: {
    xs:   '3px',   // tags, chips
    sm:   '6px',   // small chips
    md:   '10px',  // inputs, nav items
    lg:   '14px',  // cards, primary buttons
    xl:   '20px',  // hero surfaces
    '2xl': '28px',
    pill: '9999px', // badges, pill buttons
  },

  shadows: {
    xs:        '0 1px 2px 0 rgb(39 59 110 / 0.05)',
    sm:        '0 1px 2px 0 rgb(39 59 110 / 0.06), 0 1px 3px 0 rgb(39 59 110 / 0.05)',
    md:        '0 4px 10px -2px rgb(39 59 110 / 0.10), 0 2px 4px -2px rgb(39 59 110 / 0.06)',
    lg:        '0 12px 24px -6px rgb(39 59 110 / 0.14), 0 4px 8px -4px rgb(39 59 110 / 0.08)',
    xl:        '0 24px 48px -12px rgb(39 59 110 / 0.22)',
    card:      '0 1px 2px 0 rgb(39 59 110 / 0.06), 0 1px 3px 0 rgb(39 59 110 / 0.05)',
    cardHover: '0 4px 10px -2px rgb(39 59 110 / 0.10), 0 2px 4px -2px rgb(39 59 110 / 0.06)',
    ring:      '0 0 0 4px color-mix(in oklab, #273B6E 18%, transparent)',
    none:      'none',
    note: 'All shadows are navy-tinted (rgb 39 59 110). Never use generic black shadows.',
  },

  transitions: {
    fast:    '120ms cubic-bezier(0.2, 0.8, 0.2, 1)',
    DEFAULT: '180ms cubic-bezier(0.2, 0.8, 0.2, 1)',
    slow:    '280ms cubic-bezier(0.5, 0, 0.2, 1)',
  },

  breakpoints: {
    sm:  '640px',
    md:  '768px',
    lg:  '1024px',
    xl:  '1280px',
    '2xl': '1536px',
  },

  layout: {
    sidebar:    '232px',
    topbar:     '64px',
    maxContent: '1280px',
    gutter:     '28px',
    kpiGap:     '16px',
  },

  zIndex: {
    hide:     -1,
    base:     0,
    dropdown: 10,
    sticky:   20,
    overlay:  30,
    modal:    40,
    popover:  50,
    toast:    100,
    tooltip:  1000,
  },
} as const;

export type DesignTokens = typeof designTokens;

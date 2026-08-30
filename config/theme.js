/* ============================================================
   THEME SWITCH
   ------------------------------------------------------------
   Change ONE line — the value of ACTIVE below — then reload.
   That's it. Nothing else in the codebase needs touching.

       'paper'     Warm paper editorial   (currently live)
       'charcoal'  Deep charcoal luxe
       'swiss'     Swiss grid high-contrast
       'terminal'  The original green terminal build

   'paper' | 'charcoal' | 'swiss' all render the single-scroll
   editorial site (components/studio/) and differ only in tokens
   and typography.

   'terminal' is the original: it swaps back to the sidebar shell
   (components/layout/Layout.js) and loads the legacy stylesheet.
   ============================================================ */

export const ACTIVE = 'paper';

/* Metadata — used for <meta name="theme-color"> and the browser
   chrome, and handy if you ever want to build a live switcher UI. */
export const THEMES = {
  paper: {
    label: 'Warm Paper',
    blurb: 'Editorial. Cream paper, ink type, clay accent, big serif display.',
    color: '#f4f2ed',
    layout: 'studio',
  },
  charcoal: {
    label: 'Charcoal Luxe',
    blurb: 'Dark and quiet. Warm near-black, ivory type, sand accent.',
    color: '#0f0e0c',
    layout: 'studio',
  },
  swiss: {
    label: 'Swiss Grid',
    blurb: 'Loud and structural. Pure black on white, electric blue, grotesk caps.',
    color: '#ffffff',
    layout: 'studio',
  },
  terminal: {
    label: 'Terminal',
    blurb: 'The original. Sidebar shell, green-on-black, code rain.',
    color: '#0a0a0a',
    layout: 'legacy',
  },
};

export const current = () => THEMES[ACTIVE] || THEMES.paper;
export const isLegacy = () => current().layout === 'legacy';

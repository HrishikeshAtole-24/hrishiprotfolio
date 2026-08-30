/**
 * ============================================================
 *  SITE CONFIGURATION
 * ============================================================
 *  Change `activeTemplate` to switch the entire portfolio
 *  design. Restart/refresh the dev server to see it.
 *
 *  Available templates:
 *    'classic'   -> Template 1 - the original design (frozen)
 *    'monolith'  -> Template 2 - Swiss brutalist editorial
 *    'aurora'    -> Template 3 - light, airy, premium
 *    'atelier'   -> Template 4 - warm print-magazine
 *    'kinetic'   -> Template 5 - dark, motion-led, oversized
 * ============================================================
 */

export const siteConfig = {
  // >>> CHANGE THIS LINE TO SWITCH DESIGNS <<<
  activeTemplate: 'monolith',

  /**
   * Show a floating template switcher in the corner so you can
   * preview all 5 without editing this file. Set to false for
   * production.
   */
  showTemplateSwitcher: true,
};

/**
 * Template registry metadata. Each entry describes the design and
 * the webfonts it needs. Fonts are loaded only for the active
 * template, so adding designs costs nothing at runtime.
 */
export const templates = {
  classic: {
    key: 'classic',
    name: 'Classic',
    tagline: 'Original terminal-green build',
    fonts: null, // uses system fonts, exactly as before
  },
  monolith: {
    key: 'monolith',
    name: 'Monolith',
    tagline: 'Swiss brutalist editorial',
    fonts:
      'https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500&display=swap',
  },
  aurora: {
    key: 'aurora',
    name: 'Aurora',
    tagline: 'Light, airy, premium',
    fonts:
      'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap',
  },
  atelier: {
    key: 'atelier',
    name: 'Atelier',
    tagline: 'Warm print magazine',
    fonts:
      'https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..900;1,9..144,300..900&family=Inter:wght@400;500;600&display=swap',
  },
  kinetic: {
    key: 'kinetic',
    name: 'Kinetic',
    tagline: 'Dark, motion-led, oversized',
    fonts:
      'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap',
  },
};

export const getActiveTemplate = () =>
  templates[siteConfig.activeTemplate] || templates.classic;

export default siteConfig;

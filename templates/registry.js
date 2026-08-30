import dynamic from 'next/dynamic';

/**
 * Each template is code-split, so a visitor only downloads the
 * design that is actually rendered.
 */
export const templateComponents = {
  classic: dynamic(() => import('./classic'), { ssr: true }),
  monolith: dynamic(() => import('./monolith'), { ssr: true }),
  aurora: dynamic(() => import('./aurora'), { ssr: true }),
  atelier: dynamic(() => import('./atelier'), { ssr: true }),
  kinetic: dynamic(() => import('./kinetic'), { ssr: true }),
};

export const getTemplateComponent = (key) =>
  templateComponents[key] || templateComponents.classic;

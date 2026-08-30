/* Inline, currentColor-aware icons.
   Inline rather than <img> so they invert correctly inside the dark contact block. */

const S = ({ children, size = 20, stroke = 1.5, ...rest }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={stroke}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...rest}
  >
    {children}
  </svg>
);

export const ArrowUpRight = (p) => <S {...p}><path d="M7 17 17 7" /><path d="M8 7h9v9" /></S>;
export const ArrowDown = (p) => <S {...p}><path d="M12 5v14" /><path d="m5 12 7 7 7-7" /></S>;
export const Mail = (p) => <S {...p}><rect x="2.5" y="4.5" width="19" height="15" rx="2" /><path d="m3 6.5 9 6 9-6" /></S>;
export const Phone = (p) => <S {...p}><path d="M6.5 3h3l1.5 4-2 1.5a13 13 0 0 0 6.5 6.5l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A17.5 17.5 0 0 1 4.5 5.2 2 2 0 0 1 6.5 3Z" /></S>;
export const Pin = (p) => <S {...p}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="2.75" /></S>;
export const Download = (p) => <S {...p}><path d="M12 3v12" /><path d="m7 11 5 5 5-5" /><path d="M4 20h16" /></S>;
export const Menu = (p) => <S {...p}><path d="M3 7h18" /><path d="M3 16h18" /></S>;
export const Close = (p) => <S {...p}><path d="M6 6 18 18" /><path d="M18 6 6 18" /></S>;
export const Expand = (p) => <S {...p}><path d="M4 9V4h5" /><path d="M20 15v5h-5" /><path d="M4 4l6 6" /><path d="M20 20l-6-6" /></S>;

export const Github = (p) => (
  <S {...p} stroke="none" fill="currentColor">
    <path d="M12 1.8a10.2 10.2 0 0 0-3.23 19.88c.51.1.7-.22.7-.49l-.01-1.9c-2.84.62-3.44-1.2-3.44-1.2-.47-1.18-1.14-1.5-1.14-1.5-.93-.63.07-.62.07-.62 1.03.07 1.57 1.06 1.57 1.06.91 1.57 2.4 1.12 2.99.85.09-.66.36-1.12.65-1.37-2.27-.26-4.66-1.14-4.66-5.06 0-1.12.4-2.03 1.05-2.75-.1-.26-.45-1.3.1-2.71 0 0 .86-.28 2.81 1.05a9.7 9.7 0 0 1 5.12 0c1.95-1.33 2.81-1.05 2.81-1.05.55 1.41.2 2.45.1 2.71.65.72 1.05 1.63 1.05 2.75 0 3.93-2.4 4.8-4.68 5.05.37.32.7.94.7 1.9l-.01 2.82c0 .27.18.6.7.49A10.2 10.2 0 0 0 12 1.8Z" />
  </S>
);

export const Linkedin = (p) => (
  <S {...p} stroke="none" fill="currentColor">
    <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3 9.75h4v10.75H3V9.75Zm6.5 0h3.83v1.47h.05a4.2 4.2 0 0 1 3.78-2.07c4.04 0 4.79 2.66 4.79 6.12v5.23h-4v-4.64c0-1.1-.02-2.53-1.54-2.53-1.55 0-1.78 1.2-1.78 2.45v4.72h-4V9.75Z" />
  </S>
);

export const Upwork = (p) => (
  <S {...p} stroke="none" fill="currentColor">
    <path d="M18.1 7.3c-2.1 0-3.7 1.36-4.35 3.55-1-1.5-1.76-3.3-2.2-4.85H8.9v5.87a2.06 2.06 0 1 1-4.11 0V6h-2.6v5.87a4.68 4.68 0 0 0 9.35.15c.4.79.88 1.6 1.47 2.32l-1.25 5.87h2.67l.9-4.25c.79.5 1.7.79 2.77.79A4.85 4.85 0 0 0 23 11.9a4.85 4.85 0 0 0-4.9-4.6Zm0 7.1c-.82 0-1.6-.35-2.3-.92l.21-.83v-.02c.15-.88.62-2.36 2.1-2.36 1.1 0 2 .9 2 2.06a2.05 2.05 0 0 1-2.01 2.07Z" />
  </S>
);

export const Leetcode = (p) => (
  <S {...p}><path d="M13.8 3.5 8.2 9.1a4 4 0 0 0 0 5.7l3.6 3.6a4 4 0 0 0 5.7 0l1.4-1.4" /><path d="M10 12h9" /></S>
);

export const socialIcon = (name) => {
  const map = { github: Github, linkedin: Linkedin, upwork: Upwork, leetcode: Leetcode };
  return map[name] || ArrowUpRight;
};

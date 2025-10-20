import React from 'react';

const SvgIcon = ({ name, className = '', size = 24, color = 'currentColor' }) => {
  const iconMap = {
    // Navigation Icons
    'home': 'house-solid-full.svg',
    'code': 'code-solid-full.svg',
    'user-graduate': 'user-graduate-solid-full.svg',
    'graduation-cap': 'graduation-cap-solid-full.svg',
    'cogs': 'gears-solid-full.svg',
    'gears': 'gears-solid-full.svg',
    'folder-open': 'folder-open-solid-full.svg',
    'briefcase': 'briefcase-solid-full.svg',
    'envelope': 'envelope-solid-full.svg',
    'phone': 'phone-solid-full.svg',
    'location-dot': 'location-dot-solid-full.svg',
    'city': 'city-solid-full.svg',
    'eye': 'eye-solid-full.svg',
    'heart': 'heart-solid-full.svg',
    
    // Action Icons
    'handshake': 'handshake-solid-full.svg',
    'download': 'download-solid-full.svg',
    'paper-plane': 'flying-paper-plane-svgrepo-com.svg',
    
    // Technology Icons
    'javascript': 'square-js-brands-solid-full.svg',
    'react': 'react-brands-solid-full.svg',
    'nodejs': 'node-brands-solid-full.svg',
    'node': 'node-brands-solid-full.svg',
    'database': 'database-solid-full.svg',
    'mongodb': 'MongoDB.svg',
    'git': 'git.svg',
    'github': 'github.svg',
    'jira': 'jira.svg',
    'postman': 'postman.svg',
    'supabase': 'supabase.svg',
    'nextjs': 'nextdotjs.svg',
    'tailwind': 'tailwindcss.svg',
    'vercel': 'vercel.svg',
    'render': 'render.svg',
    'sonarqube': 'sonarqubeserver.svg',
    'githubcopilot': 'githubcopilot.svg',
    'docker': 'docker-brands-solid-full.svg',
    'aws': 'AWS.svg',
    'figma': 'figma-brands-solid-full.svg',
    'linkedin': 'linkedin-in-brands-solid-full.svg',
    'upwork': 'upwork-brands-solid-full.svg',
    'leetcode': 'leetcode.svg',
    
    // Menu Icons
    'ellipsis-vertical': 'ellipsis-vertical-solid-full.svg',
    'bars': 'bars-solid-full.svg'
  };

  const iconFile = iconMap[name];
  
  if (!iconFile) {
    console.warn(`SVG icon "${name}" not found`);
    return null;
  }

  return (
    <img 
      src={`/${iconFile}`}
      alt={name}
      className={`svg-icon ${className}`}
      style={{
        width: size,
        height: size,
        filter: color !== 'currentColor' ? `brightness(0) saturate(100%) invert(55%) sepia(85%) saturate(380%) hue-rotate(95deg) brightness(96%) contrast(89%)` : undefined
      }}
    />
  );
};

export default SvgIcon;
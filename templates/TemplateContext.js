import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { siteConfig, templates } from '../config/site.config';

const TemplateContext = createContext({
  activeKey: siteConfig.activeTemplate,
  setActiveKey: () => {},
});

const STORAGE_KEY = 'portfolio:template';

export function TemplateProvider({ children }) {
  // Always start from the config value so server and first client
  // render agree. The stored preview override is applied after mount.
  const [activeKey, setActiveKey] = useState(siteConfig.activeTemplate);

  useEffect(() => {
    if (!siteConfig.showTemplateSwitcher) return;
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved && templates[saved]) setActiveKey(saved);
    } catch {
      /* storage unavailable - fall back to the config value */
    }
  }, []);

  // Drive `data-template` on <html>. Template stylesheets key off this.
  useEffect(() => {
    document.documentElement.setAttribute('data-template', activeKey);
  }, [activeKey]);

  const value = useMemo(
    () => ({
      activeKey,
      setActiveKey: (key) => {
        if (!templates[key]) return;
        setActiveKey(key);
        try {
          window.localStorage.setItem(STORAGE_KEY, key);
        } catch {
          /* preview preference simply won't persist */
        }
      },
    }),
    [activeKey]
  );

  return (
    <TemplateContext.Provider value={value}>{children}</TemplateContext.Provider>
  );
}

export const useTemplate = () => useContext(TemplateContext);

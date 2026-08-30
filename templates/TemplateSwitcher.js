import { useEffect, useRef, useState } from 'react';
import { templates } from '../config/site.config';
import { useTemplate } from './TemplateContext';
import styles from './TemplateSwitcher.module.css';

/** Preview swatch per template - mirrors each design's real palette. */
const SWATCHES = {
  classic: 'linear-gradient(135deg, #1a1a1a 0%, #1a1a1a 50%, #2ecc71 50%)',
  monolith: 'linear-gradient(135deg, #f2f0ed 0%, #f2f0ed 50%, #0a0a0a 50%)',
  aurora: 'linear-gradient(135deg, #eef1ff 0%, #c7d2fe 50%, #6366f1 100%)',
  atelier: 'linear-gradient(135deg, #f3ece1 0%, #f3ece1 50%, #b4593b 50%)',
  kinetic: 'linear-gradient(135deg, #0c0c0d 0%, #0c0c0d 50%, #d4f34a 50%)',
};

export default function TemplateSwitcher() {
  const { activeKey, setActiveKey } = useTemplate();
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  const list = Object.values(templates);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false);
    };
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  const current = templates[activeKey] || templates.classic;

  return (
    <div className={styles.root} ref={rootRef}>
      {open && (
        <div className={styles.panel} role="listbox" aria-label="Design template">
          <div className={styles.label}>Design template</div>
          {list.map((t, i) => (
            <button
              key={t.key}
              type="button"
              role="option"
              aria-selected={t.key === activeKey}
              data-active={t.key === activeKey}
              className={styles.item}
              onClick={() => {
                setActiveKey(t.key);
                setOpen(false);
              }}
            >
              <span
                className={styles.swatch}
                style={{ background: SWATCHES[t.key] }}
                aria-hidden="true"
              />
              <span>
                <span className={styles.itemName}>{t.name}</span>
                <span className={styles.itemTag}>{t.tagline}</span>
              </span>
              <span className={styles.num}>0{i + 1}</span>
            </button>
          ))}
        </div>
      )}

      <button
        type="button"
        className={styles.toggle}
        aria-expanded={open}
        aria-haspopup="listbox"
        onClick={() => setOpen((v) => !v)}
      >
        <span className={styles.dot} aria-hidden="true" />
        {current.name}
      </button>
    </div>
  );
}

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, Close, ArrowUpRight } from './Icons';

const SECTIONS = [
  { id: 'work', label: 'Work', num: '01' },
  { id: 'capabilities', label: 'Capabilities', num: '02' },
  { id: 'background', label: 'Background', num: '03' },
  { id: 'services', label: 'Services', num: '04' },
];

const Nav = ({ name }) => {
  const [stuck, setStuck] = useState(false);
  const [active, setActive] = useState('');
  const [sheet, setSheet] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Scroll-spy: the section occupying the upper third of the viewport wins.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-25% 0px -65% 0px' }
    );
    [...SECTIONS, { id: 'contact' }].forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = sheet ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [sheet]);

  const initials = name.split(' ').map((w) => w[0]).join('');

  return (
    <>
      <header className={`nav ${stuck ? 'stuck' : ''}`}>
        <div className="shell nav-inner">
          <a href="#top" className="wordmark" aria-label={name}>
            {initials}<span className="dot" />
          </a>

          <nav className="nav-links">
            {SECTIONS.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={`nav-link ${active === s.id ? 'active' : ''}`}
              >
                {s.label}
              </a>
            ))}
            <a href="#contact" className="btn btn-solid nav-cta">
              Get in touch <ArrowUpRight size={15} />
            </a>
          </nav>

          <button className="nav-burger" onClick={() => setSheet(true)} aria-label="Open menu">
            <Menu size={18} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {sheet && (
          <motion.div
            className="sheet"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.32, ease: [0.22, 0.61, 0.36, 1] }}
          >
            <div className="sheet-head">
              <span className="wordmark">{initials}<span className="dot" /></span>
              <button className="nav-burger" onClick={() => setSheet(false)} aria-label="Close menu">
                <Close size={18} />
              </button>
            </div>

            <nav className="sheet-nav">
              {[...SECTIONS, { id: 'contact', label: 'Contact', num: '05' }].map((s) => (
                <a key={s.id} href={`#${s.id}`} onClick={() => setSheet(false)}>
                  <span>{s.num}</span>{s.label}
                </a>
              ))}
            </nav>

            <div className="sheet-foot meta">
              <span>Mumbai, India</span>
              <span>Available for work</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;

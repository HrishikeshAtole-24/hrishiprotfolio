import { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Close, Expand } from './Icons';
import Reveal from './Reveal';

/* Cursor-following live preview. Desktop only — on touch it is noise. */
const Peek = ({ project, pos }) => (
  <motion.div
    className="work-peek"
    initial={{ opacity: 0, scale: 0.94 }}
    animate={{ opacity: 1, scale: 1, x: pos.x + 26, y: pos.y - 105 }}
    exit={{ opacity: 0, scale: 0.94 }}
    transition={{
      opacity: { duration: 0.22 },
      scale: { duration: 0.28 },
      x: { type: 'tween', duration: 0.28, ease: [0.22, 0.61, 0.36, 1] },
      y: { type: 'tween', duration: 0.28, ease: [0.22, 0.61, 0.36, 1] },
    }}
  >
    <iframe src={project.demoUrl} title={project.title} loading="lazy" sandbox="allow-scripts allow-same-origin" />
    <span className="scrim" />
  </motion.div>
);

const Work = ({ projects }) => {
  const [hovered, setHovered] = useState(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [open, setOpen] = useState(null);
  const frame = useRef(null);

  const track = (e) => {
    if (frame.current) return;
    const { clientX, clientY } = e;
    frame.current = requestAnimationFrame(() => {
      setPos({ x: clientX, y: clientY });
      frame.current = null;
    });
  };

  return (
    <section className="section" id="work" onMouseMove={track}>
      <div className="shell">
        <div className="eyebrow">
          <span className="num">01</span>
          <span>Selected Work</span>
          <span className="rule" />
          <span>{String(projects.length).padStart(2, '0')} Projects</span>
        </div>

        <div className="work-list">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <article
                className="work-row"
                onMouseEnter={() => setHovered(p)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => (p.demoUrl && p.demoUrl !== '#' ? setOpen(p) : null)}
              >
                <span className="work-idx">{String(i + 1).padStart(2, '0')}</span>

                <div>
                  <h3 className="work-name">{p.title}</h3>
                  {p.tags?.length > 0 && (
                    <div className="work-tags">
                      {p.tags.map((t) => <span className="work-tag" key={t}>{t}</span>)}
                    </div>
                  )}
                </div>

                <p className="work-blurb">{p.description}</p>

                <div className="work-end">
                  <span className="work-year">{p.year}</span>
                  <span className="work-arrow"><ArrowUpRight size={17} /></span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="work-foot">
          <p className="meta">Hover a row to preview · click to open</p>
          <a
            className="link-u"
            href="https://github.com/HrishikeshAtole-24"
            target="_blank"
            rel="noopener noreferrer"
          >
            All repositories on GitHub <ArrowUpRight size={15} />
          </a>
        </div>
      </div>

      <AnimatePresence>
        {hovered?.demoUrl && hovered.demoUrl !== '#' && <Peek project={hovered} pos={pos} />}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            className="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setOpen(null)}
          >
            <motion.div
              className="modal-card"
              initial={{ opacity: 0, y: 22, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.985 }}
              transition={{ duration: 0.38, ease: [0.22, 0.61, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <header className="modal-head">
                <div>
                  <h3>{open.title}</h3>
                  <p>{open.description}</p>
                </div>
                <div className="modal-acts">
                  {open.githubUrl && open.githubUrl !== '#' && (
                    <a className="btn btn-ghost" style={{ height: 40, paddingInline: 18, fontSize: 13 }}
                       href={open.githubUrl} target="_blank" rel="noopener noreferrer">
                      Source
                    </a>
                  )}
                  <a className="icon-btn" href={open.demoUrl} target="_blank" rel="noopener noreferrer" title="Open in new tab">
                    <Expand size={16} />
                  </a>
                  <button className="icon-btn" onClick={() => setOpen(null)} aria-label="Close">
                    <Close size={17} />
                  </button>
                </div>
              </header>
              <div className="modal-body">
                <iframe
                  src={open.demoUrl}
                  title={open.title}
                  sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Work;

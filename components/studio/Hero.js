import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTypingAnimation } from '../../hooks/useTypingAnimation';
import { ArrowUpRight, Download } from './Icons';

const rise = {
  hidden: { opacity: 0, y: 26 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, delay: 0.08 * i, ease: [0.22, 0.61, 0.36, 1] },
  }),
};

const Hero = ({ profile, typedTexts, stats }) => {
  const typed = useTypingAnimation(typedTexts, 110);
  const [first, ...rest] = profile.name.split(' ');

  const downloadCV = () => {
    const a = document.createElement('a');
    a.href = '/hrishi_resume.pdf';
    a.download = 'Hrishikesh_Atole_Resume.pdf';
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  return (
    <section className="section hero" id="top">
      <div className="shell">
        <motion.div
          className="hero-top meta"
          variants={rise}
          initial="hidden"
          animate="show"
          custom={0}
        >
          <span>Portfolio — {new Date().getFullYear()}</span>
          <span>{profile.city}, {profile.location}</span>
        </motion.div>

        <div className="hero-grid">
          <div>
            <h1 className="display hero-title">
              <motion.span className="line" variants={rise} initial="hidden" animate="show" custom={1}>
                {first}
              </motion.span>
              <motion.span className="line" variants={rise} initial="hidden" animate="show" custom={2}>
                <em>{rest.join(' ')}</em>
              </motion.span>
            </h1>

            <motion.div className="hero-role" variants={rise} initial="hidden" animate="show" custom={3}>
              <span className="bar" />
              <span className="txt">
                {typed}
                <motion.span
                  className="caret"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1.1, repeat: Infinity }}
                >
                  _
                </motion.span>
              </span>
            </motion.div>

            <motion.p className="lede" variants={rise} initial="hidden" animate="show" custom={4}>
              I build payment infrastructure that moves real money — integrating a dozen
              global and domestic gateways, and the APIs, reconciliation and settlement
              flows behind them. Currently at {profile.company}.
            </motion.p>

            <motion.div className="hero-actions" variants={rise} initial="hidden" animate="show" custom={5}>
              <a href="#contact" className="btn btn-solid">
                Let&apos;s work together <ArrowUpRight size={16} />
              </a>
              <button className="btn btn-ghost" onClick={downloadCV}>
                <Download size={16} /> Resume
              </button>
            </motion.div>
          </div>

          <motion.div
            className="hero-portrait"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35, ease: [0.22, 0.61, 0.36, 1] }}
          >
            <figure>
              <Image
                src={profile.image}
                alt={profile.name}
                width={640}
                height={800}
                priority
              />
            </figure>
            <figcaption>
              <span>Fig. 01</span>
              <span>{profile.title}</span>
            </figcaption>
          </motion.div>
        </div>

        <motion.dl
          className="stats"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.55 }}
        >
          {stats.map((s) => (
            <div className="stat" key={s.label}>
              <dt>{s.label}</dt>
              <dd>{s.value}<sup>{s.suffix}</sup></dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
};

export default Hero;

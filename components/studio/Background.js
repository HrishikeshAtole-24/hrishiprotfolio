import { motion } from 'framer-motion';
import Reveal from './Reveal';

const Background = ({ experience, education, certifications, skills, languages }) => (
  <section className="section" id="background">
    <div className="shell">
      <div className="eyebrow">
        <span className="num">03</span>
        <span>Background</span>
        <span className="rule" />
        <span>Experience &amp; Education</span>
      </div>

      <div className="bg-grid">
        {/* Experience */}
        <div>
          <h2 className="bg-head">Experience</h2>
          {experience.map((job, i) => (
            <Reveal key={job.title + job.company} delay={i * 0.06} className="entry">
              <div className="entry-top">
                <h3>{job.title}</h3>
                <span className="yr">{job.period}</span>
              </div>
              <p className="org">{job.company}</p>
              <p>{job.description}</p>
              {job.achievements?.length > 0 && (
                <ul>
                  {job.achievements.map((a) => <li key={a}>{a}</li>)}
                </ul>
              )}
            </Reveal>
          ))}

          <Reveal delay={0.1}>
            <h2 className="bg-head" style={{ marginTop: 56 }}>Core Skills</h2>
            {skills.map((s, i) => (
              <div className="skill-row" key={s.name}>
                <span className="nm">{s.name}</span>
                <span className="pc">{s.level}%</span>
                <span className="skill-track">
                  <motion.span
                    className="skill-fill"
                    style={{ display: 'block' }}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: s.level / 100 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.1, delay: 0.1 + i * 0.09, ease: [0.22, 0.61, 0.36, 1] }}
                  />
                </span>
              </div>
            ))}
          </Reveal>
        </div>

        {/* Education */}
        <div>
          <h2 className="bg-head">Education</h2>
          {education.map((ed, i) => (
            <Reveal key={ed.title} delay={i * 0.06} className="entry">
              <div className="entry-top">
                <h3>{ed.title}</h3>
                <span className="yr">{ed.period}</span>
              </div>
              <p className="org">{ed.institution}</p>
              <p>{ed.description}</p>
              <div className="chips">
                {ed.cgpa && <span className="chip">CGPA {ed.cgpa}</span>}
                {ed.percentage && <span className="chip">Score {ed.percentage}</span>}
              </div>
            </Reveal>
          ))}

          <Reveal delay={0.1}>
            <h2 className="bg-head" style={{ marginTop: 56 }}>Certifications</h2>
            <div className="chips">
              {certifications.map((c) => <span className="chip" key={c}>{c}</span>)}
            </div>

            <h2 className="bg-head" style={{ marginTop: 56 }}>Languages</h2>
            {languages.map((l) => (
              <div className="entry-top" key={l.name} style={{ padding: '13px 0', borderBottom: '1px solid var(--rule-soft)', marginBottom: 0 }}>
                <span style={{ fontSize: 14 }}>{l.name}</span>
                <span className="yr">{l.level}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </div>
  </section>
);

export default Background;

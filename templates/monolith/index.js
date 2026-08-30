/**
 * TEMPLATE 2 - "MONOLITH"
 * A Swiss / brutalist editorial reading of the same content:
 * ink on paper, one accent, hairline rules, no radius, no shadow.
 * Work is presented as a numbered index rather than a card grid.
 */
import { portfolioData } from '../../data/portfolioData';
import {
  useReveal,
  useContactForm,
  useActiveSection,
  scrollToId,
  downloadResume,
} from '../shared';
import s from './monolith.module.css';

const SECTIONS = ['work', 'capabilities', 'cv', 'contact'];

/* Small wrapper that fades its children in on scroll. */
function Reveal({ children, className = '', ...rest }) {
  const [ref, shown] = useReveal();
  return (
    <div ref={ref} className={`${s.reveal} ${className}`} data-shown={shown} {...rest}>
      {children}
    </div>
  );
}

function Eyebrow({ num, children }) {
  return (
    <p className={s.eyebrow}>
      <span className={s.eyebrowNum}>{num}</span>
      <span>{children}</span>
    </p>
  );
}

export default function MonolithTemplate() {
  const {
    profile,
    typedTexts,
    portfolio,
    expertise,
    experience,
    education,
    tools,
    socialLinks,
    services,
  } = portfolioData;

  const active = useActiveSection(SECTIONS);
  const form = useContactForm();

  const capabilities = [...expertise.row1, ...expertise.row2];
  const marqueeItems = [...tools.map((t) => t.name), ...typedTexts];

  const [first, ...restName] = profile.name.split(' ');

  return (
    <div className={s.root}>
      {/* ---------------- nav ---------------- */}
      <header className={s.nav}>
        <a className={s.navMark} href="#top">
          <i aria-hidden="true">HA</i>
          {profile.name}
        </a>

        <nav className={s.navLinks}>
          {SECTIONS.map((id) => (
            <button
              key={id}
              type="button"
              className={s.navLink}
              onClick={() => scrollToId(id)}
              style={active === id ? { color: 'var(--ink)' } : undefined}
            >
              {id}
            </button>
          ))}
        </nav>

        <p className={s.navAvail}>
          <i aria-hidden="true" />
          Open to work
        </p>
      </header>

      <main id="top">
        {/* ---------------- hero ---------------- */}
        <section className={`${s.shell} ${s.hero}`}>
          <div className={s.heroTop}>
            <span>{profile.title}</span>
            <span>{profile.company}</span>
            <span>{profile.location}</span>
          </div>

          <h1 className={s.heroName}>
            {first}
            <br />
            <em>{restName.join(' ')}</em>
          </h1>

          <div className={s.heroMeta}>
            <div>
              <div className={s.heroRoles}>
                {typedTexts.map((t) => (
                  <span key={t} className={s.heroRole}>
                    {t}
                  </span>
                ))}
              </div>
              <div className={s.heroActions}>
                <button
                  type="button"
                  className={s.btn}
                  onClick={() => scrollToId('contact')}
                >
                  Start a project
                </button>
                <button
                  type="button"
                  className={`${s.btn} ${s.btnGhost}`}
                  onClick={downloadResume}
                >
                  Resume &darr;
                </button>
              </div>
            </div>

            <p className={s.heroBio}>{profile.bio}</p>
          </div>
        </section>

        {/* ---------------- marquee ---------------- */}
        <div className={s.marquee} aria-hidden="true">
          {[0, 1].map((dup) => (
            <div className={s.marqueeTrack} key={dup}>
              {marqueeItems.map((item, i) => (
                <span className={s.marqueeItem} key={`${dup}-${i}`}>
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>

        {/* ---------------- work ---------------- */}
        <section id="work" className={`${s.shell} ${s.section}`}>
          <Eyebrow num="01">Selected work</Eyebrow>

          <div className={s.sectionHead}>
            <h2 className={s.sectionTitle}>Things I have shipped</h2>
            <p className={s.sectionLede}>
              A short index of production work. Each entry opens the live
              deployment.
            </p>
          </div>

          <div className={s.workList}>
            {portfolio.map((project, i) => (
              <Reveal key={project.title}>
                <a
                  className={s.workRow}
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className={s.workNum}>
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  <span>
                    <span className={s.workTitle}>{project.title}</span>
                    <span className={s.workDesc}>{project.description}</span>
                  </span>

                  <span className={s.workSide}>
                    <span className={s.workTag}>{project.category}</span>
                    <span className={s.workArrow} aria-hidden="true">
                      &#8599;
                    </span>
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ---------------- capabilities ---------------- */}
        <section id="capabilities" className={`${s.shell} ${s.section}`}>
          <Eyebrow num="02">Capabilities</Eyebrow>

          <div className={s.sectionHead}>
            <h2 className={s.sectionTitle}>What I actually do</h2>
            <p className={s.sectionLede}>
              Day to day I build and maintain payment infrastructure - APIs,
              gateway integrations and the systems that reconcile them.
            </p>
          </div>

          <div className={s.capGrid}>
            {capabilities.map((cap, i) => (
              <div className={s.capCell} key={cap.title}>
                <span className={s.capNum}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className={s.capTitle}>{cap.title}</h3>
                <p className={s.capBody}>{cap.description}</p>
              </div>
            ))}
          </div>

          <Reveal>
            <div style={{ marginTop: 'var(--s6)' }}>
              <Eyebrow num="02.1">Stack</Eyebrow>
              <div className={s.stack}>
                {tools.map((tool) => (
                  <span className={s.stackItem} key={tool.name}>
                    {tool.name}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        {/* ---------------- services ---------------- */}
        <section className={`${s.shell} ${s.section}`}>
          <Eyebrow num="03">Services</Eyebrow>
          <div className={s.capGrid}>
            {services.map((service, i) => (
              <div className={s.capCell} key={service.title}>
                <span className={s.capNum}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className={s.capTitle}>{service.title}</h3>
                <p className={s.capBody}>{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ---------------- cv ---------------- */}
        <section id="cv" className={`${s.shell} ${s.section}`}>
          <Eyebrow num="04">Background</Eyebrow>

          <div className={s.cvGrid}>
            <div>
              <h3 className={s.sectionTitle} style={{ fontSize: '1.6rem' }}>
                Experience
              </h3>
              {experience.map((job) => (
                <Reveal key={job.title + job.company}>
                  <article className={s.cvItem}>
                    <p className={s.cvPeriod}>{job.period}</p>
                    <h4 className={s.cvTitle}>{job.title}</h4>
                    <p className={s.cvOrg}>{job.company}</p>
                    <p className={s.cvBody}>{job.description}</p>
                    <ul className={s.cvList}>
                      {job.achievements.map((a) => (
                        <li key={a}>{a}</li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              ))}
            </div>

            <div>
              <h3 className={s.sectionTitle} style={{ fontSize: '1.6rem' }}>
                Education
              </h3>
              {education.map((edu) => (
                <Reveal key={edu.title}>
                  <article className={s.cvItem}>
                    <p className={s.cvPeriod}>
                      {edu.period}
                      {edu.cgpa ? ` — CGPA ${edu.cgpa}` : ''}
                      {edu.percentage ? ` — ${edu.percentage}` : ''}
                    </p>
                    <h4 className={s.cvTitle}>{edu.title}</h4>
                    <p className={s.cvOrg}>{edu.institution}</p>
                    <p className={s.cvBody}>{edu.description}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- contact ---------------- */}
        <section id="contact" className={`${s.shell} ${s.section}`}>
          <Eyebrow num="05">Contact</Eyebrow>

          <div className={s.contactGrid}>
            <div>
              <h2 className={s.contactBig}>
                Let&rsquo;s build
                <br />
                something
              </h2>

              <div className={s.contactLinks}>
                <a className={s.contactLink} href={`mailto:${profile.email}`}>
                  <span>{profile.email}</span>
                  <span className={s.contactLinkMeta}>Email</span>
                </a>
                <a
                  className={s.contactLink}
                  href={`tel:${profile.phone.replace(/\s/g, '')}`}
                >
                  <span>{profile.phone}</span>
                  <span className={s.contactLinkMeta}>Phone</span>
                </a>
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    className={s.contactLink}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>{link.name}</span>
                    <span className={s.contactLinkMeta}>&#8599;</span>
                  </a>
                ))}
              </div>
            </div>

            <form className={s.form} onSubmit={form.onSubmit}>
              <div className={s.field}>
                <label className={s.fieldLabel} htmlFor="m-name">
                  Name
                </label>
                <input
                  id="m-name"
                  className={s.input}
                  name="name"
                  value={form.values.name}
                  onChange={form.onChange}
                  required
                />
              </div>

              <div className={s.field}>
                <label className={s.fieldLabel} htmlFor="m-email">
                  Email
                </label>
                <input
                  id="m-email"
                  className={s.input}
                  type="email"
                  name="email"
                  value={form.values.email}
                  onChange={form.onChange}
                  required
                />
              </div>

              <div className={s.field}>
                <label className={s.fieldLabel} htmlFor="m-subject">
                  Subject
                </label>
                <input
                  id="m-subject"
                  className={s.input}
                  name="subject"
                  value={form.values.subject}
                  onChange={form.onChange}
                  required
                />
              </div>

              <div className={s.field}>
                <label className={s.fieldLabel} htmlFor="m-message">
                  Message
                </label>
                <textarea
                  id="m-message"
                  className={s.textarea}
                  name="message"
                  value={form.values.message}
                  onChange={form.onChange}
                  required
                />
              </div>

              <button
                type="submit"
                className={s.btn}
                disabled={form.status === 'sending'}
              >
                {form.status === 'sending' ? 'Sending…' : 'Send message'}
              </button>

              {form.note && (
                <p
                  className={s.formNote}
                  data-state={form.status === 'ok' ? 'ok' : 'err'}
                  role="status"
                >
                  {form.note}
                </p>
              )}
            </form>
          </div>
        </section>

        {/* ---------------- footer ---------------- */}
        <footer className={`${s.shell} ${s.footer}`}>
          <span>
            &copy; {new Date().getFullYear()} {profile.name}
          </span>
          <span className={s.footerLinks}>
            {socialLinks.map((l) => (
              <a key={l.name} href={l.url} target="_blank" rel="noopener noreferrer">
                {l.name}
              </a>
            ))}
          </span>
          <span>{profile.city}, India</span>
        </footer>
      </main>
    </div>
  );
}

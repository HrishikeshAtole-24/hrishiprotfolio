/**
 * TEMPLATE 5 - "KINETIC"
 * Dark and motion-led. A full-height display lockup, an acid
 * ticker, and work presented as a horizontally scrolling,
 * snap-aligned gallery rather than a vertical grid.
 */
import { portfolioData } from '../../data/portfolioData';
import {
  useReveal,
  useContactForm,
  useActiveSection,
  scrollToId,
  downloadResume,
} from '../shared';
import s from './kinetic.module.css';

const SECTIONS = ['work', 'skills', 'story', 'contact'];

function Reveal({ children }) {
  const [ref, shown] = useReveal();
  return (
    <div ref={ref} className={s.reveal} data-shown={shown}>
      {children}
    </div>
  );
}

export default function KineticTemplate() {
  const {
    profile,
    portfolio,
    expertise,
    services,
    experience,
    education,
    tools,
    typedTexts,
    socialLinks,
  } = portfolioData;

  const active = useActiveSection(SECTIONS, 100);
  const form = useContactForm();

  const capabilities = [...services, ...expertise.row1, ...expertise.row2];
  const tickerItems = [...typedTexts, 'Available for work', profile.city];

  const [first, ...restName] = profile.name.split(' ');

  return (
    <div className={s.root}>
      {/* ---------------- nav ---------------- */}
      <header className={s.nav}>
        <a className={s.navMark} href="#top">
          <i aria-hidden="true" />
          {profile.name}
        </a>

        <nav className={s.navLinks}>
          {SECTIONS.map((id) => (
            <button
              key={id}
              type="button"
              className={s.navLink}
              data-active={active === id}
              onClick={() => scrollToId(id, 100)}
            >
              {id}
            </button>
          ))}
        </nav>

        <button
          type="button"
          className={s.navBtn}
          onClick={() => scrollToId('contact', 100)}
        >
          Let&rsquo;s talk
        </button>
      </header>

      <main id="top">
        {/* ---------------- hero ---------------- */}
        <section className={`${s.shell} ${s.hero}`}>
          <div className={s.heroLabel}>
            <span>
              Role <b>{profile.title}</b>
            </span>
            <span>
              At <b>{profile.company}</b>
            </span>
            <span>
              Based <b>{profile.city}, IN</b>
            </span>
          </div>

          <h1>
            <span className={s.heroLine}>{first}</span>
            <span className={`${s.heroLine} ${s.heroLineOutline}`}>
              {restName.join(' ')}
            </span>
          </h1>

          <div className={s.heroFoot}>
            <p className={s.heroBio}>{profile.bio}</p>
            <div className={s.heroActions}>
              <button
                type="button"
                className={s.btn}
                onClick={() => scrollToId('work', 100)}
              >
                See the work
              </button>
              <button
                type="button"
                className={`${s.btn} ${s.btnGhost}`}
                onClick={downloadResume}
              >
                Resume
              </button>
            </div>
          </div>
        </section>

        {/* ---------------- ticker ---------------- */}
        <div className={s.ticker} aria-hidden="true">
          {[0, 1].map((dup) => (
            <div className={s.tickerTrack} key={dup}>
              {tickerItems.map((item, i) => (
                <span className={s.tickerItem} key={`${dup}-${i}`}>
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>

        {/* ---------------- work (horizontal gallery) ---------------- */}
        <section id="work" className={s.section}>
          <div className={`${s.shell} ${s.sectionHead}`}>
            <div>
              <span className={s.sectionIndex}>[ 01 ] Selected work</span>
              <h2 className={s.sectionTitle}>Built &amp; shipped</h2>
            </div>
            <p className={s.sectionLede}>
              Live products, not mockups. Scroll sideways through the set.
            </p>
          </div>

          <div className={s.gallery}>
            {portfolio.map((project, i) => (
              <article className={s.slide} key={project.title}>
                <div className={s.slideArt}>
                  <span className={s.slideTag}>{project.category}</span>
                  <span className={s.slideNum} aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                <div className={s.slideBody}>
                  <h3 className={s.slideTitle}>{project.title}</h3>
                  <p className={s.slideText}>{project.description}</p>

                  <div className={s.slideLinks}>
                    <a
                      className={s.slideLink}
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live &#8599;
                    </a>
                    {project.githubUrl && project.githubUrl !== '#' && (
                      <a
                        className={`${s.slideLink} ${s.slideLinkMuted}`}
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className={`${s.shell} ${s.galleryHint}`}>
            Drag or scroll horizontally &rarr;
          </p>
        </section>

        {/* ---------------- skills ---------------- */}
        <section id="skills" className={`${s.shell} ${s.section}`}>
          <div className={s.sectionHead}>
            <div>
              <span className={s.sectionIndex}>[ 02 ] Capabilities</span>
              <h2 className={s.sectionTitle}>What I bring</h2>
            </div>
            <p className={s.sectionLede}>
              Full-stack engineering with a working specialism in payment
              infrastructure and third-party integrations.
            </p>
          </div>

          <div className={s.bigList}>
            {capabilities.map((cap, i) => (
              <Reveal key={cap.title}>
                <div className={s.bigRow}>
                  <span className={s.bigNum}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className={s.bigTitle}>{cap.title}</h3>
                    <p className={s.bigText}>{cap.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div style={{ marginTop: 'var(--s6)' }}>
            <p className={s.cvHead}>Stack</p>
            <div className={s.stack}>
              {tools.map((tool) => (
                <span className={s.stackItem} key={tool.name}>
                  {tool.name}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- story ---------------- */}
        <section id="story" className={`${s.shell} ${s.section}`}>
          <div className={s.sectionHead}>
            <div>
              <span className={s.sectionIndex}>[ 03 ] Background</span>
              <h2 className={s.sectionTitle}>The story</h2>
            </div>
          </div>

          <div className={s.cv}>
            <div>
              <p className={s.cvHead}>Experience</p>
              {experience.map((job) => (
                <Reveal key={job.title + job.company}>
                  <article className={s.cvItem}>
                    <p className={s.cvPeriod}>{job.period}</p>
                    <h3 className={s.cvTitle}>{job.title}</h3>
                    <p className={s.cvOrg}>{job.company}</p>
                    <p className={s.cvText}>{job.description}</p>
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
              <p className={s.cvHead}>Education</p>
              {education.map((edu) => (
                <Reveal key={edu.title}>
                  <article className={s.cvItem}>
                    <p className={s.cvPeriod}>
                      {edu.period}
                      {edu.cgpa ? ` / CGPA ${edu.cgpa}` : ''}
                      {edu.percentage ? ` / ${edu.percentage}` : ''}
                    </p>
                    <h3 className={s.cvTitle}>{edu.title}</h3>
                    <p className={s.cvOrg}>{edu.institution}</p>
                    <p className={s.cvText}>{edu.description}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- contact ---------------- */}
        <section id="contact" className={`${s.shell} ${s.section}`}>
          <div className={s.contact}>
            <div>
              <span className={s.sectionIndex}>[ 04 ] Contact</span>
              <h2 className={s.contactBig}>
                Got a<br />
                <em>project?</em>
              </h2>

              <div className={s.contactRows}>
                <a className={s.contactRow} href={`mailto:${profile.email}`}>
                  <span>{profile.email}</span>
                  <span className={s.contactKey}>Email</span>
                </a>
                <a
                  className={s.contactRow}
                  href={`tel:${profile.phone.replace(/\s/g, '')}`}
                >
                  <span>{profile.phone}</span>
                  <span className={s.contactKey}>Phone</span>
                </a>
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    className={s.contactRow}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>{link.name}</span>
                    <span className={s.contactKey}>&#8599;</span>
                  </a>
                ))}
              </div>
            </div>

            <form className={s.form} onSubmit={form.onSubmit}>
              <div className={s.field}>
                <label className={s.fieldLabel} htmlFor="k-name">
                  Name
                </label>
                <input
                  id="k-name"
                  className={s.input}
                  name="name"
                  value={form.values.name}
                  onChange={form.onChange}
                  required
                />
              </div>

              <div className={s.field}>
                <label className={s.fieldLabel} htmlFor="k-email">
                  Email
                </label>
                <input
                  id="k-email"
                  className={s.input}
                  type="email"
                  name="email"
                  value={form.values.email}
                  onChange={form.onChange}
                  required
                />
              </div>

              <div className={s.field}>
                <label className={s.fieldLabel} htmlFor="k-subject">
                  Subject
                </label>
                <input
                  id="k-subject"
                  className={s.input}
                  name="subject"
                  value={form.values.subject}
                  onChange={form.onChange}
                  required
                />
              </div>

              <div className={s.field}>
                <label className={s.fieldLabel} htmlFor="k-message">
                  Message
                </label>
                <textarea
                  id="k-message"
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
                {form.status === 'sending' ? 'Sending…' : 'Send it'}
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
          <span>Built in Next.js</span>
        </footer>
      </main>
    </div>
  );
}

/**
 * TEMPLATE 3 - "AURORA"
 * Light, airy and premium. Centred composition, soft gradient
 * ground, rounded surfaces and low-contrast depth. Work is shown
 * as cards; background reads as a vertical timeline.
 */
import { portfolioData } from '../../data/portfolioData';
import {
  useReveal,
  useContactForm,
  useActiveSection,
  scrollToId,
  downloadResume,
} from '../shared';
import s from './aurora.module.css';

const SECTIONS = ['work', 'services', 'journey', 'contact'];

function Reveal({ children, className = '' }) {
  const [ref, shown] = useReveal();
  return (
    <div ref={ref} className={`${s.reveal} ${className}`} data-shown={shown}>
      {children}
    </div>
  );
}

/** Two-letter monogram used on the project art plates. */
const initials = (title) =>
  title
    .split(' ')
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();

export default function AuroraTemplate() {
  const {
    profile,
    portfolio,
    services,
    expertise,
    experience,
    education,
    tools,
    socialLinks,
    skills,
  } = portfolioData;

  const active = useActiveSection(SECTIONS);
  const form = useContactForm();

  const capabilities = [...expertise.row1, ...expertise.row2];

  const stats = [
    { num: `${experience.length}+`, label: 'Years shipping production code' },
    { num: `${portfolio.length}`, label: 'Live projects deployed' },
    { num: '15+', label: 'Payment gateways integrated' },
    { num: `${tools.length}`, label: 'Tools in daily rotation' },
  ];

  return (
    <div className={s.root}>
      <div className={s.glow} aria-hidden="true" />

      {/* ---------------- nav ---------------- */}
      <header className={s.nav}>
        <a className={s.navMark} href="#top">
          {profile.name}
        </a>

        <nav className={s.navLinks}>
          {SECTIONS.map((id) => (
            <button
              key={id}
              type="button"
              className={s.navLink}
              data-active={active === id}
              onClick={() => scrollToId(id, 90)}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}
        </nav>

        <button
          type="button"
          className={s.navCta}
          onClick={() => scrollToId('contact', 90)}
        >
          Get in touch
        </button>
      </header>

      <main id="top">
        {/* ---------------- hero ---------------- */}
        <section className={`${s.shell} ${s.hero}`}>
          <span className={s.pill}>
            <span className={s.pillDot} aria-hidden="true" />
            Available for new work &middot; {profile.location}
          </span>

          <h1 className={s.heroTitle}>
            Software engineer building <em>reliable</em> payment systems
          </h1>

          <p className={s.heroLede}>{profile.bio}</p>

          <div className={s.heroActions}>
            <button
              type="button"
              className={s.btn}
              onClick={() => scrollToId('work', 90)}
            >
              View selected work
            </button>
            <button
              type="button"
              className={`${s.btn} ${s.btnGhost}`}
              onClick={downloadResume}
            >
              Download r&eacute;sum&eacute;
            </button>
          </div>

          <div className={s.stats}>
            {stats.map((stat) => (
              <div className={s.stat} key={stat.label}>
                <div className={s.statNum}>{stat.num}</div>
                <div className={s.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ---------------- work ---------------- */}
        <section id="work" className={`${s.shell} ${s.section}`}>
          <div className={s.sectionHead}>
            <span className={s.kicker}>Selected work</span>
            <h2 className={s.sectionTitle}>
              Projects, <em>shipped</em> and running
            </h2>
            <p className={s.sectionLede}>
              A small selection of things I have designed, built and deployed
              end to end.
            </p>
          </div>

          <div className={s.workGrid}>
            {portfolio.map((project) => (
              <Reveal key={project.title}>
                <article className={s.card}>
                  <div className={s.cardArt}>
                    <span className={s.cardInitials} aria-hidden="true">
                      {initials(project.title)}
                    </span>
                  </div>

                  <div className={s.cardBody}>
                    <span className={s.cardTag}>{project.category}</span>
                    <h3 className={s.cardTitle}>{project.title}</h3>
                    <p className={s.cardText}>{project.description}</p>

                    <div className={s.cardLinks}>
                      <a
                        className={s.cardLink}
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live site &rarr;
                      </a>
                      {project.githubUrl && project.githubUrl !== '#' && (
                        <a
                          className={`${s.cardLink} ${s.cardLinkMuted}`}
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Source
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ---------------- services / capabilities ---------------- */}
        <section id="services" className={`${s.shell} ${s.section}`}>
          <div className={s.sectionHead}>
            <span className={s.kicker}>What I do</span>
            <h2 className={s.sectionTitle}>
              From <em>interface</em> to infrastructure
            </h2>
            <p className={s.sectionLede}>
              I work across the whole stack, with a focus on payments,
              integrations and the reliability of what runs in production.
            </p>
          </div>

          <div className={s.featureGrid}>
            {services.map((service, i) => (
              <Reveal key={service.title}>
                <article className={s.feature}>
                  <div className={s.featureIcon} aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className={s.featureTitle}>{service.title}</h3>
                  <p className={s.featureText}>{service.description}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <div style={{ marginTop: 'var(--s7)' }}>
            <div className={s.sectionHead} style={{ marginBottom: 'var(--s5)' }}>
              <h3 className={s.sectionTitle} style={{ fontSize: '1.7rem' }}>
                Core expertise
              </h3>
            </div>

            <div className={s.featureGrid}>
              {capabilities.map((cap, i) => (
                <Reveal key={cap.title}>
                  <article className={s.feature}>
                    <div className={s.featureIcon} aria-hidden="true">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <h3 className={s.featureTitle}>{cap.title}</h3>
                    <p className={s.featureText}>{cap.description}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>

          <div style={{ marginTop: 'var(--s7)' }}>
            <div className={s.sectionHead} style={{ marginBottom: 'var(--s5)' }}>
              <h3 className={s.sectionTitle} style={{ fontSize: '1.7rem' }}>
                Everyday toolkit
              </h3>
            </div>
            <div className={s.chips}>
              {[...tools.map((t) => t.name), ...skills.map((k) => k.name)].map(
                (name) => (
                  <span className={s.chip} key={name}>
                    {name}
                  </span>
                )
              )}
            </div>
          </div>
        </section>

        {/* ---------------- journey ---------------- */}
        <section id="journey" className={`${s.shell} ${s.section}`}>
          <div className={s.sectionHead}>
            <span className={s.kicker}>Background</span>
            <h2 className={s.sectionTitle}>
              The <em>path</em> so far
            </h2>
          </div>

          <div className={s.timeline}>
            {experience.map((job) => (
              <Reveal key={job.title + job.company}>
                <article className={s.tlItem}>
                  <p className={s.tlPeriod}>{job.period}</p>
                  <h3 className={s.tlTitle}>{job.title}</h3>
                  <p className={s.tlOrg}>{job.company}</p>
                  <p className={s.tlText}>{job.description}</p>
                  <ul className={s.tlList}>
                    {job.achievements.map((a) => (
                      <li key={a}>{a}</li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}

            {education.map((edu) => (
              <Reveal key={edu.title}>
                <article className={s.tlItem}>
                  <p className={s.tlPeriod}>
                    {edu.period}
                    {edu.cgpa ? ` · CGPA ${edu.cgpa}` : ''}
                    {edu.percentage ? ` · ${edu.percentage}` : ''}
                  </p>
                  <h3 className={s.tlTitle}>{edu.title}</h3>
                  <p className={s.tlOrg}>{edu.institution}</p>
                  <p className={s.tlText}>{edu.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ---------------- contact ---------------- */}
        <section id="contact" className={`${s.shell} ${s.section}`}>
          <div className={s.contactCard}>
            <div>
              <h2 className={s.contactTitle}>
                Have something <em>in mind?</em>
              </h2>
              <p className={s.contactText}>
                Tell me about the project and I will get back to you within a
                day or two.
              </p>

              <div className={s.contactRows}>
                <a className={s.contactRow} href={`mailto:${profile.email}`}>
                  <span className={s.contactRowKey}>Email</span>
                  <span>{profile.email}</span>
                </a>
                <a
                  className={s.contactRow}
                  href={`tel:${profile.phone.replace(/\s/g, '')}`}
                >
                  <span className={s.contactRowKey}>Phone</span>
                  <span>{profile.phone}</span>
                </a>
                <div className={s.contactRow}>
                  <span className={s.contactRowKey}>Based</span>
                  <span>
                    {profile.city}, {profile.location}
                  </span>
                </div>
              </div>
            </div>

            <form className={s.form} onSubmit={form.onSubmit}>
              <div className={s.field}>
                <label className={s.fieldLabel} htmlFor="a-name">
                  Your name
                </label>
                <input
                  id="a-name"
                  className={s.input}
                  name="name"
                  value={form.values.name}
                  onChange={form.onChange}
                  required
                />
              </div>

              <div className={s.field}>
                <label className={s.fieldLabel} htmlFor="a-email">
                  Email address
                </label>
                <input
                  id="a-email"
                  className={s.input}
                  type="email"
                  name="email"
                  value={form.values.email}
                  onChange={form.onChange}
                  required
                />
              </div>

              <div className={s.field}>
                <label className={s.fieldLabel} htmlFor="a-subject">
                  Subject
                </label>
                <input
                  id="a-subject"
                  className={s.input}
                  name="subject"
                  value={form.values.subject}
                  onChange={form.onChange}
                  required
                />
              </div>

              <div className={s.field}>
                <label className={s.fieldLabel} htmlFor="a-message">
                  Message
                </label>
                <textarea
                  id="a-message"
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

          <footer className={s.footer}>
            <span>
              &copy; {new Date().getFullYear()} {profile.name}
            </span>
            <span className={s.footerLinks}>
              {socialLinks.map((l) => (
                <a
                  key={l.name}
                  href={l.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {l.name}
                </a>
              ))}
            </span>
          </footer>
        </section>
      </main>
    </div>
  );
}

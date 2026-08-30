/**
 * TEMPLATE 4 - "ATELIER"
 * The content set as a printed magazine: masthead, lead article
 * with a drop cap, alternating full-spread project plates, a
 * multi-column feature well, and a two-column CV ledger.
 */
import { portfolioData } from '../../data/portfolioData';
import {
  useReveal,
  useContactForm,
  useActiveSection,
  scrollToId,
  downloadResume,
} from '../shared';
import s from './atelier.module.css';

const SECTIONS = ['portfolio', 'practice', 'record', 'enquiries'];

function Reveal({ children }) {
  const [ref, shown] = useReveal();
  return (
    <div ref={ref} className={s.reveal} data-shown={shown}>
      {children}
    </div>
  );
}

export default function AtelierTemplate() {
  const {
    profile,
    portfolio,
    services,
    expertise,
    experience,
    education,
    certifications,
    tools,
    languages,
    socialLinks,
  } = portfolioData;

  const active = useActiveSection(SECTIONS, 24);
  const form = useContactForm();

  const practice = [...services, ...expertise.row1, ...expertise.row2];
  const issue = new Date().getFullYear();

  return (
    <div className={s.root}>
      {/* ---------------- masthead ---------------- */}
      <header className={`${s.shell} ${s.masthead}`}>
        <div className={s.mastTop}>
          <span>Issue {issue}</span>
          <span>{profile.location}</span>
          <span>{profile.company}</span>
        </div>

        <div className={s.mastMain}>
          <h1 className={s.mastTitle}>{profile.name}</h1>
          <nav className={s.mastNav}>
            {SECTIONS.map((id) => (
              <button
                key={id}
                type="button"
                className={s.mastLink}
                data-active={active === id}
                onClick={() => scrollToId(id, 24)}
              >
                {id}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main>
        {/* ---------------- lead article ---------------- */}
        <section className={`${s.shell} ${s.lead}`}>
          <div>
            <p className={s.leadKicker}>{profile.title} &middot; Portfolio</p>
            <h2 className={s.leadTitle}>
              Building the systems that move <em>money</em> quietly and
              correctly.
            </h2>
            <div className={s.leadRule} />
            <div className={s.leadActions}>
              <button
                type="button"
                className={s.btn}
                onClick={() => scrollToId('portfolio', 24)}
              >
                Read the work
              </button>
              <button
                type="button"
                className={`${s.btn} ${s.btnGhost}`}
                onClick={downloadResume}
              >
                Curriculum vitae
              </button>
            </div>
          </div>

          <div>
            <p className={s.standfirst}>{profile.bio}</p>

            <div className={s.leadMeta}>
              <div>
                <span>Role</span>
                <b>{profile.title}</b>
              </div>
              <div>
                <span>Company</span>
                <b>{profile.company}</b>
              </div>
              <div>
                <span>Based in</span>
                <b>{profile.city}, India</b>
              </div>
              <div>
                <span>Languages</span>
                <b>{languages.map((l) => l.name).join(', ')}</b>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- portfolio plates ---------------- */}
        <section id="portfolio" className={`${s.shell} ${s.section}`}>
          <div className={s.sectionHead}>
            <div>
              <span className={s.sectionNum}>No. 01</span>
              <h2 className={s.sectionTitle}>Selected projects</h2>
            </div>
            <p className={s.sectionLede}>
              Each of these is live and in use. Follow the links to see them
              running, or read the source.
            </p>
          </div>

          <div className={s.pieces}>
            {portfolio.map((project, i) => (
              <Reveal key={project.title}>
                <article className={s.piece}>
                  <div className={s.pieceArt}>
                    <span className={s.pieceCat}>{project.category}</span>
                    <span className={s.pieceNum} aria-hidden="true">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <div>
                    <h3 className={s.pieceTitle}>{project.title}</h3>
                    <p className={s.pieceText}>{project.description}</p>

                    <div className={s.pieceLinks}>
                      <a
                        className={s.pieceLink}
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit
                      </a>
                      {project.githubUrl && project.githubUrl !== '#' && (
                        <a
                          className={`${s.pieceLink} ${s.pieceLinkMuted}`}
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

        {/* ---------------- practice (feature well) ---------------- */}
        <section id="practice" className={`${s.shell} ${s.section}`}>
          <div className={s.sectionHead}>
            <div>
              <span className={s.sectionNum}>No. 02</span>
              <h2 className={s.sectionTitle}>The practice</h2>
            </div>
            <p className={s.sectionLede}>
              What I take on, and the ground I have covered enough times to be
              useful on day one.
            </p>
          </div>

          <div className={s.columns}>
            {practice.map((item, i) => (
              <article className={s.entry} key={item.title}>
                <span className={s.entryNum}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className={s.entryTitle}>{item.title}</h3>
                <p className={s.entryText}>{item.description}</p>
              </article>
            ))}
          </div>

          <div className={s.colophon} style={{ marginTop: 'var(--s5)' }}>
            {tools.map((tool) => (
              <span className={s.colophonItem} key={tool.name}>
                {tool.name}
              </span>
            ))}
          </div>
        </section>

        {/* ---------------- record ---------------- */}
        <section id="record" className={`${s.shell} ${s.section}`}>
          <div className={s.sectionHead}>
            <div>
              <span className={s.sectionNum}>No. 03</span>
              <h2 className={s.sectionTitle}>The record</h2>
            </div>
            <p className={s.sectionLede}>
              Where I have worked and what I studied, in reverse order.
            </p>
          </div>

          <div className={s.ledger}>
            <div>
              <h3 className={s.ledgerTitle}>Appointments</h3>
              {experience.map((job) => (
                <Reveal key={job.title + job.company}>
                  <article className={s.record}>
                    <div className={s.recordHead}>
                      <h4 className={s.recordName}>{job.title}</h4>
                      <span className={s.recordPeriod}>{job.period}</span>
                    </div>
                    <p className={s.recordOrg}>{job.company}</p>
                    <p className={s.recordText}>{job.description}</p>
                    <ul className={s.recordList}>
                      {job.achievements.map((a) => (
                        <li key={a}>{a}</li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              ))}

              {certifications.length > 0 && (
                <>
                  <h3 className={s.ledgerTitle} style={{ marginTop: 'var(--s6)' }}>
                    Certification
                  </h3>
                  {certifications.map((cert) => (
                    <article className={s.record} key={cert}>
                      <h4 className={s.recordName}>{cert}</h4>
                    </article>
                  ))}
                </>
              )}
            </div>

            <div>
              <h3 className={s.ledgerTitle}>Education</h3>
              {education.map((edu) => (
                <Reveal key={edu.title}>
                  <article className={s.record}>
                    <div className={s.recordHead}>
                      <h4 className={s.recordName}>{edu.title}</h4>
                      <span className={s.recordPeriod}>{edu.period}</span>
                    </div>
                    <p className={s.recordOrg}>
                      {edu.institution}
                      {edu.cgpa ? ` — CGPA ${edu.cgpa}` : ''}
                      {edu.percentage ? ` — ${edu.percentage}` : ''}
                    </p>
                    <p className={s.recordText}>{edu.description}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- enquiries ---------------- */}
        <section id="enquiries" className={`${s.shell} ${s.section}`}>
          <div className={s.contact}>
            <div>
              <span className={s.sectionNum}>No. 04</span>
              <h2 className={s.contactTitle}>
                Enquiries are <em>welcome</em>.
              </h2>

              <div className={s.contactList}>
                <a className={s.contactRow} href={`mailto:${profile.email}`}>
                  <span>{profile.email}</span>
                  <span className={s.contactKey}>Email</span>
                </a>
                <a
                  className={s.contactRow}
                  href={`tel:${profile.phone.replace(/\s/g, '')}`}
                >
                  <span>{profile.phone}</span>
                  <span className={s.contactKey}>Telephone</span>
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
                    <span className={s.contactKey}>Profile</span>
                  </a>
                ))}
              </div>
            </div>

            <form className={s.form} onSubmit={form.onSubmit}>
              <div className={s.field}>
                <label className={s.fieldLabel} htmlFor="t-name">
                  Name
                </label>
                <input
                  id="t-name"
                  className={s.input}
                  name="name"
                  value={form.values.name}
                  onChange={form.onChange}
                  required
                />
              </div>

              <div className={s.field}>
                <label className={s.fieldLabel} htmlFor="t-email">
                  Email
                </label>
                <input
                  id="t-email"
                  className={s.input}
                  type="email"
                  name="email"
                  value={form.values.email}
                  onChange={form.onChange}
                  required
                />
              </div>

              <div className={s.field}>
                <label className={s.fieldLabel} htmlFor="t-subject">
                  Subject
                </label>
                <input
                  id="t-subject"
                  className={s.input}
                  name="subject"
                  value={form.values.subject}
                  onChange={form.onChange}
                  required
                />
              </div>

              <div className={s.field}>
                <label className={s.fieldLabel} htmlFor="t-message">
                  Message
                </label>
                <textarea
                  id="t-message"
                  className={s.textarea}
                  name="message"
                  value={form.values.message}
                  onChange={form.onChange}
                  required
                />
              </div>

              <div>
                <button
                  type="submit"
                  className={s.btn}
                  disabled={form.status === 'sending'}
                >
                  {form.status === 'sending' ? 'Sending…' : 'Send enquiry'}
                </button>
              </div>

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
            &copy; {issue} {profile.name}
          </span>
          <span className={s.footerLinks}>
            {socialLinks.map((l) => (
              <a key={l.name} href={l.url} target="_blank" rel="noopener noreferrer">
                {l.name}
              </a>
            ))}
          </span>
          <span>Set in Fraunces &amp; Inter</span>
        </footer>
      </main>
    </div>
  );
}

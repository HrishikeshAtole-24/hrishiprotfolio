import { useState } from 'react';
import { ArrowUpRight, Mail, Phone, Pin, socialIcon } from './Icons';
import Reveal from './Reveal';

const Contact = ({ profile, socialLinks }) => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [busy, setBusy] = useState(false);
  const [note, setNote] = useState({ type: '', text: '' });
  const [label, setLabel] = useState('Send message');

  const change = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setBusy(true);
    setNote({ type: '', text: '' });
    setLabel('Sending…');

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (res.ok) {
        setNote({ type: 'ok', text: data.message });
        setLabel('Sent ✓');
        setForm({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setLabel('Send message'), 3000);
      } else {
        setNote({ type: 'err', text: data.message });
        setLabel('Try again');
        setTimeout(() => setLabel('Send message'), 2500);
      }
    } catch {
      setNote({ type: 'err', text: 'Network error. Please check your connection and try again.' });
      setLabel('Try again');
      setTimeout(() => setLabel('Send message'), 2500);
    } finally {
      setBusy(false);
    }
  };

  const rows = [
    { k: 'Email', v: profile.email, href: `mailto:${profile.email}`, Icon: Mail },
    { k: 'Phone', v: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}`, Icon: Phone },
    { k: 'Based in', v: `${profile.city}, ${profile.location}`, href: null, Icon: Pin },
  ];

  return (
    <section className="section contact" id="contact">
      <div className="shell">
        <div className="eyebrow">
          <span className="num">05</span>
          <span>Contact</span>
          <span className="rule" />
          <span>Available for work</span>
        </div>

        <div className="contact-grid">
          <Reveal>
            <h2 className="contact-title">
              Let&apos;s build<br /><em>something good.</em>
            </h2>
            <p className="contact-lede">
              Open to full-time roles, freelance builds and anything involving payments,
              APIs or a backend that has to stay up. I reply within a day.
            </p>

            <div className="contact-rows">
              {rows.map(({ k, v, href, Icon }) =>
                href ? (
                  <a key={k} href={href}>
                    <span className="k"><Icon size={14} style={{ display: 'inline', verticalAlign: -2, marginRight: 8 }} />{k}</span>
                    <span className="v">{v}</span>
                  </a>
                ) : (
                  <div className="row" key={k}>
                    <span className="k"><Icon size={14} style={{ display: 'inline', verticalAlign: -2, marginRight: 8 }} />{k}</span>
                    <span className="v">{v}</span>
                  </div>
                )
              )}
            </div>

            <div className="socials">
              {socialLinks.map((l) => {
                const Icon = socialIcon(l.iconName);
                return (
                  <a key={l.name} className="social" href={l.url} target="_blank" rel="noopener noreferrer" title={l.name} aria-label={l.name}>
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form className="form" onSubmit={submit}>
              <div className="form-row">
                <div className="field">
                  <label htmlFor="c-name">Name</label>
                  <input id="c-name" name="name" value={form.name} onChange={change} placeholder="Your name" required />
                </div>
                <div className="field">
                  <label htmlFor="c-email">Email</label>
                  <input id="c-email" name="email" type="email" value={form.email} onChange={change} placeholder="you@company.com" required />
                </div>
              </div>

              <div className="field">
                <label htmlFor="c-subject">Subject</label>
                <input id="c-subject" name="subject" value={form.subject} onChange={change} placeholder="What is this about?" required />
              </div>

              <div className="field">
                <label htmlFor="c-message">Message</label>
                <textarea id="c-message" name="message" rows={5} value={form.message} onChange={change} placeholder="Tell me about the project…" required />
              </div>

              {note.text && <p className={`note ${note.type}`}>{note.text}</p>}

              <div>
                <button type="submit" className="btn btn-invert" disabled={busy}>
                  {label} <ArrowUpRight size={16} />
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * Reveals an element once it scrolls into view. Returns a ref plus the
 * `data-shown` attribute each template's `.reveal` class keys off, so the
 * animation itself stays in CSS and remains template-specific.
 */
export function useReveal({ threshold = 0.15, rootMargin = '0px 0px -8% 0px' } = {}) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // No IntersectionObserver (or reduced motion): show immediately.
    if (
      typeof IntersectionObserver === 'undefined' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setShown(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [threshold, rootMargin]);

  return [ref, shown];
}

/** Smooth-scrolls to a section id, respecting a sticky header offset. */
export function scrollToId(id, offset = 64) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({
    top,
    behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ? 'auto'
      : 'smooth',
  });
}

/** Triggers the resume download. */
export function downloadResume() {
  const link = document.createElement('a');
  link.href = '/hrishi_resume.pdf';
  link.download = 'Hrishikesh_Atole_Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/**
 * Contact-form state machine shared by every template. Each design
 * renders its own markup and simply consumes this.
 */
export function useContactForm() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  // 'idle' | 'sending' | 'ok' | 'err'
  const [status, setStatus] = useState('idle');
  const [note, setNote] = useState('');

  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  }, []);

  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      if (status === 'sending') return;

      setStatus('sending');
      setNote('');

      try {
        const res = await fetch('/api/send-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(values),
        });
        const data = await res.json().catch(() => ({}));

        if (!res.ok) throw new Error(data.message || 'Something went wrong.');

        setStatus('ok');
        setNote('Message sent. I will get back to you shortly.');
        setValues({ name: '', email: '', subject: '', message: '' });
      } catch (err) {
        setStatus('err');
        setNote(err.message || 'Could not send. Please email me directly.');
      }
    },
    [status, values]
  );

  return { values, status, note, onChange, onSubmit };
}

/** Tracks which section id is currently in view, for nav highlighting. */
export function useActiveSection(ids, offset = 90) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const onScroll = () => {
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= offset) current = id;
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [ids, offset]);

  return active;
}

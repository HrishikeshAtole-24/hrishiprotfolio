import Reveal from './Reveal';

const Services = ({ services }) => (
  <section className="section" id="services">
    <div className="shell">
      <div className="eyebrow">
        <span className="num">04</span>
        <span>Services</span>
        <span className="rule" />
        <span>How I can help</span>
      </div>

      <div className="svc">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.07}>
            <div className="svc-row">
              <span className="n">{String(i + 1).padStart(2, '0')}</span>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Services;

import Reveal from './Reveal';

const Capabilities = ({ expertise }) => {
  const items = [...expertise.row1, ...expertise.row2];

  return (
    <section className="section" id="capabilities">
      <div className="shell">
        <div className="eyebrow">
          <span className="num">02</span>
          <span>Capabilities</span>
          <span className="rule" />
          <span>What I do</span>
        </div>

        <div className="cap-grid">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 0.07} className="cap">
              <span className="cap-num">{String(i + 1).padStart(2, '0')}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;

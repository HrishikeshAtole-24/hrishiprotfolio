import { portfolioData } from '../../data/portfolioData';
import Nav from './Nav';
import Hero from './Hero';
import Work from './Work';
import Capabilities from './Capabilities';
import Background from './Background';
import Services from './Services';
import Contact from './Contact';

const Marquee = ({ tools }) => {
  const strip = [...tools, ...tools];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {strip.map((t, i) => (
          <span className="marquee-item" key={`${t.name}-${i}`}>
            {t.name}<span className="sep">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

const Footer = ({ name }) => (
  <footer className="foot">
    <div className="shell foot-inner">
      <span>© {new Date().getFullYear()} {name}</span>
      <span className="devanagari">ऋषिकेश • رشیکیش</span>
      <span>Built in Mumbai</span>
    </div>
  </footer>
);

const Site = () => {
  const {
    profile, skills, tools, languages, socialLinks,
    typedTexts, expertise, education, experience,
    certifications, services, portfolio,
  } = portfolioData;

  const stats = [
    { label: 'Experience', value: '2', suffix: 'yrs' },
    { label: 'Gateways integrated', value: '12', suffix: '+' },
    { label: 'Projects shipped', value: String(portfolio.length), suffix: '' },
    { label: 'Response time', value: '24', suffix: 'h' },
  ];

  return (
    <>
      <Nav name={profile.name} />
      <main>
        <Hero profile={profile} typedTexts={typedTexts} stats={stats} />
        <Marquee tools={tools} />
        <Work projects={portfolio} />
        <Capabilities expertise={expertise} />
        <Background
          experience={experience}
          education={education}
          certifications={certifications}
          skills={skills}
          languages={languages}
        />
        <Services services={services} />
        <Contact profile={profile} socialLinks={socialLinks} />
      </main>
      <Footer name={profile.name} />
    </>
  );
};

export default Site;

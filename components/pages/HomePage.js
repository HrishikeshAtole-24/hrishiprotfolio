import { motion } from 'framer-motion';
import { useTypingAnimation } from '../../hooks/useTypingAnimation';
import { portfolioData } from '../../data/portfolioData';
import { fadeInUp, staggerContainer, floatingAnimation } from '../../utils/animations';
import CodeBackground from '../layout/CodeBackground';
import PageFooter from '../layout/PageFooter';
import SvgIcon from '../common/SvgIcon';

const HomePage = ({ onPageChange }) => {
  const { profile, typedTexts, testimonials } = portfolioData;
  const typedText = useTypingAnimation(typedTexts, 150);

  const floatingIcons = [
    { name: 'javascript', class: 'fab fa-js-square' },
    { name: 'react', class: 'fab fa-react' }, 
    { name: 'database', class: 'fab fa-python' },
    { name: 'nodejs', class: 'fab fa-node-js' },
    { name: 'mongodb', class: 'fas fa-database' }
  ];

  // Handle Hire Me button click - Navigate to contact page
  const handleHireMe = () => {
    if (onPageChange) {
      onPageChange('contact');
    }
  };

  // Handle Download CV button click
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/hrishi_resume.pdf';
    link.download = 'Hrishikesh_Atole_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.div 
      className="page home-page active"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
    >
      <CodeBackground />
      
      <div className="hero-content">
        <motion.div 
          className="hero-text"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <div className="typing-animation">
            <motion.h1 variants={fadeInUp}>
              Hello, <span className="highlight">World</span>
            </motion.h1>
            <motion.h2 className="typed-text" variants={fadeInUp}>
              {typedText}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                |
              </motion.span>
            </motion.h2>
          </div>
          <motion.p className="hero-description" variants={fadeInUp}>
            {profile.bio}
          </motion.p>
          <motion.div className="hero-buttons" variants={fadeInUp}>
            <motion.button 
              className="btn btn-primary"
              onClick={handleHireMe}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <SvgIcon name="handshake" size={16} />
              Hire Me
            </motion.button>
            <motion.button 
              className="btn btn-secondary"
              onClick={handleDownloadCV}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <SvgIcon name="download" size={16} />
              Download CV
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <motion.div 
            className="code-animation"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div 
              className="code-line"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <span className="code-keyword">function</span>
              <span className="code-function">createAwesome</span>
              <span className="code-bracket">()</span>
              <span className="code-bracket">{"{"}</span>
            </motion.div>
            <motion.div 
              className="code-line indent"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              <span className="code-keyword">return</span>
              <span className="code-string">"Amazing Software"</span>
              <span className="code-semicolon">;</span>
            </motion.div>
            <motion.div 
              className="code-line"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4, duration: 0.6 }}
            >
              <span className="code-bracket">{"}"}</span>
            </motion.div>
          </motion.div>

          <div className="floating-icons">
            {floatingIcons.map((icon, index) => (
              <motion.div
                key={index}
                className="floating-icon"
                initial={{ opacity: 0, scale: 0, rotate: 180 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ 
                  delay: 1.5 + index * 0.1,
                  duration: 0.6,
                  type: "spring",
                  stiffness: 200
                }}
                variants={floatingAnimation}
                style={{
                  position: 'absolute',
                  top: `${20 + index * 15}%`,
                  left: `${10 + (index % 2) * 80}%`,
                }}
              >
                <SvgIcon name={icon.name} size={30} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* What People Say Section */}
      <div className="testimonials-section">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          What People Say
        </motion.h2>
        <div className="scrolling-cards-container">
          <motion.div 
            className="scrolling-cards"
            animate={{ x: [0, -2200] }}
            transition={{ 
              duration: 25,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop"
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="scroll-card testimonial-card">
                <div className="testimonial-header">
                  <h4>{testimonial.name}</h4>
                  <p className="testimonial-role">{testimonial.role}</p>
                  <div className="rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="star">⭐</span>
                    ))}
                  </div>
                </div>
                <p className="testimonial-message">"{testimonial.message}"</p>
              </div>
            ))}
            {/* Duplicate testimonials for seamless loop */}
            {testimonials.map((testimonial, index) => (
              <div key={`duplicate-${index}`} className="scroll-card testimonial-card">
                <div className="testimonial-header">
                  <h4>{testimonial.name}</h4>
                  <p className="testimonial-role">{testimonial.role}</p>
                  <div className="rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="star">⭐</span>
                    ))}
                  </div>
                </div>
                <p className="testimonial-message">"{testimonial.message}"</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      
      <PageFooter />
    </motion.div>
  );
};

export default HomePage;
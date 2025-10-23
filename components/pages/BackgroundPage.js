import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '../../utils/animations';
import CodeBackground from '../layout/CodeBackground';
import PageFooter from '../layout/PageFooter';

const BackgroundPage = () => {
  const { education, experience, certifications } = portfolioData;

  return (
    <motion.div 
      className="page background-page"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
    >
      <CodeBackground />
      
      <div className="page-content">
        <motion.h1 
          className="page-title"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Background
        </motion.h1>
        
        <div className="background-grid">
          {/* Left Side - Education Section */}
          <motion.div 
            className="background-section education-section"
            variants={fadeInLeft}
            initial="initial"
            animate="animate"
          >
            <motion.h2 
              className="section-subtitle"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <i className="fas fa-graduation-cap"></i>
              Education
            </motion.h2>
            <div className="timeline">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  className="timeline-item"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.2 }}
                >
                  <motion.div 
                    className="timeline-dot"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.7 + index * 0.2, type: "spring" }}
                  />
                  <motion.div 
                    className="timeline-content"
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <h3>{item.title}</h3>
                    <h4><i>{item.institution}</i></h4>
                    <div className="timeline-meta">
                      <span className="timeline-date">{item.period}</span>
                      {item.cgpa && (
                        <span className="timeline-grade">CGPA: {item.cgpa}</span>
                      )}
                      {item.percentage && (
                        <span className="timeline-grade">Score: {item.percentage}</span>
                      )}
                    </div>
                    <p>{item.description}</p>
                  </motion.div>
                </motion.div>
              ))}
              
              {/* Certifications */}
              <motion.div
                className="timeline-item"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                <motion.div 
                  className="timeline-dot"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.1, type: "spring" }}
                />
                <motion.div 
                  className="timeline-content"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h3>Certifications</h3>
                  <h4>Various Platforms</h4>
                  <span className="timeline-date">2018 - Present</span>
                  <div className="certifications">
                    {certifications.map((cert, certIndex) => (
                      <motion.span 
                        key={certIndex}
                        className="cert-badge"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.3 + certIndex * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        {cert}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Experience Section */}
          <motion.div 
            className="background-section experience-section"
            variants={fadeInRight}
            initial="initial"
            animate="animate"
          >
            <motion.h2 
              className="section-subtitle"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <i className="fas fa-briefcase"></i>
              Professional Experience
            </motion.h2>
            <div className="timeline">
              {experience.map((item, index) => (
                <motion.div
                  key={index}
                  className="timeline-item"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.2 }}
                >
                  <motion.div 
                    className="timeline-dot"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.9 + index * 0.2, type: "spring" }}
                  />
                  <motion.div 
                    className="timeline-content"
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <h3>{item.title}</h3>
                    <h4><i>{item.company}</i></h4>
                    <div className="timeline-meta">
                      <span className="timeline-date">{item.period}</span>
                    </div>
                    <p>{item.description}</p>
                    {item.achievements && item.achievements.length > 0 && (
                      <motion.div 
                        className="exp-achievements"
                        variants={staggerContainer}
                        initial="initial"
                        animate="animate"
                      >
                        {item.achievements.map((achievement, achIndex) => (
                          <motion.li
                            key={achIndex}
                            variants={fadeInUp}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.1 + index * 0.2 + achIndex * 0.1 }}
                          >
                            {achievement}
                          </motion.li>
                        ))}
                      </motion.div>
                    )}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      
      <PageFooter />
    </motion.div>
  );
};

export default BackgroundPage;
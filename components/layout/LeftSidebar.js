import { motion } from 'framer-motion';
import Image from 'next/image';
import { portfolioData } from '../../data/portfolioData';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import SvgIcon from '../common/SvgIcon';

const LeftSidebar = ({ isOpen, onClose }) => {
  const { profile, skills, tools, languages, socialLinks } = portfolioData;

  // Debug: Log the props
  console.log('LeftSidebar isOpen:', isOpen);

  // Handle Download Resume button click
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/hrishi_resume.pdf';
    link.download = 'Hrishikesh_Atole_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={`left-sidebar ${isOpen ? 'mobile-active' : ''}`}>
      {/* Fixed Profile Header */}
      <div className="profile-header">
        <motion.div 
          className="profile-image"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Image 
            src={profile.image} 
            alt="Profile" 
            width={120} 
            height={120}
            className="profile-img"
          />
          <div className="profile-overlay"></div>
        </motion.div>
        <motion.h2 className="profile-name" {...fadeInUp}>
          {profile.name}
        </motion.h2>
        <motion.p className="profile-title" {...fadeInUp}>
          {profile.title}
        </motion.p>
        <motion.p className="profile-company" {...fadeInUp}>
          <i>{profile.company}</i>
        </motion.p>
      </div>

      {/* Scrollable Content */}
      <div className="profile-content">
        <motion.div 
          className="profile-details"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div className="detail-item" variants={fadeInUp}>
            <SvgIcon name="envelope" size={16} />
            <span>{profile.email}</span>
          </motion.div>
          <motion.div className="detail-item" variants={fadeInUp}>
            <SvgIcon name="phone" size={16} />
            <span>{profile.phone}</span>
          </motion.div>
          <motion.div className="detail-item" variants={fadeInUp}>
            <SvgIcon name="location-dot" size={16} />
            <span>{profile.location}</span>
          </motion.div>
          <motion.div className="detail-item" variants={fadeInUp}>
            <SvgIcon name="home" size={16} />
            <span>Residence: {profile.residence}</span>
          </motion.div>
          <motion.div className="detail-item" variants={fadeInUp}>
            <SvgIcon name="city" size={16} />
            <span>City: {profile.city}</span>
          </motion.div>
        </motion.div>

        <div className="section-divider"></div>

        <motion.div 
          className="skills-section"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <h3>Core Skills</h3>
          {skills.map((skill, index) => (
            <motion.div key={skill.name} className="skill-item" variants={fadeInUp}>
              <span className="skill-name">{skill.name}</span>
              <div className="skill-bar-container">
                <div className="skill-bar">
                  <motion.div 
                    className="skill-progress"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5, delay: index * 0.2 }}
                  ></motion.div>
                </div>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="section-divider"></div>

        <motion.div 
          className="tools-section"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <h3>Tools & Technologies</h3>
          <div className="tool-badges">
            {tools.map((tool, index) => (
              <motion.span 
                key={tool.name} 
                className="tool-badge"
                variants={fadeInUp}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {tool.iconName ? (
                  <SvgIcon name={tool.iconName} size={16} />
                ) : (
                  <i className={tool.icon}></i>
                )} {tool.name}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <div className="section-divider"></div>

        <motion.div 
          className="languages-section"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <h3>Languages</h3>
          {languages.map((language, index) => (
            <motion.div key={language.name} className="language-item" variants={fadeInUp}>
              <span className="lang-name">{language.name}</span>
              <span className="lang-level">{language.level}</span>
            </motion.div>
          ))}
        </motion.div>

        <div className="section-divider"></div>

        <motion.div 
          className="download-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <motion.button 
            className="btn-download"
            onClick={handleDownloadResume}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <SvgIcon name="download" size={16} />
            Download Resume
          </motion.button>
        </motion.div>
      </div>

      {/* Fixed Social Links Footer */}
      <div className="social-footer">
        <motion.div 
          className="social-links"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {socialLinks.map((link, index) => (
            <motion.a 
              key={link.name}
              href={link.url} 
              target="_blank"
              rel="noopener noreferrer"
              className="social-link" 
              title={link.name}
              variants={fadeInUp}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <SvgIcon name={link.iconName} size={20} />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default LeftSidebar;
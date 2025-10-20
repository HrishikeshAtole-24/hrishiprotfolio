import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import CodeBackground from '../layout/CodeBackground';
import PageFooter from '../layout/PageFooter';
import SvgIcon from '../common/SvgIcon';

const ContactPage = () => {
  const { profile } = portfolioData;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', content: '' });
  const [buttonText, setButtonText] = useState('Send Message');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage({ type: '', content: '' });
    setButtonText('Sending...');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage({ type: 'success', content: result.message });
        setButtonText('Message Sent! ✓');
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        // Reset button text after 3 seconds
        setTimeout(() => {
          setButtonText('Send Message');
        }, 3000);
      } else {
        setMessage({ type: 'error', content: result.message });
        setButtonText('Try Again');
        
        // Reset button text after 2 seconds
        setTimeout(() => {
          setButtonText('Send Message');
        }, 2000);
      }
    } catch (error) {
      setMessage({ 
        type: 'error', 
        content: 'Network error. Please check your connection and try again.' 
      });
      setButtonText('Try Again');
      
      // Reset button text after 2 seconds
      setTimeout(() => {
        setButtonText('Send Message');
      }, 2000);
    } finally {
      setIsLoading(false);
    }
  };

  const contactDetails = [
    {
      icon: 'fas fa-envelope',
      iconName: 'envelope',
      title: 'Email',
      value: profile.email
    },
    {
      icon: 'fas fa-phone',
      iconName: 'phone',
      title: 'Phone',
      value: profile.phone
    },
    {
      icon: 'fas fa-location-dot',
      iconName: 'location-dot',
      title: 'Location',
      value: profile.location
    }
  ];

  return (
    <motion.div 
      className="page contact-page"
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
          Get In Touch
        </motion.h1>
        
        <div className="contact-container">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Let's Work Together
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              I'm always interested in new opportunities and exciting projects. 
              Let's discuss how we can bring your ideas to life.
            </motion.p>
            
            <motion.div 
              className="contact-details"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              {contactDetails.map((detail, index) => (
                <motion.div
                  key={index}
                  className="contact-item"
                  variants={fadeInUp}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className="contact-icon"
                  >
                    <SvgIcon name={detail.iconName} size={24} />
                  </motion.div>
                  <div>
                    <h4>{detail.title}</h4>
                    <p>{detail.value}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="contact-form"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <motion.form 
              onSubmit={handleSubmit}
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              <motion.div className="form-group" variants={fadeInUp}>
                <motion.input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </motion.div>
              
              <motion.div className="form-group" variants={fadeInUp}>
                <motion.input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </motion.div>
              
              <motion.div className="form-group" variants={fadeInUp}>
                <motion.input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </motion.div>
              
              <motion.div className="form-group" variants={fadeInUp}>
                <motion.textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </motion.div>
              
              <motion.button 
                type="submit" 
                className={`btn btn-primary ${isLoading ? 'loading' : ''} ${message.type === 'success' ? 'success' : ''}`}
                variants={fadeInUp}
                whileHover={!isLoading ? { y: -2 } : {}}
                whileTap={!isLoading ? { y: 0 } : {}}
                transition={{ duration: 0.2, ease: "easeOut" }}
                disabled={isLoading}
              >
                <span className="button-content">
                  {isLoading ? (
                    <>
                      <span className="loading-spinner"></span>
                      Sending...
                    </>
                  ) : message.type === 'success' ? (
                    <>
                      <SvgIcon name="check" size={16} />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <SvgIcon name="paper-plane" size={16} />
                      Send Message
                    </>
                  )}
                </span>
              </motion.button>

              {/* Success/Error Message Display */}
              <AnimatePresence>
                {message.content && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className={`message ${message.type}`}
                  >
                    <SvgIcon 
                      name={message.type === 'success' ? 'check-circle' : 'exclamation-triangle'} 
                      size={18} 
                    />
                    <p>{message.content}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.form>
          </motion.div>
        </div>
      </div>
      
      <PageFooter />
    </motion.div>
  );
};

export default ContactPage;
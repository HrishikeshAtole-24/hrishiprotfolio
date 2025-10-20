import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { portfolioData } from '../../data/portfolioData';
import SvgIcon from '../common/SvgIcon';

const TestimonialsScroll = () => {
  const { testimonials } = portfolioData;
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto scroll testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Render stars for rating
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <SvgIcon 
        key={index}
        name="star" 
        size={16} 
        className={index < rating ? 'star-filled' : 'star-empty'}
      />
    ));
  };

  return (
    <div className="testimonials-scroll-container">
      <motion.div 
        className="testimonials-header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h3>What People Say</h3>
        <p>Recommendations from colleagues and clients</p>
      </motion.div>

      <div className="testimonials-wrapper">
        <motion.div 
          className="testimonials-track"
          animate={{
            x: `-${currentIndex * 100}%`
          }}
          transition={{
            duration: 0.8,
            ease: "easeInOut"
          }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="testimonial-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                delay: index * 0.1,
                duration: 0.5 
              }}
            >
              <div className="testimonial-content">
                <div className="quote-icon">
                  <SvgIcon name="quote" size={20} />
                </div>
                
                <div className="testimonial-author">
                  <div className="author-avatar">
                    <img src={testimonial.avatar} alt={testimonial.name} />
                  </div>
                  <div className="author-info">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.position}</p>
                    <span>{testimonial.company}</span>
                  </div>
                  <div className="testimonial-rating">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
                
                <div className="testimonial-text-container">
                  <p className="testimonial-text">"{testimonial.text}"</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="testimonials-indicators">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsScroll;
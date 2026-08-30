import { motion } from 'framer-motion';

/* One scroll-reveal primitive used everywhere, so the whole page
   enters with the same cadence instead of six different animations. */
const Reveal = ({ children, delay = 0, y = 22, className = '' }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '0px 0px -12% 0px' }}
    transition={{ duration: 0.75, delay, ease: [0.22, 0.61, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

export default Reveal;

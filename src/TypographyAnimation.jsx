import { motion } from 'framer-motion';

const TypographyAnimation = ({ phase }) => {
  if (phase !== 'break') return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <h1>Time for a Break!</h1>
    </motion.div>
  );
};

export default TypographyAnimation;

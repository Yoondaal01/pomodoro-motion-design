import { motion } from 'framer-motion';

const TypographyAnimation = ({ phase }) => {
  if (phase !== 'break') return null;

  return (
    <motion.h1
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      Time for a Break!
    </motion.h1>
  );
};

export default TypographyAnimation;

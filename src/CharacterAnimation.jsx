import { motion } from 'framer-motion';

const CharacterAnimation = ({ phase }) => {
  const animations = {
    waiting: { scale: [1, 1.05, 1], transition: { duration: 1.5, repeat: Infinity } },
    studying: { x: [0, 10, -10, 0], transition: { duration: 1, repeat: Infinity } },
    break: { rotate: [0, 5, -5, 0], transition: { duration: 1, repeat: Infinity } },
  };

  return (
    <motion.div
      animate={animations[phase] || {}}
      className="character-animation"
    >
      {phase === 'waiting' && <img src="/waiting-character.png" alt="Waiting" />}
      {phase === 'studying' && <img src="/studying-character.png" alt="Studying" />}
      {phase === 'break' && <img src="/break-character.png" alt="Break" />}
    </motion.div>
  );
};

export default CharacterAnimation;

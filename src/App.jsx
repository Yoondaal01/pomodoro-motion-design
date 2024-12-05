import CharacterAnimation from './CharacterAnimation';
import CircularProgressBar from './CircularProgressBar';
import Timer from './Timer';
import BreakSettings from './BreakSettings';
import TypographyAnimation from './TypographyAnimation';
import { useState } from 'react';

function App() {
  const [phase, setPhase] = useState('waiting'); // 'waiting', 'studying', 'break'
  const [timeLeft, setTimeLeft] = useState(25 * 60); // in seconds
  const [breakDuration, setBreakDuration] = useState(5 * 60);

  const phaseColors = {
    waiting: '#f0f8ff',
    studying: '#ffebcd',
    break: '#d1ffd6',
  };  

  return (
    <motion.div
  className="app"
  animate={{ backgroundColor: phaseColors[phase] }}
  transition={{ duration: 0.5 }}
  style={{ height: '100vh', width: '100%' }}
>
      <TypographyAnimation phase={phase} />
      <CharacterAnimation phase={phase} />
      <CircularProgressBar timeLeft={timeLeft} totalTime={phase === 'break' ? breakDuration : 25 * 60} />
      <Timer
        timeLeft={timeLeft}
        setTimeLeft={setTimeLeft}
        phase={phase}
        setPhase={setPhase}
        breakDuration={breakDuration}
      />
      <BreakSettings
        breakDuration={breakDuration}
        setBreakDuration={setBreakDuration}
      />
    </motion.div>
  );
}

export default App;

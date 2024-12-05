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

  return (
    <div className="app">
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
    </div>
  );
}

export default App;

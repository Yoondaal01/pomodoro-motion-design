import React, { useState } from "react";
import CircularTimer from "./components/CircularTimer";
import CharacterAnimation from "./components/CharacterAnimation";
import TimerControls from "./components/TimerControls";
import PhaseLabel from "./components/PhaseLabel";
import Background from "./components/Background";

function App() {
  const [phase, setPhase] = useState("waiting"); // 'waiting', 'studying', 'break'
  const [timeLeft, setTimeLeft] = useState(25 * 60); // Time in seconds
  const [breakDuration, setBreakDuration] = useState(5 * 60); // Break time in seconds
  const [timerDuration, setTimerDuration] = useState(25 * 60); // Total timer duration

  return (
    <Background phase={phase}>
      <div className="app">
        <PhaseLabel phase={phase} />
        <CircularTimer
          timeLeft={timeLeft}
          timerDuration={timerDuration}
          phase={phase}
          setTimerDuration={setTimerDuration}
        />
        <CharacterAnimation phase={phase} />
        <TimerControls
          phase={phase}
          setPhase={setPhase}
          timeLeft={timeLeft}
          setTimeLeft={setTimeLeft}
          timerDuration={timerDuration}
          breakDuration={breakDuration}
        />
      </div>
    </Background>
  );
}

export default App;

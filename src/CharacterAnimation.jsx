const CharacterAnimation = ({ phase }) => {
    return (
      <div className="character-animation">
        {phase === 'waiting' && <p>🤔 Waiting...</p>}
        {phase === 'studying' && <p>📖 Studying...</p>}
        {phase === 'break' && <p>☕ Break Time!</p>}
      </div>
    );
  };
  
  export default CharacterAnimation;
  
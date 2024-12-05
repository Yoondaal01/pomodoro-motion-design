const CircularProgressBar = ({ timeLeft, totalTime }) => {
    const radius = 90;
    const circumference = 2 * Math.PI * radius;
    const progress = (timeLeft / totalTime) * 100;
  
    const getColor = () => {
      if (progress > 66) return '#4caf50';
      if (progress > 33) return '#ffc107';
      return '#f44336';
    };
  
    return (
      <svg width="200" height="200">
        <circle
          cx="100"
          cy="100"
          r={radius}
          stroke="#ddd"
          strokeWidth="10"
          fill="none"
        />
        <circle
          cx="100"
          cy="100"
          r={radius}
          stroke={getColor()}
          strokeWidth="10"
          fill="none"
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={circumference - (progress / 100) * circumference}
          style={{ transition: 'stroke-dashoffset 1s linear, stroke 0.5s' }}
        />
      </svg>
    );
  };
  
  export default CircularProgressBar;
  
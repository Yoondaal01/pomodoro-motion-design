const BreakSettings = ({ breakDuration, setBreakDuration }) => {
    const handleInputChange = (e) => {
      let value = parseInt(e.target.value, 10);
      if (value < 1) value = 1;
      if (value > 60) value = 60;
      setBreakDuration(value * 60);
    };
  
    return (
      <div className="break-settings">
        <label>
          Break Duration (minutes):
          <input
            type="number"
            value={breakDuration / 60}
            onChange={handleInputChange}
          />
        </label>
      </div>
    );
  };
  
  export default BreakSettings;
  
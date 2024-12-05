const BreakSettings = ({ breakDuration, setBreakDuration }) => {
    return (
      <div className="break-settings">
        <label>
          Break Duration (minutes):
          <input
            type="number"
            value={breakDuration / 60}
            onChange={(e) => setBreakDuration(e.target.value * 60)}
          />
        </label>
      </div>
    );
  };
  
  export default BreakSettings;
  
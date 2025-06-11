function BetweenFrets({ numberOfFrets, handleStartChange, handleEndChange }) {
    return (
      <span>
        Show Notes between Frets{" "}
        <input
          type="number"
          defaultValue={0}
          min="0"
          onChange={handleStartChange}
        />
        and{" "}
        <input
          type="number"
          defaultValue={numberOfFrets}
          max={numberOfFrets}
          onChange={handleEndChange}
        />
      </span>
    );
  }
  
  export default BetweenFrets;
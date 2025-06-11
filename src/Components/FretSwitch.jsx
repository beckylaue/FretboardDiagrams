function FretSwitch({ onchange }) {
    return (
      <div className="select">
        <label htmlFor="fret-selector">Number of Frets: </label>
        <input
          type="number"
          min="3"
          max="36"
          defaultValue={24}
          name="fret-selector"
          className="fret-selector"
          onChange={onchange}
        ></input>
      </div>
    );
  }
  
  export default FretSwitch;
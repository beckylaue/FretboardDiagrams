function RootSelector({ root, onchange }) {
    return (
      <div className="root-form">
        <label htmlFor="rootSelector">Root Note: </label>
        <select
          name="rootSelector"
          className="root-select"
          onChange={onchange}
          defaultValue={root}
        >
          <option>A</option>
          <option>A♯</option>
          <option>B♭</option>
          <option>B</option>
          <option>C</option>
          <option>C♯</option>
          <option>D</option>
          <option>D♭</option>
          <option>D♯</option>
          <option>E♭</option>
          <option>E</option>
          <option>F</option>
          <option>F♯</option>
          <option>G♭</option>
          <option>G</option>
          <option>G♯</option>
          <option>A♭</option>
        </select>
      </div>
    );
  }
  
  export default RootSelector;
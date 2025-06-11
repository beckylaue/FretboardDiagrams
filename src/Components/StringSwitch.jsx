function StringSwitch({ onChange }) {
    return (
      <div className="select">
        <label htmlFor="string-selector">Number of Strings: </label>
        <select
          className="string-selector select"
          name="string-selector"
          defaultValue={6}
          onChange={onChange}
        >
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
          <option value={9}>9</option>
        </select>
      </div>
    );
  }
  
  export default StringSwitch;
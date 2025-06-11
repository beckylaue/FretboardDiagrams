import uniqueKey from "../Functions/uniqueKey";

function TuningSelection({ numberOfStrings, onChange, tuning }) {
  let arr = [];
  for (let i = 0; i < numberOfStrings; i++) {
    arr.push(i);
  }

  return arr.map((number) => {
    return (
      <select
        onChange={onChange}
        id={number}
        key={uniqueKey()}
        defaultValue={tuning[number]}
        className="select"
      >
        <option value="A">A</option>
        <option value="A♯/B♭">A♯/B♭</option>
        <option value="B">B</option>
        <option value="C">C</option>
        <option value="C♯/D♭">C♯/D♭</option>
        <option value="D">D</option>
        <option value="D♯/E♭">D♯/E♭</option>
        <option value="E">E</option>
        <option value="F">F</option>
        <option value="F♯/G♭">F♯/G♭</option>
        <option value="G">G</option>
        <option value="G♯/A♭">G♯/A♭</option>
      </select>
    );
  });
}

function TuningSelect({ numberOfStrings, onChange, tuning }) {
  return (
    <div className="tuning">
      <label className="tuning-label">Tuning: </label>
      <TuningSelection
        numberOfStrings={numberOfStrings}
        onChange={onChange}
        tuning={tuning}
      />
    </div>
  );
}

export default TuningSelect;
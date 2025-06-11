import { useState } from "react";

function NoteCheckbox({ note, nr, array }) {
  const [isChecked, setIsChecked] = useState(false);

  function handleCheck(e) {
    setIsChecked(!isChecked);
    if (array.includes(nr)) array.splice(array.indexOf(nr), 1);
    else array.push(nr);
  }

  return (
    <div className="check-wrapper">
      <label htmlFor={note} className="root-form">
        {note}
      </label>
      <input
        type="checkbox"
        name={note}
        className="checkbox"
        checked={isChecked}
        onChange={handleCheck}
      />
    </div>
  );
}

function NoteSelection({ notes, array, onsubmit }) {
  return (
    <>
      <span className="header">Must Include Notes:</span>
      <div className="note-selection">
        <NoteCheckbox note={notes[0]} nr={1} array={array} />
        <NoteCheckbox note={notes[1]} nr={2} array={array} />
        <NoteCheckbox note={notes[2]} nr={3} array={array} />
        <NoteCheckbox note={notes[3]} nr={4} array={array} />
      </div>
      <div className="note-selection">
        <NoteCheckbox note={notes[4]} nr={5} array={array} />
        <NoteCheckbox note={notes[5]} nr={6} array={array} />
        <NoteCheckbox note={notes[6]} nr={7} array={array} />
      </div>
      <div className="note-selection">
        <NoteCheckbox note={notes[7]} nr={8} array={array} />
        <NoteCheckbox note={notes[8]} nr={9} array={array} />
        <NoteCheckbox note={notes[9]} nr={10} array={array} />
        <NoteCheckbox note={notes[10]} nr={11} array={array} />
      </div>
      <button className="button" onClick={onsubmit}>
        Filter Scales
      </button>
    </>
  );
}

export default NoteSelection;

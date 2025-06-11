import { useState, useRef, useEffect } from "react";
import transpose from "./Functions/transpose";
import { Link } from "react-router-dom";

function ScaleCreator() {
  const [rootNote, setRootNote] = useState("A");
  const [formula, setFormula] = useState([
    "R",
    0,
    "2",
    "♭3",
    0,
    "4",
    0,
    "5",
    "♭6",
    0,
    "♭7",
    0,
  ]);
  const [name, setName] = useState("");
  const inputRef = useRef(null);
  function RootSelector() {
    return (
      <div className="big-root-form">
        <label htmlFor="rootSelector" className="big-root-form">
          Root Note:{" "}
        </label>
        <select
          name="rootSelector"
          className="big-select"
          onChange={(e) => setRootNote(e.target.value)}
          defaultValue={rootNote}
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

  function NameInput() {
    function handleChange(e) {
      setName(e.target.value);
    }

    return (
      <div class="title-input">
        <label htmlFor="name">Title: </label>
        <input
          type="text"
          className="textinput"
          onChange={handleChange}
          value={name}
          ref={inputRef}
        />
      </div>
    );
  }

  useEffect(() => {
    if (name != "") inputRef.current.focus();
  }, [name]);

  function handleFormulaChange(e) {
    const newFormula = formula.map((interval) => interval);
    newFormula[e.target.id] = e.target.value;
    setFormula(newFormula);
  }

  function Formula() {
    return (
      <div className="formula-wrapper">
        <div className="formula-fragment extra">R</div>
        <div className="formula-fragment">
          <select
            defaultValue={formula[1]}
            id="1"
            onChange={handleFormulaChange}
            className="big-select"
          >
            <option value={0}>--</option>
            <option value={"♭2"}>♭2</option>
          </select>
        </div>
        <div className="formula-fragment">
          <select
            defaultValue={formula[2]}
            id="2"
            onChange={handleFormulaChange}
            className="big-select"
          >
            <option value={0}>--</option>
            <option value={"2"}>2</option>
            <option value={"𝄫3"}>𝄫3</option>
          </select>
        </div>
        <div className="formula-fragment">
          <select
            defaultValue={formula[3]}
            id="3"
            onChange={handleFormulaChange}
            className="big-select"
          >
            <option value={0}>--</option>
            <option value={"♭3"}>♭3</option>
            <option value={"♯2"}>♯2</option>
          </select>
        </div>
        <div className="formula-fragment">
          <select
            defaultValue={formula[4]}
            id="4"
            onChange={handleFormulaChange}
            className="big-select"
          >
            <option value={0}>--</option>
            <option value={"3"}>3</option>
            <option value={"♭4"}>♭4</option>
          </select>
        </div>
        <div className="formula-fragment">
          <select
            defaultValue={formula[5]}
            id="5"
            onChange={handleFormulaChange}
            className="big-select"
          >
            <option value={0}>--</option>
            <option value={"♯3"}>♯3</option>
            <option value={"4"}>4</option>
          </select>
        </div>
        <div className="formula-fragment">
          <select
            defaultValue={formula[6]}
            id="6"
            onChange={handleFormulaChange}
            className="big-select"
          >
            <option value={0}>--</option>
            <option value={"♯4"}>♯4</option>
            <option value={"♭5"}>♭5</option>
          </select>
        </div>
        <div className="formula-fragment">
          <select
            defaultValue={formula[7]}
            id="7"
            onChange={handleFormulaChange}
            className="big-select"
          >
            <option value={0}>--</option>
            <option value={"5"}>5</option>
            <option value={"𝄫6"}>𝄫6</option>
          </select>
        </div>
        <div className="formula-fragment">
          <select
            defaultValue={formula[8]}
            id="8"
            onChange={handleFormulaChange}
            className="big-select"
          >
            <option value={0}>--</option>
            <option value={"♭6"}>♭6</option>
            <option value={"♯5"}>♯5</option>
          </select>
        </div>
        <div className="formula-fragment">
          <select
            defaultValue={formula[9]}
            id="9"
            onChange={handleFormulaChange}
            className="big-select"
          >
            <option value={0}>--</option>
            <option value={"6"}>6</option>
            <option value={"𝄫7"}>𝄫7</option>
          </select>
        </div>
        <div className="formula-fragment">
          <select
            defaultValue={formula[10]}
            id="10"
            onChange={handleFormulaChange}
            className="big-select"
          >
            <option value={0}>--</option>
            <option value={"♭7"}>♭7</option>
            <option value={"♯6"}>♯6</option>
          </select>
        </div>
        <div className="formula-fragment">
          <select
            defaultValue={formula[11]}
            id="11"
            onChange={handleFormulaChange}
            className="big-select"
          >
            <option value={0}>--</option>
            <option value={"7"}>7</option>
          </select>
        </div>
      </div>
    );
  }
  function noZeros(array) {
    return array.filter((piece) => piece != 0);
  }

  function transposeScale(array) {
    const copy = noZeros(array);
    const result = [rootNote];
    for (let i = 1; i < copy.length; i++) {
      result.push(transpose(rootNote, copy[i]));
    }
    return result;
  }

  return (
    <div className="wrapper">
      <RootSelector />
      <NameInput />
      <Formula />
      <span className="big-root-form">
        {transposeScale(formula).join(" - ")}
      </span>
      <Link to="fretboard" state={[rootNote, { name: name, formula: formula }]}>
        <button>Done, show Fretboard Diagram</button>
      </Link>
    </div>
  );
}

export default ScaleCreator;
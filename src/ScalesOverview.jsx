import { useState } from "react";
import uniqueKey from "./Functions/uniqueKey";
import RootSelector from "./Components/RootSelector";
import sortNotes from "./Functions/sortNotes";
import filterScales from "./Functions/filterScales";
import { Link } from "react-router-dom";
import NoteSelection from "./Components/NoteSelection";
import transpose from "./Functions/transpose";
import scales from "./Data/scales";

let notesArr = [];

function ScalesOverview() {
  const [rootNote, setRootNote] = useState("A");
  const [selectedNotes, setSelectedNotes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [mode, setMode] = useState("search");
  function handleRootChange(e) {
    setRootNote(e.target.value);
    notesArr = [];
  }

  function handleClick(e) {
    setSelectedNotes(notesArr);
    notesArr = [];
  }

  function searchFilter(term) {
    term = term.toLowerCase();
    return scales.filter((scale) => scale.name.toLowerCase().includes(term));
  }

  function Search() {
    const [searchInput, setSearchInput] = useState("");

    function handleSearchInput(e) {
      setSearchInput(e.target.value);
    }

    function handleClick(e) {
      setSearchTerm(searchInput);
      setSearchInput("");
    }

    return (
      <div className="search">
        <input
          type="text"
          className="textinput"
          onChange={handleSearchInput}
          value={searchInput}
          placeholder="Search..."
        />
        <button onClick={handleClick}>Search Scales</button>
      </div>
    );
  }

  function Filter({ notes, array, onsubmit }) {
    if (mode == "search") return <Search />;
    else
      return <NoteSelection notes={notes} array={array} onsubmit={onsubmit} />;
  }

  function SelectorBox() {
    return (
      <div className="selector-box">
        <RootSelector root={rootNote} onchange={handleRootChange} />
        <div className="mode">
          <div className="radio-element">
            <input
              type="radio"
              className="radio"
              name="Search by Name"
              checked={mode == "search"}
              onChange={() => setMode("search")}
            />
            <label htmlFor="Search by Name" className="radio-label">
              Search by Name
            </label>
          </div>
          <div className="radio-element">
            <input
              type="radio"
              className="radio"
              value="Filter by Notes"
              checked={mode == "filter"}
              onChange={() => setMode("filter")}
            />
            <label htmlFor="Search by Name" className="radio-label">
              Filter by Notes
            </label>
          </div>
        </div>
        <Filter
          notes={sortNotes(rootNote)}
          array={notesArr}
          onsubmit={handleClick}
        />
      </div>
    );
  }

  function FormatScale({ scale }) {
    const correctScale = [rootNote];
    for (let i = 1; i < scale.length; i++) {
      correctScale.push(transpose(rootNote, scale[i]));
    }
    return <span>{correctScale.join(" - ")}</span>;
  }

  function Row({ scale, color, root }) {
    return (
      <Link to="fretboard" state={[rootNote, scale]} className="clear">
        <div className={"row-wrapper " + color}>
          <span>{root + " " + scale.name}</span>
          <div className="scale-row">
            <FormatScale scale={scale.formula} />
          </div>
        </div>
      </Link>
    );
  }

  let even = false;
  function colorSwitch() {
    even = !even;
    if (even) return "dark";
    else return "light";
  }

  function ScaleTable({ scales }) {
    return scales.map((scale) => {
      return (
        <Row
          scale={scale}
          color={colorSwitch()}
          key={uniqueKey()}
          root={rootNote}
        />
      );
    });
  }

  function evaluateMode() {
    if (mode == "search") return searchFilter(searchTerm);
    else return filterScales(selectedNotes);
  }

  function CreatorLink() {
    return (
      <Link to="creator" className="clear">
        <div className={"row-wrapper teal"}>
          <span>Create Custom Scale...</span>
        </div>
      </Link>
    );
  }

  return (
    <div className="wrapper">
      <SelectorBox />
      <ScaleTable scales={evaluateMode()} />
      <CreatorLink />
    </div>
  );
}

export default ScalesOverview;
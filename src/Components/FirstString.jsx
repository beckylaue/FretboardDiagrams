import Fret from "./Fret";
import uniqueKey from "../Functions/uniqueKey";
import rootToIndex from "../Functions/rootToIndex";

function FirstStringInner({ numberOfFrets, rootNote, scale, begin, end }) {
  const start = rootToIndex(rootNote);

  const arr = [];
  for (let i = 0; i <= numberOfFrets; i++) {
    arr.push(i);
  }
  const markedFrets = [3, 5, 7, 9];

  return arr.map((number) => {
    return (
      <Fret
        key={uniqueKey()}
        marker={markedFrets.includes(number % 12) ? "marker " : ""}
        doubleMarker={number % 12 == 0 && number != 0}
        isFirst={number == 0}
        note={
          number >= begin && number <= end ? scale[(start + number) % 12] : null
        }
      />
    );
  });
}

function FirstString({ numberOfFrets, rootNote, scale, start, end }) {
  return (
    <div className="string">
      <FirstStringInner
        numberOfFrets={numberOfFrets}
        rootNote={rootNote}
        scale={scale}
        begin={start}
        end={end}
      />
    </div>
  );
}

export default FirstString;
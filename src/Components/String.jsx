import Fret from "./Fret";
import uniqueKey from "../Functions/uniqueKey";
import rootToIndex from "../Functions/rootToIndex";

function StringInner({ numberOfFrets, rootNote, scale, begin, end }) {
  let start = rootToIndex(rootNote);

  let arr = [];
  for (let i = 0; i <= numberOfFrets; i++) {
    arr.push(i);
  }

  return arr.map((number) => {
    return (
      <Fret
        marker={""}
        doubleMarker={false}
        isFirst={number == 0}
        key={uniqueKey()}
        note={
          number >= begin && number <= end ? scale[(start + number) % 12] : null
        }
      />
    );
  });
}

function String({ numberOfFrets, rootNote, scale, start, end }) {
  return (
    <div className="string">
      <StringInner
        numberOfFrets={numberOfFrets}
        rootNote={rootNote}
        scale={scale}
        begin={start}
        end={end}
      />
    </div>
  );
}

export default String;
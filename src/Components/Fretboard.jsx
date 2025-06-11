import FirstString from "./FirstString";
import String from "./String";
import { createRef } from "react";
import uniqueKey from "../Functions/uniqueKey";

function FretboardInner({
  numberOfStrings,
  numberOfFrets,
  tuning,
  scale,
  start,
  end,
}) {
  const arr = [];
  for (let i = 1; i < numberOfStrings; i++) {
    arr.push(i);
  }

  return arr.map((number) => {
    return (
      <String
        key = {uniqueKey()}
        numberOfFrets={numberOfFrets}
        rootNote={tuning[tuning.length - (number + 1)]}
        scale={scale}
        start={start}
        end={end}
      />
    );
  });
}

function Fretboard({
  numberOfStrings,
  numberOfFrets,
  scale,
  tuning,
  reference,
  start,
  end,
}) {
  console.log(numberOfFrets);
  return (
    <div className="fretboard" ref={reference}>
      <FirstString
        numberOfFrets={numberOfFrets}
        rootNote={tuning[tuning.length - 1]}
        scale={scale}
        start={start}
        end={end}
      />
      <FretboardInner
        numberOfStrings={numberOfStrings}
        numberOfFrets={numberOfFrets}
        tuning={tuning}
        scale={scale}
        start={start}
        end={end}
      />
    </div>
  );
}

export default Fretboard;
import DoubleMarker from "./DoubleMarker";

function Fret({ note, marker, doubleMarker, isFirst }) {
  return (
    <div
      className={
        "fret-note " +
        marker +
        (note != null ? " note" : "") +
        (isFirst ? " first" : "")
      }
      note={note}
    >
      <DoubleMarker exe={doubleMarker} />
    </div>
  );
}

export default Fret;
import { useState, createRef, useEffect } from "react";
import Fretboard from "./Components/Fretboard";
import StringSwitch from "./Components/StringSwitch";
import FretSwitch from "./Components/FretSwitch";
import TuningSelect from "./Components/TuningSelect";
import tunings from "./Data/tunings";
import setupScale from "./Functions/setupScale";
import MarkerColor from "./Components/MarkerColor";
import { useLocation } from "react-router-dom";
import ScreenshotButton from "./Components/ScreenshotButton";
import exportAsImage from "./Functions/exportAsImage";
import createFileName from "./Functions/createFileName";
import BetweenFrets from "./Components/BetweenFrets";

function ScaleDetail() {
  const location = useLocation();
  const params = location.state;
  const root = params[0];
  const scale = params[1];

  const ref = createRef(null);

  const [numberOfStrings, setNumberOfStrings] = useState(6);
  const [numberOfFrets, setNumberOfFrets] = useState(24);
  const [tuning, setTuning] = useState(tunings[6]);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(numberOfFrets);

  useEffect(() => {
    document.documentElement.style.setProperty("--number-of-strings", 6);
  }, []);

  function handleStringChange(e) {
    setNumberOfStrings(e.target.value);
    document.documentElement.style.setProperty(
      "--number-of-strings",
      e.target.value,
    );
    setTuning(tunings[e.target.value]);
  }
  function handleFretChange(e) {
    setNumberOfFrets(e.target.value);
  }

  function handleTuningChange(e) {
    const newTuning = tuning.map((note) => {
      return note;
    });
    newTuning[e.target.id] = e.target.value;
    setTuning(newTuning);
    console.log(newTuning);
  }

  function handleColorChange(e) {
    document.documentElement.style.setProperty(
      "--marker-color",
      e.target.value,
    );
  }

  function handleStartChange(e) {
    setStart(e.target.value);
  }

  function handleEndChange(e) {
    setEnd(e.target.value);
  }

  return (
    <>
      <h1>{root + " " + scale.name}</h1>
      <div className="flex">
        <StringSwitch onChange={handleStringChange} />
        <FretSwitch onchange={handleFretChange} />
        <MarkerColor onchange={handleColorChange} />
        <ScreenshotButton
          onclick={() =>
            exportAsImage(ref.current, createFileName(root, scale))
          }
        />
      </div>
      <Fretboard
        reference={ref}
        numberOfStrings={numberOfStrings}
        numberOfFrets={numberOfFrets}
        tuning={tuning}
        scale={setupScale(root, scale)}
        start={start}
        end={end}
      />

      <TuningSelect
        numberOfStrings={numberOfStrings}
        onChange={handleTuningChange}
        tuning={tuning}
      />
      <BetweenFrets
        numberOfFrets={numberOfFrets}
        handleStartChange={handleStartChange}
        handleEndChange={handleEndChange}
      />
    </>
  );
}

export default ScaleDetail;
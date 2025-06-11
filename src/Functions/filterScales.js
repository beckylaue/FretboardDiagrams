import scales from "../Data/scales";
import intervalToIndex from "./intervalToIndex";

function filterScales(intervals) {
  let result = scales;
  for (let i = 0; i < intervals.length; i++) {
    result = result.filter((scale) =>
      scale.formula
        .map((interval) => intervalToIndex(interval))
        .includes(intervals[i]),
    );
  }
  console.log(scales.length);
  return result;
}

export default filterScales;
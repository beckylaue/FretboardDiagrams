import transpose from "./transpose";
import rootToIndex from "./rootToIndex";
import intervalToIndex from "./intervalToIndex";

function setupScale(root, scale) {
  const start = rootToIndex(root);
  const build = scale.formula.map((n) => intervalToIndex(n));
  let result = [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ];
  result[start] = root;
  for (let i = 1; i < build.length; i++) {
    result[(start + build[i]) % 12] = transpose(root, scale.formula[i]);
  }
  return result;
}

export default setupScale;
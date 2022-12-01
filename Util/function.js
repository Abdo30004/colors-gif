let rn = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
function rgb() {
  let a, b, c;
  a = rn(0, 2);
  switch (a > 1) {
    case true:
      b = rn(0, 5);
      c = rn(0, 5);
      break;
    case false:
      b = rn(0, 9);
      c = rn(0, 9);
      break;
  }
  return `${a}${b}${c}`;
}

export { rgb, rn }; 

export default { rgb, rn };
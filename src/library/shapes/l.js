import shape from './shape.js';

export default function l(x, y, color) {
  let state = {};
  let mold = [
    {x: x + 1, y: y},
    {x: x + 2, y: y},
    {x: x, y: y - 1},
  ];
  return Object.assign(
    {},
    shape(state, {
      center: {x: x, y: y},
      mold: mold,
      color: color,
    })
  );
}

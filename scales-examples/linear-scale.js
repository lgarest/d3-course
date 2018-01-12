import { scaleLinear } from 'd3';
import expect from 'expect';

const LinearScale = x =>
  scaleLinear()
    .domain([0, 100])
    .range([0, 600])
    .clamp(true)(x); // normalize between range values

export default LinearScale;

[
  [0, 0],
  [25, 150],
  [50, 300],
  [75, 450],
  [100, 600],
].map(([x, expected]) =>
  expect(LinearScale(x)).toEqual(expected)
);
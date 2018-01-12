import { scaleQuantize } from 'd3';
import expect from 'expect';

const QuantizeScaleExample = x =>
  scaleQuantize()
    .domain([0, 100])
    .range([0, 600])(x);

export default QuantizeScaleExample;

const colorScale = x => scaleQuantize()
  .domain([0, 100])
  .range(['green', 'yellow', 'red'])(x);


[
  [0, 0],
  [25, 0],
  [51, 600],
  [75, 600],
  [100, 600],
].map(([x, expected]) =>
  expect(QuantizeScaleExample(x)).toEqual(expected)
);

expect(colorScale(35)).toEqual('green');
import { scaleTime } from 'd3';

export default (x) => {
  const timeScale = scaleTime()
    .domain([new Date(2018, 0, 1), new Date()])
    .range([0, 100]);
  console.log(timeScale(x));
};

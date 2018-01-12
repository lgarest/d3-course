/* 3rd party imports */
import { version } from "d3";

/* relative imports */
import { Title } from './visuals';
import LinearScale from './scales-examples/linear-scale';
import TimeScale from './scales-examples/time-scale';
import QuantizeScale from './scales-examples/quantize-scale';

const app = document.getElementById('app');
app.innerHTML = Title(`Sandbox using d3 v${version}`);


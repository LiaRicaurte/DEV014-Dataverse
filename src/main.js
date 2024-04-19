
import data from './data/dataset.js';
import { renderItems } from './view.js';

const root = document.querySelector("#root")
root.append(renderItems(data))
//console.log(renderItems(data), data);
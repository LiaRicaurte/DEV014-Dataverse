import { filterData } from './dataFunctions.js';
import data from './data/dataset.js';
import { renderItems } from './view.js';

//console.log("Ver data: ", data);

const root = document.querySelector("#root")
const selectorGender = document.querySelector('select[name="gender"]');

selectorGender.addEventListener('change', function(event) {
  const choose = event.target.value;
  console.log("Valor seleccionado: ", choose);
  console.log('Ver filtro: ', filterData(data,'shortDescription', event.target.value));
})

root.append(renderItems(data))
//console.log(renderItems(data), data);


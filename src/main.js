import { filterData } from './dataFunctions.js';
import data from './data/dataset.js';
import { renderItems } from './view.js';

//console.log("Ver data: ", data);

const root = document.querySelector("#root")
const selectorGenre = document.querySelector('select[name="genre"]');

selectorGenre.addEventListener('change', function(event) {
  const filterReturn = filterData(data,'shortDescription', event.target.value);
  //console.log('Ver filtro: ', filterReturn);
  //console.log("Valor seleccionado: ", event.target.value);
  
  root.innerHTML = ''
  root.append(renderItems(filterReturn))
})

root.append(renderItems(data));
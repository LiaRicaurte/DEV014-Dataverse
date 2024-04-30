import { filterData, sortData } from './dataFunctions.js';
import data from './data/dataset.js';
import { renderItems } from './view.js';

//console.log("Ver data: ", data);

const root = document.querySelector("#root")
const selectorGenre = document.querySelector('select[name="genre"]');
const selectorYear = document.querySelector('select[name="year"]');
let filterReturn= data;
let sortValue = 'selecciona';
selectorGenre.addEventListener('change', function(event) {
  filterReturn = filterData(data,'shortDescription', event.target.value);
  //console.log('Ver filtro: ', filterReturn);
  //console.log("Valor seleccionado: ", event.target.value);
  const orderReturn = sortData(filterReturn,'releaseYear',sortValue);
  root.innerHTML = ''
  root.append(renderItems(orderReturn));
})
selectorYear.addEventListener('change', function(event) {
  sortValue =event.target.value;
  const orderReturn = sortData(filterReturn,'releaseYear',event.target.value);
  //console.log('Ver orden: ', orderReturn);
  //console.log("Valor seleccionado: ", event.target.value);
  root.innerHTML = ''
  root.append(renderItems(orderReturn));
})

const buttomClean = document.getElementById('limpiarFiltros');
buttomClean.addEventListener('click', function() {
  selectorGenre.selectedIndex = 0;
  selectorYear.selectedIndex = 0;
  root.innerHTML = ''
  root.append(renderItems(data));
})

root.append(renderItems(data));
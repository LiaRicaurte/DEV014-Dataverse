export function filterData(data, filterBy, value) {
  let filterResult = []
  if (value === 'selecciona') {
    return data;
  }
  filterResult = data.filter((movie) => {
    return movie[filterBy].includes(value)
  })
  return filterResult

}

export function sortData(data, sortBy, sortOrder) {
//sacar una copia al array data
//declarar una variable que guarde el resultado del ordenado.
//Usar método sort
//retornar variable que tiene el resultado del orden.
  const copiaData = data; // Esta es una copia independiente del array original
  const copiaCorrecta = copiaData.sort((firstDate , lastDate) => {
    if (sortOrder === 'asc') {
      return firstDate.facts[sortBy] - lastDate.facts[sortBy];
    } else {
      return lastDate.facts[sortBy] - firstDate.facts[sortBy];
    }
  });
  return copiaCorrecta;
}
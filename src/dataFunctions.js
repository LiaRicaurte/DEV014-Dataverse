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
  const copiaData = data;
  const copiaCorrecta = copiaData.sort((firstDate , lastDate) => {
    if (sortOrder === 'asc') {
      return firstDate.facts[sortBy] - lastDate.facts[sortBy];
    } else {
      return lastDate.facts[sortBy] - firstDate.facts[sortBy];
    }
  });
  return copiaCorrecta;
}
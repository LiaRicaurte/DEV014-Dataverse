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
  const originalCopy = data;
  const newCopy = data 

  newCopy.sort((firstDate, lastDate) => {
    if (sortOrder === 'asc') {
      return firstDate.facts[sortBy] - lastDate.facts[sortBy];
    }  if (sortOrder === 'selecciona') {
      return originalCopy;
    } else {
      return lastDate.facts[sortBy] - firstDate.facts[sortBy];
    }
  })
  return newCopy;
}
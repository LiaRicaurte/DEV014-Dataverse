export function filterData(data, filterBy, value) {
  let filterResult = []

  filterResult = data.filter((movie) => {
    return movie[filterBy].includes(value)
  })
  return filterResult

}
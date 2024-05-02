import { filterData, sortData } from '../src/dataFunctions.js';
import { data as fakeData, orderedData } from './data.js';
import { filteredData } from './data.js';

describe('filterData', () => {

  it('returns `filterData`', () => {
    const filterResult = filterData (fakeData, 'shortDescription', 'Drama')
    expect(filterResult).toEqual(filteredData); 
  });
});

describe('sortData', () => {

  it('returns `sortData`', () => {
    const orderResult = sortData (fakeData, "releaseYear", 'asc')
    expect(orderResult).toEqual(orderedData);
  });
});

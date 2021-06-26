import { QueryFilterPipe } from './query-filter.pipe';

describe('QueryFilterPipe', () => {
  const qFilterPipe = new QueryFilterPipe();
  const listOfFirstType = [
    {
      merchant: {
        name: "Elena"
      }
    },
    {
      merchant: {
        name: "Jemas"
      }
    },
      {
        merchant: {
        name: "Johan"
      }
    },
      {
        merchant: {
        name: "Ellit"
      }
    }
  ];
  const filteredList = [
    {
      merchant: {
        name: "Elena"
      }
    },
    {
      merchant: {
        name: "Ellit"
      }
    }
  ];
  it('create an instance', () => {
    expect(qFilterPipe).toBeTruthy();
  });
  it('Filter the array ', () => {
    const transformedArray = qFilterPipe.transform(listOfFirstType , "el");
    expect(transformedArray).toEqual(filteredList);
  });

  it('Empty Array Filter should return same array ', () => {
    const transformedArray = qFilterPipe.transform(listOfFirstType);
    expect(transformedArray).toEqual(listOfFirstType);
  });
  it('Filter should return null', () => {
    const str ="something";
    const transformedArray = qFilterPipe.transform(str, "e");
    expect(transformedArray).toBeNull();
  });
});

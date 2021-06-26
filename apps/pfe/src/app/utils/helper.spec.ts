import { sortByDesc } from './helper';

describe('Test Helper methods', () => {

  const tList = [
    {
    categoryCode: "#d51271",
      dates: {
        valueDate: 99
      },
      transaction: {
        amountCurrency: {
          amount: 121.22,
          currencyCode: "EUR"
        },
        type: "Card Payment",
        creditDebitIndicator: "DBIT"
      },
      merchant: {
        name: "Belly",
        accountNumber: "SI64397745065188826"
      }
    },
    {
      categoryCode: "#d51271",
        dates: {
          valueDate: 100
        },
        transaction: {
          amountCurrency: {
            amount: 121.22,
            currencyCode: "EUR"
          },
          type: "Card Payment",
          creditDebitIndicator: "DBIT"
        },
        merchant: {
          name: "Milan",
          accountNumber: "SI64397745065188826"
        }
    },
    {
      categoryCode: "#d51271",
        dates: {
          valueDate: 98
        },
        transaction: {
          amountCurrency: {
            amount: 121.22,
            currencyCode: "EUR"
          },
          type: "Card Payment",
          creditDebitIndicator: "DBIT"
        },
        merchant: {
          name: "Alison",
          accountNumber: "SI64397745065188826"
        }
    }
  ];

  const expectList = [
    {
      categoryCode: "#d51271",
        dates: {
          valueDate: 100
        },
        transaction: {
          amountCurrency: {
            amount: 121.22,
            currencyCode: "EUR"
          },
          type: "Card Payment",
          creditDebitIndicator: "DBIT"
        },
        merchant: {
          name: "Milan",
          accountNumber: "SI64397745065188826"
        }
    },
    {
    categoryCode: "#d51271",
      dates: {
        valueDate: 99
      },
      transaction: {
        amountCurrency: {
          amount: 121.22,
          currencyCode: "EUR"
        },
        type: "Card Payment",
        creditDebitIndicator: "DBIT"
      },
      merchant: {
        name: "Belly",
        accountNumber: "SI64397745065188826"
      }
    },
    {
      categoryCode: "#d51271",
        dates: {
          valueDate: 98
        },
        transaction: {
          amountCurrency: {
            amount: 121.22,
            currencyCode: "EUR"
          },
          type: "Card Payment",
          creditDebitIndicator: "DBIT"
        },
        merchant: {
          name: "Alison",
          accountNumber: "SI64397745065188826"
        }
    }
  ];

  test('Match array using custom sortByDesc method', () => {
    const newCopy = tList.sort(sortByDesc);
    expect(newCopy).toEqual(expectList)
  });

})

interface Transaction {
  amountCurrency: {
    amount: number;
    currencyCode: string;
  };
  type: string;
  creditDebitIndicator: string;
}

interface TransactionEntry {
  categoryCode: string;
  dates: {
    valueDate: number;
  };
  transaction: Transaction;
  merchant: {
    name: string;
    accountNumber: string;
  };
}

interface Transactions {
  data: TransactionEntry[];
}

export { Transaction, TransactionEntry, Transactions };

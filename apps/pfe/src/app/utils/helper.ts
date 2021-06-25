import { TransactionEntry } from "../models/transaction.model";

// In case of different type of object sorting TYPE can be added to args
export const sortByDesc = (objA: (TransactionEntry), objB: (TransactionEntry)) => {
  // If current and next has same value then no execution
  if(objB.dates.valueDate === objA.dates.valueDate) {
    return 0;
  }
  return objB.dates.valueDate - objA.dates.valueDate;
}

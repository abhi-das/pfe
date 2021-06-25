import { TransactionEntry } from "../models/transaction.model";

// In case of different type of object sorting TYPE can be added to args
export const sortByDesc = (objA: (TransactionEntry), objB: (TransactionEntry)) => {
  return objB.dates.valueDate - objA.dates.valueDate;
}

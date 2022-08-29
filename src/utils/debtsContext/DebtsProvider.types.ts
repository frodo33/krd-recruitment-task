export interface DebtDataModel {
  Address: string;
  Date: string;
  DocumentType: string;
  Id: number;
  NIP: string;
  Name: string;
  Number: string;
  Price: number;
  Value: number;
}

export type DebtsContextData = {
  initialDebts: DebtDataModel[];
  setInitialDebts: any;
  debts: DebtDataModel[];
  setDebts: any;
  fetchTopDebts: any;
  filterDebts: any;
}
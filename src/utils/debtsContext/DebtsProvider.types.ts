import { Dispatch, SetStateAction } from "react"
import { FieldValues, SubmitHandler } from "react-hook-form"

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
  setInitialDebts: Dispatch<SetStateAction<DebtDataModel[]>>;
  debts: DebtDataModel[];
  setDebts: Dispatch<SetStateAction<DebtDataModel[]>>;
  fetchTopDebts: () => void;
  filterDebts: SubmitHandler<FieldValues>;
  loading: boolean;
  error: string | null;
}
import { ReactNode, FormEvent } from "react"
import { UseFormRegister, FieldValues, FieldErrors } from "react-hook-form"

export interface InputProps {
  children?: ReactNode;
  type?: string;
  name: string;
  placeholder: string;
  label: string;
  register: UseFormRegister<FieldValues>;
  errors?: FieldErrors;
  isDisabled?: boolean;
  defaultValue?: string;
  value?: string;
  onChangeHandler?(event: FormEvent<HTMLInputElement>): void;
}
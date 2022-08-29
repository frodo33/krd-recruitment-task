import React, { FC } from "react"
import { format } from "date-fns"
import { DebtDataModel } from "../../../utils/debtsContext/DebtsProvider.types"

interface DebtsTableRowProps {
  record: DebtDataModel;
}

export const DebtsTableRow: FC<DebtsTableRowProps> = ({ record }) => {
  const {
    Name: name,
    NIP: nip,
    Price: price,
    Date: date
  } = record

  const formatPrice = (price: number) => {
    return `${(price / 100).toFixed(2)} zł`
  }
  
  return (
    <tr>
      <td>{name}</td>
      <td>{nip}</td>
      <td>{formatPrice(price)}</td>
      <td>{format(new Date(date), "dd/MM/yyyy")}</td>
    </tr>
  )
}
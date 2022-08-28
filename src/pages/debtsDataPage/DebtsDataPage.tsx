import React, { FC } from "react"
import { DebtsHeader } from "../../components/debtsHeader/DebtsHeader.component"

export const DebtsDataPage = () => {
  
  return (
    <>
      <DebtsHeader />
      <DebtsList />
    </>
  )
}

interface DebtsListProps {}

export const DebtsList: FC<DebtsListProps> = () => {
  return (
    <div>dupa a2</div>
  )
}
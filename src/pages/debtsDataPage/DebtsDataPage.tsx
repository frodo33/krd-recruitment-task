import React, { FC } from "react"
import { DebtsHeader } from "../../components/debtsHeader/DebtsHeader.component"
import { DebtsTable } from "../../components/debtsTable/DebtsTable.component"

export const DebtsDataPage: FC = () => {
  
  return (
    <>
      <DebtsHeader />
      <DebtsTable />
    </>
  )
}
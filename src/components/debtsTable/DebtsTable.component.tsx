import React, { FC, useEffect } from "react"
import { useDebts } from "../../hooks/useDebts"
import { DebtDataModel } from "../../utils/debtsContext/DebtsProvider.types"
import { StyledTable, StyledTableBody, StyledTableHeader } from "./DebtsTable.styles"
import { DebtsTableRow } from "./debtsTableRow/DebtsTableRow.component"

interface DebtsTableProps {}

export const DebtsTable: FC<DebtsTableProps> = () => {
  const { debts, fetchTopDebts } = useDebts()

  useEffect(() => {
    fetchTopDebts()
  },[])

  const rows = debts.map((debt: DebtDataModel) => <DebtsTableRow key={debt.Id} record={debt} />)

  return (
    <StyledTable>
      <StyledTableHeader>
        <tr>
          <th>Dłuznik</th>
          <th>NIP</th>
          <th>Kwota zadłuzenia</th>
          <th>Data powstania zobowiązania</th>
        </tr>
      </StyledTableHeader>
      <StyledTableBody>
        {rows}
      </StyledTableBody>
    </StyledTable>
  )
}
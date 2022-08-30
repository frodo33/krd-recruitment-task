import React, { FC, useEffect, useState } from "react"
import { useDebts } from "../../hooks/useDebts"
import { DebtDataModel } from "../../utils/debtsContext/DebtsProvider.types"
import { StyledTable, StyledTableBody, StyledTableHeader } from "./DebtsTable.styles"
import { useDebtsUtils } from "./DebtsTable.utils"
import { DebtsTableRow } from "./debtsTableRow/DebtsTableRow.component"
import { ErrorMessageRow } from "./errorMessageRow/ErrorMessageRow.component"

interface DebtsTableProps {}

export const DebtsTable: FC<DebtsTableProps> = () => {
  const [currentNameSortingMethod, setCurrentNameSortingMethod] = useState<number>(0)
  const [currentNipSortingMethod, setCurrentNipSortingMethod] = useState<number>(0)
  const { debts, fetchTopDebts, error } = useDebts()
  const {
    nameSequence,
    nipSequence,
    ascending,
    nextMethod,
  } = useDebtsUtils()

  useEffect(() => {
    fetchTopDebts()
  },[])

  const rows = debts.map((debt: DebtDataModel) => (
    <DebtsTableRow
      key={debt.Id}
      record={debt}
    />
  ))

  return (
    <StyledTable>
      <StyledTableHeader 
        ascending={ascending}
      >
        <tr>
          <th>
            <button 
              onClick={() => nextMethod(nameSequence, currentNameSortingMethod, setCurrentNameSortingMethod)}
            >
              <span>Dłużnik</span>
            </button>
          </th>
          <th>
            <button 
              onClick={() => nextMethod(nipSequence, currentNipSortingMethod, setCurrentNipSortingMethod)}
            >
              <span>NIP</span>
            </button>
          </th>
          <th>Kwota zadłużenia</th>
          <th>Data powstania zobowiązania</th>
        </tr>
      </StyledTableHeader>
      <StyledTableBody>
        {!error 
          ? rows
          : <ErrorMessageRow>{error}</ErrorMessageRow>
        }
      </StyledTableBody>
    </StyledTable>
  )
}
import React, { FC, useEffect, useState } from "react"
import { useDebts } from "../../hooks/useDebts"
import { DebtDataModel } from "../../utils/debtsContext/DebtsProvider.types"
import { StyledTable, StyledTableBody, StyledTableHeader } from "./DebtsTable.styles"
import { DebtsTableRow } from "./debtsTableRow/DebtsTableRow.component"

interface DebtsTableProps {}

type SortingFieldsTypes = "Name" | "NIP"

export const DebtsTable: FC<DebtsTableProps> = () => {
  const { debts, fetchTopDebts, initialDebts, setDebts } = useDebts()

  useEffect(() => {
    fetchTopDebts()
  },[])

  const sortRecords = (columnName: SortingFieldsTypes, desc = false): void => {
    let sorted: DebtDataModel[] = []
    
    if(columnName === "Name") {
      sorted = [...debts].sort((a, b) => {
        const textA = a.Name.toUpperCase()
        const textB = b.Name.toUpperCase()
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0
      })
    }

    if(columnName === "NIP") {
      sorted = [...debts].sort((a, b) => Number(a.NIP) - Number(b.NIP))
    }

    desc && sorted.reverse()

    setDebts(sorted)
  }

  const rows = debts.map((debt: DebtDataModel) => (
    <DebtsTableRow
      key={debt.Id}
      record={debt}
    />
  ))

  const nameSequence = [
    () => sortRecords("Name"),
    () => sortRecords("Name", true),
  ]

  const nipSequence = [
    () => sortRecords("NIP"),
    () => sortRecords("NIP", true),
  ]

  const [currentNameSortingMethod, setCurrentNameSortingMethod] = useState<number>(0)
  const [currentNipSortingMethod, setCurrentNipSortingMethod] = useState<number>(0)

  const nextMethod = (sequence: { (): void }[], current: number, setCurrent: any) => {
    const next = current + 1
    setCurrent(next)
    if(current >= sequence.length-1) {
      setCurrent(0)
    }
    
    sequence[current]()
  }

  return (
    <StyledTable>
      <StyledTableHeader>
        <tr>
          <th><button onClick={() => nextMethod(nameSequence, currentNameSortingMethod, setCurrentNameSortingMethod)}>Dłużnik</button></th>
          <th><button onClick={() => nextMethod(nipSequence, currentNipSortingMethod, setCurrentNipSortingMethod)}>NIP</button></th>
          <th>Kwota zadłużenia</th>
          <th>Data powstania zobowiązania</th>
        </tr>
      </StyledTableHeader>
      <StyledTableBody>
        {rows}
      </StyledTableBody>
    </StyledTable>
  )
}
import { format } from "date-fns"
import React, { FC, useEffect, useState } from "react"
import styled from "styled-components"
import { api } from "../../api/api"
import { getTopDebts } from "../../api/routes"
import { useDebts } from "../../hooks/useDebts"
import { DebtsTableRow } from "./debtsTableRow/DebtsTableRow.component"

const StyledTable = styled.table`
  display: block;
  width: 100%;
  max-width: 100%;
  overflow: scroll;
  border-collapse: collapse;
  border-spacing: 0;
  & tr {
    border-bottom: 2px solid ${({ theme }) => theme.colors.secondary};
    width: 100%;
  }
  & th, td {
    white-space: nowrap;
    width: 100%;
    min-width: 200px;
    padding: 
      ${({ theme }) => theme.mixins.spacing(4)}
      ${({ theme }) => theme.mixins.spacing(2)};
  }
  
  @media ${({ theme }) => theme.breakpoints.tablet} {
    padding: 0 ${({ theme }) => theme.mixins.spacing(20)};
  }
`

const StyledTableHeader = styled.thead`
  width: 100%;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSizes.mediumS};
  color: ${({ theme }) => theme.colors.textSecondary};
  text-align: left;
`

const StyledTableBody = styled.tbody`
  width: 100%;
  
`

interface DebtsTableProps {}

export const DebtsTable: FC<DebtsTableProps> = () => {
  const { debts, setDebts, setInitialDebts } = useDebts()

  const fetchTopDebts = async () => {
    try {
      const { data } = await api.request({
        ...getTopDebts
      })
      setInitialDebts(data)
      setDebts(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchTopDebts()
  },[])

  const rows = debts.map((el: any) => <DebtsTableRow key={el.Id} record={el} />)

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
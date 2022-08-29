import styled from "styled-components"

export const StyledTable = styled.table`
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

export const StyledTableHeader = styled.thead`
  width: 100%;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSizes.mediumS};
  color: ${({ theme }) => theme.colors.textSecondary};
  text-align: left;
`

export const StyledTableBody = styled.tbody`
  width: 100%;
`
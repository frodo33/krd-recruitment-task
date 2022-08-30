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

export const StyledTableHeader = styled.thead<{ascending: boolean}>`
  width: 100%;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSizes.mediumS};
  color: ${({ theme }) => theme.colors.textSecondary};
  text-align: left;
  & button {
    position: relative;
    width: 100%;
    background: transparent;
    border: none;
    text-align: left;
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.fontSizes.mediumS};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: ${({ theme }) => theme.colors.textSecondary};
    cursor: pointer;
    & span {
      padding:
        ${({ theme }) => theme.mixins.spacing(2)}
        ${({ theme }) => theme.mixins.spacing(4)};
      &:hover {
        background: ${({ theme }) => theme.colors.secondary};
      }
    }
    
  }
  & th:first-child button span {
      position: relative;
      padding:
        ${({ theme }) => theme.mixins.spacing(2)}
        ${({ theme }) => theme.mixins.spacing(10)}
        ${({ theme }) => theme.mixins.spacing(2)}
        ${({ theme }) => theme.mixins.spacing(2)};
      &:before {
        content: '';
        position: absolute;
        top: 50%;
        right: 15px;
        width: 10px;
        height: 8px;
        background: ${({ theme }) => theme.colors.textSecondary};
        clip-path: polygon(0% 0%,100% 0%,50% 100%,50% 100%);
        transform: ${({ ascending }) => ascending ? "translate(0,-50%)" : "translate(0,-50%) rotate(180deg)"};
      }
    }
`

export const StyledTableBody = styled.tbody`
  width: 100%;
`
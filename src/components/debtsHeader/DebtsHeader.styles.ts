import styled from "styled-components"

export const StyledDebtsHeader = styled.header`
  width: 100%;
  background: ${({ theme }) => theme.colors.primary};
  padding: 
    ${({ theme }) => theme.mixins.spacing(6)}
    ${({ theme }) => theme.mixins.spacing(6)};
`

export const StyledSearchButton = styled.button`
  background: ${({ theme }) => theme.colors.action};
  color: ${({ theme }) => theme.colors.white};
  margin: 0;
  border: none;
  padding: 
    0
    ${({ theme }) => theme.mixins.spacing(6)};
  font-size: ${({ theme }) => theme.fontSizes.mediumS};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  text-transform: uppercase;
`
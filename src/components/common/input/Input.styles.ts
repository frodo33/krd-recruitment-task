import styled, { css } from "styled-components"

export const StyledInputWrapper = styled.div`
  position: relative;
  width: 100%;
  max-height: 44px;
`

export const StyledInput = styled.input<{hasError: boolean;}>`
  width: 100%;
  height: 100%;
  min-height: 44px;
  outline: none;
  border: 2px solid ${({ theme, hasError }) => hasError ? theme.colors.action : theme.colors.secondary};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  padding-left: ${({ theme }) => theme.mixins.spacing(5)};
  caret-color: ${({ theme }) => theme.colors.primary};
  &::placeholder {
    color: ${({ theme }) => theme.colors.telemediGray60};
  }
  &:focus-visible {
    border: 2px solid ${({ theme, hasError }) => hasError ? theme.colors.action : theme.colors.secondary};
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover, 
  &:-webkit-autofill:focus, 
  &:-webkit-autofill:active{
    -webkit-box-shadow: 0 0 0 30px white inset !important;
  }
  @media ${({ theme }) => theme.breakpoints.tablet} {
    font-size: ${({ theme }) => theme.fontSizes.mediumL};
  }
`

export const StyledErrorMessage = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.white};
  padding-top: ${({ theme }) => theme.mixins.spacing(1)};
  & svg {
    height: ${({ theme }) => theme.fontSizes.small};
  }
`

export const StyledInputLabel = styled.label`
  position: absolute;
  bottom: 100%;
  transform: translate(0,-50%);
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  text-transform: uppercase;
  white-space: nowrap;
  margin: 
    ${({ theme }) => theme.mixins.spacing(2)}
    0;
  @media ${({ theme }) => theme.breakpoints.tablet} {
    font-size: ${({ theme }) => theme.fontSizes.mediumL};
  }
`

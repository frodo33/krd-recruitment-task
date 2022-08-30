import styled, { keyframes } from "styled-components"

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

export const StyledDebtsHeader = styled.header`
  width: 100%;
  background: ${({ theme }) => theme.colors.primary};
  padding: 
    ${({ theme }) => theme.mixins.spacing(12)}
    ${({ theme }) => theme.mixins.spacing(6)};

  @media ${({ theme }) => theme.breakpoints.tablet} {
    padding: ${({ theme }) => theme.mixins.spacing(20)};
  }
`

export const StyledSearchButton = styled.button<{loader: boolean}>`
  display: flex;
  align-items: center;
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
  cursor: pointer;
  @media ${({ theme }) => theme.breakpoints.tablet} {
    font-size: ${({ theme }) => theme.fontSizes.mediumL};
  }
  & div {
    overflow: hidden;
    width: 18px;
    max-width: ${({ loader }) => loader ? "18px" : "0"};
    margin-left: 8px;
    transition: .05s ease-in-out;
  }
  & span {
    display: block;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border-left: 2px solid yellow;
    animation: ${rotate} .8s ease-out infinite;
  }
`
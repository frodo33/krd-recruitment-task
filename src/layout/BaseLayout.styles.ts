import styled from "styled-components/macro"

export const StyledBaseLayout = styled.div`
  position: relative;
  max-width: 1260px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  margin: 0 auto;
  font-size: ${({ theme }) => theme.fontSizes.medium};
`
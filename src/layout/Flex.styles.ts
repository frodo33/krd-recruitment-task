import styled from "styled-components"

interface FlexProps {
  direction?: string;
  justifyContent?: string;
  alignItems?: string;
  order?: number;
  width?: string;
  height?: string;
  mt?: string;
  mr?: string;
  mb?: string;
  ml?: string;
  inline?: boolean,
  as?: React.ElementType;
  gap?: string;
}

export const Flex = styled.div<FlexProps>`
  width: ${({ width }) => width ? width : "100%"};
  height: ${({ height }) => height && height};
  display: ${({ inline }) => inline ? "inline-flex" : "flex"};
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  order: ${({ order }) => order};
  margin-top: ${({ mt }) => (mt ? mt : 0)};
  margin-right: ${({ mr }) => (mr ? mr : 0)};
  margin-bottom: ${({ mb }) => (mb ? mb : 0)};
  margin-left: ${({ ml }) => (ml ? ml : 0)};
  gap: ${({ gap }) => (gap ? gap : 0)};
`

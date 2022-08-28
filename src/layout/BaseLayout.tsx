import React, { FC, ReactNode } from "react"
import { StyledBaseLayout } from "./BaseLayout.styles"

export const BaseLayout: FC<{children: ReactNode}> = ({ children }) => {

  return (
    <StyledBaseLayout>
      {children}
    </StyledBaseLayout>
  )
}
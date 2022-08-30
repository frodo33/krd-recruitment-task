import React, { FC, ReactNode } from "react"

interface ErrorMessageRowProps {
  children: string | ReactNode;
}

export const ErrorMessageRow: FC<ErrorMessageRowProps> = ({ children }) => {
  return (
    <tr>
      <td
        colSpan={100}
        style={{ textAlign: "center" }}
      >
        {children}
      </td>
    </tr>
  )
}
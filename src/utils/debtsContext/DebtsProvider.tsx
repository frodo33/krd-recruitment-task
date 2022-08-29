import React, { FC, ReactNode, SetStateAction, useState } from "react"
import { DebtsContextData } from "./DebtsProvider.types"

export const DebtsContext = React.createContext<DebtsContextData>({} as DebtsContextData)

export const DebtsProvider: FC<{children: any}> = ({ children }) => {
  const [initialDebts, setInitialDebts] = useState<any>([])
  const [debts, setDebts] = useState<any>([])

  const getContext = () => ({
    initialDebts,
    setInitialDebts,
    debts,
    setDebts,
  })

  return (
    <DebtsContext.Provider value={getContext()}>
      {children}
    </DebtsContext.Provider>
  )
}
import React, { FC, ReactNode, useState } from "react"
import { api } from "../../api/api"
import { getFilteredDebts, getTopDebts } from "../../api/routes"
import { DebtDataModel, DebtsContextData } from "./DebtsProvider.types"

export const DebtsContext = React.createContext<DebtsContextData>({} as DebtsContextData)

export const DebtsProvider: FC<{children: ReactNode}> = ({ children }) => {
  const [initialDebts, setInitialDebts] = useState<DebtDataModel[]>([])
  const [debts, setDebts] = useState<DebtDataModel[]>([])

  const fetchTopDebts = async () => {
    try {
      const { data } = await api.request({
        ...getTopDebts
      })
      setInitialDebts(data)
      setDebts(data)
    } catch (error) {
      console.log(error)
    }
  }

  const filterDebts = async ({ debtsSearch }: any) => {
    try {
      if(debtsSearch.length < 3) {
        setDebts(initialDebts)
      } else {
        const { data } = await api.request({
          ...getFilteredDebts,
          data: {
            "NIP": debtsSearch,
            "Name": debtsSearch
          }
        })
        setDebts(data)
      }
    }
    catch (error) {
      console.log(error, "error")
    }
  }

  const getContext = () => ({
    initialDebts,
    setInitialDebts,
    debts,
    setDebts,
    fetchTopDebts,
    filterDebts,
  })

  return (
    <DebtsContext.Provider value={getContext()}>
      {children}
    </DebtsContext.Provider>
  )
}
import React, { FC, ReactNode, useState } from "react"
import { api } from "../../api/api"
import { getFilteredDebts, getTopDebts } from "../../api/routes"
import { DebtDataModel, DebtsContextData } from "./DebtsProvider.types"

export const DebtsContext = React.createContext<DebtsContextData>({} as DebtsContextData)

export const DebtsProvider: FC<{children: ReactNode}> = ({ children }) => {
  const [initialDebts, setInitialDebts] = useState<DebtDataModel[]>([])
  const [debts, setDebts] = useState<DebtDataModel[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchTopDebts = async () => {
    setError(null)
    try {
      const { data } = await api.request({
        ...getTopDebts
      })
      setInitialDebts(data)
      setDebts(data)
    } catch (error) {
      setError("Coś poszło nie tak, spróbuj później.")
    }
  }

  const filterDebts = async ({ debtsSearch }: any) => {
    setError(null)
    try {
      if(debtsSearch.length < 3 && !loading) {
        setDebts(initialDebts)
      } else {
        setLoading(true)
        const { data } = await api.request({
          ...getFilteredDebts,
          data: {
            "NIP": debtsSearch,
            "Name": debtsSearch
          }
        })
        setDebts(data)
        setLoading(false)
      }
    }
    catch (error) {
      setError("Coś poszło nie tak, spróbuj później.")
      setLoading(false)
    }
  }

  const getContext = () => ({
    initialDebts,
    setInitialDebts,
    debts,
    setDebts,
    fetchTopDebts,
    filterDebts,
    loading,
    error,
  })

  return (
    <DebtsContext.Provider value={getContext()}>
      {children}
    </DebtsContext.Provider>
  )
}
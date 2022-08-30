import React, { useState } from "react"
import { useDebts } from "../../hooks/useDebts"
import { DebtDataModel } from "../../utils/debtsContext/DebtsProvider.types"

type SortingFieldsTypes = "Name" | "NIP"

export const useDebtsUtils = () => {
  const { debts, setDebts } = useDebts()
  const [ascending, setAreAscending] = useState(true)

  const nameSequence = [
    () => sortRecords("Name"),
    () => sortRecords("Name", true),
  ]

  const nipSequence = [
    () => sortRecords("NIP"),
    () => sortRecords("NIP", true),
  ]

  const sortRecords = (columnName: SortingFieldsTypes, desc = false): void => {
    let sorted: DebtDataModel[] = []

    switch(columnName) {
      case "Name":
        desc ? setAreAscending(false) : setAreAscending(true)
        
        sorted = [...debts].sort((a, b) => {
          const textA = a.Name.toUpperCase()
          const textB = b.Name.toUpperCase()
          return (textA < textB) ? -1 : (textA > textB) ? 1 : 0
        })
        break
      case "NIP":
        sorted = [...debts].sort((a, b) => Number(a.NIP) - Number(b.NIP))
        break    
    }

    desc && sorted.reverse()

    setDebts(sorted)
  }

  const nextMethod = (sequence: { (): void }[], current: number, setCurrent: any) => {
    const next = current + 1
    setCurrent(next)
    if(current >= sequence.length-1) {
      setCurrent(0)
    }
    
    sequence[current]()
  }
  
  return {
    nameSequence,
    nipSequence,
    ascending,
    nextMethod,
  }
}

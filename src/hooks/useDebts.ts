import { useContext } from "react"
import { DebtsContext } from "../utils/debtsContext/DebtsProvider"
import { DebtsContextData } from "../utils/debtsContext/DebtsProvider.types"

export const useDebts = (): DebtsContextData => useContext<DebtsContextData>(DebtsContext)
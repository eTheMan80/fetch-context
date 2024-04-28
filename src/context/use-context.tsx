import { Dispatch, PropsWithChildren, useReducer } from "react"
import { ActionTypes, initialState, InitialState, reducer } from "../reducer"
import { createContext } from "./create-context"

type AppContextState = {
  state: InitialState
  dispatch: Dispatch<ActionTypes>
}

const [useAppContext, ContextProvider] = createContext<AppContextState>()

export const useContext = useAppContext

export const AppProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <ContextProvider value={{ state, dispatch }}>{children}</ContextProvider>
  )
}

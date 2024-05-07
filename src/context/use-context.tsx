import { Dispatch, PropsWithChildren, useReducer } from "react"
import { ActionTypes, initialState, InitialState, reducer } from "../reducer"
import { createStateContext, createDispatchContext } from "./create-context"

type StateContextState = {
  state: InitialState
}
type DispatchContextState = {
  dispatch: Dispatch<ActionTypes>
}

const [useStateContext, StateContextProvider] =
  createStateContext<StateContextState>()
const [useDispatchContext, DispatchContextProvider] =
  createDispatchContext<DispatchContextState>()

export const useStateAppContext = useStateContext
export const useDispatchAppContext = useDispatchContext

export const AppProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <DispatchContextProvider value={{ dispatch }}>
      <StateContextProvider value={{ state }}>{children}</StateContextProvider>
    </DispatchContextProvider>
  )
}

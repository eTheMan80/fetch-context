import React from "react"

export const createStateContext = <T extends object>() => {
  const Context = React.createContext<T | undefined>(undefined)

  const useStateContext = () => {
    const ctx = React.useContext(Context)

    if (ctx === undefined) {
      throw new Error(
        "useStateContext should be used within a Provider and a value must be provided",
      )
    }
    return ctx
  }

  return [useStateContext, Context.Provider] as const
}
export const createDispatchContext = <T extends object>() => {
  const Context = React.createContext<T | undefined>(undefined)

  const useDispatchContext = () => {
    const ctx = React.useContext(Context)

    if (ctx === undefined) {
      throw new Error(
        "useDispatchContext should be used within a Provider and a value must be provided",
      )
    }
    return ctx
  }

  return [useDispatchContext, Context.Provider] as const
}

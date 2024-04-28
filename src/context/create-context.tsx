import React from "react"

export const createContext = <T extends object>() => {
  const Context = React.createContext<T | undefined>(undefined)

  const useContext = () => {
    const ctx = React.useContext(Context)

    if (ctx === undefined) {
      throw new Error(
        "useContext should be used within a Provider and a value must be provided",
      )
    }
    return ctx
  }

  return [useContext, Context.Provider] as const
}

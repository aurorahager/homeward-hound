'use client'

import { createContext, ReactNode, useContext, useMemo, useState } from 'react'

interface FavDogsContextType {
  faves: string[]
  setFaves: React.Dispatch<React.SetStateAction<string[]>>
}

const FaveDogsContext = createContext<FavDogsContextType | undefined>(undefined)

export function FavDogsProvider({
  children,
}: {
  children: ReactNode
}): JSX.Element {
  const [faves, setFaves] = useState<string[]>([])

  const value: FavDogsContextType = useMemo(
    () => ({ faves, setFaves }),
    [faves, setFaves],
  )

  return (
    <FaveDogsContext.Provider value={value}>
      {children}
    </FaveDogsContext.Provider>
  )
}

export const useFaveDogs = (): FavDogsContextType => {
  const context = useContext(FaveDogsContext)
  if (context === undefined) {
    throw new Error('useFaveDogs must be used within a FavDogsProvider')
  }
  return context
}

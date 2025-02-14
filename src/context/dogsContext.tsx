'use client'

import { createContext, ReactNode, useContext, useReducer } from 'react'

interface DogState {
  favoriteIds: string[]
  matchId: string | null
  isAuthenticated: boolean
  query: string,
  prevPage: string,
  nextPage: string,
}

type DogAction =
  | { type: 'SET_FAVORITE'; payload: string }
  | { type: 'REMOVE_FAVORITE'; payload: string }
  | { type: 'SET_MATCH'; payload: string | null }
  | { type: 'SET_AUTH'; payload: boolean }
  | { type: 'SET_SEARCH_QUERY'; payload: string }
  | { type: 'SET_NEXT_PAGE'; payload: string }
  | { type: 'SET_PREV_PAGE'; payload: string }

const initialState: DogState = {
  favoriteIds: [],
  matchId: null,
  isAuthenticated: false,
  prevPage: '',
  nextPage: '',
  query: '',
}

const dogReducer = (state: DogState, action: DogAction): DogState => {
  switch (action.type) {
    case 'SET_FAVORITE':
      return {
        ...state,
        favoriteIds: state.favoriteIds.includes(action.payload)
          ? state.favoriteIds.filter((id) => id !== action.payload)
          : [...state.favoriteIds, action.payload],
      }
    case 'SET_MATCH':
      return { ...state, matchId: action.payload }
    case 'SET_AUTH':
      return { ...state, isAuthenticated: action.payload }
    case 'SET_PREV_PAGE':
      return { ...state, prevPage: action.payload }
    case 'SET_NEXT_PAGE':
      return { ...state, nextPage: action.payload }
    case 'SET_SEARCH_QUERY':
      return { ...state, query: action.payload }
    default:
      return state
  }
}

const DogContext = createContext<
  { state: DogState; dispatch: React.Dispatch<DogAction> } | undefined
>(undefined)

export function DogProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(dogReducer, initialState)

  return (
    <DogContext.Provider value={{ state, dispatch }}>
      {children}
    </DogContext.Provider>
  )
}

export const useDogContext = () => {
  const context = useContext(DogContext)
  if (!context) {
    throw new Error('useDogContext outside of the DogProvider')
  }
  return context
}

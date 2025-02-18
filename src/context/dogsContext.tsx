'use client'

import React, {
  ReactNode,
  createContext,
  useContext,
  useMemo,
  useReducer,
} from 'react'

import { Context, DogAction, DogState } from '@/types/ui'

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
    case 'SET_PAGES':
      return {
        ...state,
        prevPage: action.payload.prev,
        nextPage: action.payload.next,
      }
    case 'SET_SEARCH_QUERY':
      return { ...state, query: action.payload }
    case 'LOGIN':
      return { ...state, isAuthenticated: true }
    case 'LOGOUT':
      return { ...state, isAuthenticated: false }
    default:
      return state
  }
}

const DogContext = createContext<
  { state: DogState; dispatch: React.Dispatch<DogAction> } | undefined
>(undefined)

export function DogProvider({ children }: { children: ReactNode }): ReactNode {
  const [state, dispatch] = useReducer(dogReducer, initialState)

  const value = useMemo(() => ({ state, dispatch }), [state, dispatch])
  return <DogContext.Provider value={value}>{children}</DogContext.Provider>
}

export const useDogContext = (): Context => {
  const context = useContext(DogContext)
  if (!context) {
    throw new Error('useDogContext outside of the DogProvider')
  }
  return context
}

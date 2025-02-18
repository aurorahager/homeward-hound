export interface SearchFormValues {
  breeds: (string | undefined)[]
  ageMin: number | null
  ageMax: number | null
  sort: string
}

export interface DogState {
  favoriteIds: string[]
  matchId: string | null
  isAuthenticated: boolean
  query: string
  prevPage: string
  nextPage: string
}

export type DogAction =
  | { type: 'SET_FAVORITE'; payload: string }
  | { type: 'SET_MATCH'; payload: string | null }
  | { type: 'LOGIN' }
  | { type: 'LOGOUT' }
  | { type: 'SET_SEARCH_QUERY'; payload: string }
  | { type: 'SET_PAGES'; payload: { prev: string; next: string } }

export interface Context {
  state: DogState
  dispatch: React.Dispatch<DogAction>
}

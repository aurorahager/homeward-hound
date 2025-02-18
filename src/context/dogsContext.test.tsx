import { DogState, DogAction } from '@/types/ui'
import { describe, it, expect } from '@jest/globals'

import { dogReducer } from './dogsContext'

describe('dogReducer', () => {
  const initialState: DogState = {
    favoriteIds: [],
    matchId: null,
    isAuthenticated: false,
    prevPage: '',
    nextPage: '',
    query: '',
  }

  it('should add a favorite ID if it does not exist', () => {
    const action: DogAction = { type: 'SET_FAVORITE', payload: '123' }
    const newState = dogReducer(initialState, action)

    expect(newState.favoriteIds).toContain('123')
  })

  it('should remove a favorite ID if it exists', () => {
    const stateWithFavorite = { ...initialState, favoriteIds: ['123'] }
    const action: DogAction = { type: 'SET_FAVORITE', payload: '123' }
    const newState = dogReducer(stateWithFavorite, action)

    expect(newState.favoriteIds).not.toContain('123')
  })

  it('should set the match ID', () => {
    const action: DogAction = { type: 'SET_MATCH', payload: '456' }
    const newState = dogReducer(initialState, action)

    expect(newState.matchId).toBe('456')
  })

  it('should set pagination pages', () => {
    const action: DogAction = {
      type: 'SET_PAGES',
      payload: { prev: 'prevPage', next: 'nextPage' },
    }
    const newState = dogReducer(initialState, action)

    expect(newState.prevPage).toBe('prevPage')
  })

  it('should set search query', () => {
    const action: DogAction = {
      type: 'SET_SEARCH_QUERY',
      payload: 'breed:labrador',
    }
    const newState = dogReducer(initialState, action)

    expect(newState.query).toBe('breed:labrador')
  })

  it('should set isAuthenticated to true on login', () => {
    const action: DogAction = { type: 'LOGIN' }
    const newState = dogReducer(initialState, action)

    expect(newState.isAuthenticated).toBe(true)
  })

  it('should set isAuthenticated to false on logout', () => {
    const stateWithAuth = { ...initialState, isAuthenticated: true }
    const action: DogAction = { type: 'LOGOUT' }
    const newState = dogReducer(stateWithAuth, action)

    expect(newState.isAuthenticated).toBe(false)
  })

  it('should return the current state for unknown action types', () => {
    const action = { type: 'UNKNOWN_ACTION', payload: {} } as any
    const newState = dogReducer(initialState, action)

    expect(newState).toBe(initialState)
  })
})

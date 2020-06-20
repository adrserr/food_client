import { Action } from '../action'

export interface AuthState {
  user: string
}

const defaultState: AuthState = {
  user: 'Doña Benita'
}

export default function reducer(state = defaultState, action: Action) {
  switch (action.type) {
    default:
      return state
  }
}

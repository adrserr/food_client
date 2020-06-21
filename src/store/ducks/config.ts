import { Action } from '../action'
import mergeDeepRight from 'ramda/src/mergeDeepRight'
import { Dispatch } from 'redux'

const CHANGE_LANGUAGE = 'config/CHANGE_LANGUAGE'

type Language = 'es' | 'en'
export interface ConfigState {
  language: Language
}

const defaultState: ConfigState = {
  language: 'es'
}

export default function reducer(state = defaultState, action: Action) {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return mergeDeepRight(state, { language: action.payload })
    default:
      return state
  }
}

export function changeLanguage(dispatch: Dispatch, language: Language = 'es') {
  return dispatch({ type: CHANGE_LANGUAGE, payload: language })
}

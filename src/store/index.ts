import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import * as reducers from './ducks/index'

export const rootReducer = combineReducers(reducers)

const middleware = [thunk]

const store = createStore(rootReducer, applyMiddleware(...middleware))

export default store

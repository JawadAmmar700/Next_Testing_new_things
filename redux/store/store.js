import { createStore } from 'redux'
import { combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import UserReducer from '../ReduxSlice/UserSlice'
import CounterSlice from '../ReduxSlice/CounterSlice'

const Allreducers = combineReducers({ User: UserReducer, count: CounterSlice })

const middleware = [thunk]

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose

const enhancer = composeEnhancers(applyMiddleware(...middleware))

const Store = createStore(Allreducers, enhancer)

export default Store

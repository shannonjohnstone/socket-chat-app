import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers'

const middleware = []

const composeEnhancers = (process.env.NODE_ENV !== 'production') ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose
const enhancers = composeEnhancers(applyMiddleware(...middleware))

export default function configureStore(initialState = {}) {
  const store = createStore(rootReducer, initialState, enhancers)

  if (module.hot) module.hot.accept('../reducers', () => store.replaceReducer(require('../reducers')))

  return store
}

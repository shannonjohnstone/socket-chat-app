import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers'

const middleware = []

// const enhancer = compose(applyMiddleware(...middleware))
const enhancer = compose(applyMiddleware(
  ...middleware),
  process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default function configureStore(initialState = {}) {
  const store = createStore(rootReducer, initialState, enhancer)

  if (module.hot) {
    module.hot.accept('../reducers', () => store.replaceReducer(require('../reducers')))
  }

  return store
}



import { applyMiddleware, createStore } from 'redux'
import { moviesReduer } from './Reducer/moviesReducer'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(moviesReduer, composeWithDevTools(applyMiddleware(thunk)))

export default store
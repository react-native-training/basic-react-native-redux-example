// reducers/index.js

import { combineReducers } from 'redux'
import people from './people'

const rootReducer = combineReducers({
    people
})

export default rootReducer
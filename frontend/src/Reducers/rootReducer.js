import { combineReducers } from 'redux'
import { explanationsReducer } from './explanationsReducer'
import { usersReducer } from './usersReducer'

// create keys inside the store that will return the values of my reducers
export const rootReducer = combineReducers({
    users: usersReducer,
    explanations: explanationsReducer
})
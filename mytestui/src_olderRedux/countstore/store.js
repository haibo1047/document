import {combineReducers} from 'redux'
import {configureStore} from '@reduxjs/toolkit'

import count_reducer from './count_reducer'
import person_reducer from './person_reducer'

const combined_reducer = combineReducers({
    count: count_reducer,
    people: person_reducer
})
export default configureStore({
    reducer: combined_reducer
})

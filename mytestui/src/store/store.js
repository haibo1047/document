import {combineReducers} from 'redux'
import {configureStore} from '@reduxjs/toolkit'
import reducer_tabs from './tabs/reducer_tabs'
import reducer_selected  from './tabs/reducer_selected'

const union = combineReducers({
    tabdata: reducer_tabs,
    selected: reducer_selected
})

export default  configureStore({
    reducer: union
})
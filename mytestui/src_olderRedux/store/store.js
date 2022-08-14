import {combineReducers} from 'redux'
import {configureStore} from '@reduxjs/toolkit'
import reducer_tabs from './tabs/reducer_tabs'

const union = combineReducers({
    appPanels: reducer_tabs
})

export default  configureStore({
    reducer: reducer_tabs
})
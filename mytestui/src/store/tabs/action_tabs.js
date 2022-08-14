import {ACTION_ADDTAB, ACTION_DELETETAB, ACTION_TAB_SELECTED, ACTION_TAB_POSITION} from '../../constant'

export const action_addtab = (data)=>{
    return {
        type: ACTION_ADDTAB,
        data: data
    }
}

export const action_deletetab = (data) =>{
    return {
        type: ACTION_DELETETAB,
        data
    }
}
export const action_selectTab = (data) =>{
    return {
        type: ACTION_TAB_SELECTED,
        data
    }
}
export const action_tabPosition = (data) =>{
    return {
        type: ACTION_TAB_POSITION,
        data
    }
}
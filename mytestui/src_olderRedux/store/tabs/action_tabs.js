import {ACTION_ADDTAB, ACTION_DELETETAB} from '../../constant'

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
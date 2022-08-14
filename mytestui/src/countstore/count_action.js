import {ACTION_ADD, ACTION_MINUS} from '../constant'

export const action_add = (data) =>{
    return {type: ACTION_ADD, data: data}
}

export const action_minus = (data) =>{
    return {type: ACTION_MINUS, data}
}
import {action_addtab,action_deletetab} from './action_tabs'
import {ACTION_ADD,ACTION_ADDTAB,ACTION_DELETETAB} from '../../constant'

export default function reducer_tabs(preState=[], action){
    const {type, data} = action;
    switch (type) {
        case ACTION_ADDTAB:
            return [...preState, data];
        case ACTION_DELETETAB:
            // return preState.filter(
            //     (item) =>{
            //         return item.id === data.id
            //     }
            // );
            return [];
        default:
            return preState;
    }
}
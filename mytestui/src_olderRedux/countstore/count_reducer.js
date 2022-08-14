import {ACTION_ADD, ACTION_MINUS} from '../constant'

export default function count_reducer(preState = 0, action) {
    const {type,data} = action
    switch (type) {
        case ACTION_ADD:
            return preState + data;
        case ACTION_MINUS:
            return preState - data;
        default:
            return preState;
    }

}

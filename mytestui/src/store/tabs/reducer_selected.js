import {ACTION_TAB_SELECTED, ACTION_TAB_POSITION} from '../../constant'

const initValue = {selectedKey: 0, tabPosition: 'top'}
export default function reducer_selected(preState= initValue, action) {
    const {type, data } = action
    switch (type) {
        case ACTION_TAB_SELECTED:
            return {...preState, selectedKey: data.selectedKey};
        case ACTION_TAB_POSITION:
            return {...preState, tabPosition: data.tabPosition};
        default:
            return preState;
    }
}

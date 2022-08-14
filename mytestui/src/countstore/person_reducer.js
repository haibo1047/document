import {ACTION_NEW_PERSON} from '../constant'
import {nanoid} from 'nanoid'

const initPerson = {id: nanoid(),  name:"zhang3"}

export default function person_reducer(preState=[initPerson], action) {
    const {type, data} = action
    switch (type) {
        case ACTION_NEW_PERSON:
            return [data, ...preState]
        default:
            return preState
    }
}

import {ACTION_NEW_PERSON} from '../constant'


export const action_person= (person) =>{
    return {type: ACTION_NEW_PERSON, data: person}
}
import { Button } from 'antd/lib/radio'
import React from 'react'
import {connect} from 'react-redux'

import { nanoid } from 'nanoid'

import {action_person} from './countstore/person_action'
import {ACTION_NEW_PERSON} from './constant'

function ReactReduxPerson(props) {
    console.log('person props:', props)
    function handleNew(){
        props.ACTION_NEW_PERSON({id: nanoid(), name: 'li4'})
    }
    return (
        <>
            <div>ReactReduxPerson</div>
            <div>reading other component state : {props.count}</div>
            <Button onClick={handleNew}>new person</Button>

            <h2>list({props.people.length}):</h2>
            <ul>
                {
                    props.people.map((p)=>{
                        return <li key={p.id}>{p.name}</li>
                    })
                }
            </ul>
        </>
    )
}

function mapStateToProps(state){
    return {
        people: state.people,
        count: state.count
    }
}
function mapDispatchToProps(dispatch){
    return {
        ACTION_NEW_PERSON: (person) =>{
            dispatch(action_person(person))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReactReduxPerson)
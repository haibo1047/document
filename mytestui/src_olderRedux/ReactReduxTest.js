import React from 'react'

import {connect} from 'react-redux'

import {action_add,action_minus} from './countstore/count_action'
import {ACTION_ADD,ACTION_MINUS} from './constant'
import { Button } from 'antd'

function ReactReduxTest(props) {
    function handleAdd(){
        props.ACTION_ADD(10)
    }
    function handleMinux(){
        props.ACTION_MINUS(5)
    }
    return (
        <>
            <div>ReactReduxTest : {props.count}</div>
            <div>reading other component state : {props.people.length}</div>
            <Button onClick={handleAdd}>add 10</Button>
            <Button onClick={handleMinux}>minus 5 </Button>
        </>
    )
}

function mapStateToProps(state){
    return {
        count: state.count,
        people: state.people
    }
}
function mapDispatchToProps(dispatch){
    return {
        ACTION_ADD: (num)=>{
            return dispatch(action_add(num))
        },
        ACTION_MINUS: (num)=>{
            return dispatch(action_minus(num))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReactReduxTest)

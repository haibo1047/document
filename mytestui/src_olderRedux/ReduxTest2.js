import React from 'react'

import { useEffect, useState } from 'react'
import { Button } from 'antd'

import store from './countstore/store'
import {action_add,action_minus} from './countstore/count_action'

export default function ReduxTest2() {
    const [cnt, setCnt] = useState(0)

    useEffect(()=>{
        store.subscribe(
            ()=>{
                setCnt(cnt+1)
            }
        )
        console.log(cnt)
    },)

    function handleAdd(){
        store.dispatch(action_add(1))
    }
    function handleMinux(){
        store.dispatch(action_minus(1))
    }
    return (
        <>
            <div>Redux{cnt}Test: {store.getState()}</div>
            <Button onClick={handleAdd}>add</Button>
            <Button onClick={handleMinux}>minus</Button>
        </>
    )
}

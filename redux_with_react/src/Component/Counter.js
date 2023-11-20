import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DecrementCounter, IncrementCounter, ResetCount } from '../ReduxServices/Action/Action'

const Counter = () => {
    const count=useSelector(State=>State.count)
    const dispatch=useDispatch()

    const handleIncrement=()=>{
        dispatch(IncrementCounter())
    }
    const handleDecrement=()=>{
        dispatch(DecrementCounter())
    }
    const handleReset=()=>{
        dispatch(ResetCount())
    }
  return (
    <div>
        <h1>Counter App</h1>
        <h3>count: {count}</h3>
        <button onClick={handleIncrement()}>increment</button>
        <button onClick={handleDecrement()}>decrement</button>
        <button onClick={handleReset()}>reset</button>
    </div>
  
  )
}

export default Counter
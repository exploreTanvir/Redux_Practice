// REDUX follow 4 step
// 1. state
// 2. action
// 3. reduce 
// 4. store

const {createStore}=require("redux")


// Define Constent
const Increment="INCREMENT"
const Decrement="DECREMENT"
const Reset="RESET"

// 1. State 

const initialCounterState={
    count:0
}

// Action action is a object there is 2 important thing that is type and payload


// 2.Action

// Increment
const IncrementCount=()=>{
    return{
        type:Increment
    }
}
const DecrementCount=()=>{
    return{
        type:Decrement
    }
}
const ResetCount=()=>{
    return{
        type:Reset
    }
}

// 3.Reducer
const counterReducer=(state=initialCounterState,action)=>{
    switch (action.type) {
        case Increment:
            return {
                count:state.count+1
            }
            break;
        case Decrement:
            return{
                count:state.count-1
            }
            break;
        case Reset:
            return{
                count:0
            }
            break;
    
        default:
            state;
    }
}

// Store--getState(),dispatch(),subscribe()

const Store=createStore(counterReducer)
Store.subscribe(()=>{
    console.log(Store.getState())
})
Store.dispatch(IncrementCount())
Store.dispatch(DecrementCount())
Store.dispatch(ResetCount())
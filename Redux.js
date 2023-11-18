// step=>> state>> action>> reduce>> store
const {createStore}=require("redux")

const initialState={
    count:0
}

const Increment="Increment"
const Decrement="Decrement"
const Reset="Reset"

const IncrementCount=()=>{
    return {
        type:Increment
    }
}
const DecrementCount=()=>{
    return {
        type:Decrement
    }
}
const ResetCount=()=>{
    return {
        type:Reset
    }
}

const countReducer=((state=initialState,action)=>{
    switch (action.type) {
        case Increment:
            return {
                count:state.count+2
            }
            break;
        case Decrement:
            return {
                count:state.count-1
            }
            break;
        case Reset:
            return {
                count:0
            }
            break;
    
        default:
            break;
    }
})

const Store=createStore(countReducer)

Store.subscribe(()=>{
    console.log(Store.getState())
})

Store.dispatch(IncrementCount())
Store.dispatch(DecrementCount())
Store.dispatch(ResetCount())
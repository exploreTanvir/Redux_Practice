const {DECREMENT, RESET, INCREMENT } = require("../Constants/Constants")

export const IncrementCounter=()=>{
    return{
        type:INCREMENT
    }
}
export const DecrementCounter=()=>{
    return{
        type:DECREMENT
    }
}
export const ResetCount=()=>{
    return{
        type:RESET
    }
}
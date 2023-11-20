const { IncrementCounter } = require("../Action/Action");
const { INCREMENT, DECREMENT, RESET } = require("../Constants/Constants");
const { CounterState } = require("../State/CounterState");

export const counterReducer=(State=CounterState,action)=>{
        switch (action.type) {
            case INCREMENT:
                return{
                    count: State.count+1
                }
                break;
            case DECREMENT:
                return{
                    count: State.count-1
                }
                break;
            case RESET:
                return{
                    count: 0
                }
                break;
        
            default:
                return State
                break;
        }
}
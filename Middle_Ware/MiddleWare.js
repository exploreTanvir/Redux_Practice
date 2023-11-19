const {createStore,applyMiddleware}=require("redux")
const { default: logger } = require("redux-logger")
// State
const userState={
    user:["Tanvir"],
    count:1
}

// constant
const addUser="ADDUSER"

// action
const add_user=(user)=>{
    return {
        type:addUser,
        payload:user
    }
}

// Reduce
const userReduce=((State=userState,action)=>{
    switch (action.type) {
        case addUser:
            return {
                user:[...State.user,action.payload],
                count: State.count+1
            }
            break;
    
        default:
            break;
    }
})

// Store

const Store=createStore(userReduce,applyMiddleware(logger))
Store.subscribe(()=>{
    console.log(Store.getState())
})
Store.dispatch(add_user("Raju"))
const {createStore}=require("redux")
// State
const userState={
    user:["Tanvir"]
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
                user:[...State.user,action.payload]
            }
            break;
    
        default:
            break;
    }
})

// Store

const Store=createStore(userReduce)
Store.subscribe(()=>{
    console.log(Store.getState())
})
Store.dispatch(add_user("Raju"))
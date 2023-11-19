// Product 

const { createStore, combineReducers } = require("redux")
const Get_products="Get_products"
const Add_product="Add_product"
const Get_Cart="Get_Cart"
const Add_Cart="Add_Cart"
// state
const productState={
    product:["sugar","Oil"],
    count:2
}


// action
const GetProduct=()=>{
    return{
        type:Get_products
    }
}
const AddProduct=(product)=>{
    return{
        type:Add_product,
        payload:product
    }
}

// product reducer
const productReducer=((State=productState,action)=>{
        switch (action.type) {
            case Get_products:
                return {
                    ...State
                }
                break;
            case Add_product:
                return {
                    product:[...State.product,action.payload],
                    numberOfProduct:State.count+1
                }
                break;
        
            default:
                break;
        }
})

// Cart 

// State
const cartState={
    cart:["sugar"],
    count:1
}
const GetCart=()=>{
    return{
        type:Get_Cart
    }
}
const AddCart=(item)=>{
    return{
        type:Add_Cart,
        payload:item
    }
}

// Reducer

const CartReducer=((State=cartState,action)=>{
    switch (action.type) {
        case Get_Cart:
            return{
                ...State
            }
            break;
        case Add_Cart:
            return{
                cart:[...State.cart,action.payload],
                count:State.count+1
            }
            break;
    
        default:
            break;
    }
})

// Multiple Reducer
const rootReducer=combineReducers({
    productR:productReducer,
    cartR:CartReducer
})



// Store
const Store=createStore(rootReducer)
Store.subscribe(()=>{
    console.log(Store.getState())
})

Store.dispatch(GetProduct())
Store.dispatch(AddProduct("salt"))
Store.dispatch(GetCart())
Store.dispatch(AddCart("salt"))
const { createStore } = require("redux");
const { counterReducer } = require("../Reduces/Reducer");

export const Store=createStore(counterReducer)
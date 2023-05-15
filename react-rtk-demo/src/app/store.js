const configureStore=require('@reduxjs/toolkit').configureStore
const { useReducer } = require('react');
const cakeReducer=require('../features/cake/cakeslice');
const icecreamReducer=require('../features/icecream/icecreamslice');


const store=configureStore({
    reducer:{
        cake:cakeReducer,
        icecream:icecreamReducer,
        user:useReducer
    },
})

module.exports =store;
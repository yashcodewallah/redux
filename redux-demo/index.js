const redux=require('redux')



const createStore=redux.legacy_createStore
const bindActionCreaters=redux.bindActionCreators
const combine_reducer=redux.combineReducers


const CAKE_ORDERED='CAKE_ORDERED';
const MAKE_CAKE='MAKE_CAKE';
const ICECREAM_ORDERED='ICECREAM_ORDERED';
const MAKE_ICECREAM='MAKE_ICECREAM';

const initial_state={
    numberOfCakes:10,
    numberOfIcecreams:20,
}

function order_cake(qty){
    return {
        type:CAKE_ORDERED,
        payload:qty,
    }
}

function order_icecream(qty){
    return {
        type:ICECREAM_ORDERED,
        payload:qty
    }
}

function make_icecream(qty){
    return {
        type:MAKE_ICECREAM,
        payload:qty,
    }
}

function make_cake(qty){
    return{
        type:MAKE_CAKE,
        payload:qty,
    }
}


const cake_reducer=(state=initial_state,action)=>{
   switch(action.type){
    case CAKE_ORDERED:{
        return{
            ...state,
            numberOfCakes:state.numberOfCakes-action.payload
    }
   }
   case MAKE_CAKE:{
    return{
        ...state,
        numberOfCakes:state.numberOfCakes+ action.payload
    }
   }
   default: return state
}
}

const icecream_reducer=(state=initial_state,action)=>{
    switch(action.type){
     case ICECREAM_ORDERED:{
         return{
             ...state,
             numberOfIcecreams:state.numberOfIcecreams-action.payload
     }
    }
    case MAKE_ICECREAM:{
     return{
         ...state,
         numberOfIcecreams:state.numberOfIcecreams+ action.payload
     }
    }
    default: return state
 }
 }

const root_reducer=combine_reducer({cake_reducer,icecream_reducer})

const store=createStore(root_reducer)
// console.log( store.getState())
const unsubscribe=store.subscribe(()=>console.log("updated state" , store.getState()));
// store.dispatch(make_cake());
// store.dispatch(order_cake());
// store.dispatch(order_cake());

actions=bindActionCreaters({order_cake,make_cake,order_icecream,make_icecream},store.dispatch)
actions.order_cake(5)
store.getState()
actions.make_cake(2)
actions.make_icecream(14)
actions.order_icecream(11)

unsubscribe()
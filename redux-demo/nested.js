
const redux=require("redux")
const create_store=redux.legacy_createStore
const produce=require("immer").produce;
const applyMiddleware=redux.applyMiddleware;


const redux_logger=require("redux-logger")
const logger=redux_logger.createLogger()


const initial_state={
    name:"yash",
    address:{
        street:"M- 136",
        city:"new delhi",
        state:"Delhi"
    }
}

const STREET_UPDATE="STREET_UPDATE";
function update_street(string){
    return{
        type:STREET_UPDATE,
        payload:string
    }
}

const reducer=(state=initial_state,action)=>{
switch(action.type){
case STREET_UPDATE:{
    // return{
    //     ...state,
    //     address:{
    //         ...state.address,
    //         street:action.payload
    //     }
    // }
    return produce(state,(draft)=>{
        draft.address.street=action.payload
    })
}
default:{
    return state
}
}   
}
const store=create_store(reducer,applyMiddleware(logger));

const unsubscribe=store.subscribe(()=>{});

store.dispatch(update_street("mumbai"));
store.dispatch(update_street("hapur"));
store.dispatch(update_street("this is not a string"));
store.dispatch(update_street("yes you are right mister yash sharma"));

unsubscribe();



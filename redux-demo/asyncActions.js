const redux=require('redux')
const applyMiddleware=redux.applyMiddleware
const thunkMiddleware=require('redux-thunk').default
const axios=require('axios')


const create_store=redux.legacy_createStore

const initial_state={
    loading:true,
    users:[],
    error:'',
}

const FETCH_USER_REQUESTED='FETCH_USER_REQUESTED';
const FETCH_USER_SUCCEEDED='FETCH_USER_SUCCEEDED';
const FETCH_USER_FAILED='FETCH_USER_FAILED';

const fetchUsersRequest=()=>{
    return{
        type:FETCH_USER_REQUESTED,
    }
}

const fetchUsersSucceed=(users)=>{
    return{
        type:FETCH_USER_SUCCEEDED,
        payload:users
    }
}

function fetchUsersFailed(error){
    return{
        type:FETCH_USER_FAILED,
        payload:error
    }
}


const reducer=(state=initial_state,action)=>{
switch(action.type){
    case FETCH_USER_REQUESTED:return{
        ...state,
        loading:true,
    }
    case FETCH_USER_SUCCEEDED:
        return{
        ...state,
        loading:false,
        users:action.payload,
    }
    case FETCH_USER_FAILED:return{
        ...state,
        loading:false,
        error:action.payload,
    }
    }
}

const fetchusers=()=>{
    return function(dispatch){
    axios.get("https://jsonplaceholder.typicode.com/users").then((response)=>{
        const users=response.data.map((user)=>user.id)
        dispatch(fetchUsersSucceed(users))
    }).catch((error)=> fetchUsersFailed(error))
}
}

const store=create_store(reducer,applyMiddleware(thunkMiddleware));



console.log(store.getState());
store.subscribe(()=>{console.log(store.getState())});
store.dispatch(fetchusers())


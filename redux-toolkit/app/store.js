import {configureStore} from '@reduxjs/toolkit';
import cakeReducer from '../features/cake/cakeslice';
import icecreamReducer  from '../features/icecream/icecreamslice';
import userReducer from '../features/users/userSlice';

export default  store=configureStore({
    reducer:{
        cake:cakeReducer,
        icecream:icecreamReducer,
        user:userReducer
    },
})


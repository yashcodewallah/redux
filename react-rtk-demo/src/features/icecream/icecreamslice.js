
import { ordered as cakeOrdered } from '../cake/cakeslice'

import {create_slice} from '@reduxjs/toolkit'


const initialState={
    numOficecream:20,
}
const icecream_slice=create_slice({
    name:'icecream',
    initialState,
    reducers:{
        ordered:(state)=>{
                state.numOficecream--
        },
         restocked:(state,action)=>{
            state.numOficecream+=action.payload
         }
    },
    extraReducers:(builder)=>{
        builder.addCase(cakeOrdered,state=>{
            state.numOficecream--;
        })
    }
}
)

export default icecream_slice.reducer
export const {ordered,restocked}=icecream_slice.actions
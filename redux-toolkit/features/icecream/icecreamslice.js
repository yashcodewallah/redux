
const { cakeActions } = require('../cake/cakeslice')

const create_slice=require('@reduxjs/toolkit').createSlice


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
    extraReducers:
        // ['cake/ordered']:(state)=>{
        //     state.numOficecream--;
        // }
        (builder)=>{
builder.addCase(cakeActions.ordered,state=>{
state.numOficecream--;
})
        }
    }
)

module.exports=icecream_slice.reducer
module.exports.icecreamActions=icecream_slice.actions
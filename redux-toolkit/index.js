const store=require('./app/store');
const cakeActions=require('./features/cake/cakeslice').cakeActions
const icecreamActions=require('./features/icecream/icecreamslice').icecreamActions
const fetchUsers=require('./features/users/userSlice').fetchUsers
console.log("initial state",store.getState());
const unsubscribe=store.subscribe(()=>console.log( "update state",store.getState()))

// store.dispatch(cakeActions.ordered());
// store.dispatch(icecreamActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(icecreamActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.restocked(3))
// store.dispatch(icecreamActions.restocked(25))

store.dispatch(fetchUsers())
// unsubscribe()
import React from 'react'
import { useSelector } from 'react-redux'


export default  function Cakeview(){
  
  const noOfCakes=useSelector((state)=>state.cake.noOfCakes)


  return (
    <div>
    <h2>number of cakes-{noOfCakes}</h2>
    <button>order cakes-</button>
    <button>restock cakes</button>
    </div>
  )
}

import React, {  useCallback, useState } from 'react'
import Component from '../Component'

function UseCallback() {
    const[prod ] = useState(["prod1" ,"prod2"])
    const [count , setCount] = useState(0)
    const[cart ,setCart] = useState(0)
  
    const addCart = useCallback(() => {
        setCart(cart +1 )
    },[cart]) 

  return (
    <div>
        <h1 style={{textAlign:"center"}}>UseCallBack Hooks</h1>
        {prod.map((p , i) =>{
           return  <Component name={p} key={i} addCart={addCart} />
        })}

        <button onClick={()=> setCount(count + 1)}>click me</button>
       <h3> count :{count}</h3>
       <h3>Cart for callBack:{cart}</h3>
      
    </div>
  )
}

export default UseCallback

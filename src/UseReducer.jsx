import React, { useReducer } from 'react'


function counterReducer(state , action ){

    switch(action.type){
        case "INCREMENT" : return {count : state.count +1}

        case "DECREMENT" : return { count : state.count-1}

        case "RESET" : return { count : 0}
        default : return state
    } 

}

function UseReducer() {

    const [state , dispatch] = useReducer(counterReducer , {count: 0 })
   
  return (
    <div className='align-items m-4'>
        <h1 className='text-center'>Use Reducer Method</h1>
        <p className='text-center h3 '>count {state.count}</p>

        <button className={"btn btn-primary m-3 "  }onClick={()=> {dispatch({type : "INCREMENT"})}}>Increament</button>
        <button  className={"btn btn-danger" } disabled={ state.count === 0} onClick={() => dispatch({type :"DECREMENT"})}>Decrement</button>
        <button className={"btn btn-secondary m-3" } onClick ={() => dispatch( {type:"RESET"})}>Reset</button>

    </div>
  )
}

export default UseReducer
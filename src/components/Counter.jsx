import React from 'react'
import {useState} from "react"

const Counter = () => {

    const [number, setNumber] = useState(0);
    function HandleCount(e){
        e.stopPropagation()
        console.log(number);
        setTimeout(() => {
            setNumber(number=>number+1)
        }, 2000);
        
    }

  return (
    <>
    <h1 style={{color:'white'}}>{number}</h1>
    <button onClick={HandleCount}>Count</button>
    </>
  )
}

export default Counter
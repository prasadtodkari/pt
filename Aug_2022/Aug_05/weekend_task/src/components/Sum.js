import React, { useState, useEffect } from 'react'

function Sum() {
    const[num1, setNum1] = useState('0');
    const[sum, setSum] = useState('');

    const firstHandler = (e => {
        setNum1(e.target.value);
    })

    const secondHandler = (e => {
        setNum2(e.target.value);
    })

    useEffect(_ =>{
        let sum = parseInt(num1) + parseInt(num2);
        setSum(sum);
    })
  return <>
    <div className='sum'>
        <input type="number" placeholder='First Amount' onKeyUp={firstHandler}></input>
        <input type="number" placeholder='Second Amount' onKeyUp={secondHandler}></input>
        <h2>{num1 ? sum : "Please enter amount"}</h2>
    </div>
    </>

}

export default Sum

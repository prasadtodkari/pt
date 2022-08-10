import axios from 'axios';
import React, { useState } from 'react'

function Dictionary() {
    const [searc, setSearch] = useState('');
    const [dict, setdict] = useState([]);
    const[phonetic, setphonetic] = useState([]);
    const[mean, setMean] = useState([]);
    

    const inputHandler = (e => {
        setSearch(e.target.value);
        
    })

    const clickHandler =(e => {
        const apidata = async _ =>{
        const details = await axios.get("https://api.dictionaryapi.dev/api/v2/entries/en/"+searc)
        setdict(details.data[0])
        setphonetic(details.data[0].phonetics[0])
        setMean(details.data[0].meanings[0].definitions)
        console.log(details.data[0].meanings[0])            
    }
    apidata();
})

  return <>
    <div className='search'>
        <input type="text" placeholder="Type here to search" onKeyUp={inputHandler}></input>
        <button onClick={clickHandler}>Search</button>
    </div>
    {!dict ? <h6>No Data found, type english words and click on search ...!! </h6> : 
    <div className='result'>
        <h4>Word Searched : {dict.word}</h4>
        <h4>phonetic: {phonetic.text}</h4>
        <audio src={phonetic.audio} controls></audio>
        <h2>below are some definations :</h2>
        {mean.map((e,idx) => {return <h4 key={idx}>{idx} - {e.definition}</h4>})}
        

    </div>}
    </>
}

export default Dictionary
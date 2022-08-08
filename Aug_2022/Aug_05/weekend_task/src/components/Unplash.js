import React, { useState } from 'react'
import axios from 'axios'

function Unplash() {
    const [list, setList] = useState([]);
    const [search, setSearch] = useState('');
    
    const handleChange = (e => {
        setSearch(e.target.value);
    })

    const handleClick = (e => {
        const apiData = async _ => {
            const data = await axios.get("https://api.unsplash.com/search/photos/?page=1&query="+search+"&client_id=g-rT0T3UMPJZyx01GhAz-Jyksmd0CGsNGIlpiePIKp0")
            setList(data.data.results);
        }
        apiData();
    })
   
  return <>
        <div>
            <input type="text" placeholder='  Search Images....' onChange={handleChange}></input>
            <button onClick={handleClick}>Search</button>
        </div>
        <div className='gal'>
            {list.map((singleUrl, idx) => {
            return <><img src={singleUrl.urls.thumb} alt="" key={idx}></img></>
            })}
        </div>
    </>  
    }

export default Unplash
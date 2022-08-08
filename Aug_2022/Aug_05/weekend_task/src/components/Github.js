import React, { useState } from 'react'
import axios from 'axios';

function Github() {
    const [git, setgit] = useState([]);
    const [search, setSearch] = useState('');
    
    const handleChange = (e => {
        setSearch(e.target.value);
    })

    const handleClick = (e => {
        const apiData = async _ => {
            const data = await axios.get("https://api.github.com/users/"+search)
            setgit(data.data);
            console.log(data.data)
        }
        apiData();   
    })

  return <>
        <div>
            <input type="text" placeholder='  Search Images....' onChange={handleChange}></input>
            <button onClick={handleClick}>Search</button>
        </div>
        <div>
           <img src={git.avatar_url} alt=""></img>
           <h3>Name : {git.name}</h3>
           <h3>UserName : {git.login}</h3>
           <p>Followers : {git.followers}</p>
           <p>WebSite : {git.blog}</p>
           
        </div>
  </>
}

export default Github

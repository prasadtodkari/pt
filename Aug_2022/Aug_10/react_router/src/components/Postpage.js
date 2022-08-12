import React, { useEffect, useState } from 'react'
import { useSearchParams, Link } from 'react-router-dom'

const Postpage = () => {
    const [searchId] = useSearchParams();
    const [selected, setSelected] = useState({});

    useEffect(_ => {
        const id = searchId.get('id');
        if(id !== undefined) {
          (async _ => {
            const resp = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
            const data = await resp.json();
            setSelected(data);
          })();
        }
    });

  return (
    <>
        <h1 className='pt-center pt-red'>Details of your selected POST</h1>
        <div className='pt-container pt-center'>
            <h2>{selected.title}</h2>
            <p>{selected.body}</p>
            <Link to='/'>
            <button className='pt-button pt-black pt-margin'>go Back</button>
            </Link>
        </div>
        


    </>
  )
}

export default Postpage
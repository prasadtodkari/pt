import React, { useEffect, useState } from 'react'
import { useSearchParams, Link } from 'react-router-dom'

const Comments = () => {
    const [searchId] = useSearchParams();
    const [comment, setcomment] = useState({});

    useEffect(_ => {
        const id = searchId.get('id');
        if(id !== undefined) {
          (async _ => {
            const resp = await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`);
            const data = await resp.json();
            setcomment(data);
          })();
        }
    });

  return (
    <>
        <h1 className='pt-center pt-text-green'>Comments of your selected POST</h1>
        <div className='pt-container pt-center'>
            <h2>{comment.name}</h2>
            <p className='pt-panel pt-pale-blue pt-leftbar pt-rightbar pt-border-blue'>{comment.body}</p>
            <p className='pt-tag pt-red'>{comment.email}</p><br></br>
            <Link to='/'>
            <button className='pt-button pt-black pt-margin'>go Back</button>
            </Link>
        </div>
        


    </>
  )
}

export default Comments
import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom';

const Posts = () => {
    const [post, setpost] = useState([]);
    
    useEffect(_ =>{
        (async _ => {
            const reps = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await reps.json();
            setpost(data);
        })();
    }, []);
  return (
    <>
        <h4 className='pt-center pt-text-purple'>All Posts from - JSON Place Holder</h4>
        <div className='pt-container w3-padding-32'>
            <div className='pt-row pt-center'>
                {post.map((list, idx) =>
                {
                   return <>
                    <div className='pt-card-4 pt-quarter pt-margin' key={idx}>
                        <h4 className='pt-text-grey pt-text-small'>Post Number : {list.id}</h4>
                        <p>{list.title}</p>
                        <Link to={`/selectedpost?id=${list.id}`}>
                            <button className='pt-button pt-green pt-hover-black pt-margin'>Posts</button>
                        </Link>
                        <Link to={`/comments?id=${list.id}`}>
                            <button className='pt-button pt-red pt-hover-black pt-margin'>Comments</button>
                        </Link>
                    </div>
                </>
            })}
            </div>
        </div>
    </>
  )
}

export default Posts
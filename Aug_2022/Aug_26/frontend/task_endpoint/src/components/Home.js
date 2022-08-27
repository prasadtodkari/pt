import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const Home = () => {
  const [details, setdetails] = useState({})

  useEffect(() => {
    (async _ => {
      const resp = await axios.get("http://localhost:3010/")
      setdetails(resp.data)
    })()
    
  })
  

  return (
    <>
      <header className="pt-display-container pt-wide pt-margin-top" style={{width:"100%", height:"500px"}}>
        <img className="pt-image" src={details.background} alt="iron Man" style={{width:"100%", height:"500px"}} />
          <div className="pt-display-bottomleft pt-padding-large">
            <h1 className="pt-xxlarge pt-text-white">{details.message}</h1>
          </div>
      </header>
    </>

  )
}

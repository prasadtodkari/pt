import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const Bio = () => {
  const [details, setdetails] = useState({})
  useEffect(() => {
      (async _ => {
          const resp = await axios.get("http://localhost:3010/bio")
          setdetails(resp.data)
      })()

  })
  return (
      <>
          <div className="pt-row" id="about">
          <div class="pt-col m8 pt-padding-large">
                  <h1 class="pt-center">{details.heading}</h1><br></br>
                      <h3 class="pt-center">{details.start}</h3>
                      <p className='pt-large'>{details.about}</p>
                      <p className='pt-large pt-text-grey pt-hide-medium'>{details.intro}</p>
              </div>

              <div className="pt-col m4 pt-padding-large pt-hide-small">
                  <img src={details.image} className="pt-round pt-image w3-opacity-min" alt="Table Setting" style={{width: "400px", height: "460px"}}  />
              </div>
          </div>

          <hr></hr>
      </>
  )
}

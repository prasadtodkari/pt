import React, { useState, useEffect } from 'react'
import axios from 'axios'

export const Email = () => {
  const [details, setdetails] = useState({})
  useEffect(() => {
    (async _ => {
      const resp = await axios.get("http://localhost:3010/contact")
      setdetails(resp.data)
    })()

  })
  return (
    <>
      <div className="pt-container pt-content pt-padding-64" style={{Width:"800px"}}>
        <h2 className="pt-wide pt-center">CONTACT</h2>
        <p className="pt-opacity pt-center"><i>Fan? Drop a note!</i></p>
        <div className="pt-row pt-padding-32">
          <div className="pt-col m6 pt-large pt-margin-bottom">
            <i className="fa fa-map-marker" style={{width:"30px"}}></i>{details.location}<br></br>
            <i className="fa fa-phone" style={{width:"30px"}}></i> Phone: {details.phone}<br></br>
              <i className="fa fa-envelope" style={{width:"30px"}}></i> Email: {details.email}<br></br>
          </div>
          <div className="pt-col m6">
            
              <div className="pt-row-padding" style={{margin:"0 -16px 8px -16px"}}>
                <div className="pt-half">
                  <input className="pt-input pt-border" type="text" placeholder="Name" required name="Name" />
                </div>
                <div className="pt-half">
                  <input className="pt-input pt-border" type="text" placeholder="Email" required name="Email" />
                </div>
              </div>
              <input className="pt-input pt-border" type="text" placeholder="Message" required name="Message" />
                <button className="pt-button pt-black pt-section pt-right" type="submit">SEND</button>
            
          </div>
        </div>
      </div>
    </>
  )
}

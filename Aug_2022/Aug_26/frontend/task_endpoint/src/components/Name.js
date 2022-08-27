import React, { useState, useEffect } from 'react'
import axios from 'axios'

export const Name = () => {
    const [details, setdetails] = useState({})
    useEffect(() => {
        (async _ => {
            const resp = await axios.get("http://localhost:3010/name")
            setdetails(resp.data)
        })()

    })
    return (
        <>
            <div className="pt-row" id="about">
                <div className="pt-col m4 pt-padding-large pt-hide-small">
                    <img src={details.image} className="pt-round pt-image w3-opacity-min" alt="Table Setting" style={{width: "400px", height: "460px"}}  />
                </div>

                <div class="pt-col m8 pt-padding-large">
                    <h1 class="pt-center">{details.heading}</h1><br></br>
                        <h5 class="pt-center">{details.start}</h5>
                        
                </div>
            </div>

            <hr></hr>
        </>
    )
}

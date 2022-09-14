import React, { useState} from 'react'
import { Link } from 'react-router-dom'

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    {
        let data={name, email, mobileNumber, password}
        const delay = ms => new Promise(res => setTimeout(res, ms));
      // console.warn(data);
        fetch("http://localhost:3005/add", {
          method: "POST",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body:JSON.stringify(data)
        }).then((resp)=>{
          // console.warn("resp",resp);;
          resp.json().then((result)=>{
            console.warn("result",result)
          })
        })
        await delay(3000);
      }
   }

    return (
        <>
            <section style={{ backgroundColor: '#508bfc' }}>
                <div>
                    <div>
                        <div>
                            <div style={{ borderRadius: '1rem' }}>
                                <div>
                                    <h1>Register</h1>
                                    <p>New User Registration</p>
                                    <form onSubmit={handleSubmit}>
                                    <div>
                                        <div>
                                            <input type="text" placeholder="Your Name" aria-label="Your Name" onChange={(e) => setName(e.target.value)} />
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <input type="number" placeholder=' Enter your Number' onChange={(e) => setMobileNumber(e.target.value)} />
                                    </div>

                                    <div>
                                        <input type="email" placeholder=' Enter your email' onChange={(e) => setEmail(e.target.value)}/>
                                    </div>

                                    <div>
                                        <input type="password" placeholder='Enter your Password' onChange={(e) => setPassword(e.target.value)}/>
                                    </div>

                                    <div>
                                        <input type="checkbox" value="" id="form1Example3" />
                                        <label> I agree all terms and conditions </label>
                                    </div>
                                    <button type="submit" style={{backgroundColor: "orangered"}}>Register</button>
                                    </form>
                                
                                    <hr className="my-2" />

                                    <label>Already have an account.? go to Login Page</label><br></br>
                                    <Link style={{ backgroundColor: '#3b5998' }}
                                        to="/">Login</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Register
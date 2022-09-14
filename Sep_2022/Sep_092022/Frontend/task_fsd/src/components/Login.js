import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const logSubmit = (e) => {
    e.preventDefault();
    const delay = ms => new Promise(res => setTimeout(res, ms));
    (async _ =>{
      const detail = await axios.get("http://localhost:3005/list")
      const list = detail.data.data;
      for(let i = 0; i < list.length; i = i + 1){
        if(username === list[i].email && password === list[i].password){
          console.log("User Found..!! Login Successfull")
            await delay(3000);
            navigate('/Home');
        }else{
          console.log('Wrong User Id and pasword..');
        }
      }
    }
    )()
    
  }
  return (
<>
<section style={{backgroundColor: '#508bfc'}}>
  <div>
    <div>
      <div>
        <div style={{borderRadius: '1rem'}}>
          <div>
            <h3>Sign In</h3>
            <form onSubmit={logSubmit}>
            <div>
              <input type="email" placeholder=' Enter your Username' onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div>
              <input type="password" placeholder='Enter your Password' onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div>
              <input type="checkbox" value="" id="form1Example3" />
              <label> Remember password </label>
            </div>
            <button type="submit">Login</button>
            </form>
          
            <hr className="my-4"/>

            <label>Don't have an account.? Sign Up here</label>
            <Link style={{backgroundColor: '#3b5998'}}
              to="/Register">Register</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</>
  )
}

export default Login
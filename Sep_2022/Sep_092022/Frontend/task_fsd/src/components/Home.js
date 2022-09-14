import React from 'react'

function Home() {
  return (
    <>
      <div>
      <nav>
        <div>
          <a href="#">Welcome to my Home Page</a>
          <button type="button">Logout</button>
        </div>
      </nav>
      </div>
      <section style={{marginTop:"100px"}}>
      <div>
        <div>
          <h2>My Todo list</h2>
          <hr></hr>
          <ul>
            <li>
              <div>
                <input type="checkbox"></input>
                <p>Create login Page</p>
                <button>X</button>
              </div>
            </li>  
          </ul>
        </div>
      </div>
      </section>
    </>
  )
}
export default Home
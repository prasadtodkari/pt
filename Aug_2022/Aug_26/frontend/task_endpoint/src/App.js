import './App.css';
import './custom.css';
import { Routes, Route, Link } from 'react-router-dom'
import { Home } from './components/Home.js'
import { Name } from './components/Name';
import { Bio } from './components/Bio';
import { Interests } from './components/Interests';
import { Email } from './components/Email'

function App() {
  return (
    <>
    <div className="App">
        <h1>Aug 26 - Task Multiple End Point</h1>
        <p>Use Axios and broswer router to get hands-on</p> 
        <div className="nav">
            <Link className="pt-button pt-round-xxlarge pt-green" to="/">Home</Link>
            <Link className="pt-button pt-round-xxlarge pt-green pt-margin-left" to="/name">Name</Link>
            <Link className="pt-button pt-round-xxlarge pt-green pt-margin-left" to="/bio">Bio</Link>
            <Link className="pt-button pt-round-xxlarge pt-green pt-margin-left" to="/intrest">Intrest</Link>
            <Link className="pt-button pt-round-xxlarge pt-green pt-margin-left" to="/email">Contact</Link>
        </div>
    </div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/name" element={<Name />} />
      <Route path="/bio" element={<Bio />} />
      <Route path="/intrest" element={<Interests />} />
      <Route path="/email" element={<Email />} />
    </Routes>
    </>
  );
}

export default App;

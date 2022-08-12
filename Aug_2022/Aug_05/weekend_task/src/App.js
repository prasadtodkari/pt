import { Route, Routes } from 'react-router-dom';
import Unplash from './components/Unplash';
import Github from './components/Github';
import Task1 from './components/Task1';


function App() {
  return <>
    <header>
      <h2>Trying Routers First Time</h2> &nbsp;
    </header>
      <Task1 />
      <Routes>
        <Route path="/" element={<Unplash />}></Route>
        <Route path="/SecondTask" element={<Github />}></Route>
      </Routes>
  </>;
}

export default App;

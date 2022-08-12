
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Comments from './components/Comments';
import Heading from './components/Heading';
import Postpage from './components/Postpage';
import Posts from './components/Posts';

function App() {
  return (
    <>
      <Heading />
      <Routes>
        <Route path='/'  element={<Posts />} />
        <Route path='/selectedpost'  element={<Postpage />} />
        <Route path='/comments'  element={<Comments />} />
      </Routes>
    </>
  );
}

export default App;

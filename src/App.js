import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import People from './components/People';
import Planets from './components/Planets';

function App() {
  const [page, setPage] = useState('planets');

  return (
    <div className='App'>
      <h1>Star Wars Info</h1>
      <Navbar />
      <div className='content'>{page ? <Planets /> : <People />}</div>
    </div>
  );
}

export default App;

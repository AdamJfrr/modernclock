import React from 'react';
import Clock from './components/clock/Clock';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className='tag'>
        Modern Clock : A project developed to bring a twist to the mundane routine of checking up time
      </div>
      <Clock/>
    </div>
  );
}

export default App;

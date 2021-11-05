import './App.css';
import { useState } from 'react'

function App() {

  const [time, setTime] = useState();
  const [showTimes, setShowTimes] = useState(false);

  // const pickTime = () => {
  //   const pickFrom = [2, 5, 10, 15]
  //   setTime(time)
  // }

  const handleClick = (event) => {
    setTime(event.target.textContent)
  }


  return (
    <div className="App">
      <h1>{ time }</h1>
      <button onClick={ () => setShowTimes(true) }> Set timer </button>
      { showTimes ? 
        <div className="times">
          <button onClick={event => handleClick(event)}>2</button>
          <button onClick={event => handleClick(event)}>5</button>
          <button onClick={event => handleClick(event)}>10</button>
          <button onClick={event => handleClick(event)}>15</button>
        </div>
        : null
      }
      <button>Stop</button>
    </div>
  );
}

export default App;

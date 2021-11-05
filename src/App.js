import './App.css';
import { useState } from 'react'

function App() {

  // const [time, setTime] = useState(time);
  const [showTimes, setShowTimes] = useState(false);

  // const pickTime = () => {
  //   const pickFrom = [2, 5, 10, 15]
  //   setTime(time)
  // }


  return (
    <div className="App">
      <h1></h1>
      <button onClick={ () => setShowTimes(true) }> Set timer </button>
      { showTimes ? 
        <div className="times">
          <button>2</button>
          <button>5</button>
          <button>10</button>
          <button>15</button>
        </div>
        : null
      }
      <button>Stop</button>
    </div>
  );
}

export default App;

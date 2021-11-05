import './App.css';
import { useState, useEffect } from 'react'

function App() {

  const [time, setTime] = useState();
  const [showTimes, setShowTimes] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleClick = (event) => {
    setTime(event.target.textContent)
  }

  const [second, setSecond] = useState('00');
  const [minute, setMinute] = useState('00');
  const [hour, setHour] = useState('00');

  const [counter, setCounter] = useState(0)


  useEffect(() => {
    let intervalId;

    if (isActive) {
      intervalId = setInterval(() => {
        const secondCounter = counter % 60;
        const minuteCounter = Math.floor(counter / 60);
        const hourCounter = Math.floor((counter / 60) / 60);

        const computedSecond = String(secondCounter).length === 1 ? `0${secondCounter}`: secondCounter;
        const computedMinute = String(minuteCounter).length === 1 ? `0${minuteCounter}`: minuteCounter;
        const computedHour = String(hourCounter).length === 1 ? `0${hourCounter}`: hourCounter;

        setSecond(computedSecond);
        setMinute(computedMinute);
        setHour(computedHour);

        setCounter(counter => counter + 1);
      }, 1000)
    }

    return () => clearInterval(intervalId);
  }, [isActive, counter])

 
  function stopTimer() {
    setIsActive(false);
    setCounter(0);
    setSecond('00');
    setMinute('00')
    setHour('00');
  }
  

  return (
    <div className="App">
 
      <div className='time'>
        <span className="hour">{hour}</span>
          <span>:</span>
        <span className="minute">{minute}</span>
          <span>:</span>
        <span className="second">{second}</span>
      </div>

      {/* <button onClick={ () => setShowTimes(true) }> Set timer </button>
      { showTimes && !time ? 
        <div className="times">
          <button onClick={event => handleClick(event)}>2</button>
          <button onClick={event => handleClick(event)}>5</button>
          <button onClick={event => handleClick(event)}>10</button>
          <button onClick={event => handleClick(event)}>15</button>
        </div>
        : null
      } */}

      <button onClick={ () => setIsActive(!isActive) }>{ isActive ? "Pause" : "Start" }</button>

      <button onClick={ stopTimer }>Reset</button>
    </div>
  
  );
}

export default App;

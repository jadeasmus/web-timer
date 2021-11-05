import './App.css';
import { useState, useEffect } from 'react'

function App() {

  // const [time, setTime] = useState();
  const [showTimes, setShowTimes] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const [second, setSecond] = useState('00');
  const [minute, setMinute] = useState('00');
  const [hour, setHour] = useState('00');

  const [counter, setCounter] = useState(0)


  useEffect(() => {
    let intervalId;

    if (isActive) {
      intervalId = setInterval(() => {
        const hourCounter = Math.floor(counter / 3600);
        const minuteCounter = Math.floor(counter / 60) % 60;
        const secondCounter = (counter % 60);
        

        const computedSecond = String(secondCounter).length === 1 ? `0${secondCounter}`: secondCounter;
        const computedMinute = String(minuteCounter).length === 1 ? `0${minuteCounter}`: minuteCounter;
        const computedHour = String(hourCounter).length === 1 ? `0${hourCounter}`: hourCounter;

        setSecond(computedSecond);
        setMinute(computedMinute);
        setHour(computedHour);

        // setCounter(counter => counter + 1);
        setCounter(counter => counter - 1);

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
  
  const handleClick = (event) => {
    setCounter(event.target.textContent)
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

      <button onClick={ () => setShowTimes(true) }> Set timer </button>
      { showTimes && !counter ? 
        <div className="times">
          <button onClick={event => handleClick(event)}>3600</button>
          <button onClick={event => handleClick(event)}>600</button>
          <button onClick={event => handleClick(event)}>300</button>
          <button onClick={event => handleClick(event)}>120</button>
          <form className="custom" onSubmit={(e) => e.preventDefault()}>
            <label> 
              Custom:
              <input type="text" value={counter} onChange={e => setCounter(parseInt(e.target.value))} className="time"></input>
            </label>
            <input type="submit" value="Submit"></input>
          </form>
        </div>
        : null
      }

      <button onClick={ () => setIsActive(!isActive) }>{ isActive ? "Pause" : "Start" }</button>

      <button onClick={ stopTimer }>Reset</button>
    </div>
  
  );
}

export default App;

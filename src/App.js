import './App.css';
import { useState, useEffect } from 'react'

function App() {

  // const [time, setTime] = useState();
  const [showTimes, setShowTimes] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isPicked, setIsPicked] = useState(false)
  const [E, setE] = useState('')

  const [second, setSecond] = useState('00');
  const [minute, setMinute] = useState('00');
  const [hour, setHour] = useState('00');

  const [counter, setCounter] = useState(0)


  useEffect(() => {
    let intervalId;

    if (isPicked) {

      // const convertToSeconds = (counter) => {
        
      // }

      const hourCounter = Math.floor(counter / 3600);
      const minuteCounter = Math.floor(counter / 60) % 60;
      const secondCounter = (counter % 60);

      const computedSecond = String(secondCounter).length === 1 ? `0${secondCounter}`: secondCounter;
      const computedMinute = String(minuteCounter).length === 1 ? `0${minuteCounter}`: minuteCounter;
      const computedHour = String(hourCounter).length === 1 ? `0${hourCounter}`: hourCounter;

      setSecond(computedSecond);
      setMinute(computedMinute);
      setHour(computedHour);

      intervalId = setInterval(() => {
        if (isActive) {
          setCounter(counter => counter - 1);
        }
      }, 1000) // 1000 milliseconds per second

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
    setIsPicked(true);

  }


  return (
    <div className="bg-red-400 text-center h-screen">
 
      <div className='text-white text-5xl pt-32 pb-5'>
        <span className="">{hour}</span>
          <span>:</span>
        <span className="minute">{minute}</span>
          <span>:</span>
        <span className="second">{second}</span>
      </div>

      <button className="text-red-500 px-3 m-3 rounded-md shadow-md bg-white" onClick={ () => setShowTimes(true) }> Set timer </button>
      { showTimes && !counter ? 
        <div className="">
          <button onClick={event => handleClick(event)} className="text-red-500 px-3 m-3 rounded-md shadow-md bg-white">3600</button>
          <button onClick={event => handleClick(event)} className="text-red-500 px-3 m-3 rounded-md shadow-md bg-white">600</button>
          <button onClick={event => handleClick(event)} className="text-red-500 px-3 m-3 rounded-md shadow-md bg-white">300</button>
          <button onClick={event => handleClick(event)} className="text-red-500 px-3 m-3 rounded-md shadow-md bg-white">120</button>

          <form className="" onSubmit={(e) => e.preventDefault()}>
            <input className="border border-red-400 rounded-md" type="text" placeholder="Custom" onChange={(e) => setE(parseInt(e.target.value))} className="time"></input>
              <input type="submit" value="Submit" onClick={ () => setCounter(E) }></input>
          </form>
    
        </div>
        : null
      }

      <button className="text-red-500 px-3 m-3 rounded-md shadow-md bg-white " onClick={ () => setIsActive(!isActive) }>{ isActive ? "Pause" : "Start" }</button>

      <button className="text-red-500 px-3 m-3 rounded-md shadow-md bg-white " onClick={ stopTimer }>Reset</button>
    </div>
  
  );
}

export default App;

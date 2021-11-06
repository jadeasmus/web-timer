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
  }, [isActive, isPicked, counter])

 
  function stopTimer() {
    setIsActive(false);
    setCounter(0);
    setSecond('00');
    setMinute('00')
    setHour('00');
  }

  const {
      REACT_APP_CLIENT_ID,
      REACT_APP_AUTHORIZE_URL,
      REACT_APP_REDIRECT_URL
  } = process.env;

  const handleLogin = () => {
    window.location = `${REACT_APP_AUTHORIZE_URL}?
      client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URL}
      &response_type=token&show_dialog=true`;
  };
  
  const handleClick = (event) => {
    setCounter(event.target.textContent)
    setIsPicked(true);

  }


  return (
    <div className="bg-red-400 text-center h-screen">
 
      <div className='text-white text-6xl pt-32 pb-8'>
        <span className="">{hour}</span>
          <span>:</span>
        <span className="minute">{minute}</span>
          <span>:</span>
        <span className="second">{second}</span>
      </div>

      <button className="text-red-500 px-3 py-1 text-md m-3 rounded-md shadow-md bg-white" onClick={ () => setShowTimes(true) }> Set timer </button>
      { showTimes && !counter ? 
        <div className="">
          <button onClick={event => handleClick(event)} className="text-red-500 px-3 m-3 rounded-md shadow-md bg-white">3600</button>
          <button onClick={event => handleClick(event)} className="text-red-500 px-3 m-3 rounded-md shadow-md bg-white">600</button>
          <button onClick={event => handleClick(event)} className="text-red-500 px-3 m-3 rounded-md shadow-md bg-white">300</button>
          <button onClick={event => handleClick(event)} className="text-red-500 px-3 m-3 rounded-md shadow-md bg-white">120</button>

          <form className="" onSubmit={(e) => e.preventDefault()}>
            <input className="border-5 border-green-glow rounded-md" type="text" placeholder="Custom" onChange={(e) => setE(parseInt(e.target.value))} className="time"></input>
              <input type="submit" value="Submit" onClick={ () => setCounter(E) }></input>
          </form>
    
        </div>
        : null
      }
      <div className="">
        <button className="absolute bottom-1/4 left-1/3 text-red-500 text-xl h-24 w-24 mx-10 m-3 shadow-md bg-white rounded-full" onClick={ () => setIsActive(!isActive) }>{ isActive ? "Pause" : "Start" }</button>
        <button className="absolute bottom-1/4 right-1/3 text-red-500 text-xl h-24 w-24 mx-10 m-3 shadow-md bg-white rounded-full" onClick={ stopTimer }>Reset</button>
      </div>

      <div className="absolute top-8">
        <button type="submit" onClick={handleLogin}>
          <svg className="cursor-pointer fill-current text-green-spotify hover:text-green-glow" xmlns="http://www.w3.org/2000/svg" height="80" width="270" viewBox="-33.4974 -55.829 290.3108 334.974"><path d="M177.707 98.987c-35.992-21.375-95.36-23.34-129.719-12.912-5.519 1.674-11.353-1.44-13.024-6.958-1.672-5.521 1.439-11.352 6.96-13.029 39.443-11.972 105.008-9.66 146.443 14.936 4.964 2.947 6.59 9.356 3.649 14.31-2.944 4.963-9.359 6.6-14.31 3.653m-1.178 31.658c-2.525 4.098-7.883 5.383-11.975 2.867-30.005-18.444-75.762-23.788-111.262-13.012-4.603 1.39-9.466-1.204-10.864-5.8a8.717 8.717 0 015.805-10.856c40.553-12.307 90.968-6.347 125.432 14.833 4.092 2.52 5.38 7.88 2.864 11.968m-13.663 30.404a6.954 6.954 0 01-9.569 2.316c-26.22-16.025-59.223-19.644-98.09-10.766a6.955 6.955 0 01-8.331-5.232 6.95 6.95 0 015.233-8.334c42.533-9.722 79.017-5.538 108.448 12.446a6.96 6.96 0 012.31 9.57M111.656 0C49.992 0 0 49.99 0 111.656c0 61.672 49.992 111.66 111.657 111.66 61.668 0 111.659-49.988 111.659-111.66C223.316 49.991 173.326 0 111.657 0"/></svg>
        </button>
      </div>

    </div>
  
  );
}

export default App;

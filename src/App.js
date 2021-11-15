import './App.css';
import Timer from './components/Timer';
import SpotifyLogin from './components/SpotifyLogin';
import GetUserInfo from './components/GetUserInfo';

function App() {
  return (
    <div className="bg-red-400">
      <Timer />
      <SpotifyLogin />
      {/* <GetUserInfo /> */}
    </div>

  );
}


export default App;

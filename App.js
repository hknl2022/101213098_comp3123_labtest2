import logo from './logo.svg';
import './App.css';
import Weather_App from './Weather_App';

//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// cbf52b549e1d04d7278472c26843d246

function App() {
  return (
    <div className="App">
      <Weather_App/>
    </div>
  );
}
export default App;

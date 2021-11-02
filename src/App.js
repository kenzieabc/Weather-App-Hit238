import React, {useState} from 'react';
//using API from openweahermap.com
const api = {
  key: "8483db2b0cf658d7b8c643089b837ad5",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  //Connect to the API to run the weather dynacmicly with the research result
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState('');
  function App() {
    //Connect to the API to run the weather dynacmicly with the research result
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState('');
    const search = e =>{
      if (e.key === "Enter"){
        //fetch get request from the api base then set the weather and query
        fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
          //result: get the json pass thourght the result and set the wehther to the result
          .then(res => res.json())
          .then(result => {
            setQuery('');
            setWeather(result);
            console.log(result);
          });
      }
    }
  }

  const dateBuilder = (d) => {
    let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  return (
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'App warm' : 'App' ) : 'App'}>
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            />
        </div>
        <div className="location-box">
          <div className="location">{weather.name},{weather.sys.country}</div>
          <div className="date">{dateBuilder(new Date())}</div>
        </div>
        <div className="weather-box">
          <div className="temp">
          {Math.round(weather.main.temp)}°C
          </div>
          <div className="weather">
          {weather.weather[0].main}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
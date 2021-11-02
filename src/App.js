import React, {useState} from 'react';
//using API from openweahermap.com
const api = {
  key: "8483db2b0cf658d7b8c643089b837ad5",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  //Connecting to the API to get the result for the weather
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState('');
  const search = e =>{
    if (e.key === "Enter"){
      //fetch function to request the query and the weather. Also sets the unit to metric
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        //pass the result with json and set the weather
        .then(res => res.json())
        .then(result => {
          setQuery('');
          setWeather(result);
          console.log(result);
         });
    }
  }

  //constant to display the date dynamically. Returns day, date, month and year
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
    // sets the type of weather unequal to undefined. Returns weather is warm if temperature is more than 16
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'App warm' : 'App' ) : 'App'}>
      <main>
        <div className="search-box">
          <input type = "text" className="search-bar" placeholder="Search Weather Location..." onChange={e => setQuery(e.target.value)} value={query} onKeyPress={search}/>
        </div>
        {(typeof weather.main != "undefined") ? (
          <div>
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
      </div>
      ): ('')}
    </main>
  </div>
  );
}

export default App;
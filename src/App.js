import React, {useState} from 'react';
//using API from openweahermap.com
const api = {
  key: "8483db2b0cf658d7b8c643089b837ad5",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            />
        </div>
      </main>
    </div>
  );
}

export default App;
import { useEffect, useState } from "react";
import BasicForecast from "./components/BasicForecast"
import Header from "./components/Header"
import TodaysHighlights from "./components/TodaysHighlights"
import axios from "axios"

function App() {
  const API_KEY = "a5f75eaf1905f8b2375a0ba961f96e5e"

  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    // Fetch current weather
    try {
      const getData = async () => {
        const data = await axios.get("http://localhost:3000/api/v1/getInfo");
        console.log(data.data);
      }
      getData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="bg-black text-white">
      {/* <Header setWeatherData={setWeatherData} /> */}
      <div className="flex pt-20 h-screen">
        <BasicForecast />
        <TodaysHighlights />
      </div>
        
    </div>
  )
}

export default App

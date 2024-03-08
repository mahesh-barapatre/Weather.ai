import BasicForecast from "./components/BasicForecast"
import Header from "./components/Header"
import TodaysHighlights from "./components/TodaysHighlights"

function App() {

  return (
    <div className="bg-black text-white">
      <Header />
      <div className="flex pt-20 h-screen">
        <BasicForecast />
        <TodaysHighlights />
      </div>
        
    </div>
  )
}

export default App

import Home from "./Pages/Home"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Player from "./Pages/Player"
import Header from "./Componets/Header"


function App() {


  return (
   <>
    <Router>
    <Header />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/addplayer" element={<Player />} />
      </Routes>
    </Router>
   
   </>
  
  )
}

export default App

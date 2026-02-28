import { HashRouter  as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Quadtree from "./projects/Quadtree"
import Quiestce from "./projects/Quiestce";
import Dicefull from "./projects/Dicefull"
import SAT from "./projects/SAT"
import Automate from "./projects/Automate"
import Morpion from "./projects/Morpion"
import Randomizer from "./projects/Randomizer"
import Running from "./projects/Running"

import ScrollToHash from "./components/ScrollToHash";



function App() {
  return (
    
    <Router basename="/Portfolio">
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/quadtree" element={<Quadtree />} />
        <Route path="/projects/quiestce" element={<Quiestce />} />
        <Route path="/projects/dicefull" element={<Dicefull />} />
        <Route path="/projects/sat" element={<SAT />} />
        <Route path="/projects/automate" element={<Automate />} />
        <Route path="/projects/morpion" element={<Morpion />} />
        <Route path="/projects/randomizer" element={<Randomizer />} />
        <Route path="/projects/running" element={<Running />} />
      </Routes>
    </Router>
  )
}





export default App
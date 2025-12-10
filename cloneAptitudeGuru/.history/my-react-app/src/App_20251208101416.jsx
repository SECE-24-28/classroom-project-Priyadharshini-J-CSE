import { Route } from 'react-router-dom'
import { Routes } from "react-router-dom"

function App() {
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
}

export default App
import { Route } from 'react-router-dom'
import { Routes } from "react-router-dom"
import AptitudeGuruComponent from './aptitude-guru-component/aptitude-guru-component.jsx'
function App() {
  return (
    <Routes>
      <Route path="/hello" element={<AptitudeGuruComponent />} />
    </Routes>
  )
}

export default App
import AptitudeGuruComponent from './aptitude-guru-component/aptitude-guru-component'
import { Route, Routes } from 'react-router-dom'

function App() {  
  return (
    <Routes>
      <Route path='/home-page' element={<homepageCompon}></Route>
    </Routes>
  )
}

export default App
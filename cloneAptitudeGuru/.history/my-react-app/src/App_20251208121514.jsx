import AptitudeGuruComponent from './aptitude-guru-component/aptitude-guru-component'
import { Route, Routes } from 'react-router-dom'
import
function App() {  
  return (
    <Routes>
      <Route path='/home-page' element={<homepageComponent/>}></Route>
    </Routes>
  )
}

export default App
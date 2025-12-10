import AptitudeGuruComponent from './aptitude-guru-component/aptitude-guru-component'
import { Route, Routes } from 'react-router-dom'
import homepageComponent from './homepage-component/homepage-component'
function App() {  
  return (
    <Routes>
      <Route path='/home-page' element={<homepageComponet/>}></Route>
    </Routes>
  )
}

export default App
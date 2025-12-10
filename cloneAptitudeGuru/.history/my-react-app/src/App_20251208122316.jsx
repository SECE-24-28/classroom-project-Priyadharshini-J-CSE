// import AptitudeGuruComponent from './aptitude-guru-component/aptitude-guru-component'
import { Route, Routes } from 'react-router-dom'
import homepageComponent from './home-page/home-page-component'
function App() {  
  return (
    <Routes>
      <Route path='/home-page' element={<homepageComponent/>}></Route>
    </Routes>
  )
}

export default App
// import AptitudeGuruComponent from './aptitude-guru-component/aptitude-guru-component'
import { Route, Routes } from 'react-router-dom'
import HomepageComponent from './home-page/home-page-component'

function App() {  
  return (
    <Routes>
      <Route path='/homepage' element={<HomepageComponent/>}></Route>
    </Routes>
  )
}

export default App
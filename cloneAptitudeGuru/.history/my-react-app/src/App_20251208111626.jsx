// import MappingComponent from './mapping/mapping-component'
import PropsComponent from './props/props-component'
import { Route, Routes } from 'react-router-dom'
function App() {  
  return (
    <Routes>
      <Route path="/propsintro" element={<PropsComponent />} />
    </Routes>
    // <MappingComponent/>
    // <PropsComponent title="Hello World"/>
  
    
  )
}

export default App
import AptitudeGuruComponent from './aptitude-guru-component/aptitude-guru-component'
import Container1 from './aptitude-guru-component/container1/Container1'
import Container2 from './aptitude-guru-component/container2/Container2'
import Container3 from './aptitude-guru-component/container3/Container3'
import Container4 from './aptitude-guru-component/container4/Container4'
import Container5 from './aptitude-guru-component/container5/Container5'
import Container6 from './aptitude-guru-component/container6/Container6'
import Container8 from './aptitude-guru-component/container8/Container8'
import Container9 from './aptitude-guru-component/container9/Container9'
import Container10 from './aptitude-guru-component/container10/Container10'
import Container11 from './aptitude-guru-component/container11/Container11'
import Container12 from './aptitude-guru-component/container12/Container12'
import PropsComponent from './props/props-component'
import { Route, Routes } from 'react-router-dom'

function App() {  
  return (
    <Routes>
      <Route path="/" element={<AptitudeGuruComponent />} />
      <Route path="/aptitude" element={<AptitudeGuruComponent />} />
      <Route path="/container1" element={<Container1 heading1="Welcome" heading2="Learn Now" italic="Excellence" description="Start your journey" button1Text="Start" button2Text="Demo" onButton1Click={() => {}} onButton2Click={() => {}} />} />
      <Route path="/container2" element={<Container2 imageUrl="/image.png" altText="Hero Image" />} />
      <Route path="/container3" element={<Container3 mainHeading="Our Story" mainDescription="We believe in excellence" visionTitle="| Vision" visionText="Empowering students" missionTitle="| Mission" missionText="Transforming education" />} />
      <Route path="/container4" element={<Container4 heading="Leaders Tomorrow" description="Join us now" />} />
      <Route path="/container5" element={<Container5 heading="Our Courses" description="Explore and learn" />} />
      <Route path="/container8" element={<Container8 heading="GET IN TOUCH" description={["Have questions?", "Reach out to us"]} buttonText="Contact us" onContactClick={() => alert("Contact clicked")} imageUrl="/image4.jpg" altText="Contact" />} />
      <Route path="/container9" element={<Container9 heading="Impact at as" subHeading="Glance" stats={[]} />} />
      <Route path="/container10" element={<Container10 heading="Our Promise" description="Excellence in education" promises={[]} />} />
      <Route path="/container11" element={<Container11 imageUrl="/image9.png" altText="LMS" heading="Empower Your Learning" description="Quality education" points={[]} />} />
      <Route path="/container12" element={<Container12 heading="Trusted By" stats={[]} />} />
      <Route path="/propsintro" element={<PropsComponent />} />
    </Routes>
  )
}

export default App
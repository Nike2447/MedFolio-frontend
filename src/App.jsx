import React from 'react'
import styles from './style'
import {Navbar,Footer,GetStarted,Hero,Stats} from './components'
import { Route,Routes} from 'react-router-dom'
import Dportal from './components/Dportal'
import Pportal from './components/Pportal' 
import Enclosure from './components/Enclosure'
import Features from './components/Features'
import check from './components/check'

const App = () => {
  console.log(window.location)
  return (
    
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Hero/>}/>
        <Route path="/home" element={<Hero/>}/>
        <Route path="" element={<Stats/>}/>
        <Route path="/dportal" element={<Dportal/>}/>
        <Route path="/Pportal" element={<Pportal/>}/>
        <Route path="/main" element={<Enclosure/>}/>
      
        <Route path="/features" element={<Features/>}/>
      </Routes> 

      <div className={`bg-primary ${styles.flexStart} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer/>
        </div>
      </div>
    </div>
  )
}

export default App

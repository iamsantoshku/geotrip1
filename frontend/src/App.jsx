import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/Header'
import AppRoutes from './routes/AppRoutes'
import Footer from './component/Footer'
import { BrowserRouter as Router } from 'react-router-dom'
// import Login from './pages/Login'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>

    <div className=''>
      <Router>
      {/* <Header/> */}
      
      <Header/>     

      
      
      <AppRoutes/>
      
      <Footer/>

      </Router>
      
      {/* <Login/> */}
      

    </div>
      
    </>
  )
}

export default App

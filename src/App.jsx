
import './App.css'
import Header from './components/Header'
import History from './pages/History'
import Home from './pages/Home'
import Landing from './pages/Landing'
import {Routes, Route} from 'react-router-dom'
import Footer from './components/Footer'
Header


function App() {

  return (
    <>
    <Header/>
      <Routes>
        <Route element={<Landing />} path='/'/>
        <Route element={<Home />} path='/home'/>
        <Route element={<History />} path='/history'/>
      </Routes>
    <Footer/>
    </>
  )
}

export default App

import {  Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/home'
import LogIn from './pages/login/login'
import Signup from './pages/signup/signup'
import { Toaster } from 'react-hot-toast'
import { useAuthContext } from './context/AuthContext'

function App() {
 const {authUser} = useAuthContext()

  return (
   <div className='p-6 flex justify-center items-center h-screen'>
    <Routes>
    <Route path='/' element={authUser ? <Home/> : <LogIn/>} />
    <Route path='/login' element={authUser ? <Navigate to='/'/> : <LogIn/>} />
    <Route path='/signup' element={authUser ? <Navigate to='/'/> : <Signup/>} />
    {/* <Route path='/signup' element={<Signup/>} /> */}
    </Routes>
    <Toaster />
   </div>
  )
}

export default App

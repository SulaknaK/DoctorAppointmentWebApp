import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Doctors from './pages/Doctors';
import MyProfile from './pages/MyProfile';
import MyAppointments from './pages/MyAppointments';
import Login from './pages/login';
import About from './pages/About';
import Contact from './pages/Contact';
import Appointments from './pages/Appointments';
import Navbar from './components/Navbar';
import Footer from './components/footer';

const App = () => {
  return (
    <Router  basename="/DoctorAppointmentWebApp"> 
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar></Navbar>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/doctors' element={<Doctors />}/>
            <Route path='/doctors/:speciality' element={<Doctors />}/>
            <Route path='/Login' element={<Login />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/contact' element={<Contact />}/>
            <Route path='/my-profile' element={<MyProfile />}/>
            <Route path='/my-appointments' element={<MyAppointments />}/>
            <Route path='/appointment/:docId' element={<Appointments />}/>
        </Routes>
        <Footer />
    </div>
    </Router>
  )
}

export default App

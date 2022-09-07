import React from 'react'
import SignUp from './SignUp'
import SignIn from './SignIn'
import { Container } from 'react-bootstrap'
import  { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { UserProvider } from './context/Authentication'

function App() {
  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
      <div className='w-100' style={{ maxWidth: "370px" }}>
      <UserProvider>
        <Router>
        <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        </Routes>
        </Router>
      </UserProvider>
      </div>
    </Container>
  )
}

export default App

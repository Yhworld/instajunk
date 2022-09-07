import React from 'react'
import SignUp from './SignUp'
import { Container } from 'react-bootstrap'
import  { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
      <div className='w-100' style={{ maxWidth: "370px" }}>
        <Router>
        <Routes>
        <Route path="/signup" element={<SignUp />} />
        </Routes>
        </Router>
      </div>
    </Container>
  )
}

export default App

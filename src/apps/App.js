import React from 'react'
import SignUp from './SignUp'
import SignIn from './SignIn'
import  { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { UserProvider } from './context/Authentication'
import Homepage from './Homepage'
import AddPost from './AddPost'

function App() {
  return (
      <UserProvider>
        <Router>
        <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/addpost" element={<AddPost />} />
        </Routes>
        </Router>
      </UserProvider>
  )
}

export default App

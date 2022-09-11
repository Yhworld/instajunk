import React, { useState } from 'react'
import SignUp from './SignUp'
import SignIn from './SignIn'
import  { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { UserProvider } from './context/Authentication'
import Homepage from './Homepage'
import AddPost from './AddPost'
import SearchUsers from './SearchUsers'

function App() {

  const [users, setUser] = useState([]);
  const [change, setChange] = useState("")


  function handleSubmit(e) {
    e.preventDefault()
      fetch("http://localhost:9292/users")
        .then((r) => r.json())
        .then((data) => setUser(data));
  }

  function handleUpdateUser(updatedUserObj) {
    const updatedUser = users.map((user) => {
      if (user.id === updatedUserObj.id) {
        return updatedUserObj;
      } else {
        return user;
      }
    });
    setUser(updatedUser);
  }

  function handleDeleteUser(id) {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUser(updatedUsers);
  }

  const displayedProfiles = users.filter((user) =>
  user.username.toLowerCase().includes(change.toLowerCase())
);

  return (
      <UserProvider>
        <Router>
        <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/addpost" element={<AddPost />} />
        <Route exact path="/search" element={<SearchUsers handleSubmit={handleSubmit} handleUpdateUser={handleUpdateUser} handleDeleteUser={handleDeleteUser} handleChange={setChange} change={change} displayedProfiles={displayedProfiles} />} />
        </Routes>
        </Router>
      </UserProvider>
  )
}

export default App

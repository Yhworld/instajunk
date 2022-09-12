import React, { useState } from 'react'
import { Form, Card, Button, Container } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
// import { BsFillArrowUpRightSquareFill } from 'react-icons/bs';

function Edit({ show, handleUpdateUser, onClose, user}) {
    const [userProperties, setUserProperties] = useState({
        username: "",
        profile_image: ""
       
    });
    
    const navigate = useNavigate()

    if(!show)
    {
        return null;
    }

    const handleChange = (e) => {
        setUserProperties({
            ...userProperties,
            [e.target.name]: e.target.value
        })
    }
    function handleFormSubmit(e) {
        e.preventDefault();
        fetch(`https://instajunk.herokuapp.com/users/${user.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userProperties),
        })
          .then((r) => r.json())
          .then((data) => {
              handleUpdateUser(data)
              navigate("/search")
          }
      )}


  return (
    <>
    <div className="overlay">
        <div className="overlay-inner">
        <Container className="d-flex justify-content-center" style={{ minHeight: "100vh" }}>
        <div className='w-100' style={{ maxWidth: "370px" }}>
        <Card>
          <Card.Body>
          <button className="close" onClick={onClose}>X</button>
          <br/>
              <h4 style={{ textAlign: "center", paddingBottom: "30px" }}>Update profile</h4>
              <Form onSubmit={handleFormSubmit}>
                  <Form.Group id="username">
                      <Form.Control name="username" placeholder="Enter username" type="text" value={userProperties.username} onChange={handleChange} required/>
                  </Form.Group>
                  <Form.Group id="image-profile">
                      <Form.Control name="profile_image" placeholder='Enter image url'  type="text" value={userProperties.profile_image} onChange={handleChange} required/>
                  </Form.Group>
                  <br />
                  <Button className='w-100' type="Submit">Update Details</Button>
              </Form>
          </Card.Body>
      </Card>
        </div>
        </Container>
        </div>
    </div>
</>
  )
}

export default Edit
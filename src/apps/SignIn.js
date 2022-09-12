import React, { useState, useContext }  from 'react'
import { Form, Card, Button, Container } from 'react-bootstrap'
import { useNavigate, Link } from "react-router-dom";
import { UserContext } from './context/Authentication';

function SignIn() {
    const {setUser} = useContext(UserContext);
    
    const [userProperties, setUserProperties] = useState({
        username: "",
        password: ""
       
    });
    const navigate = useNavigate()

    const handleChange = (e) => {
        setUserProperties({
            ...userProperties,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = e => {
        e.preventDefault()

    fetch("https://instajunk.herokuapp.com/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userProperties)
    })
    .then(resp => {
        if (resp.status === 200) {
        resp.json()
        .then((data) => {
            setUser(data.user)
            navigate("/home")
        })
    }else {
        resp.json()
        .then(data => console.log(data.error))
    }
    })
    .catch(err => console.log(err))
}

  return (
      <>
     <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
      <div className='w-100' style={{ maxWidth: "370px" }}>
      <Card>
          <Card.Body>
              <h2 id='logo'>Instajunk</h2>
              <br />
              <Form onSubmit={handleSubmit}>
                  <Form.Group id="username">
                      <Form.Label>username</Form.Label>
                      <Form.Control name="username" type="text" value={userProperties.username} onChange={handleChange} required/>
                  </Form.Group>
                  <Form.Group id="password">
                      <Form.Label>password</Form.Label>
                      <Form.Control name="password" type="password" value={userProperties.password} onChange={handleChange} required/>
                  </Form.Group>
                  <br />
                  <Button className='w-100' type="Log in">Sign Up</Button>
              </Form>
          </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
         Dont have an account? <Link to="/signup">Log in</Link>
      </div>
      </div>
      </Container>
      </>
  )
}

export default SignIn
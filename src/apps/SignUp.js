import React, { useContext, useState }  from 'react'
import { Form, Card, Button, Container } from 'react-bootstrap'
import { UserContext } from './context/Authentication';
import { useNavigate, Link } from "react-router-dom";

const SignUp = () => {
    const {setUser} = useContext(UserContext);
    
    const [userProperties, setUserProperties] = useState({
         username: "",
         email: "",
         password_digest: ""
       
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
    
       fetch("https://instajunk.herokuapp.com/users", {
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
            setUser(data)
            navigate("/home")
        })
    }
    })
}


  return (
      <>
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
      <div className='w-100' style={{ maxWidth: "370px" }}>
      <Card>
          <Card.Body>
              <h2 id='logo'>Instajunk</h2>
              <br />
              <h5 className='text-center mb-4'>Sign Up to see photos and videos from your friends</h5>
              <Form onSubmit={handleSubmit}>
                  <Form.Group id="username">
                      <Form.Label>username</Form.Label>
                      <Form.Control name='username' type="text" value={userProperties.username} onChange={handleChange} required/>
                  </Form.Group>
                  <Form.Group id="email">
                      <Form.Label>Email</Form.Label>
                      <Form.Control name="email" type="email" value={userProperties.email} onChange={handleChange} required/>
                  </Form.Group>
                  <Form.Group id="password">
                      <Form.Label>password</Form.Label>
                      <Form.Control name='password_digest' type="password" value={userProperties.password_digest} onChange={handleChange} required/>
                  </Form.Group>
                  <br />
                  <Button className='w-100' type="submit">Sign Up</Button>
              </Form>
          </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
          Already have an account? <Link to="/login">Log in</Link>
      </div>
      </div>
      </Container>
      </>
  )
}

export default SignUp
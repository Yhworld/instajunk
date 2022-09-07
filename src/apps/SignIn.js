import React, { useState }  from 'react'
import { Form, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function SignIn() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

  return (
      <>
      <Card>
          <Card.Body>
              <h2 id='logo'>Instajunk</h2>
              <br />
              <Form>
                  <Form.Group id="email">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                  </Form.Group>
                  <Form.Group id="password">
                      <Form.Label>password</Form.Label>
                      <Form.Control type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
                  </Form.Group>
                  <br />
                  <Button className='w-100' type="Log in">Sign Up</Button>
              </Form>
          </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
         Dont have an account? <Link to="/signup">Log in</Link>
      </div>
      </>
  )
}

export default SignIn
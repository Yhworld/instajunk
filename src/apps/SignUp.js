import React from 'react'
import { Form, Card, Button } from 'react-bootstrap'

function SignUp() {
  return (
      <>
      <Card>
          <Card.Body>
              <h2 id='logo'>Instajunk</h2>
              <br />
              <h5 className='text-center mb-4'>Sign Up to see photos and videos from your friends</h5>
              <Form>
                  <Form.Group id="username">
                      <Form.Label>username</Form.Label>
                      <Form.Control type="text" required/>
                  </Form.Group>
                  <Form.Group id="email">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" required/>
                  </Form.Group>
                  <Form.Group id="password">
                      <Form.Label>password</Form.Label>
                      <Form.Control type="password" required/>
                  </Form.Group>
                  <br />
                  <Button className='w-100' type="submit">Sign Up</Button>
              </Form>
          </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
          Already have an account? Log in
      </div>
      </>
  )
}

export default SignUp
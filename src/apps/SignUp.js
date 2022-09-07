import React, { useState }  from 'react'
import { Form, Card, Button } from 'react-bootstrap'

function SignUp() {
    const [username, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


  async function register(e) {
      let item ={username, email, password}


        let result = await fetch("http://localhost:9292/users", {
        method: 'POST',
        body: JSON.stringify(item),
        headers: {
            "content-type": "application/json",
            "Accept": "application/json",
        }
    })
     result =await result.json()
     console.warn("result",result)
    }


  return (
      <>
      <Card>
          <Card.Body>
              <h2 id='logo'>Instajunk</h2>
              <br />
              <h5 className='text-center mb-4'>Sign Up to see photos and videos from your friends</h5>
              <Form onSubmit={register}>
                  <Form.Group id="username">
                      <Form.Label>username</Form.Label>
                      <Form.Control type="text" value={username} onChange={(e)=>setUserName(e.target.value)} required/>
                  </Form.Group>
                  <Form.Group id="email">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                  </Form.Group>
                  <Form.Group id="password">
                      <Form.Label>password</Form.Label>
                      <Form.Control type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
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
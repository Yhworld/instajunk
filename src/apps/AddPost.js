import React, { useState } from 'react'
import { Form, Card, Button, Container } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";

//import { FaRegUserCircle } from "react-icons/fa";

function AddPost() {
    const navigate = useNavigate()
    const [post, setPost] = useState({
        image: "",
        caption: "",
        likes: 0,
        user_id: ""
    });
   // const history = useHistory()

    const handleChange = (e) => {
        setPost({
            ...post,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        const newPost = {
            image: post.image,
            caption: post.caption,
            likes: post.likes,
            user_id: post.user_id
        }

        fetch("http://localhost:9292/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPost)
        })
        .then(() => navigate("/home"))
        
    }
  return (
    <>
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
      <div className='w-100' style={{ maxWidth: "370px" }}>
      <Card>
          <Card.Body>
              <br />
              <h5 className='text-center mb-4'>capture and post your favorite moments</h5>
              <Form onSubmit={handleSubmit}>
                  <Form.Group id="image">
                      <Form.Control name='image' type="text" placeholder="Enter your image url" value={post.image} onChange={handleChange} required />
                  </Form.Group>
                  <br />
                  <Form.Group id="caption">
                      <Form.Control name="caption" type="text" placeholder="Enter caption" value={post.caption} onChange={handleChange} required/>
                  </Form.Group>
                  <br />
                  <Form.Group id="used_id">
                      <Form.Control name='user_id' placeholder="Enter User id"  type="text" value={post.user_id} onChange={handleChange} required/>
                  </Form.Group>
                  <br />
                  <Button className='w-100' type="submit">Add post</Button>
              </Form>
          </Card.Body>
      </Card>
      </div>
      </Container>
      </>
  )
}

export default AddPost
import React from 'react'
import { Form, Button } from 'react-bootstrap'
import SearchResults from './SearchResults'

function SearchUsers({ handleSubmit, handleChange, change, displayedProfiles, handleDeleteUser, handleUpdateUser}) {
  return (

      <>
      <Form id='searchform' onSubmit={handleSubmit}>
          <Form.Group id="usernamey">
              <Form.Control className='w-100' value={change} style={{ maxWidth: "400px"}} name='username' type="text" onChange={e => handleChange(e.target.value)} required/>
              <Button className='w-50' type="submit">Search</Button>
              </Form.Group>
      </Form>
      <SearchResults users={displayedProfiles} handleDeleteUser={handleDeleteUser} handleUpdateUser={handleUpdateUser}/>
      </>
  )
}

export default SearchUsers
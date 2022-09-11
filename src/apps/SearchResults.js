import React from 'react'
import DeleteUpdate from './DeleteUpdate';

function SearchResults({ users, handleDeleteUser, handleUpdateUser }) {
  return (
    <>
    {users.map((user) => (
      <div className='box'>
        <div className='account'>
        <img src={user.image} alt={user.name} />
        <p>{user.username}</p>
        <DeleteUpdate user={user} handleDeleteUser={handleDeleteUser} handleUpdateUser={handleUpdateUser} />
      </div>
      </div>
    ))}
    </>
  )
}

export default SearchResults
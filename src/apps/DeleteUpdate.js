import React, { useState } from 'react'
import { ImBin } from "react-icons/im";
import { FaRegEdit } from "react-icons/fa";
import Edit from './Edit'

function DeleteUpdate({ user, handleDeleteUser, handleUpdateUser }) {

    const [show,setShow]=useState(false);

    function handleDeleteClick() {
        fetch(`http://localhost:9292/users/${user.id}`, {
          method: "DELETE",
        });
        handleDeleteUser(user.id);
      }

      
return (
    <>
    <div className="removeAdd">
      <ImBin color='red' onClick={handleDeleteClick} />
      <FaRegEdit color='green' className="openModalBtn" onClick={()=>{setShow(true);}}/>
    </div>
    {show && <Edit show={show} handleUpdateUser={handleUpdateUser} onClose={()=>setShow(false)} user={user} />} 
    </>
  )
}

export default DeleteUpdate
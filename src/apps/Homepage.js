import React, { useEffect, useState } from 'react'
import Post from "./Post"
import { NavLink } from 'react-router-dom'
 import { BsFillHouseDoorFill } from "react-icons/bs";
 import { CgAddR } from "react-icons/cg";
 import { ImCompass } from "react-icons/im"
 import { FaRegUserCircle } from "react-icons/fa";

function Homepage() {
  const [post, setpost] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      const fetchData = async () => {
          try {
              const resp = await fetch("http://localhost:9292/posts")
              const data = await resp.json()
          
              setpost(data)
              console.log(data)
              setLoading(false)
          } catch (error) {
              alert(error)
          }
      }

      fetchData()
      
  }, []);

  if (!!loading) return( <h1>Loading...</h1>)
  return (
    <>
     <section className="navbar">
      <div className='logo'>
        <h2 id='logo'>Instajunk</h2>
      </div>
      {/* <form className="search-box">
        <input type="text" className="form-control" placeholder="Search for friends"></input>
      </form> */}
      <ul className='nav'>
        <li><BsFillHouseDoorFill/></li>
        <NavLink to={"/addpost"}><CgAddR/></NavLink>
        <NavLink to={"/search"}><ImCompass/></NavLink>
        <li><FaRegUserCircle /></li>
      </ul>
      </section>
      <Post poster={post} />
    </>
  )
}

export default Homepage
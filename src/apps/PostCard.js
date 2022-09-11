import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
// import { UserContext } from './context/Authentication';

function PostCard({ post }) {
  const {id} = useParams()
  const [gameObj, setGameObj] = useState(null);

  useEffect(() => {
    if (!post) {
      fetch(`http://localhost:9292/posts/${post.id}`)
        .then((resp) => resp.json())
        .then((post) => setGameObj(post))
    }
  }, [post, id]);

  const finalGame = post ? post : gameObj
  if (!finalGame) return <h1>Loading...</h1>
  return (
    <div className='post-container'>
      <div className='post-card'>
        <img src={finalGame.image} alt="ggggg"></img>
        </div>
      <div className='comment-container'>
        <div className='icons'>
          <AiOutlineHeart/>
          <FaRegComment/>
        </div>
        <div className='profile'>
        <p style={{fontWeight :'bold'}}>{finalGame.user.username} :</p>
        <p>{finalGame.caption}</p>
        </div>
      </div>
    </div>
  )

}
export default PostCard
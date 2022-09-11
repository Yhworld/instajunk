import React from 'react'
import PostCard from './PostCard'

function Post({ poster }) {
    const renderPost = poster.map(post => <PostCard key={post.id} post={post} />)
    return (
      <div className='list'>{renderPost}</div>
    )
}

export default Post
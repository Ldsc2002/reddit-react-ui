import React from 'react'

function Post( {data} ) {

    return (
        <div className='post-card'>
            <div className='sidebar-card'>
                <p>P</p>
            </div>
            <div className='card-content'>
                <div className='card-top'>
                    <p className='inline subreddit-name'>{data.subreddit_name_prefixed}</p>
                    <p className='inline author-name'>Posted by u/{data.author}</p>
                    <button className='inline join-btn'>Join</button>
                </div>
                
                <p className='post-title'>{data.title}</p>
            </div>
        </div>
    )
}

export default Post

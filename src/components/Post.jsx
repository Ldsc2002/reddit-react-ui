import React, { useState } from 'react'

function Post({ data }) {
    const [imageDisplay, setImageDisplay] = useState('none')

    if (data.post_hint === 'image' && imageDisplay === 'none') {
        setImageDisplay('block')
    }

    return (
        <div className="post-card">
            <div className="sidebar-card">
                <p>P</p>
            </div>
            <div className="card-content">
                <div className="card-top">
                    <img alt={data.subreddit_name_prefixed} className="inline subreddit-image" src="./src/images/icon.svg" />
                    <p className="inline subreddit-name">{data.subreddit_name_prefixed}</p>
                    <p className="inline author-name">
                        Posted by u/
                        {data.author}
                    </p>
                    <button type="button" className="inline join-btn">Join</button>
                </div>

                <p className="post-title">{data.title}</p>

                <img alt="Post" className="card-image" style={{ display: imageDisplay }} src={data.url} />

            </div>
        </div>
    )
}

export default Post

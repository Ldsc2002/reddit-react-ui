import React, { useState } from 'react'

function Post({ data }) {
    const [imageDisplay, setImageDisplay] = useState('none')
    const [linkDisplay, setLinkDisplay] = useState('none')

    if (data.post_hint === 'image' && imageDisplay === 'none') {
        setImageDisplay('block')
    }

    if (data.domain.split(".")[0] != 'self' && linkDisplay === 'none') {
        setLinkDisplay('block')
        data.url = truncate(data.url, 25)
    }

    function truncate(str, n){
        return (str.length > n) ? str.substr(0, n-1) + '...' : str;
    };

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

                <a className='post-link' style={{ display: linkDisplay }} href={data.url}>{data.url}</a>

                <img alt="Post" className="card-image" style={{ display: imageDisplay }} src={data.url} />

            </div>
        </div>
    )
}

export default Post

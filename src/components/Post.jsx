import React, { useState } from 'react'

function Post({ data }) {
    const [score, setScore] = useState(0)
    const [comments, setComments] = useState(0)
    const [imageDisplay, setImageDisplay] = useState('none')
    const [linkDisplay, setLinkDisplay] = useState('none')

    if (data.post_hint === 'image' && imageDisplay === 'none') {
        setImageDisplay('block')
    }

    if (data.domain.split(".")[0] != 'self' && linkDisplay === 'none') {
        setLinkDisplay('block')
        data.short_url = truncate(data.url, 25)
    }

    if (score === 0) {
        setScore(numFormatter(data.score))
    }

    if (comments === 0) {
        setComments(numFormatter(data.num_comments))
    }

    return (
        <div className="post-card">
            <div className="sidebar-card">
                <p>up</p>
                <p className='post-score'>{score}</p>
                <p>down</p>
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

                <a className='post-link' style={{ display: linkDisplay }} href={data.url}>{data.short_url}</a>

                <img alt="Post" className="card-image" style={{ display: imageDisplay }} src={data.url} />

                <div className="card-top">
                    <a className='post-options'>
                        <img alt={data.subreddit_name_prefixed} src="./src/images/icon.svg" />
                        <p>{comments} Comments</p>
                    </a>
                    
                    <a className='post-options'>
                        <img alt={data.subreddit_name_prefixed} src="./src/images/icon.svg" />
                        <p>Share</p>
                    </a>

                    <a className='post-options'>
                        <img alt={data.subreddit_name_prefixed} src="./src/images/icon.svg" />
                        <p>Saved</p>
                    </a>               
                </div>
            </div>
        </div>
    )

    function truncate(str, n){
        return (str.length > n) ? str.substr(0, n-1) + '...' : str;
    };

    function numFormatter(num) {
        if (Math.abs(num) < 100000) {
            return Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k'
        } else {
            return Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k'
        }
    }
}

export default Post

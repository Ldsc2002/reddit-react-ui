import React, { useState } from 'react'

import upvoteImg from '../../src/images/upvote.png'
import voteImg from '../../src/images/vote.png'
import downvoteImg from '../../src/images/downvote.png'
import subredditImg from '../../src/images/icon.svg'
import commentImg from '../../src/images/comments.png'
import shareImg from '../../src/images/share.png'
import saveImg from '../../src/images/save.png'
import moreImg from '../../src/images/more.png'

function Post({ data }) {
    const [score, setScore] = useState(0)
    const [comments, setComments] = useState(0)
    const [imageDisplay, setImageDisplay] = useState('none')
    const [thumbnailDisplay, setThumbnailDisplay] = useState('none')
    const [linkDisplay, setLinkDisplay] = useState('none')
    const [shortLink, setShortLink] = useState('')

    function truncate(str, n) {
        return (str.length > n) ? `${str.substr(0, n - 1)}...` : str
    }

    function numFormatter(num) {
        if (Math.abs(num) < 1000) {
            return Math.sign(num) * (Math.abs(num))
        }
        return `${Math.sign(num) * ((Math.abs(num) / 1000).toFixed(1))}k`
    }

    if (data.post_hint === 'image' && imageDisplay === 'none') {
        setImageDisplay('block')
    } else if (data.post_hint === 'link' && thumbnailDisplay === 'none' && data.thumbnail !== 'default') {
        setThumbnailDisplay('block')
    }

    if (data.domain.split('.')[0] !== 'self' && linkDisplay === 'none') {
        setLinkDisplay('block')
        setShortLink(truncate(data.url, 25))
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
                <div className="vote-container">
                    <div className="vote">
                        <img src={voteImg} alt="Upvote" className="upvote" />
                        <img src={upvoteImg} alt="Upvote" className="upvote" />
                    </div>

                    <p className="post-score">{score}</p>

                    <div className="vote">
                        <img src={voteImg} alt="Downvote" className="downvote" />
                        <img src={downvoteImg} alt="Downvote" className="downvote" />
                    </div>
                </div>
            </div>
            <div className="card-content">
                <div className="card-top">
                    <img alt={data.subreddit_name_prefixed} className="inline subreddit-image" src={subredditImg} />
                    <p className="inline subreddit-name">{data.subreddit_name_prefixed}</p>
                    <p className="inline author-name">
                        Posted by u/
                        {data.author}
                    </p>
                    <button type="button" className="inline join-btn">Join</button>
                </div>

                <div className="content-container">
                    <div className="post-content">
                        <p className="post-title">{data.title}</p>

                        <a className="post-link" style={{ display: linkDisplay }} href={data.url}>{shortLink}</a>

                        <img alt="Post" className="card-image" style={{ display: imageDisplay }} src={data.url} />
                    </div>

                    <img alt="Post" className="card-thumbnail" style={{ display: thumbnailDisplay }} src={data.thumbnail} />
                </div>

                <div className="card-bottom">
                    <div className="post-options">
                        <img alt={data.subreddit_name_prefixed} src={commentImg} />
                        <p>
                            {comments}
                            {' '}
                            Comments
                        </p>
                    </div>

                    <div className="post-options">
                        <img alt={data.subreddit_name_prefixed} src={shareImg} />
                        <p>Share</p>
                    </div>

                    <div className="post-options">
                        <img alt={data.subreddit_name_prefixed} src={saveImg} />
                        <p>Saved</p>
                    </div>

                    <div className="post-options">
                        <img alt={data.subreddit_name_prefixed} src={moreImg} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post

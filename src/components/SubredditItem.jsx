import React from 'react'
import iconImg from '../../src/images/icon.svg'

function SubredditItem({ index, name }) {
    return (
        <div className="sub-item-container">
            <p className="sub-item-position">{index}</p>
            <img alt={name} className="sub-item-image" src={iconImg} />
            <p className="sub-item-name">{name}</p>
            <button type="button" className="sub-join-btn">Join</button>
        </div>
    )
}

export default SubredditItem

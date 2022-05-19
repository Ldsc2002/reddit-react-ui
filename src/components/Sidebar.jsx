import React from 'react'
import SubredditItem from './SubredditItem'

function Sidebar() {
    const topSubs = [
        {"index": 1, "name": "r/Audiophile"},
        {"index": 2, "name": "r/CassetteCulture"},
        {"index": 3, "name": "r/VintageAudio"},
        {"index": 4, "name": "r/GShock"},
        {"index": 5, "name": "r/Watches"},
    ]

    return (
        <div className='sidebar-container'>
            <div className='text-with-image'>
                <img src='./src/images/sidebarBackground.png'></img>
                <p>Today's Top Communities</p>
            </div>

            <div className="subreddit-container">{topSubs.map((element) => <SubredditItem key={element.index} name={element.name} index={element.index} />)}</div>

            <button className='view-all-btn'>View All</button>
        </div>
    )
}

export default Sidebar

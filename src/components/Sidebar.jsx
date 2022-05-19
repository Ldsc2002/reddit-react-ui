import React from 'react'
import SubredditItem from './SubredditItem'

function Sidebar() {
    const topSubs = [
        { index: 1, name: 'r/Audiophile' },
        { index: 2, name: 'r/CassetteCulture' },
        { index: 3, name: 'r/VintageAudio' },
        { index: 4, name: 'r/GShock' },
        { index: 5, name: 'r/Watches' },
    ]

    return (
        <div className="sidebar-container">
            <div className="text-with-image">
                <img alt="" src="./src/images/sidebarBackground.png" />
                <p>Today&apos;s Top Communities</p>
            </div>

            <div className="subreddit-container">{topSubs.map((element) => <SubredditItem key={element.index} name={element.name} index={element.index} />)}</div>

            <button type="button" className="view-all-btn">View All</button>

            <div className="small-btn-container">
                <button type="button" className="small-sub-btn">Near You</button>
                <button type="button" className="small-sub-btn">Gaming</button>
                <button type="button" className="small-sub-btn">Sports</button>
                <button type="button" className="small-sub-btn">News</button>
            </div>
        </div>
    )
}

export default Sidebar

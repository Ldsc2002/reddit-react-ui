import React, { useState, useEffect } from 'react'
import Post from './Post'

function Posts() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('src/data/hot.json').then(
            (response) => response.json(),
        ).then(
            (json) => (
                setData(json.data.children)
            ),
        )
    }, [])

    return (
        <div className="posts-container">{data.map((element) => <Post key={element.data.name} data={element.data} />)}</div>
    )
}

export default Posts

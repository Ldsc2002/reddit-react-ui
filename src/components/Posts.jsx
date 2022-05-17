import React, { useState, useEffect } from 'react'

function Posts() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('src/data/hot.json').then(
            (response) => response.json()).then(
                json => (
                    setData(json.data.children)
                )
            )
        }, [])

    return (
        <>{data.map( d => <div key={d.data.name}>{d.data.name}</div>)}</>
    )
}

export default Posts

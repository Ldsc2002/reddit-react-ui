import React, { useState, useEffect } from 'react'
import NavigationBar from './components/Navbar'

function App() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://www.reddit.com/hot.json').then(
            (res) => setData(res.data),
        )
    })

    console.log(data)

    return (
        <div>
            <NavigationBar />

            <p>This is a test</p>
        </div>
    )
}

export default App

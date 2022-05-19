import React from 'react'
import NavigationBar from './components/Navbar'
import Posts from './components/Posts'
import Sidebar from './components/Sidebar'

function App() {
    return (
        <div>
            <NavigationBar />

            <div className='app-content'>
                <Posts />
                <Sidebar/>
            </div>
        </div>
    )
}

export default App

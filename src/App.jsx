import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Navbar from './components/Navbar'
import Slidebar from './components/Slidebar'
import Footer from './components/Footer'
// import PostList from './components/PostList'
// import CreatePost from './components/CreatePost'
import { useState } from 'react'
import PostListProvider from './store/post-List-store'
import { Outlet } from 'react-router-dom'


function App() {

  const [selectedtabs, setSelectedTabs] = useState("Home")

  return (

    <PostListProvider>
      <div className='app-container'>
        <Slidebar selectedtabs={selectedtabs} setSelectedTabs={setSelectedTabs} />
        <div className='content'>
          <Navbar />
          <Outlet />
          <Footer />
        </div>
      </div>
    </PostListProvider>

  )
}

export default App

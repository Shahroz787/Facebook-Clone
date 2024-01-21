import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import PostList from './components/PostList.jsx'
import CreatePost from './components/CreatePost.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <PostList /> },
      { path: "/CreatePost", element: <CreatePost /> }
    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode >
    <RouterProvider router={router} />
  </React.StrictMode >,
);

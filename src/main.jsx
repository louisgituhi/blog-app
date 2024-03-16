import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import './index.css'
import BlogList from './pages/bloglist'
import BlogsLayout from './layouts/blogsLayout'
import { loader as rootLoader } from './pages/bloglist'
import BlogDetails, { blogDetailsLoader } from './pages/blogDetails'
import HomeLayout from './layouts/homeLayout'
import ErrorPage from './pages/error-page'
import CreateBlog, { submitBlogDataAction } from './pages/createblog'

const router = createBrowserRouter(
  createRoutesFromElements(

        <Route path='/' element={ <HomeLayout />} errorElement={ <ErrorPage /> }>

          <Route path='blogs' element={ <BlogsLayout /> }>
            <Route index element={<BlogList/>} loader= {rootLoader } />
            <Route path=':id' element={ <BlogDetails />} loader={blogDetailsLoader}/>
          </Route>

          <Route path='create' element={ <CreateBlog /> } 
          action={submitBlogDataAction}/>
        </Route>

  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ router } />
  </React.StrictMode>,
)

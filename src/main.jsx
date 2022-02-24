import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import BlogPage from './pages/BlogPage'
import PostPage from './pages/PostPage'
import { Provider } from 'urql'
import { client } from './services/api'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import getPosts from './services/getPosts'

const query = getPosts()

ReactDOM.render(
  <React.StrictMode>
    <Provider value={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <App /> } />
          <Route path="/blog" element={ <BlogPage /> } >
          </Route>
          <Route path="/blog/:postsSlug" element={ <PostPage /> } />
          <Route path="*" element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
          
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

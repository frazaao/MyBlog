import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import BlogPage from "./pages/BlogPage";
import PostPage from "./pages/PostPage";
import { Provider } from "urql";
import { client } from "./services/api";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import getPosts from "./services/getPosts";
import Auth0ProviderWithHistory from "./auth0Provider";

const query = getPosts();

ReactDOM.render(
  <React.StrictMode>
    <Auth0ProviderWithHistory>
      <Provider value={client}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/blog" element={<BlogPage />}></Route>
            <Route path="/blog/:postsSlug" element={<PostPage />} />
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>There's nothing here!</p>
                </main>
              }
            />
          </Routes>
        </BrowserRouter>
      </Provider>
    </Auth0ProviderWithHistory>
  </React.StrictMode>,
  document.getElementById("root")
);

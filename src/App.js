import React, { useEffect, useState } from 'react';
import ErrorBoundary from './components/errorBoundary/errorBoundary';
import { fetchRedditPosts } from './utils/api';
import PostListItem  from './components/postList/potsListItem';

import '../src/App.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        //Fetch Reddit posts (replace 'popular' with the desired subreddit)
        const data = await fetchRedditPosts('popular');
        setPosts(data.data.children);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);
  
  

  return (
    <ErrorBoundary>
      <div className='app'>
        <header className='header'>
          <div className='logo'>
            <h1>Mini reddit</h1>
          </div>
          <form>
            <input type='text' placeholder='Search' />
            <button type='submit'>Search</button>
          </form>
        </header>
        
        <main className='main'>
          {loading ? (
            <div>Loading...</div>
          ) : error ? (
            <div>Error: {error.message}</div>
          ) : (
            // Display Reddit posts by mapping through the 'posts' array
            posts.map((post) => (
              <PostListItem key={post.data.id} post={post.data} />
            ))
          )}  
        </main>

        <aside className='sidebar'>
          <h2>Subreddits</h2>
          <ul>
            { /* Display important subreddits from Reddit API*/}
            { /* You can map through the subreddits and render list items */}
          </ul>
        </aside>
      </div>
    </ErrorBoundary>
  );  
}
  


export default App;

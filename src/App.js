import React, { useEffect, useState } from 'react';
import ErrorBoundary from './components/errorBoundary/errorBoundary';
import { fetchRedditPosts, fetchSubreddits } from './utils/api';
import PostListItem  from './components/postList/potsListItem';

import '../src/App.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [subreddits, setSubreddits] = useState([]);
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
  
  useEffect(() => {
    async function fetchData() {
      try {
        const subredditData = await fetchSubreddits();
        setSubreddits(subredditData);
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

          <div className='container'>
            <form className='search-bar'>
              <input type='text' placeholder='Search' />
              <button type='submit'><img src={require('./resources/lupa.png')}></img></button>
            </form>
          </div>
        </header>
        
        <div className='container'>
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
              {subreddits.map((subreddit) => (
                <li key={subreddit.data.display_name}>
                  <a
                    href={`https://www.reddit.com/r/${subreddit.data.display_name}`}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {subreddit.data.display_name}
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        </div>
        
      </div>
    </ErrorBoundary>
  );  
}
  


export default App;

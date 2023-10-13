import React from 'react';

function App() {
  return (
    <div className='app'>
      <header className='header'>
        <div className='logo'>
          <h1>Logo</h1>
        </div>
        <form>
          <input type='text' placeholder='Search' />
          <button type='submit'>Search</button>
        </form>
      </header>
      
      <main className='main'>
        {/* Display publications from Reddit API */}
        { /* You can map through the posts and render PostListItem components */ }
      </main>

      <aside className='sidebar'>
        <h2>Subreddits</h2>
        <ul>
          { /* Display important subreddits from Reddit API*/}
          { /* You can map through the subreddits and render list items */}
        </ul>
      </aside>
    </div>
  );  
}
  


export default App;

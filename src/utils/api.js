const REDDIT_API_BASE_URL = 'https://www.reddit.com';

export const fetchRedditPosts = async (subreddit = 'popular') => {
  try {
    const response = await fetch(`${REDDIT_API_BASE_URL}/r/${subreddit}.json`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching Reddit posts:', error);
    throw error;
  }
};

export const searchRedditPosts = async (query) => {
  try {
    const response = await fetch(`${REDDIT_API_BASE_URL}/search.json?q=${query}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error searching Reddit posts:', error);
    throw error;
  }
};

export const fetchSubreddits = async () => {
  try {
    const response = await fetch('https://www.reddit.com/subreddits/popular.json');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data.data.children;
  } catch (error) {
    console.error('Error fetching subreddits:', error);
    throw error;
  }
};
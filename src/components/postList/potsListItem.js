import React from 'react';
import ReactMarkdown from 'react-markdown';

const PostListItem = ({ post }) => {
  const { title, author, date, category, content, url, preview } = post;

  // Check if the post has an image preview
  const hasImage = preview && preview.images.length > 0;

  return (
    <div className="post-list-item">
      <h3>
        <a href={url} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </h3>
      <p>{author}</p>
      <p>{date}</p>
      <p>{category}</p>
      {/* Render the post content with ReactMarkdown using 'children' prop */}
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default PostListItem;

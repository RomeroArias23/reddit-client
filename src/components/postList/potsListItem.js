import React from 'react';

const PostListItem = ({post}) => {
    return (
        <div className='post-list-item'>
            <h3>{post.title}</h3>
            <p>{post.author}</p>
            <p>{post.date}</p>
            <p>{post.category}</p>
            <p>{post.content}</p>
        </div>
    );
};

export default PostListItem;
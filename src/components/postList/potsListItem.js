import React from 'react';

const PostListItem = ({post}) => {
    const { title, author, date, category, content, preview } = post;

    //Check if the post has an image preview
    const hasImage = preview && preview.images.length > 0;

    return (
        <div className='post-list-item'>
            <h3>{post.title}</h3>
            <p>{post.author}</p>
            <p>{post.date}</p>
            <p>{post.category}</p>
            <p>{post.content}</p>

            {hasImage && (
                <img src ={preview.images[0].source.url} alt={title} className='post-image'/>
            )}
        </div>
    );
};

export default PostListItem;
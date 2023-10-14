import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

const PostDetail = ({ posts }) => {
    const { postId } = useParams();

    //Find the post with the matching id
    const selectedPost = posts.find((post) => post.id === postId);

    if (!selectedPost) {
        //Handle the case where the post is not found
        return <h2>Post not found</h2>;
    }

    return (
        <div className='post-detail'>
            <h2>{selectedPost.title}</h2>
            <p>{selectedPost.author}</p>
            <p>{selectedPost.date}</p>
            <p>{selectedPost.category}</p>
            <p>{selectedPost.content}</p>
        </div>
    );
};

const mapStateToProps = (state) => ({
    posts: state.posts, 
});

export default connect(mapStateToProps)(PostDetail);
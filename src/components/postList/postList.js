import React from 'react';
import { connect } from 'react-redux';
import PostListItem from './postList';

const PostList = ({ posts }) => {
    return (
    <div className='post-list'>
      {posts.map(post => (
        <PostListItem key={post.id} {...post} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
    posts: state.posts,
});

export default connect(mapStateToProps)(PostList);
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from './actions/postActions';
import PostList from './components/PostList';
import React from 'react';


function App() {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>My Blog</h1>
      <PostList posts={posts} />
    </div>
  );
}

export default App;

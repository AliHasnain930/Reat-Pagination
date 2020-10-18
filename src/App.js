import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PaginatedPosts from './PaginatedPosts';

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

function App() {
  // state
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');

  // call api
  useEffect(() => {
    axios
      .get(BASE_URL)
      .then(response => setPosts(response.data))
      .catch(error => setError(error.message));
  }, []);

  // render
  return (
    <>
      {error !== '' && <h3>{error}</h3>}
      {posts && <PaginatedPosts posts={posts} />}
    </>
  );
}

export default App;

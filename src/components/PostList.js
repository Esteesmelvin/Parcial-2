import React from 'react';

const PostList = ({ posts }) => {
  return (
    <div>
      <h2>Lista de Posts</h2>
      {posts.loading ? (
        <p>Cargando...</p>
      ) : posts.error ? (
        <p>¡Error al cargar los datos!</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PostList;

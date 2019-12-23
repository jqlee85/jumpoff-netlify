import React from 'react';
import ListPost from './ListPost';

const ListPosts = (props) => {

  const posts = props.data;
  
  return <div>
    {posts.map(({ node }) => (
      <ListPost post={node} key={`${node.id}`} path={props.path}/>
    ))}
  </div>
  
}

export default ListPosts;


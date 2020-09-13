import React from 'react';
import { Card } from 'antd';
import { Link } from '@reach/router';

const PostSnippet = (props) => {
  return (    
    <div className="post_snippet_container">
      <Card 
        title={props.title} 
        extra={<Link to={`/posts/${props.id}`}>Read Full Article</Link>}
      >
        
        <div className="articles_content">
          {
            props.content.split('\n').map((item, idx) => {
              return <p key={idx}> {item}  </p>;
            })
          }
        </div>
      </Card>
    </div>
  )
}

export default PostSnippet;
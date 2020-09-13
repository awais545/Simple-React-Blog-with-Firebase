import React, {useState, useEffect} from 'react';
import {PageHeader, Card} from 'antd';
import api from '../mock_api';

const Post = (props) => {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    // this function will run before the actual componenet will render
    useEffect(() => {
      let post = api[props.id];
      
      setTitle(post.title);
      setContent(post.content);
    })

    return (
        <div className="post_container">
          <div className="page_header_container">
            <PageHeader
              className="site-page-header"
              title={title}
            />
          </div>

          <div className="post_content_container">
            <Card style={{ marginTop: '20px' }}>
              {
                content.split('\n').map((item, idx) => {
                  return <p key={idx}> {item}  </p>
                }) 
              }
            </Card>
          </div>
        </div>
    )
}

export default Post;
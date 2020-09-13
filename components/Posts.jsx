import React from 'react';
import { PageHeader } from 'antd';
import PostSnippet from './PostSnippet';
import Post from './Post';
import api from '../mock_api';
import _ from 'lodash';


const Posts = (props) => {
  return (
    <div className="posts_container">
      
      <div className="page_header_container">
        <PageHeader
          className="site-page-header"
          title="Posts"
        />
      </div>

      <div className="articles_container">
        {
          _.map(api, (article, idx) => {
            return (
              <PostSnippet 
                key={idx}
                id={idx}
                title={article.title} 
                content={article.content}
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default Posts;
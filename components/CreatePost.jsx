import React, { useState } from 'react';
import { PageHeader, Input, Button } from 'antd';
import db from '../firebase';
const { TextArea } = Input;

const CreatePost = (props) => {

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const onTitleChange = (e) => setTitle(e.target.value)
  const onContentChange = (e) => setContent(e.target.value)

  const onCreatePost = (e) => {
    e.preventDefault()

  }

  return (
    <div className="create-post-container">
      <div className="page_header_container">
        <PageHeader
          className="site-page-header"
          title='Create Post'
        />
      </div>

      <div className="post_inputs_container">

        <div className="post_input_container">
          <div className="post_input_title">
            <h2>Post Title </h2>
          </div>

          <div className="post_input">
            <Input placeholder="Post Title" value={title} onChange={onTitleChange} />
          </div>
        </div>

        <div className="post_input_container">
          <div className="post_input_title">
            <h2>Post Content </h2>
          </div>

          <div className="post_input">
            <TextArea rows={10} value={content} onChange={onContentChange} />
          </div>
        </div>

        <div className="post_input_button">
          <Button type="primary" size="large" onClick={onCreatePost}> 
            Create Post 
          </Button>
        </div>

      </div>

    </div>
  )
}

export default CreatePost;
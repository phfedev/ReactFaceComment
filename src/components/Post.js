import React, { Component } from 'react';
//import { List } from 'semantic-ui-react'
//import 'semantic-ui-css/semantic.min.css'
import Commentt from './Comment'
import { Comment, Icon } from 'semantic-ui-react'

function Post({ post }) {

  return (
    <div className="postList">
      <Comment.Group>
        <Comment>
          <Comment.Content>
            <div className="gridAvatar">
              <Comment.Avatar src={post.author.avatar} />
              <Comment.Author>
                {post.author.name} <br />
                <span>{post.date}</span>
              </Comment.Author>
            </div>
            <Comment.Text>
              <p>{post.content}</p>
            </Comment.Text>
          </Comment.Content>
          <hr/>
          {post.comments.map(comment => <Commentt key={comment.id} comment={comment} />)}
        </Comment>
      </Comment.Group>
    </div>
    
  )
}
export default Post;
import React, { Component } from 'react';
import { Comment, Icon } from 'semantic-ui-react'

function Commentt({ comment }) {
  return (

    <Comment.Group>
      <Comment>

        <Comment.Content>
          <div className="gridAvatar gridAvatarComment">
            <Comment.Avatar src={comment.author.avatar} />
            <div className="commentario">
              <Comment.Author>
                <p class="commentText"><span class="nameComment">{comment.author.name}</span> {comment.content}</p>
              </Comment.Author>
            </div>

          </div>

          <Comment.Text>

          </Comment.Text>
        </Comment.Content>
      </Comment>
    </Comment.Group>
  )
}

export default Commentt
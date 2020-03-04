import React, {Component} from 'react';
import Post from './Post'


class PostList extends Component{

  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar: "https://react.semantic-ui.com/images/avatar/small/elliot.jpg"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando???",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "https://react.semantic-ui.com/images/avatar/small/joe.jpg"
            },
            content: "Sempre tem"
          },
          {
            id: 2,
            author: {
              name: "Julio Alcantara",
              avatar: "https://react.semantic-ui.com/images/avatar/small/elliot.jpg"
            },
            content: "Obrigado"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Maria Alcantara",
          avatar: "https://react.semantic-ui.com/images/avatar/small/jenny.jpg"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando???",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "https://react.semantic-ui.com/images/avatar/small/joe.jpg"
            },
            content: "Conteúdo do comentário"
          }
        ]
      },
      {
        id: 3,
        author: {
          name: "Julio Alcantara",
          avatar: "https://react.semantic-ui.com/images/avatar/small/elliot.jpg"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando???",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "https://react.semantic-ui.com/images/avatar/small/joe.jpg"
            },
            content: "Conteúdo do comentário"
          }
        ]
      }
    ]
  };
  handlePosts() {   
  }
  render() {
    return(
      <div class="postListGrid">
        {this.state.posts.map(post => <Post key={post.id} post={post} /> )}
        {/* <li key={post.id}>{post.content}</li> */}
      </div>
    )
  }
}

export default PostList;
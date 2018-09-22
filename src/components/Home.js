import React from "react";
import { Link } from 'react-router-dom'
import Pokeball from '../img/pokeball.png'
import { connect } from 'react-redux'


class Home extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { posts } = this.props
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <img src={Pokeball} alt="Pokeball"/>
            <div className="card-content">
              <Link to={'/' + post.id}>
                <span className="card-title red-text">
                  {post.title}
                </span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        )
      })
    ) : (
      <div className="center">No posts yet</div>
    )
    return (
      <div className="container home" >
        <h4 className="center">MY POSTS</h4>
        {postList}
      </div>
    )
  }
}

const MapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

export default connect(MapStateToProps)(Home)
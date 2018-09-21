import React from "react";
import ReactDOM from "react-dom";

class Post extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: null
    }
  }
  componentDidMount() {
    let id = this.props.match.params.post_id
    this.setState({
      id: id
    })
  }
  render() {
    return (
      <div className="container">
        <h4>{this.state.id}</h4>
      </div>
    )
  }
}

export default Post
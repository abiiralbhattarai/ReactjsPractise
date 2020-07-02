import React from "react";
import axios from "axios";
class PostList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }
  componentDidMount() {
    axios.get();
  }
  render() {
    return <div>List of posts</div>;
  }
}
export default PostList;

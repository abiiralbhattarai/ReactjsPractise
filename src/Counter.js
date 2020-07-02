import React from "react";
class Counter extends React.Component {
  static propTypes = { initialCount: React.PropTypes.number };
  static defaultProps = { initialCount: 0 };

  constructor(props) {
    super(props);
    this.state = { count: props.initialCount };
  }

  state = { count: this.props.initialCount };
  tick() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return <div onClick={this.tick.bind(this)}>Clicks: {this.state.count}</div>;
  }
}
export default Counter;

import React from "react";
class AjaxCall extends React.Component {
  constructor(props) {
    super(props);
    this.state = { list: [], error: null };
  }
  buildList = (data) => {
    console.log(data);
    this.setState({ list: data });
  };
  componentDidMount() {
    let url =
      "https://prof3ssorst3v3.github.io/media-sample-files/products.json";
    fetch(url)
      .then((response) => response.json())
      .then(this.buildList)
      .catch();
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.list.length === 0 && <li>Sorry No data available</li>}
          {this.state.list.length > 0 &&
            this.state.list.map((item) => (
              <li key={item.id} id={item.id}>
                {item.title + " " + item.price}
              </li>
            ))}
        </ul>
        {this.state.error && <h3>{this.state.error}</h3>}
      </div>
    );
  }
}

export default AjaxCall;

import React from "react";
import "./App.css";
const initialState = {
  inputValue: " ",
};

const Context = React.createContext(initialState);

export const Provider = Context.Provider;
export const Consumer = Context.Consumer;

class contextDemo extends React.Component {
  state = { inputValue: "" };
  onUserInput = (newVal) => {
    this.setState({ inputValue: newVal });
  };
  render() {
    return (
      <Provider
        value={{ val: this.state.inputValue, onUserInput: this.onUserInput }}
      >
        <div className="App">
          <NodeA />
        </div>
      </Provider>
    );
  }
}

 const NodeA=()=> {
  return (
    <div className="Root element">
      <center>A</center>
      <NodeB />
      <NodeC />
    </div>
  );
}

const NodeB = () => {
  return (
    <div className="Tree element">
      <center>B</center>
      <NodeD />
    </div>
  );
};
const NodeC = () => {
  return (
    <div className="Tree element">
      <center>C</center>
      <NodeE />
    </div>
  );
};

const NodeD = () => {
  return (
    <div className="Child element">
      <center>D</center>
      <Consumer>
      {({ val, onUserInput})=>(
      <textarea 
      type="text"
      value={val}
      onChange={e => onUserInput(e.target.value)}
      />
      
      )}
      </Consumer>
    </div>
  );
};
const NodeE = () =>{
    return(
        <div className="Child element ">
        <center>E</center>
        <Consumer>{context => <p>{context.val}</p>}</Consumer>
        </div>
    );
};

export default contextDemo;

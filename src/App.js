import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import logo from "./logo512.png";
import TodoApp from "./TodoApp";
import AjaxCall from "./AjaxCall";
import MultipleInputs from "./MultipleInputs";
import FilterableProductTable from "./FilterableProductTable";
import Meteronome from "./Metronome";
import SignUpDialog from "./SignUpDialog";
import ContextDemo from "./ContextDemo";
import CounterButton from "./CounterButton";
import AxiosGet from "./AxiosGet";
import HookFirst from "./HookFirst";

export default function App() {
  return (
    <Router>
      <div>
        <div className="row border">
          <nav className=" col-md-6 col-sm-12 row ">
            <div className="col">
              <img src={logo} alt="Logo" width="50" height="50" />
            </div>
            <div className="col active">
              <Link to="/">Home</Link>
            </div>
            <div className="col">
              <Link to="/about">About</Link>
            </div>
            <div className="col">
              <Link to="/topics">Topics</Link>
            </div>
            <div className="col">
              <Link to="/hooks">Hooks</Link>
            </div>
          </nav>
        </div>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
          <Route path="/hooks">
            <Hooks />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home is Home</h2>
      <div className="p-5">
        <ContextDemo />
      </div>
      <AjaxCall />
      <MultipleInputs />
      <FilterableProductTable />
      <CounterButton />
    </div>
  );
}
function About() {
  return (
    <div>
      <TodoApp />
      <SignUpDialog />
      <AxiosGet />
    </div>
  );
}
function Topics() {
  let match = useRouteMatch();
  return (
    <div>
      <h2>Topics</h2>
      <Meteronome />
      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/Hello`}>Hello</Link>
        </li>
      </ul>
      <switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </switch>
    </div>
  );
}
function Hooks() {
  return <HookFirst />;
}
function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}

import React from "react";
import Button from "./components/Button";
import Login from "./pages/login";
class App extends React.Component {
  state = { mi: "this is from state" };
  render() {
    return (
      <div>
        <Login />
      </div>
    );
  }
}
export default App;

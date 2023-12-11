import React from "react";
import Button from "./components/Button";
class App extends React.Component {
  state = { mi: "this is from state" };
  render() {
    return (
      <div>
        {" "}
        <br />
        hiii <span style={{color:"purple"}}>{this.state?.name}</span> from App.js
        <br />
        <button
          onClick={(e) => {
            this.setState({ name: "mojde" });
          }}
        >
          Change Name
        </button>
        <Button
          title2="hi i am being passed from app.js as title2 props to button.js"
          onClick={() => {
            alert("clicked, I am in app.jsand my onclick props is in Button.js");
          }}
        >
          <span style={{color:'darkblue'}}>click inside as Children of Button</span>{" "}
          <span style={{ color:'green' }}>{this.state.mi}</span>
        </Button>
      </div>
    );
  }
}
export default App;

import { Component } from "react";
class Button extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <button className={"button-container"} onClick={this.props.onClick}>{this.props.title2} and {this.props.children}</button>;
  }
}

export default Button;

import React from "react";

export class Input extends React.Component {
  constructor() {
    super();
    this.state = {
      input: ""
    };
  }
  handleChange = e => {
    this.setState({
      input: e.target.value
    });
    this.props.term(this.state.input);
  };
  render() {
    return (
      //   <form onKeyDown={this.}>
      <input value={this.state.term} onChange={this.handleChange} />
      //   </form>
    );
  }
}

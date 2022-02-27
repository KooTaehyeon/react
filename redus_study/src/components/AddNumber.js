import React, { Component } from 'react';
class AddNumber extends Component {
  state = { size: 5 };
  render() {
    return (
      <div>
        <h1>Add Number</h1>
        <input
          type='button'
          value={'+'}
          onClick={function () {
            this.props.onClick(this.state.size);
          }.bind(this)}
        ></input>
        <input
          type='text'
          value={this.state.size}
          onChange={(e) => {
            this.setState({ size: Number(e.target.value) });
          }}
        ></input>
      </div>
    );
  }
}
export default AddNumber;

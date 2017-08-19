import React, { Component } from 'react';

class Editor extends Component {

  handleChange = this.handleChange.bind(this);

  handleChange(event) {
    this.props.onChange(event.target.value);
  }

  render() {
    return (
      <textarea className="Editor form-control" rows="30" cols="50" value={this.props.input} 
        onChange={this.handleChange}></textarea>
    );
  }

}

export default Editor;

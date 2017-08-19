import React, { Component } from 'react';

class Editor extends Component {

  render() {
    return (
      <textarea rows="30" cols="50" defaultValue={this.props.input}
       onChange={(event) => this.props.onChange(event.target.value)}></textarea>
    );
  }

}

export default Editor;
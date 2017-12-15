import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Editor extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onChange(event.target.value);
  }

  render() {
    return (
      <textarea
        className="Editor form-control"
        rows="30"
        cols="50"
        value={this.props.input}
        onChange={this.handleChange}
      />
    );
  }
}

Editor.propTypes = {
  onChange: PropTypes.func.isRequired,
  input: PropTypes.string.isRequired,
};

export default Editor;

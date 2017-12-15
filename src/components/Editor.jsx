import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormControl } from 'react-bootstrap';

import './Editor.css';

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
      <FormControl
        className="Editor"
        rows="30"
        cols="50"
        value={this.props.input}
        onChange={this.handleChange}
        componentClass="textarea"
      />
    );
  }
}

Editor.propTypes = {
  onChange: PropTypes.func.isRequired,
  input: PropTypes.string.isRequired,
};

export default Editor;

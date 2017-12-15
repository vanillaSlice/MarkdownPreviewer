/* eslint-disable react/no-danger */

import React from 'react';
import PropTypes from 'prop-types';
import { Panel } from 'react-bootstrap';
import marked from 'marked';

import './Preview.css';

function compileMarkdown(input) {
  return marked(input, { sanitize: true });
}

const Preview = props => (
  <Panel header="Preview" className="Preview">
    <div dangerouslySetInnerHTML={{ __html: compileMarkdown(props.input) }} />
  </Panel>
);

Preview.propTypes = {
  input: PropTypes.string.isRequired,
};

export default Preview;

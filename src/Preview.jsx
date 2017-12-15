import React from 'react';
import PropTypes from 'prop-types';
import marked from 'marked';

function compileMarkdown(input) {
  return marked(input, { sanitize: true });
}

const Preview = props => (
  <p
    className="Preview"
    dangerouslySetInnerHTML={{ __html: compileMarkdown(props.input) }}
  />
);

Preview.propTypes = {
  input: PropTypes.string.isRequired,
};

export default Preview;

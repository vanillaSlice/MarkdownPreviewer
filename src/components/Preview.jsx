/* eslint-disable react/no-danger */

import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody, CardHeader } from 'reactstrap';
import marked from 'marked';

import './Preview.css';

function compileMarkdown(input) {
  return marked(input, { sanitize: true });
}

const Preview = (props) => {
  const { input } = props;
  return (
    <Card className="Preview">
      <CardHeader>Preview</CardHeader>
      <CardBody dangerouslySetInnerHTML={{ __html: compileMarkdown(input) }} />
    </Card>
  );
};

Preview.propTypes = {
  input: PropTypes.string.isRequired,
};

export default Preview;

import React, { Component } from 'react';
import marked from 'marked';

class Preview extends Component {

  compileMarkdown(input) {
    return marked(input, {sanitize: true});
  }

  render() {
    return (
      <p className="Preview"
        dangerouslySetInnerHTML={{__html: this.compileMarkdown(this.props.input)}}></p>
    );
  }

}

export default Preview;

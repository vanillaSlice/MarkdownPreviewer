import React, { Component } from 'react';

class Preview extends Component {

  render() {
    return (
      <p dangerouslySetInnerHTML={{__html: this.props.markdown}}></p>
    );
  }

}

export default Preview;
import React, { Component } from 'react';
import Editor from './Editor';
import Preview from './Preview';
import './App.css';

class App extends Component {

  state = {
    input: '# Heading\n\n## Sub-heading\n\n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nTwo spaces at the end of a line leave a  \nline break.\n\nText attributes _italic_, *italic*, __bold__, **bold**, `monospace`.\n\nHorizontal rule:\n\n---\n\nBullet list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n  \nA [link](https://github.com/vanillaSlice).'
  };

  updateInput = this.updateInput.bind(this);

  updateInput(input) {
    this.setState({
      input: input
    });
  }
  
  render() {
    return (
      <div className="App">
        <Editor input={this.state.input} onChange={this.updateInput} />
        <Preview input={this.state.input} />
      </div>
    );
  }

}

export default App;

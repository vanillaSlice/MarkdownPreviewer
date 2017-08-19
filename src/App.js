import React, { Component } from 'react';
import Marked from 'marked';
import Editor from './Editor';
import Preview from './Preview';
import './App.css';

Marked.setOptions({sanitize: true});

const initialInput = `# Heading

## Sub-heading

### Another deeper heading
 
Paragraphs are separated
by a blank line.

Two spaces at the end of a line leave a  
line break.

Text attributes _italic_, *italic*, __bold__, **bold**, \`monospace\`.

Horizontal rule:

---

Bullet list:

  * apples
  * oranges
  * pears

Numbered list:

  1. apples
  2. oranges
  3. pears

A [link](https://github.com/vanillaSlice).`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {input: initialInput};
    this.updateInput = this.updateInput.bind(this);
  }
  
  updateInput(text) {
    this.setState({
      input: text
    });
  }
  
  render() {
    return (
      <div className="container">
        <Editor input={this.state.input} onChange={this.updateInput} />
        <Preview markdown={Marked(this.state.input)} />
      </div>
    );
  }
}

export default App;

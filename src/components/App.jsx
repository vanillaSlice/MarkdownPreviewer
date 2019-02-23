import React, {
  Component,
} from 'react';
import {
  Alert,
  Col,
  Container,
  Row,
} from 'reactstrap';

import Header from './Header';
import Editor from './Editor';
import Preview from './Preview';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '# Heading\n\n## Sub-heading\n\n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nTwo spaces at the end of a line leave a  \nline break.\n\nText attributes _italic_, *italic*, __bold__, **bold**, `monospace`.\n\nHorizontal rule:\n\n---\n\nBullet list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n  \nA [link](https://github.com/vanillaSlice).',
    };

    this.updateInput = this.updateInput.bind(this);
  }

  updateInput(input) {
    this.setState({ input });
  }

  render() {
    const { input } = this.state;

    return (
      <div>
        <Header />
        <Container>
          <Alert color="primary">
            Learn about Markdown
            <strong>
              <a href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet">here</a>
            </strong>
            .
          </Alert>
          <Row>
            <Col xs="12" sm="6">
              <Editor input={input} onChange={this.updateInput} />
            </Col>
            <Col xs="12" sm="6">
              <Preview input={input} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;

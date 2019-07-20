import React, { Component, Fragment } from 'react';
import brace from 'brace';
import AceEditor from 'react-ace';
import fire from './Fire';

import 'brace/mode/javascript';
import 'brace/theme/monokai';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: ''
    };
  }

  componentDidMount() {
    fire
      .database()
      .ref('/codeBucket')
      .on('value', snap => {
        this.setState({ code: snap.val().code });
      });
  }

  onChange = codeInEditor => {
    console.log(codeInEditor);
    let code = codeInEditor;
    fire
      .database()
      .ref('/codeBucket')
      .set({
        code
      });
  };

  btncheck = e => {
    let d;
    if (e === 'js') {
      d = `this is ${e} code`;
      this.setState({ code: d });
    } else if (e === 'ja') {
      d = `this is ${e} code`;
      this.setState({ code: d });
    } else if (e === 'py') {
      d = `this is ${e} code`;
      this.setState({ code: d });
    }
  };

  render() {
    return (
      <Fragment>
        <button onClick={() => this.btncheck('js')}>javascript</button>
        <button onClick={() => this.btncheck('ja')}>java</button>
        <button onClick={() => this.btncheck('py')}>python</button>

        <AceEditor
          mode='javascript'
          theme='github'
          onChange={this.onChange}
          name='UNIQUE_ID_OF_DIV'
          editorProps={{ $blockScrolling: true }}
          value={this.state.code}
        />
      </Fragment>
    );
  }
}

export default App;

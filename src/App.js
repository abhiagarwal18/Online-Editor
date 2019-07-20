import React, {Component, Fragment} from 'react';
import brace from 'brace';
import AceEditor from 'react-ace';
import fire from './Fire.js';

import 'brace/mode/javascript';
import 'brace/theme/monokai';

export class App extends Component{
  constructor(props){
    super(props);
    this.state={
      code:''
    };
  }
  componentDidMount(){
    fire
      .database()
      .ref('/codeBucket')
      .on('value',snap=>{
        this.setState({code:snap.val().code})
      });
  }
onChange= codeInEditor=>{
  console.log(codeInEditor)
  let code=codeInEditor;
  fire
    .database()
    .ref('/codeBucket')
    .set({
      code
    });
};

btncheck=e=>{

}


render(){
  return(
    <Fragment>
      <button onClick={()=>this.btncheck('js.')}
    </Fragment>
  )
}

}

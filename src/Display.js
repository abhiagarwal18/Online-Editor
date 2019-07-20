import React, { Component, Fragment } from 'react';

export class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {
      any: []
    };
  }

  componentWillMount() {
    console.log('will dis mount');
  }

  componentDidMount() {
    console.log('did dis mount');
  }

  componentDidUpdate(prevprop, prevstate) {
    console.log(prevprop);
    console.log(prevstate);
    console.log(this.state);
    console.log(this.props);
  }

  change = () => {
    this.setState({ any: [344, 45, 34] });
  };

  change2 = () => {
    this.setState({ any: [4545, 4545, 3454454] });
  };

  render() {
    return (
      <Fragment>
        <div>
          <button onClick={this.change} />
        </div>
        <div>
          <button onClick={this.change2} />
        </div>
      </Fragment>
    );
  }
}

export default Display;

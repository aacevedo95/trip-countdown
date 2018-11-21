import React, { Component } from 'react';
import Countdown from './Countdown.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <br />
        {console.log('test')}
        <h3 className="title">Cafilornia Bois, we almost there.</h3>
        <h3 className="title">Jan 11, 2019.</h3>
        <Countdown date="2019-01-11" />
        <br />

        <h2 className="Link">
          edit the <a href="https://goo.gl/mqxmbf">doc</a>
        </h2>
      </div>
    );
  }
}

export default App;

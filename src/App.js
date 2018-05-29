import React, { Component } from 'react';

import ContactTypes from './containers/ContactTypes';
import People from './containers/People';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <ContactTypes />
        <People />
      </div>
    );
  }
}

export default App;

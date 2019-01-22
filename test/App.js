import { Component } from 'react';
import template from './App.pug';

class App extends Component {
  render() {
    const name = 'albert';
    return template({ name });
  }
}

export default App;

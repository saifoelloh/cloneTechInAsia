import React, { Component } from 'react';
import Aux from './hoc/Auxiliary.jsx'
import Bottom from './Components/Bottom/Bottom.jsx'
import Berita from './Container/Berita/Berita.jsx'

class App extends Component {
  render() {
    return (
        <Aux>
            <Berita />
            <Bottom />
        </Aux>
    );
  }
}

export default App;

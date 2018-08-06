import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import {Container} from 'reactstrap';
import Aux from './hoc/Auxiliary.jsx';
import Header from './Components/Header/Header.jsx';
import Bottom from './Components/Bottom/Bottom.jsx';
import Berita from './Container/Berita/Berita.jsx';
import BeritaDetail from './Container/BeritaDetail/BeritaDetail.jsx';

class App extends Component {
  render() {
    return (
      <Aux>
        <Header />
        <Switch>
          <Route path="/" component={Berita} exact={true} />
          <Route path="/BeritaDetail" component={BeritaDetail} />
        </Switch>
      </Aux>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import { Container } from 'reactstrap'
import Axios from 'axios'
import Bottom from './Components/Bottom/Bottom.jsx'
import Berita from './Container/Berita/Berita.jsx'
import BeritaDetail from './Container/BeritaDetail/BeritaDetai.jsx'

class App extends Component {

    render() {
        return (
            <Container>
                <Switch>
                    <Route path="/" component={Berita} exact={true} />
                    <Route path="/BeritaDetail" component={BeritaDetail} />
                </Switch>
                <Bottom />
            </Container>
        );
    }
}

export default App;

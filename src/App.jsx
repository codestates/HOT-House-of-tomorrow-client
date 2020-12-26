import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LobbyContainer from './containers/pages/lobby/LobbyContainer';
import HeaderContainer from './containers/systems/Header/HeaderContainer';

function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <Router>
        <Switch>
          <Route path="/lobby" component={LobbyContainer} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

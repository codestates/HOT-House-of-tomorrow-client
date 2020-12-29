import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LobbyContainer from './containers/pages/lobby/LobbyContainer';
import HeaderContainer from './containers/systems/Header/HeaderContainer';
import PostContainer from './containers/pages/post/PostDetailContainer';

function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <Router>
        <Switch>
          <Route exact path="/" component={LobbyContainer} />
          <Route path="/card_collections/:id" component={PostContainer} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

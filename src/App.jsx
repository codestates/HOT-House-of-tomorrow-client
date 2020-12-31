import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LobbyContainer from './containers/pages/lobby/LobbyContainer';
import HeaderContainer from './containers/systems/Header/HeaderContainer';
import PostDetailContainer from './containers/pages/post/PostDetailContainer';
import UserPageContainer from './containers/pages/user_page/UserPageContainer';
import EditContainer from './containers/pages/edit/EditContainer';

function App() {
  return (
    <div className="App">
      <Router>
        <HeaderContainer />
        <Switch>
          <Route exact path="/" component={LobbyContainer} />
          <Route path="/card_collections/:id" component={PostDetailContainer} />
          <Route path="/users/:id" component={UserPageContainer} />
          <Route path="/edit" component={EditContainer} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

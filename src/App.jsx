import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LobbyContainer from './containers/pages/lobby/LobbyContainer';
import HeaderContainer from './containers/systems/Header/HeaderContainer';
import PostDetailContainer from './containers/pages/post_detail/PostDetailContainer';
import UserPageContainer from './containers/pages/user_page/UserPageContainer';
import EditContainer from './containers/pages/user_edit_page/EditContainer';
import WritePageContainer from './containers/pages/write_page/WritePageContainer';
import PostEditContainer from './containers/pages/post_edit_page/PostEditContainer';

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
          <Route exact path="/writing" component={WritePageContainer} />
          <Route exact path="/edit_card/:id" component={PostEditContainer} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

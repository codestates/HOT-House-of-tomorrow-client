import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainRouter from './MainRouter';
import WritingContainer from '../containers/pages/writing/WritingContainer';

function RootRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/writing" component={WritingContainer} />
        <Route path="/" component={MainRouter} />
      </Switch>
    </Router>
  );
}

export default RootRouter;

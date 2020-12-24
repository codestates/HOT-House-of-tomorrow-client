import React from 'react';
import './App.css';
// import LoginContainer from './containers/systems/user_login/LoginContainer';
// import FilterBarContainer from './containers/pages/lobby/filter_Bar/FilterBarContainer';
import HeaderContainer from './containers/systems/Header/HeaderContainer';

function App() {
  return (
    <div className="App">
      {/* <LoginContainer /> */}
      <HeaderContainer />
      {/* <FilterBarContainer /> */}
    </div>
  );
}

export default App;

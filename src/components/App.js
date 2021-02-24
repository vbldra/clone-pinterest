import React from 'react';
import '../styles/app.css';
import Navigation from "./Navigation";
import HomeContainer from './HomeContainer';
import FollowingContainer from './FollowingContainer';
import Account from './Account'
import RoundButton from './RoundButton'
import { Route } from 'react-router-dom'

function App() {
  
  return (
    <div className="App">
      <Navigation />

      <Route path="/" exact>
        <HomeContainer />
      </Route>
      <Route path="/following">
        <FollowingContainer />
      </Route>
      <Route path="/vbldra/_saved/"> {/*link to account name*/}
        <Account />
      </Route>
      <RoundButton action="addNewItem" />
      <RoundButton action="helpCenter" />
    </div>
  );
}

export default App;

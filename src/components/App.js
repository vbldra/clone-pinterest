import React from 'react';
import './App.css';
import HomeContainer from './HomeContainer';
import FollowingContainer from './FollowingContainer';
import Search from './Search';
import NavButton from './NavButton';
import Account from './Account'
import AccountMenu from './AccountMenu'
import RoundButton from './RoundButton'
import { Route, NavLink } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink className="nav-item" exact to="/">P</NavLink>
        <NavLink className="nav-item" activeClassName="active" exact to="/">Home</NavLink>
        <NavLink className="nav-item" activeClassName="active" exact to="/following">Following</NavLink>
        <Search />
        <NavButton type="updates" />
        <NavButton type="inbox" />
        <NavLink className="nav-item" exact to="/vbldra/_saved/">V</NavLink> {/*link to account name*/}
        <AccountMenu />   
      </nav>

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

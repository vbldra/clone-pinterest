import React, { useReducer, useState } from 'react';
import { Route } from 'react-router-dom'

import '../sass/app.scss';

import Navigation from "./Navigation";
import HomeContainer from './HomeContainer';
import SearchContainer from './SearchContainer';
import FollowingContainer from './FollowingContainer';
import Account from './Account'
import PopupFooterAdd from './PopupFooterAdd'
import PopupFooterHelp from './PopupFooterHelp'
import IconFA from "./IconFA";

export const MessengerPiggeon = React.createContext(null)

function App() {
//   const [user, setUser] = useState({
//     username: "null"
//   })

  const [searchText, setSearchText] = useState("")

  // Popups
  const [popups, dispatch ] = useReducer(popupReducer, {
    popupUpdatesVisible: false,
    popupInboxVisible: false,
    popupOptionVisible: false,
    popupAddVisible: false,
    popupHelpVisible: false,
  })

  function popupReducer(state, action) {
    const newState = {...state}
    for (const key in newState) {
      newState[key] = action.type === key ? !newState[key] : false
    }
    return newState;
  }

  return (
    <div className="App">
      <MessengerPiggeon.Provider 
        value={{dispatch, popups, searchText, setSearchText}}>
        
        <Navigation />
      
        <Route path="/" exact>
          <HomeContainer />
        </Route>

        <Route path="/search" exact>
          <SearchContainer />
        </Route>
        
        <Route path="/following" exact>
          <FollowingContainer />
        </Route>
        
        <Route path="/vbldra/_saved/"> {/*link to account name*/}
          <Account />
        </Route>

      </MessengerPiggeon.Provider>

      <button onClick={() => {
          dispatch({type: "popupAddVisible"})
        }}>
      <IconFA type="plus" />
      </button>                       
      {popups.popupAddVisible && <PopupFooterAdd />}

      <button onClick={() => {
          dispatch({type: "popupHelpVisible"})
        }}>
      <IconFA type="question" />
      </button>                       
      {popups.popupHelpVisible && <PopupFooterHelp />}
      
    </div>
  );
}

export default App;

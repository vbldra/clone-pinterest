import React, { useReducer, useState } from 'react';
import '../styles/app.css';
import Navigation from "./Navigation";
import HomeContainer from './HomeContainer';
import FollowingContainer from './FollowingContainer';
import Account from './Account'
import PopupAdd from './PopupAdd'
import PopupHelp from './PopupHelp'
import { Route } from 'react-router-dom'

export const MessengerPiggeon = React.createContext(null)

function App() {
  const [user, setUser] = useState({
    username: "null"
  })

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
    return newState
  }

  return (
    <div className="App">
      <MessengerPiggeon.Provider value={{dispatch, popups, user}}>
        <Navigation />
      </MessengerPiggeon.Provider>
      
      <Route path="/" exact>
        {user.username && <HomeContainer />}
      </Route>
      <Route path="/following">
        <FollowingContainer />
      </Route>
      <Route path="/vbldra/_saved/"> {/*link to account name*/}
        <Account />
      </Route>

      <button 
        onClick={e => {
          dispatch({type: "popupAddVisible"})
        }
        }>+</button>                       
      {popups.popupAddVisible && (
        <PopupAdd />   
      )}

      <button 
        onClick={e => {
          dispatch({type: "popupHelpVisible"})
        }
        }>+</button>                       
      {popups.popupHelpVisible && (
        <PopupHelp />   
      )}
    </div>
  );
}

export default App;

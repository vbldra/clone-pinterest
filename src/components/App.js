import React, { useReducer } from 'react';
import '../styles/app.css';
import Navigation from "./Navigation";
import HomeContainer from './HomeContainer';
import FollowingContainer from './FollowingContainer';
import Account from './Account'
import PopupAdd from './PopupAdd'
import PopupHelp from './PopupHelp'
import { Route } from 'react-router-dom'

function App() {

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
      // newState[key] = !newState[key]
      newState[key] = false
      if (action.type === key) {
        newState[key] = !newState[key]
      }
    }
    return newState
  }

  return (
    <div className="App">
      <Navigation dispatch={dispatch} popups={popups}/>
      <Route path="/" exact>
        <HomeContainer />
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

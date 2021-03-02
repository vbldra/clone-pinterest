import React, { useReducer, useState, useEffect } from 'react';
import { Route } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faQuestion } from '@fortawesome/free-solid-svg-icons'

import '../styles/app.css';

import Navigation from "./Navigation";
import HomeContainer from './HomeContainer';
import FollowingContainer from './FollowingContainer';
import Account from './Account'
import PopupAdd from './PopupAdd'
import PopupHelp from './PopupHelp'

export const MessengerPiggeon = React.createContext(null)

function App() {
  const [user, setUser] = useState({
    username: "null"
  })

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
    return newState
  }
  
  // // API
  // const [data, setData] = useState([])
  // const access_key = "2H3mvcSCyKBluMbaLXRrjODWLIP1mjIDY64McgFzrxk";

  // // search
  // const query = "javascript" 
  
  // useEffect(async () => {
  //     const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}&per_page=50&client_id=${access_key}`)
  //     const resData = await response.json()
  //     setData(resData.results)
  //   }, [])

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

      <button onClick={() => {
          dispatch({type: "popupAddVisible"})
        }}>
      <FontAwesomeIcon icon={faPlus} />
      </button>                       
      {popups.popupAddVisible && <PopupAdd />}

      <button onClick={() => {
          dispatch({type: "popupHelpVisible"})
        }}>
      <FontAwesomeIcon icon={faQuestion} />
      </button>                       
      {popups.popupHelpVisible && <PopupHelp />}
    </div>
  );
}

export default App;

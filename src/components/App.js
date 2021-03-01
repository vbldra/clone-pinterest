import React, { useReducer, useState, useEffect } from 'react';
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

  const [data, setData] = useState([])
  const access_key = "2H3mvcSCyKBluMbaLXRrjODWLIP1mjIDY64McgFzrxk";
  const query = "software"
  useEffect(async () => {
      const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}&page=1&per_page=50&client_id=${access_key}`)
      const resData = await response.json()
      setData(resData.results)
    }, [])


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
        {user.username && <HomeContainer data={data} />}
      </Route>
      <Route path="/following">
        <FollowingContainer data={data}/>
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

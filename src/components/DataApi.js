import axios from "axios";
import { useState, useEffect, useContext } from "react";
import Item from "./Item";
import { MessengerPiggeon } from "./App"


function DataApi(props) {
  const {searchText} = useContext(MessengerPiggeon)
  
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const access_key = "2H3mvcSCyKBluMbaLXRrjODWLIP1mjIDY64McgFzrxk";
  let linkApi = `https://api.unsplash.com/search/photos`;
  let query;

  switch (props.type) {
    case "homePage":
      query = "otter";
      break;
    case "followingPage":
      query = "web+development";
      break;
    case "search":
      query = {searchText};
      break;
    default:
      break;
  }

  // parameters for axios to access API
  let paramApi = {
    params: {
      query: query,
      client_id: access_key,
      per_page: 30,
    },
  };

  useEffect(async () => {
    try {
        const response = await axios.get(linkApi, paramApi);
        setLoading(false);
        setData(response.data.results);
    } catch (error) {
        console.error(error);
    }
  }, props.type === "search" ? [searchText] : []);

  return (
    <>
      {loading && <p className="loading-text">loading...</p>}
      <div className="flex-container">
        {data && data.map((photo, index) => <Item key={index} photo={photo} />)}
      </div>
    </>
  );
}

export default DataApi;

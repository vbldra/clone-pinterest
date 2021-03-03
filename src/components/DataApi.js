import axios from 'axios';
import { useState, useEffect } from 'react'
import Item from './Item';

function DataApi(props) {
    
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    const access_key = "2H3mvcSCyKBluMbaLXRrjODWLIP1mjIDY64McgFzrxk";
    let linkApi = `https://api.unsplash.com/search/photos`;
    let query;

    switch (props.type) {
        case "homePage":
            query = "otter" 
            break;
        case "followingPage":
            query = "web+development"
            break;
        case "search":
            query = "javascript"
            break;
        default:
            break;
    }

    // parameters for axios to access API
    let paramApi = {
        params: {
            query: query,
            client_id: access_key,
            per_page: 30
        }
    }

    useEffect(async () => {
        try {
            const response = await axios.get(linkApi, paramApi)
            setLoading(true)
            setData(response.data.results)
        } catch (error) {
            console.error(error);
        }
    }, [])

    return (
        <>
            {!loading && <p className="loading-text">loading...</p>}
            <div className="flex-container">
                {data && data.map((photo, index) => <Item key={index} photo={photo} />)}
            </div>
        </>
    )
    
}

export default DataApi
import { useState, useEffect } from 'react'
import Item from './Item';


function DataApi(props) {
    // API
    const [data, setData] = useState([])
    const access_key = "2H3mvcSCyKBluMbaLXRrjODWLIP1mjIDY64McgFzrxk";
    let linkApi;
    let query;
    
    if (props.type === "homePage") {
        query = "iceland" 
        linkApi = `https://api.unsplash.com/search/photos?query=${query}&per_page=50&client_id=${access_key}`
    } else if (props.type === "followingPage") {
        query = "web+development" 
        linkApi = `https://api.unsplash.com/search/photos?query=${query}&per_page=50&client_id=${access_key}`
    } else if (props.type === "search") {
        query = "javascript" 
        linkApi = `https://api.unsplash.com/search/photos?query=${query}&per_page=50&client_id=${access_key}`
    }

    useEffect(async () => {
        const response = await fetch(linkApi)
        const resData = await response.json()
        setData(resData.results)
    }, [])
    return data && data.map((photo, index) => <Item key={index} photo={photo} />)
    
}

export default DataApi
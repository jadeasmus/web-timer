import axios from 'axios'
import { useState, useEffect } from 'react';

const GetUserInfo = () => {

    const [token, setToken] = useState('')
    const [data, setData] = useState({})

    const playlists_endpoint = "https://api.spotify.com/v1/playlists"

    // grab access token from local storage
    useEffect(() => {
        if (localStorage.getItem("accessToken")) {
            setToken(localStorage.getItem("accessToken"))
        }
    }, []) // only runs once with empty array dependency

    const handleGetPlaylists = () => {
        axios.get(playlists_endpoint, {
            headers: { 
                'Authorization': 'Bearer ' + token
            }
        })
        .then((response) => {
            setData(response.data)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    return ( 
        <button className="m-3 p-2 border-2 border-black rounded-md" onClick={handleGetPlaylists}>Get Playlists</button>
     );
}
 
export default GetUserInfo;
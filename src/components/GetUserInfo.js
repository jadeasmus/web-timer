import axios from 'axios'
import { useState, useEffect } from 'react';

import Player from './Player'

const GetUserInfo = () => {

    const [token, setToken] = useState('')
    const [data, setData] = useState({})

    const playlists_endpoint = "https://api.spotify.com/v1/me/playlists"

    // grab access token from local storage
    useEffect(() => {
        if (localStorage.getItem("accessToken")) {
            setToken(localStorage.getItem("accessToken"))
        }
    }, []) // only runs once with empty array dependency

    const handleGetPlaylists = () => {
        axios
            .get(playlists_endpoint, {
                headers: { 
                    Authorization: 'Bearer ' + token,
                },
            })
            .then((response) => {
                // console.log("i have response")
                setData(response.data)
            })
            .catch((error) => {
                console.log(error)
            })

    }

    console.log(data)

    return ( 
        <div>
            <button className="m-3 p-2 border-2 border-black rounded-md" onClick={handleGetPlaylists}>Get Playlists</button>
            { data?.items ? data.items.map((item) => <p>{ item.name }</p>) : null}

            <Player token={token} />
            
        </div>
     );
}
 
export default GetUserInfo;
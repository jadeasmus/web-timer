import axios from 'axios'
import { useState } from 'react'

const Player = (props) => {

    const player_endpoint = "https://api.spotify.com/v1/me/player"

    const [data, setData] = useState({})

    const handleGetPlayer = () => {
        axios
            .get(player_endpoint, {
                headers: { 
                    Authorization: 'Bearer ' + props.token,
                },
            })
            .then((response) => {
                // console.log("i have response")
                setData(response.data)
                console.log(data)
            })
            .catch((error) => {
                console.log(error)
            })

    }

    

    return ( 
        <div>
            <div>
                {/* <img src={item.album.images[0].url}></img> */}
                <button onClick={ handleGetPlayer }>Get Player</button>
            </div>
        </div>
     );
}
 
export default Player;
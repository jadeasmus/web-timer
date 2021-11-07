/* 
https://accounts.spotify.com/en/login?continue=https:%2F%2Faccounts.spotify.com%2Fauthorize%3F%2520%2520%2520%2520%2520%2520client_id%3D4fc49d0dfe1d4807bb2ee99444baae18%26redirect_uri%3Dhttp%253A%252F%252Flocalhost%253A30000%252Fredirect%2520%2520%2520%2520%2520%2520%26response_type%3Dtoken%26show_dialog%3Dtrue
*/

import axios from 'axios';


// stores the access_token, token_type, and expires_in fields in an object
export const getParamValues = (url) => {
    return url
        .splice(1)
        .split('&')
        .reduce((prev, cur) => {
            const [title, value] = curr.split('=');
            prev[title] = value;
            return prev;
        }, {});
}

// adds the access_token to every axios API request
export const setAuthHeader = () => {
    try {
        const params = JSON.parse(localStorage.getItem('params'));
        if(params) {
            axios.defaults.headers.common[
                'Authorization'
            ] = `Bearer ${params.access_token}`;
        }
    } catch(error) {
        console.log('Error setting auth', error);
    }
};
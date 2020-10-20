import axios from 'axios';

export class Api {
    constructor() {
        axios.defaults.baseURL = 'https://track-api.leadhit.io';
    }
    async getTestAuth() {
        return await axios.get(`/client/test_auth` , {
            headers: {
                'Api-Key': '5f8475902b0be670555f1bb3:eEZn8u05G3bzRpdL7RiHCvrYAYo',
                'Leadhit-Site-Id': '5f8475902b0be670555f1bb3'
            }
        })
            .then(response => response.data)
            .catch(item => {return {error: item}});
    }
}
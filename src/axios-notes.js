import axios from 'axios';

const instance = axios.create({
    baseURL : 'https://notepad-bacc6.firebaseio.com/'
});
export default instance;
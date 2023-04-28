import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '13cfba13674842a789a920303f58ab30'
    }
});
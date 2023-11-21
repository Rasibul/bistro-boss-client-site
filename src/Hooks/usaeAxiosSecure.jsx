import axios from "axios";


export const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})

const usaeAxiosSecure = () => {
    return axiosSecure
};

export default usaeAxiosSecure;
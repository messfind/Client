
import axios from "axios"
const axiosBase = axios.create({
    baseUrl: "http://localhost:4040/api"
})
export default axiosBase
import axios from "axios";

export const axiosDB = axios.create({
    baseURL: "http://localhost:4000/api"
})


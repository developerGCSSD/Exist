import axios from "axios";

const API = axios.create({
    baseURL:"https://exist-api.itech-llc.com/api"
});

export const loginApi = async(username,password)=>{
    try {
        const response = await API.post("/Auth/Login",{username,password}); //& Send a POST request to the full endpoint path
        return response
    } catch (error) {
       console.error("LoginAPI error", error) 
       throw error.message;
       
    }
}


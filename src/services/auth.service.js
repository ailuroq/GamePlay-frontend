import axios from "axios";
import {API_URL} from "../constants/urlConstants";


const register = (username, email, password) => {
    return axios.post(API_URL + "auth/signup", {
        username,
        email,
        password,
    });
};

const login = (username, password) => {
    return axios
        .post(API_URL + "auth/signin", {
            username,
            password,
        })
        .then((response) => {
            if (response.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }

            return response.data;
        });
};

const logout = () => {
    localStorage.removeItem("user");
};

export default {
    register,
    login,
    logout,
};

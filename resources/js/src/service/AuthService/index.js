import Cookies from "js-cookie";
import api from "../../config";

const loginUrl = "login";
const logoutUrl = "logout";

class AuthService {
    isAuthenticated() {
        const token = Cookies.get("token");

        return token ? true : false;
        // return true;
    }

    authenticatedUser() {
        const info = localStorage.getItem("user");

        return info ? JSON.parse(info) : false

    }
    authenticate(token, data) {

        Cookies.set("token", token);
        localStorage.setItem("user", JSON.stringify(data));
    }

    unAuthenticate() {

        Cookies.remove("token");
        localStorage.removeItem("user");
    }

    login(data) {
        return api.post(loginUrl, data);
    }


    logout() {
        return api.post(logoutUrl);
    }
}

export default new AuthService();

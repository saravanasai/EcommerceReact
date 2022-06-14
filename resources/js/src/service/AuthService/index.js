import Cookies from "js-cookie";

class AuthService {
    isAuthenticated() {
        const token = Cookies.get("token");

        return token ? true : false;
        // return true;
    }

    authenticate(token) {
        const expires = 60 * 60 * 1000;
        const inOneHour = new Date(new Date().getTime() + expires);

        // you will have the exact same setters in your Login page/app too
        Cookies.set("token", token, { expires: inOneHour });
    }
}

export default new AuthService();

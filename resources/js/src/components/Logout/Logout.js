import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import AuthService from "../../service/AuthService";

function Logout  ()  {

    let navigate = useNavigate();

    const handleLogout = () => {
        const loadingToast = toast.loading("Logging out...");
        AuthService.logout()
            .then((e) => {
                toast.dismiss(loadingToast);
                if (e.status == 204) {
                    AuthService.unAuthenticate();
                    toast.success("Logged Out!");
                   setTimeout(()=>{
                    window.location.href=window.location.origin+'/login'
                   },2000)

                }
            })
            .catch((e) => {
                toast.dismiss(loadingToast);
                AuthService.unAuthenticate();
                toast.success("Logged Out!");
                window.location.href=window.location.origin+'/login'

            });
    };

    return (
        <button
            onClick={handleLogout}
            type="button"
            className="btn btn-dark"
            rel="noreferrer"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-logout"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
                <desc>
                    Download more icon variants from
                    https://tabler-icons.io/i/logout
                </desc>
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"></path>
                <path d="M7 12h14l-3 -3m0 6l3 -3"></path>
            </svg>
            Logout
        </button>
    );
};

export default Logout;

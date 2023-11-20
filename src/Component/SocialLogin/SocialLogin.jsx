import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { FaGooglePlus } from "react-icons/fa";


const SocialLogin = () => {
    const {googleLogin} = useAuth()
    const navigate = useNavigate()
    const handelGoogleLogin = (media) =>{
        media()
        .then(() =>{
            navigate('/')
        })
        .catch(error => console.log(error))
    }
    return (
        <>
            <div className="divider font-bold">Continue with</div>
            <div className="flex items-center justify-center ">
                <button
                    onClick={() => handelGoogleLogin(googleLogin)}
                    className="btn btn-sm btn-primary">Google
                    <FaGooglePlus></FaGooglePlus>
                </button>

            </div>
        </>
    );
};

export default SocialLogin;
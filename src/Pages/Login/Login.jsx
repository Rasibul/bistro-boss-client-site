import { Link, useLocation, useNavigate } from 'react-router-dom';
import authentication from '../../assets/others/authentication.gif'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import SocialLogin from '../../Component/SocialLogin/SocialLogin';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';

const Login = () => {
    const { signIn } = useAuth()
    const location = useLocation()
    const navigate = useNavigate()
    const [disable, setDisable] = useState(true)
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])
    const handelLogin = e => {
        e.preventDefault()
        const from = e.target
        const email = from.email.value
        const password = from.password.value
        // console.log(email, password)

        signIn(email, password)
            .then(res => {
                console.log(res.user)
                navigate(location?.state ? location.state : '/');
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "User Login Sucessfully",
                    showConfirmButton: false,
                    timer: 1000
                });

            })
            .catch(error => console.log(error))
    }

    const handelValidateCaptcha = (e) => {
        const value = e.target.value
        if (validateCaptcha(value)) {
            setDisable(false)
        }

        else {
            setDisable(true)
        }
    }

    return (
        <div className="hero  ">
            <Helmet>
                <title>Bistro | Login</title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="">
                    <img src={authentication} alt="" />
                </div>
                <div className="card w-full max-w-sm ">
                    <h2 className='text-4xl text-center font-bold'>Please Login </h2>
                    <form onSubmit={handelLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control" >
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                            <input type="text" onBlur={handelValidateCaptcha} placeholder="type above captcha" name="captcha" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <input disabled={disable} className="btn btn-primary" type="submit" value="Login" />
                        </div>
                        <label className="label font-bold">
                            New here? <Link to="/register" className="label-text-alt link link-hover font-bold">Create an account</Link>
                        </label>
                        <SocialLogin></SocialLogin>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Login;
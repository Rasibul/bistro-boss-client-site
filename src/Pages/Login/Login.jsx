import { Link } from 'react-router-dom';
import authentication from '../../assets/others/authentication.gif'

const Login = () => {
    const handelLogin = e =>{
        e.preventDefault()
        const from = e.target
        const email = from.email.value
        const password = from.password.value
        console.log(email,password)
    }
    return (
        <div className="hero  ">
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
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <label className="label font-bold">
                            New here? <Link to="/register" className="label-text-alt link link-hover font-bold">Create an account</Link>
                        </label>
                    </form>
                </div>
                
            </div>
        </div>
    );
};

export default Login;
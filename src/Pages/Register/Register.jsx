import { Link } from 'react-router-dom';
import authentication2 from '../../assets/others/authentication1.png'
const Register = () => {
    const handelRegister = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const name = e.target.name.value
        const password = e.target.password.value
        const user = { email, name, password }
        console.log(user)
    }
    return (
        <div className="hero  ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="">
                    <img src={authentication2} alt="" />
                </div>
                <div className="card w-full max-w-sm ">
                    <h2 className='text-4xl text-center font-bold'>Please Login </h2>
                    <form onSubmit={handelRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="name" placeholder="name" name="name" required className="input input-bordered" />
                        </div>
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
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <h2 className="text-sm font-bold">
                            Alredy Have An Account? <Link to="/login" className="label-text-alt link link-hover text-sm font-bold">Please Login</Link>
                        </h2>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Register;
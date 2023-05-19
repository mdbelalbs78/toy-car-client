import React, { useContext} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';



const Login = () => {

  const {signIn,googleSignIn} = useContext(AuthContext)

  const navigate = useNavigate()
  
  const handleGoogleSignIn = () => {
       
    googleSignIn()
    .then(result => {
      const user = result.user;
      console.log(user);
    })
    .catch(error => console.log(error))
  }

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);

        signIn(email,password)

        .then(result => {
          const user = result.user;
          console.log(user);
          form.reset()
          navigate('/')
        })
        .catch(error => console.log(error))
    }

    return (
     <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
      <div className="card-body">
      <Link  className="text-3xl font-bold text-center">Login</Link>
        <form onSubmit={handleLogin}>
        <div className="form-control">     
          <label className="label">        
            <span className="label-text">Email</span>
          </label>
          <input type="text" name='email' placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" name='password' placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <input className="btn btn-primary" type="submit" value="Login" />
        </div>
        </form>
        <button onClick={handleGoogleSignIn}>Google</button>
        <p>Create a new account<Link className='text-orange-600 font-bold' to='/signup'> Sign Up</Link> </p>
      </div>
    </div>
  </div>
</div>
    );
};

export default Login;
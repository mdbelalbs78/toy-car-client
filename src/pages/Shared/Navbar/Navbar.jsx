import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/toycar.png'
import { AuthContext } from '../../../providers/AuthProviders';

const Navbar = () => {
  const {user,logOut} = useContext(AuthContext)
  console.log(user);
  const handleLogOut = () => {
    logOut();
  }
  const navItems = <>
     <li><Link to='/'>Home</Link></li>
     <li><Link to='/allToy'>All Toys</Link></li>
   {
    user && <div className='flex'>
        <li><Link to='/myToy'>My Toys</Link></li>
     <li><Link to='/addToy'>Add A Toy</Link></li>
    </div>
   }
     <li><Link to='/blog'>Blogs</Link></li>
  </>
    return (
      
        <div className="navbar bg-base-100 h-28 mb-3" data-aos="flip-left">
           <Helmet>
            <title>Navbar</title>
           
        </Helmet>
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {navItems}
      </ul>
    </div>
    <Link to='/' className="btn btn-ghost normal-case text-xl">
        <img src={logo} alt="" />
    </Link>
    <div>
       <h2 className='text-3xl font-semibold'>Regular Toy Car</h2>
    </div>
  </div>
  
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navItems}
    </ul>
  </div>
  <div className="navbar-end">
    {
      user? <div className='flex items-center gap-4'>
        <div className='hover:tooltip hover:tooltip-open hover:tooltip-bottom ' 
       data-tip={user.displayName} >
          <img className='w-10 h-10 rounded-full' src={user.photoURL} alt="" />
        </div>
        <Link onClick={handleLogOut} to='/login'> Log Out</Link>
        </div> : <Link to='/login'>Login</Link>
    }
  </div>
</div>
    );
};

export default Navbar;
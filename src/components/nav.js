import React from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Nav = () => {
    const auth = localStorage.getItem("user");
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate('/signup');
    }

    return (
        <div>
            <div className='topnav'>
                {auth ?
                    <> 
                        <h1>Hello, {JSON.parse(auth).user.name}</h1>
                        <Link  onClick={logout} to='/login'>Logout, {JSON.parse(auth).user.name}</Link>
                        <br></br>
                        <Link  className='float-right' to='/Chat'> Chat</Link>
                    </>
                    :
                    <>
                        <Link className='float-right' to='/login'>Login</Link> <span> / </span>
                        <Link className='float-right' to='/signup'>SignUp</Link>
                    </>
                }
            </div>
        </div >
    );
}
export default Nav;
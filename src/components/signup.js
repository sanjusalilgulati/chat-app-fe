import react, { useEffect, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import {userRegister} from '../services/authProvider';
import axios from 'axios';


const Signup = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const auth = localStorage.getItem("user");
        if (auth) {
            navigate('/');
        }
    });
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const getData = async () => {

        if (!name || !email || !password) {
            setError(true);
            return false;
        }
        userRegister(name, email, password )
        .then (result => {
            if (result.status == 200) {
                alert('Signup Success');
                navigate("/login");
            }
        })
        .catch(errror => alert('Something went wrong'));
       
        
    }
    return (
        <div className='text-center'>
            <h3>Register</h3>
            <div className="form-control">
                <label>Name : </label>
                <input className='inputBox' type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter your name' />
                {error && !name ? <span className="input-error">Name is required!</span> : ''}
                <br/><br></br>
                <label>Email : </label>
                <input className='inputBox' type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email' />
                {error && !email ? <span className="input-error">Email is required!</span> : ''}
                <br/><br></br>
                <label>Password : </label>
                <input className='inputBox' type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter your password' />
                {error && !password ? <span className="input-error">Password is required!</span> : ''}
               
                <br />
                <button onClick={getData} className='btn-primary' type='submit' value="Submit" > Signu Up </button>
            </div>
        </div>
    )

}

export default Signup;

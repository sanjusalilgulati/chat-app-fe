import reac, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginUser } from '../services/authProvider';
import axios from 'axios';

const API_URL = 'http://localhost:4001/api/auth/';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate('/');
        }
    });
    const getLogin = async () => {
         LoginUser(email, password)
        .then(data => {
            console.log(data);
            if (data.status == 200) {
                localStorage.setItem('user', JSON.stringify(data.data));
                localStorage.setItem('_token', JSON.stringify(data.token));
                navigate('/');
            }else{
                alert(data.message);
            }
          return data.data;
        }).catch (error => {
            alert('Invalid Credentials');
        }
        );       
    }
    return (
        <>
        <div className='container'>
        <div className='col-lg-6 col-md-12'>
            <input className='form-control' type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email' />
            <br></br>
            <input className='form-control' type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter your password' />
            <button onClick={getLogin} className='btn-primary' type='submit' value="Submit" > Login </button>
        </div>
        </div>

        
        </>
    )

}

export default Login;
import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const Admin = () =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if(auth){
            navigate('/');
        }
    })

    const handleLogIn = async () =>{
        if(!email || !password){
            setError(true);
            return false;
        }
        let result = await fetch('http://localhost:5000/admin', {
            method: 'post',
            body: JSON.stringify({email, password}),
            headers: {
                'content-Type': 'application/json',
                'Accept': 'application/json'
            },
        });
        result = await result.json();
        if(result.name){
            localStorage.setItem('user', JSON.stringify(result));
            // localStorage.setItem('token', JSON.stringify(result.auth));
            navigate('/');
        }else{
            alert("No User Is Found");
        }
    }

    return(
        <div className='logIn'>
            <h1>LogIn Your Account</h1>
            <input className='inputBox' type='email' placeholder='Enter Your Email'
                value={email} onChange = {(e)=>setEmail(e.target.value)}
            ></input>
            {
                error && !email && <h6 className='validInput'>* Enter the Email</h6>
            }
            <input className='inputBox' type='password' placeholder='Enter Your Password'
                value={password} onChange = {(e)=>setPassword(e.target.value)}
            ></input>
            {
                error && !password && <h6 className='validInput'>* Enter the Password</h6>
            }
            <button className='appButton' onClick={handleLogIn}>Admin Log In</button>
        </div>
    )
}


export default Admin;
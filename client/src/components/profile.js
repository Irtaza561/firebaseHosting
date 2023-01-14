import React, { useEffect, useState } from 'react';
import {useParams, useNavigate} from 'react-router-dom'
const Profile = () =>{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const params = useParams(); 
    const navigate = useNavigate();

    useEffect(()=>{
        getProductsDetail();
        
   }, [])


    const getProductsDetail =async () =>{
        let product = await fetch(`http://localhost:5000/user/${params.id}`);
        let result =await product.json();
        setName(result.name)
        setEmail(result.email);
        setPassword(result.password);
    };

    const handleSave =async () =>{
        let result = await fetch(`http://localhost:5000/user/${params.id}`,{
            method: 'put',
            body: JSON.stringify({ name, email, password}),
            headers: {
                'content-Type' : 'application/json'
            }
        });
        if(result){
            navigate('/');
        }
    }

    return(
        <div className="profile">
            <h1>My Account</h1>
            <input className='inputBox' type="text" placeholder="Enter Your Name"
                value={name} onChange={(e)=>setName(e.target.value)}>
            </input>
            <input className='inputBox' type="email" placeholder="Enter Your Email"
                value={email} onChange={(e)=>setEmail(e.target.value)}>
            </input>
            <input className='inputBox' type="password" placeholder="Enter Your Password"
                value={password} onChange={(e)=>setPassword(e.target.value)}>
            </input>
            <button className='appButton' onClick={handleSave}>Save</button>
        </div>
    )
}


export default Profile;
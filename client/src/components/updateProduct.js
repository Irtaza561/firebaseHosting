import React, { useEffect, useState } from 'react';
import {useParams, useNavigate} from 'react-router-dom'


const UpdateProduct = () =>{
    const params = useParams();
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [company, setCompany] = useState('');
    const [category, setCategory] = useState('');

    useEffect(()=>{
        getProductDetails();
    },[])

    const getProductDetails =async () =>{
        let result = await fetch(`http://localhost:5000/product/${params.id}`);
        result = await result.json();
        setName(result.name);
        setPrice(result.price);
        setCategory(result.category);
        setCompany(result.company);
    }


    const updateProduct =async () =>{
        let result = await fetch(`http://localhost:5000/product/${params.id}`,{
            method: 'put',
            body: JSON.stringify({ name, price, company, category}),
            headers: {
                'content-Type' : 'application/json'
            }
        });
        if(result){
            navigate('/');
        }
    }

    return(
        <div className='updateProduct'>
            <h1>Update Product</h1>
            <input className='inputBox' type='text' placeholder='Pleade Enter Product Name'
                value={name} onChange = {(e)=>setName(e.target.value)}>    
            </input>
            
            <input className='inputBox' type='number' placeholder='Pleade Enter Product Price'
                value={price} onChange = {(e)=>setPrice(e.target.value)}>    
            </input>
            
            <input className='inputBox' type='text' placeholder='Pleade Enter Product Company'
                value={company} onChange = {(e)=>setCompany(e.target.value)}>    
            </input>
            
            <input className='inputBox' type='text' placeholder='Pleade Enter Product Category'
                value={category} onChange = {(e)=>setCategory(e.target.value)}>    
            </input>
            
            <button className='appButton' onClick={updateProduct}>Update Product</button>
        </div>
    )
}

export default UpdateProduct;
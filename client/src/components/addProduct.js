import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'

const AddProduct = () =>{
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [company, setCompany] = useState('');
    const [category, setCategory] = useState('');
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const addProduct =async () =>{
        let userId = JSON.parse(localStorage.getItem('user'))._id;
        if(!name || !price || !company || !category){
            setError(true);
            return false;
        }
        let result = await fetch('http://localhost:5000/addProduct', {
            method: 'Post',
            body: JSON.stringify({name, price, company,userId, category}),
            headers: {
                'content-Type' : 'application/json'
                
            },
        });
        if(result){
            console.log(result);
            navigate('/');
        }
    }
    return(
        <div className='addProduct'>
            <h1>Add New Product</h1>
            <input className='inputBox' type='text' placeholder='Pleade Enter Product Name'
                value={name} onChange = {(e)=>setName(e.target.value)}>    
            </input>
            {
                error && !name && <h6 className='validInput'>*Enter the Product Name</h6>
            }
            <input className='inputBox' type='number' placeholder='Pleade Enter Product Price'
                value={price} onChange = {(e)=>setPrice(e.target.value)}>    
            </input>
            {
                error && !price && <h6 className='validInput'>*Enter the Product Price</h6>
            }
            <input className='inputBox' type='text' placeholder='Pleade Enter Product Company'
                value={company} onChange = {(e)=>setCompany(e.target.value)}>    
            </input>
            {
                error && !company && <h6 className='validInput'>*Enter the Product Company</h6>
            }
            <input className='inputBox' type='text' placeholder='Pleade Enter Product Category'
                value={category} onChange = {(e)=>setCategory(e.target.value)}>    
            </input>
            {
                error && !category && <h6 className='validInput'>*Enter the Product Category</h6>
            }
            <button className='appButton' onClick={addProduct}>Add Product</button>
        </div>
    )
};

export default AddProduct;
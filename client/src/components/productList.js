import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

const ProductList = () =>{
    const [product, setProduct] = useState([]);

    useEffect(()=>{
        getProductList();
    },[])

    const getProductList = async () =>{
        let products = await fetch('http://localhost:5000/productList');
        let result = await products.json();
        setProduct(result);
    }

    const deleteProduct = async (id) =>{
        let result = await fetch(`http://localhost:5000/product/${id}`, {
            method: 'Delete',
        });
        if(result){
            getProductList();
        }else{
            alert('No Record is Deleted');
        }
    }
    const searchHandle =async (event) =>{
        let key = event.target.value;
        if(key){
            let result = await fetch(`http://localhost:5000/search/${key}`);
        result = await result.json();
        if(result){
            setProduct(result);
        }
        }else{
            getProductList();
        }
    }

    return(
        <div className='productList'>
            <h1>Products</h1>
            <input className='searchBox' type='text' placeholder='Enter the Search' onChange={searchHandle}>
            </input>
            <ul>
                <li>Sr. No</li>
                <li>Name</li>
                <li>Price</li>
                <li>Category</li>
                <li>Company</li>
                <li>Action</li>
            </ul>

            {   
               product.length>0 ? product.map((item,index)=>
                <ul key={item._id}>
                    <li>{index+1}</li>
                    <li>{item.name}</li>
                    <li>{item.price}</li>
                    <li>{item.category}</li>
                    <li>{item.company}</li>
                    <li>
                        <button onClick={()=>{deleteProduct(item._id)}}>Delete</button>
                        <Link to={"/updateProduct/" + item._id}>
                            <button>Edit</button>
                        </Link>
                    </li>
                </ul>
                
                ):<h1>No Result Found</h1>
            }
            <Link to='/addProduct'>
                <button className='appButton'>Add New Product</button>
            </Link>
        </div>
    )
}


export default ProductList;
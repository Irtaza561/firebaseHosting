import React, {useState} from 'react';
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Nav from './components/nav';
import Footer from './components/footer';
import SignUp from './components/signup';
import LogIn from './components/login';
import Admin from './components/admin';
import Profile from './components/profile';
import PrivateComponent from './components/privateComponet';
import ProductList from './components/productList';
import AddProduct from './components/addProduct';
import UpdateProduct from './components/updateProduct';


import Home from './components/stateManagement/home';
import Base from './components/stateManagement/base';
import Topping from './components/stateManagement/topping';
import Order from './components/stateManagement/order';


const App = () =>{
  const [pizza, setPizza] = useState({base: " " , toppings: []});

  const addBase = (base) =>{
    setPizza({...pizza, base})
  }

  const addTopping = (topping) =>{
    let newToppings;
    if(!pizza.toppings.includes(topping)){
      newToppings = [...pizza.toppings, topping]
    }
    else{
      newToppings = [pizza.toppings.filter(item =>item !== topping)]
    }
    setPizza({...pizza, toppings: newToppings})
  }

  return(
    <div className='app'>  
      <BrowserRouter>
        <Nav></Nav>
        <Routes>
          <Route element={<PrivateComponent></PrivateComponent>}>
            <Route path='/' element={<ProductList></ProductList>}></Route>
            <Route path='/addProduct' element={<AddProduct></AddProduct>}></Route>
            <Route path='/updateProduct/:id' element={<UpdateProduct></UpdateProduct>}></Route>
            <Route path='/profile/:id' element={<Profile></Profile>}></Route>
            <Route path='/updateProfile' element={<UpdateProduct></UpdateProduct>}></Route>
            <Route path='/logout' element={<h1>LogOut</h1>}></Route>
          </Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/base' element={<Base addBase={addBase} pizza={pizza}></Base>}></Route>
          <Route path='/topping' element={<Topping addTopping={addTopping} pizza={pizza}></Topping>}></Route>
          <Route path='/order' element={<Order pizza={pizza}></Order>}></Route>
          <Route path='/logIn' element={<LogIn></LogIn>}></Route>
          <Route path='/admin' element={<Admin></Admin>}></Route>
          <Route path='/signup' element={<SignUp></SignUp>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  )
}

export default App;
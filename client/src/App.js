import React from 'react';
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

const App = () =>{
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
          <Route path='/logIn' element={<LogIn></LogIn>}></Route>
          <Route path='/admin' element={<Admin></Admin>}></Route>
          <Route path='/signup' element={<SignUp></SignUp>}></Route>
        </Routes>
        {/* <Footer></Footer> */}
      </BrowserRouter>
    </div>
  )
}

export default App;
import React from "react";
import {Link, useNavigate} from 'react-router-dom'


const Nav = () =>{
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const LogOut = () =>{
        localStorage.clear();
        navigate('/signup');
    }
    
    return(
        <div>
            <img className="logo"
                src="./logo192.png"
                alt="logo">
            </img>        
        {   auth? 
            <ul className="nav-ul">
                <li className=""><Link to='/'>Product</Link></li>
                <li className=""><Link to={'/profile/' + JSON.parse(auth)._id }>Profile</Link></li>
                <li onClick={LogOut}><Link to='/login'>LogOut({JSON.parse(auth).name})</Link></li>
                
            </ul> :
            <ul className="nav-ul nav-right">
                {/* <li><Link to='/home'>Home</Link></li>
                <li><Link to='/base'>Base</Link></li>
                <li><Link to='/order'>Order</Link></li>
                <li><Link to='/topping'>Topping</Link></li> */}
                <li className=""><Link to='/login'>LogIn</Link></li>
                <li className=""><Link to='/admin'>Admin</Link></li>
                <li className=""><Link to='/signup'>SignUp</Link></li>
            </ul>
        }
        </div>
    )
};

export default Nav;
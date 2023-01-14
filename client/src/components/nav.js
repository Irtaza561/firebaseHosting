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
                src="https://yt3.ggpht.com/ytc/AMLnZu907ujnXt1ae1wVUDH8NrYtoLeeI5XCK7OsMU3HCw=s900-c-k-c0x00ffffff-no-rj" 
                alt="logo">
            </img>        
        {   auth? 
            <ul className="nav-ul">
                <li className=""><Link to='/'>Product</Link></li>
                <li className=""><Link to={'/profile/' + JSON.parse(auth)._id }>Profile</Link></li>
                <li onClick={LogOut}><Link to='/login'>LogOut({JSON.parse(auth).name})</Link></li>
                
            </ul> :
            <ul className="nav-ul nav-right">
                <li className=""><Link to='/login'>LogIn</Link></li>
                <li className=""><Link to='/admin'>Admin</Link></li>
                <li className=""><Link to='/signup'>SignUp</Link></li>
            </ul>
        }
        </div>
    )
};

export default Nav;
import React from "react";
import "./signUp.css";
import Fade from "react-reveal/Fade";

// const SignUp = () => {
//   return (
//     <>
//       <div className="newContainer">
//         <h1>Sign Up</h1>
//       </div>
//       <div className="scrollComponent">
//         <Fade bottom distance="20%" duration={3000}>
//           <div className="left">
//             <h2>Animation</h2>
//             <p>
//               Lorem Ipsum is simply dummy text of the printing and typesetting
//               industry. Lorem Ipsum has been the industry's standard dummy text
//               ever since the 1500s, when an unknown printer took a galley of
//               type and scrambled it to make a type specimen book. It has
//               survived not only five centuries, but also the leap into
//               electronic typesetting, remaining essentially unchanged. It was
//               popularised in the 1960s with the release of Letraset sheets
//               containing Lorem Ipsum passages, and more recently with desktop
//               publishing software like Aldus PageMaker including versions of
//               Lorem Ipsum.
//             </p>
//           </div>
//           <div className="right">
//             <h2>Animation</h2>
//             <p>
//               Lorem Ipsum is simply dummy text of the printing and typesetting
//               industry. Lorem Ipsum has been the industry's standard dummy text
//               ever since the 1500s, when an unknown printer took a galley of
//               type and scrambled it to make a type specimen book. It has
//               survived not only five centuries, but also the leap into
//               electronic typesetting, remaining essentially unchanged. It was
//               popularised in the 1960s with the release of Letraset sheets
//               containing Lorem Ipsum passages, and more recently with desktop
//               publishing software like Aldus PageMaker including versions of
//               Lorem Ipsum.
//             </p>
//           </div>
//           <div className="right">
//             <h2>Animation</h2>
//             <p>
//               Lorem Ipsum is simply dummy text of the printing and typesetting
//               industry. Lorem Ipsum has been the industry's standard dummy text
//               ever since the 1500s, when an unknown printer took a galley of
//               type and scrambled it to make a type specimen book. It has
//               survived not only five centuries, but also the leap into
//               electronic typesetting, remaining essentially unchanged. It was
//               popularised in the 1960s with the release of Letraset sheets
//               containing Lorem Ipsum passages, and more recently with desktop
//               publishing software like Aldus PageMaker including versions of
//               Lorem Ipsum.
//             </p>
//           </div>
//           <div className="right">
//             <h2>Animation</h2>
//             <p>
//               Lorem Ipsum is simply dummy text of the printing and typesetting
//               industry. Lorem Ipsum has been the industry's standard dummy text
//               ever since the 1500s, when an unknown printer took a galley of
//               type and scrambled it to make a type specimen book. It has
//               survived not only five centuries, but also the leap into
//               electronic typesetting, remaining essentially unchanged. It was
//               popularised in the 1960s with the release of Letraset sheets
//               containing Lorem Ipsum passages, and more recently with desktop
//               publishing software like Aldus PageMaker including versions of
//               Lorem Ipsum.
//             </p>
//           </div>
//         </Fade>
//       </div>
//     </>
//   );
// };

const SignUp = () =>{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleSignUp =async () =>{
        if(!name  || !email  || !password){
            setError(true);
            return false;
        }
        let result = await fetch('http://localhost:5000/register', {
            method: 'post',
            body: JSON.stringify({name, email, password}),
            headers: {
                'content-Type' : 'application/json'
            },
        });
        result = await result.json();
        localStorage.setItem('user', JSON.stringify(result));
        navigate('/');
    }
    return(
        <div className='register'>
            <h1>New User Sign</h1>
            <input className='inputBox' type='text' placeholder='Enter Your Name'
                value={name} onChange={(e)=>setName(e.target.value)}>
            </input>
            {
                error && !name && <h6 className='validInput'>*Please Enter Your Name</h6>
            }
            <input className='inputBox' type='email' placeholder='Enter Your Email'
                value={email} onChange={(e)=>setEmail(e.target.value)}>
            </input>
            {
                error && !email && <h6 className='validInput'>*Please Enter Your Email</h6>
            }
            <input className='inputBox' type='password' placeholder='Enter Your Password'
                value={password} onChange={(e)=>setPassword(e.target.value)}>
            </input>
            {
                error && !password && <h6 className='validInput'>*Please Enter Your Password</h6>
            }
            <button className='appButton' onClick={handleSignUp}>SignUp</button>
        </div>
    )
}

export default SignUp;

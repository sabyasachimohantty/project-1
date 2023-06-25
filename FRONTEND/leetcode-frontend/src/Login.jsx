import Navbar from "./Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Login = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:3000/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        })
            .then((response) => {
                const data = response.json()
                .then(data => {
                    if (data.user === 'true') {
                        navigate('/')
                    } else {
                        alert('user not found')
                    }
                })
                .catch(err => console.log(err))
            })
        
        


        
    }

    return ( 
        <>
            <Navbar />
            <div className="signup-wrapper" onSubmit={handleSubmit}>
                <h1>Login</h1>
                <form action="" className="signup">
                    <input type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit">Login</button>
                </form>
            </div>
        </>
     );
}
 
export default Login;
import Navbar from "./Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`http://localhost:3000/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                email,
                password
            })
        })
            .then((response) => {
                const data = response.json()
                .then(data => {
                    if (data.status === 'ok') {
                        navigate('/login')
                    } else {
                        alert('User already exists')
                    }
                })
                .catch(err => console.log(err))
            })
    }

    return ( 
        <>
            <Navbar />
            <div className="signup-wrapper">
                <h1>Sign Up</h1>
                <form action="" className="signup" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Enter username" onChange={(e) => setName(e.target.value)} />
                    <input type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit">Sign up</button>
                </form>
            </div>
        </>
     );
}
 
export default Signup;
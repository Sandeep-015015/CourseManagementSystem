import React, { useState } from 'react';
import axios from 'axios';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleLogin() {
        axios.post('https://localhost:7000/api/Login', {
            username: username,
            password: password
        })
        .then(res => {
            alert(res.data);
        })
        .catch(err => {
            alert("Invalid Username or Password");
        });
    }

    return (
        <div>
            <h2>Student Login</h2>

            <label>Username</label>
            <input
                type="text"
                onChange={e => setUsername(e.target.value)}
            />

            <br />

            <label>Password</label>
            <input
                type="password"
                onChange={e => setPassword(e.target.value)}
            />

            <br />

            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default Login;
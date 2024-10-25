import { useNavigate } from 'react-router-dom';

import { useState } from 'react';

import './Login.css'
import { ShowML } from './handle/ShowML';

function Login()
{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // const navigate = useNavigate();

    const fetchToken = async () => {
        const url = 'https://dev.lcdkhoacntt1-ptit.tech/api/authentication/token';

        const body = new URLSearchParams();
        body.append('username', username); 
        body.append('password', password); 
        

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'accept': 'application/json',
                },
                body: body
            });

            if (!response.ok) {
                console.log(`Sai tài khoản, mã lỗi: ${response.status}`);
                sessionStorage.removeItem('accessToken');
                console.log('Access token has been removed from sessionStorage');
            }
            else{
                const data = await response.json();
                console.log('Access token:', data.access_token);

                sessionStorage.setItem('accessToken', data.access_token);
                
                setTimeout(() => {
                    sessionStorage.removeItem('accessToken');
                    console.log('Access token has been removed from sessionStorage');
                    ShowML();
                }, 20000); 
            
            }
            

        } catch (error) {
            console.error('Error:', error);
        }
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submitting form...");
        fetchToken();
    };











    return (
        <>
            <div className="login">
                <div className="login_container">
                    <h2>Login</h2>
                    <form onSubmit = {handleSubmit} >
                        <p className="login_des">User Name:</p>
                        <input 
                            className="login_input" 
                            type='text'
                            value={username}  
                            onChange={(e) => setUsername(e.target.value)}
                        ></input>
                        <p className="login_des">Password:</p>
                        <input
                            className="login_input"
                            type='password'
                            value={password}  
                            onChange={(e) => setPassword(e.target.value)}
                            ></input>

                        <button className="login_btn" type="submit">Login</button>

                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;



import React, { useContext } from "react";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../UserContext";


const LoginPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false); //TO DO 

    const { setUser } = useContext(UserContext);

    const handleEmail = (event) => {
        setEmail(event.target.value);
    };

    const handlePassword = (event) => {
        setPassword(event.target.value);
    };

    async function handleLoginSubmit(event) {
        event.preventDefault();
        try {
            const { data } = await axios.post('/login', { email, password });
            setUser(data);
            alert('Login successful.');
            setRedirect(true);
        } catch (error) {
            alert('Login failed.');
        }
    };

    if (redirect) {
        return <Navigate to={'/'} />
    }


    return (

        <div className='bg-white'>
            <div className="relative isolate px-6 pt-6 lg:px-8">
                <div className="mx-auto max-w-2xl py-24 sm:py-16 lg:py-32">
                    <div className="mt-4">
                        <h1 className="text-3xl text-center">Log in</h1>
                        <form className="max-w-md mx-auto" onSubmit={handleLoginSubmit}>
                            <input type="email" placeholder="E-mail" value={email} onChange={handleEmail} />
                            <input type="password" placeholder="password" value={password} onChange={handlePassword} />
                            <button className="primary">Login</button>
                            <div className="text-center py-2 px-2 text-gray-500">
                                <p>Don't have an account yet? <Link className="underline text-primary" to={'/register'}>Register now</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default LoginPage;
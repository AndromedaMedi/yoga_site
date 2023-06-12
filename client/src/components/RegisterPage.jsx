import React from "react";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from 'axios';

const RegisterPage = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [number, setNumber] = useState('');
    const [redirect, setRedirect] = useState(false);

    const handleName = (event) => {
        setName(event.target.value);
    };

    const handleEmail = (event) => {
        setEmail(event.target.value); 
    };

    const handlePassword = (event) => {
        setPassword(event.target.value);
    };

    const handleNumber = (event) => {
        setNumber(event.target.value);
    };

    async function handleRegisterSubmit(event) {
        event.preventDefault();
        try {
            await axios.post('/register', {
                name,
                email,
                password,
                number
            });
            alert('Registration successful. Please log in.')
            setRedirect(true);
        } catch (error) {
            alert('Registration failed. Please try again later');
        }
    };

    if (redirect) {
        return <Navigate to={'/login'} />
    }


    return (   
        <div className='bg-white'>
            <div className="relative isolate px-6 pt-6 lg:px-8">
                <div className="mx-auto max-w-2xl py-24 sm:py-16 lg:py-32">
                    <div className="mt-4">
                        <h1 className="text-3xl text-center">Register</h1>
                        <form className="max-w-md mx-auto" onSubmit={handleRegisterSubmit}>
                            <input type="name" name="name" placeholder="Full Name" value={name} onChange={handleName} required/>
                            <input type="email" name="email" placeholder="E-mail" value={email} onChange={handleEmail} required/>
                            <input type="password" name="password" placeholder="Password" value={password} onChange={handlePassword} required/>
                            <input type="number" name="number" placeholder="Phone number" value={number} onChange={handleNumber} required/>
                            <button className="primary">Submit</button>
                            <div className="text-center py-2 px-2 text-gray-500">
                                <p>Already have an account? <Link className="underline text-primary" to={'/login'}>Log in</Link></p>
                            </div>
                        </form>
                    </div>  
                </div>
            </div>
        </div>
    )



}

export default RegisterPage;
import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        // Firebase Login
        console.log(email);
    };

    const register = e => {
        e.preventDefault();

        // Firebase Register
        console.log(email);
    };

    return (
        <div className='login'>
            <Link to='/'>
                <img 
                    src='/img/logo_dark.png' 
                    alt='Logo'
                    className='login_logo'
                />
            </Link>

            <div className='login_container'>
                <h1>Sign In</h1>
                
                <form>
                    <h5>Email</h5>
                    <input 
                        type='text' 
                        name='email' 
                        value={email} 
                        onChange={e => setEmail(e.target.value)}
                    />

                    <h5>Password</h5>
                    <input 
                        type='password' 
                        name='password' 
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />

                    <Button 
                        variant='outlined' 
                        color='primary' 
                        size='large' 
                        type='submit'
                        onClick={signIn}
                    >
                        Sign In
                    </Button>
                </form>

                <p>
                    By signing-in, you agree to the conditions. Please see 
                    the Privacy Policy page.
                </p>

                <button 
                    className='login_registerButton'
                    onClick={register}
                >
                    Create Account
                </button>
            </div>

        </div>
    )
}

export default Login;

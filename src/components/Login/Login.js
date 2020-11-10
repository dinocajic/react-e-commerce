import { Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
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
                    <input type='text' name='email' />

                    <h5>Password</h5>
                    <input type='password' name='password' />

                    <Button 
                        variant='outlined' 
                        color='primary' 
                        size='large'
                    >
                        Sign In
                    </Button>
                </form>

                <p>
                    By signing-in, you agree to the conditions. Please see 
                    the Privacy Policy page.
                </p>

                <button className='login_registerButton'>
                    Create Account
                </button>
            </div>

        </div>
    )
}

export default Login;

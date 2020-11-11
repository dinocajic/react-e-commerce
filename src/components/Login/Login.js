import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Login.css';

import { auth } from '../../firebase';

function Login() {

    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
            .then(auth => history.push('/'))
            .catch(error => alert(error.message));
    };

    const register = e => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log(auth);
                if ( auth ) {
                    history.push('/');
                }
            })
            .catch(error => alert(error.message));
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

                    <button 
                        type='submit'
                        className='login_registerButton'
                        onClick={signIn}
                    >
                        Sign In
                    </button>
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

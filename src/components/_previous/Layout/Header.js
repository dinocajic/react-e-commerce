import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../../StateProvider';
import { auth } from '../../../firebase';

function Header() {

    const [{ cart, user }, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if ( user ) {
            auth.signOut();
        }
    };

    return (
        <div className='header'>
            <Link to='/'>
                <img 
                    className='header_logo' 
                    src='img/logo.png'
                    alt='E-Commerce Logo'
                />
            </Link>

            <div className='header_search'>
                <input 
                    className='header_searchInput' 
                    type='text'
                />
                <SearchIcon className='header_searchIcon' />
            </div>

            <div className='header_nav'>
                <Link to={user ? '/' : '/login'}>
                    <div className='header_option' onClick={handleAuthentication}>
                        <span className='header_optionLineOne'>
                            Hello {user ? 'User' : 'Guest'}
                        </span>
                        <span className='header_optionLineTwo'>
                            {user ? 'Sign Out' : 'Sign In'}
                        </span>
                    </div>
                </Link>

                <Link to='/orders'>
                    <div className='header_option'>
                        <span className='header_optionLineOne'>Returns</span>
                        <span className='header_optionLineTwo'>& Orders</span>
                    </div>
                </Link>

                <div className='header_option'>
                    <span className='header_optionLineOne'>Your</span>
                    <span className='header_optionLineTwo'>Account</span>
                </div>
            </div>

            <Link to='/checkout'>
                <div className='header_optionCart'>
                    <ShoppingBasketIcon />
                    <span className='header_optionLineTwo header_cartCount'>{cart?.length}</span>
                </div>
            </Link>
        </div>
    )
}

export default Header;

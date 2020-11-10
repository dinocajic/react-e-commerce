import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';

function Header() {

    const [{cart}, dispatch] = useStateValue();

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
                <Link to='/login'>
                    <div className='header_option'>
                        <span className='header_optionLineOne'>Hello Guest</span>
                        <span className='header_optionLineTwo'>Sign In</span>
                    </div>
                </Link>

                <div className='header_option'>
                    <span className='header_optionLineOne'>Returns</span>
                    <span className='header_optionLineTwo'>& Orders</span>
                </div>

                <div className='header_option'>
                    <span className='header_optionLineOne'>Your</span>
                    <span className='header_optionLineTwo'>Prime</span>
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

import React from 'react';
import './Header.css';
import Logo from '../../assets/img/Logo.png';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
    return (
        <div className='header'>
            <img 
                className='header_logo' 
                src={Logo} 
                alt='E-Commerce Logo'
            />

            <div className='header_search'>
                <input 
                    className='header_searchInput' 
                    type='text'
                />
                <SearchIcon className='header_searchIcon' />
            </div>

            <div className='header_nav'>
                <div className='header_option'>
                    <span className='header_optionLineOne'>Hello Guest</span>
                    <span className='header_optionLineTwo'>Sign In</span>
                </div>

                <div className='header_option'>
                    <span className='header_optionLineOne'>Returns</span>
                    <span className='header_optionLineTwo'>& Orders</span>
                </div>

                <div className='header_option'>
                    <span className='header_optionLineOne'>Your</span>
                    <span className='header_optionLineTwo'>Prime</span>
                </div>
            </div>

            <div className='header_optionCart'>
                <ShoppingBasketIcon />
                <span className='header_optionLineTwo header_cartCount'>0</span>
            </div>
        </div>
    )
}

export default Header;

import React from 'react';
import './Navigation.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import { Link } from 'react-router-dom';

import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from '../../../StateProvider';
import { auth } from '../../../firebase';

function Navigation() {
    const [{ cart, user }, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if ( user ) {
            auth.signOut();
        }
    };

    return (
        <Navbar bg="dark" variant="dark" expand="xl" sticky='top'>
            <Link to='/' className='mr-auto'>
                <Navbar.Brand>
                    <img 
                        className='navigation_logo' 
                        src='img/logo.png'
                        alt='E-Commerce Logo'
                    />
                </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-lg-2" style={{width: '64%', }}>
                    <Form inline className="w-100">
                        <FormControl type="text" placeholder="Search" className="w-100" />
                    </Form>
                </Nav>
                <Nav className='w-auto ml-auto navigation'>
                    <Nav.Link>
                    <Link to={user ? '/' : '/login'}>
                        <span className='navigation_option' onClick={handleAuthentication}>
                            <span className='navigation_optionLineOne'>
                                Hello {user ? 'User' : 'Guest'}
                            </span>
                            <span className='navigation_optionLineTwo'>
                                {user ? 'Sign Out' : 'Sign In'}
                            </span>
                        </span>
                    </Link>
                    </Nav.Link>

                    <Nav.Link>
                        <Link to='/orders'>
                            <span className='navigation_option'>
                                <span className='navigation_optionLineOne'>Returns</span>
                                <span className='navigation_optionLineTwo'>& Orders</span>
                            </span>
                        </Link>
                    </Nav.Link>

                    <Nav.Link>
                        <Link to='/orders'>
                            <span className='navigation_option'>
                                <span className='navigation_optionLineOne'>Your</span>
                                <span className='navigation_optionLineTwo'>Account</span>
                            </span>
                        </Link>
                    </Nav.Link>

                    <Nav.Link href='/orders'>
                        <Link to='/checkout'>
                            <span className='navigation_optionCart'>
                                <ShoppingBasketIcon />
                                <span className='navigation_optionLineTwo navigation_cartCount'>{cart?.length}</span>
                            </span>
                        </Link>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation;

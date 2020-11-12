import React from "react";

import "./Navigation.css";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

import { Link } from "react-router-dom";

import { useStateValue } from "../../../StateProvider";
import { auth } from "../../../firebase";

function Navigation() {
    const [{ cart, user, company }] = useStateValue();

    const handleAuthentication = () => {
        if ( user ) {
            auth.signOut();
        }
    };

    return (
        <Navbar bg="dark" variant="dark" expand="xl" sticky="top">

            <Link to="/" className="mr-auto">
                <Navbar.Brand>
                    <img 
                        className="navigation_logo" 
                        src="img/logo.png"
                        alt={company + " Logo"}
                    />
                </Navbar.Brand>
            </Link>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-0 ml-auto navigation_search">
                    <Form inline className="w-100">
                        <FormControl 
                            type="text" 
                            placeholder="Search for Items" 
                            className="w-100" 
                        />
                    </Form>
                </Nav>
                
                <Nav className="w-auto mr-0 ml-auto navigation">
                    <Navbar.Text className="w-auto">
                        <Link to={user ? "/" : "/login"}>
                            <span className="navigation_option" onClick={handleAuthentication}>
                                <span className="navigation_optionLineOne">
                                    Hello {user ? "User" : "Guest"}
                                </span>
                                <span className="navigation_optionLineTwo">
                                    {user ? "Sign Out" : "Sign In"}
                                </span>
                            </span>
                        </Link>
                    </Navbar.Text>

                    <Navbar.Text className="w-auto ">
                        <Link to="/orders">
                            <span className="navigation_option">
                                <span className="navigation_optionLineOne">Returns</span>
                                <span className="navigation_optionLineTwo">& Orders</span>
                            </span>
                        </Link>
                    </Navbar.Text>

                    <Navbar.Text className="w-auto">
                        <Link to="/orders">
                            <span className="navigation_option">
                                <span className="navigation_optionLineOne">Your</span>
                                <span className="navigation_optionLineTwo">Account</span>
                            </span>
                        </Link>
                    </Navbar.Text>

                    <Navbar.Text className="w-auto">
                        <Link to="/checkout">
                            <span className="navigation_optionCart">
                                <span className="d-none d-xs-block d-sm-block d-md-block d-lg-none">Cart </span>
                                <ShoppingBasketIcon />
                                <span className="navigation_optionLineTwo navigation_cartCount">{cart?.length}</span>
                            </span>
                        </Link>
                    </Navbar.Text>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation;

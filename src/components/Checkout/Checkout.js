import React from 'react';
import './Checkout.css';

import Subtotal from '../Subtotal/Subtotal';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import { useStateValue } from '../../StateProvider';

function Checkout() {

    const [{cart, user}, dispatch] = useStateValue();

    return (
        <React.Fragment>

        <div className='checkout'>
            <div className='checkout_left'>
                <img 
                    src='/img/checkout/banner.jpg' 
                    className='checkout_banner'
                    alt='Checkout Banner'
                />
                
                <div>
                    <h3>{user && ('Hello ' + user.email)}</h3>
                    <h2 className='checkout_title'>
                        Your Cart
                    </h2>

                    {
                        cart.map((item) => (
                            <CheckoutProduct 
                                key={item.id}
                                id={item.id}
                                image={item.image}
                                title={item.title}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))
                    }
                </div>
            </div>

            <div className='checkout_right'>
                <Subtotal />
            </div>
        </div>
        </React.Fragment>
    )
}

export default Checkout;
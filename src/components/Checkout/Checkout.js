import React from 'react';
import './Checkout.css';

import Subtotal from '../Subtotal/Subtotal';

function Checkout() {
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
                    <h2 className='checkout_title'>
                        Your Cart
                    </h2>
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
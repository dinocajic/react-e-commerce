import React from 'react';
import { useStateValue } from '../../StateProvider';
import './Payment.css';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import { Link } from 'react-router-dom';

function Payment() {
    const [{cart, user}, dispatch] = useStateValue();

    return (
        <div className='payment'>
            <div className='payment_container'>
                <h1>
                    Checkout (<Link to='/checkout'>{cart?.length} items</Link>)
                </h1>

                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Delivery Address</h3>
                    </div>

                    <div className='payment_address'>
                        <p>{user?.email}</p>
                        <p>123 Creative St.</p>
                        <p>Atlanta, GA 30331</p>
                    </div>
                </div>

                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Review Items and Delivery</h3>
                    </div>

                    <div className='payment_items'>
                        {
                            cart.map((item) => (
                                <CheckoutProduct 
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

                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Payment Method</h3>
                    </div>                

                    <div className='payment_details'>
                        Stripe Magic
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment;

import React from 'react';
import './Order.css';
import moment from 'moment';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import CurrencyFormat from 'react-currency-format';

function Order({ order }) {
    return (
        <div className='order'>
            <h2>Order</h2>

            <p>{moment.unix(order.data.created).format('MMMM Do YYYY, h:mma')}</p>

            <p className='order_id'>
                <small>Order ID: {order.id}</small>
            </p>

            {
                order.data.cart.map(item => (
                    <CheckoutProduct 
                        key={item.id}
                        id={item.id}
                        image={item.image}
                        title={item.title}
                        price={item.price}
                        rating={item.rating}
                        hideButton
                    />
                ))
            }

            <CurrencyFormat 
                renderText={(value) => (
                    <>
                        <h3 className='order_total'>Order Total: {value}</h3>
                    </>
                )}
                decimalScale={2}
                value={order.data.amount / 100}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
        </div>
    )
}

export default Order;

import React from 'react';
import './Home.css';

import Product from '../Product/Product';
import { useStateValue } from '../../StateProvider';

function Home() {
    const [{items}] = useStateValue();

    return (
        <div className='home'>
            <div className='home_container'>
                <div className='row'>
                    <img 
                        src='img/home/banner.jpg'
                        alt='Home Banner' 
                        className='home_image'
                    />
                </div>

                <div className='row mx-auto justify-content-center'>

                    {
                        items.map(item => (
                            <Product 
                                key={item.id}
                                id={item.id}
                                title={item.title} 
                                author={item.author}
                                description={item.description}
                                price={item.price}
                                image={item.image}
                                rating={item.rating}
                            />
                        ))
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default Home

import React from 'react';
import './Home.css';

import Banner from './img/banner.jpg';

import Product from '../Product/Product';

function Home() {
    return (
        <div className='home'>
            <div className='home_container'>
                <img 
                    src={Banner} 
                    alt='Home Banner' 
                    class='home_image'
                />

                <div className='home_row'>
                    <Product />
                    <Product />
                </div>

                <div className='home_row'>
                    <Product />
                    <Product />
                    <Product />
                </div>

                <div className='home_row'>
                    <Product />
                </div>
            </div>
        </div>
    )
}

export default Home

import React from 'react';
import './Home.css';

import Product from '../Product/Product';

function Home() {
    return (
        <div className='home'>
            <div className='home_container'>
                <img 
                    src='img/home/banner.jpg'
                    alt='Home Banner' 
                    className='home_image'
                />

                <div className='home_row'>
                    <Product
                        id='12577245'
                        title='An Illustrative Introduction to Algorithms' 
                        author='Dino Cajic'
                        description='This book was written to fill the gap that exists when Computer Science students, and programmers, attempt to learn and analyze the different algorithms that currently exist.'
                        price={49.99}
                        image='img/books/an-illustrative-introduction-to-algorithms.jpg' 
                        rating={5}
                    />
                    <Product
                        id='32355155'
                        title='Introduction to Algorithms, 3rd Edition' 
                        author='Thomas H. Cormen'
                        description='Some books on algorithms are rigorous but incomplete; others cover masses of material but lack rigor. Introduction to Algorithms uniquely combines rigor and comprehensiveness.'
                        price={68.47}
                        image='https://images-na.ssl-images-amazon.com/images/I/41T0iBxY8FL._SX258_BO1,204,203,200_.jpg' 
                        rating={4}
                    />
                </div>

                <div className='home_row'>
                    <Product
                        id='233656734'
                        title='Algorithms (4th Edition)' 
                        author='Robert Sedgewick'
                        description='This fourth edition of Robert Sedgewick and Kevin Wayne’s Algorithms is the leading textbook on algorithms today and is widely used in colleges and universities worldwide.'
                        price={70.79}
                        image='https://images-na.ssl-images-amazon.com/images/I/41HrMSnMfUL._SX400_BO1,204,203,200_.jpg' 
                        rating={5}
                    />

                    <Product
                        id='544321168'
                        title='Algorithms to Live By: The Computer Science of Human Decisions' 
                        author='Brian Christian'
                        description='All our lives are constrained by limited space and time, limits that give rise to a particular set of problems. What should we do, or leave undone, in a day or a lifetime?'
                        price={18.59}
                        image='https://images-na.ssl-images-amazon.com/images/I/510GRAYQNSL._SX329_BO1,204,203,200_.jpg' 
                        rating={4}
                    />

                    <Product
                        id='243267323'
                        title='40 Algorithms Every Programmer Should Know: Hone your problem-solving skills by learning different algorithms and their implementation in Python' 
                        author='Imran Ahmad'
                        description='Learn algorithms for solving classic computer science problems with this concise guide covering everything from fundamental algorithms, such as sorting and searching, to modern algorithms used in machine learning and cryptography'
                        price={35.99}
                        image='https://images-na.ssl-images-amazon.com/images/I/51Z+Mhcb-lL._SX404_BO1,204,203,200_.jpg' 
                        rating={4}
                    />
                    
                </div>

                <div className='home_row'>
                    <Product
                        id='1356754234'
                        title='A Common-Sense Guide to Data Structures and Algorithms, Second Edition: Level Up Your Core Programming Skills' 
                        author='Jay Wengrow'
                        description='Algorithms and data structures are much more than abstract concepts. Mastering them enables you to write code that runs faster and more efficiently, which is particularly important for todays web and mobile apps.'
                        price={37.60}
                        image='https://images-na.ssl-images-amazon.com/images/I/41Lugv4F3YL._SX415_BO1,204,203,200_.jpg' 
                        rating={5}
                    />

                    <Product
                        id='34566754234'
                        title='Algorithms Are Not Enough: Creating General Artificial Intelligence' 
                        author='Herbert L. Roitblat'
                        description='Since the inception of artificial intelligence, we have been warned about the imminent arrival of computational systems that can replicate human thought processes.'
                        price={35.00}
                        image='https://images-na.ssl-images-amazon.com/images/I/41jhEFhboCL._SX336_BO1,204,203,200_.jpg' 
                        rating={4}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home

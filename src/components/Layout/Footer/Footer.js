import React from 'react';
import './Footer.css';

import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';

function Footer() {
    return (
        <div>
            <section className="footer bg-dark pt-5 pb-3">
                <div className="container pt-5">
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-4 footer_one">
                            <div className="footers-logo">
                                <img 
                                    src="/img/logo.png" 
                                    alt="Logo" 
                                    style={{width: '120px'}} 
                                />
                            </div>
                            <div className="mt-3">
                                <p className="footer_about">
                                    Author of An Illustrative Introduction to Algorithms. A Software Engineer with a B.S. in Computer Science, a minor in Biology, and a passion for learning.
                                </p>
                            </div>
                            <div className="footer_socialIcons">
                                <a href="https://www.instagram.com/car_mod_guy/" target="_blank" rel="noreferrer">
                                    <InstagramIcon className="footer_socialIcon" />
                                </a>

                                <a href="https://github.com/dinocajic" target="_blank" rel="noreferrer">
                                    <GitHubIcon className="footer_socialIcon" />
                                </a>

                                <a href="https://www.youtube.com/dinocajic" target="_blank" rel="noreferrer">
                                    <YouTubeIcon className="footer_socialIcon" />
                                </a>

                                <a href="http://dinocajic.medium.com/" target="_blank" rel="noreferrer">
                                    <LibraryBooksIcon className="footer_socialIcon" />
                                </a>
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-6 col-md-2 footer_two">
                            <h5>Essentials </h5>
                            <ul className="list-unstyled">
                                <li><a href="https://www.amazon.com/gp/product/1686863268/" target="_blank" rel="noreferrer">My Algorithms Book</a></li>
                                <li><a href="https://zenodo.org/record/3362458" target="_blank" rel="noreferrer">Round Robin Research</a></li>
                                <li><a href="https://zenodo.org/record/3362449" target="_blank" rel="noreferrer">Mobile Security</a></li>
                                <li><a href="https://www.youtube.com/dinocajic" target="_blank" rel="noreferrer">Dino Programming</a></li>
                                <li><a href="http://dinocajic.medium.com/" target="_blank" rel="noreferrer">Medium Articles</a></li>
                            </ul>
                        </div>

                        <div className="col-xs-12 col-sm-6 col-md-2 footer_three">
                            <h5>Information </h5>
                            <ul className="list-unstyled">
                            <li><a href="https://www.youtube.com/car_mod_guy" target="_blank" rel="noreferrer">Car Mod Guy</a></li>
                            <li><a href="https://www.instagram.com/modernpiratelife/" target="_blank" rel="noreferrer">Modern Pirate Life</a></li>
                            <li><a href="https://www.instagram.com/dinocajic19/" target="_blank" rel="noreferrer">My Music Instagram</a></li>
                            <li><a href="https://soundcloud.com/dinocajic" target="_blank" rel="noreferrer">SoundCloud</a></li>
                            <li><a href="https://twitter.com/DinoCajic" target="_blank" rel="noreferrer">Twitter</a></li>
                            </ul>
                        </div>

                        <div className="col-xs-12 col-sm-6 col-md-2 footer_four">
                            <h5>Explore </h5>
                            <ul className="list-unstyled">
                            <li><a href="http://dinocajic.xyz/">Portfolio</a></li>
                            <li><a href="https://georgiastatesignal.com/computer-science-department-faculty-stretched-thin-honeywell-offers-career-building-opportunities-computer-science-majors/">GSU CS President</a></li>
                            <li><a href="https://portfolium.com/DinoCajic">Portfolium</a></li>
                            <li><a href="https://www.goodreads.com/author/show/19485537.Dino_Cajic">Good Reads</a></li>
                            <li><a href="https://www.shutterstock.com/g/dinocajic">Shutterstock</a></li>
                            </ul>
                        </div>

                        <div className="col-xs-12 col-sm-6 col-md-2 footer_five">
                            <h5>Fun Projects </h5>
                            <ul className="list-unstyled">
                                <li><a href="https://github.com/dinocajic/autonomous-rc-car">Autonomous RC</a></li>
                                <li><a href="https://github.com/dinocajic/bash-crawler">Bash Crawler</a></li>
                                <li><a href="https://github.com/dinocajic/android-sudoku">Android Sudoku</a></li>
                                <li><a href="http://dinocajic.xyz/projects/css-super-mario/">CSS Super Mario</a></li>
                                <li><a href="https://github.com/dinocajic/bookstore">Java Bookstore</a></li>
                            </ul>
                        </div>
                    </div>
                </div>      
            </section>

            <section className="bg-dark">
                <div className="container">
                    <div className="row ">
                        <div className="col-md-12 py-2 text-center">
                            <small className="footer_disclaimer text-center">
                                Disclaimer: This website is for demonstration purposes only. I will not be processing any orders.
                            </small>
                        </div>
                    </div>
                </div>
            </section>
            <section className="copyright bg-secondary">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-md-12 pt-3">
                            <p className="text-white">© 2020 Dino Cajic</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer;

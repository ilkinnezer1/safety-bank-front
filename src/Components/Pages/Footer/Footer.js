import React from 'react';
import './Footer.css';
import Button from "../../Button";
import { Link } from 'react-router-dom';
// React social media icons
import {FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin} from 'react-icons/fa';
import { RiBankCardFill } from 'react-icons/ri';

const Footer = () => {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Join our prosperous internet banking system that will help to make any process, effortlessly
                </p>
                <p className='footer-subscription-text'>
                    Whenever you want, you can unsubscribe
                </p>
                <div className='input-areas'>
                    <form>
                        <input
                            className='footer-input'
                            name='email'
                            type='email'
                            placeholder='type your email...'
                            autoComplete="off"/>
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>

            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Differentiability</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Invest banking</Link>
                        <Link to='/'>Private Policy</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Contact</h2>
                        <Link to='/'>Contact</Link>
                        <Link to='/'>Invest</Link>
                        <Link to='/'>Proposals</Link>
                        <Link to='/'>Sponsorships</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Videos</h2>
                        <Link to='/'>Submit Video</Link>
                        <Link to='/'>Characteristics</Link>
                        <Link to='/'>Agency</Link>
                        <Link to='/'>Freelancer</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Social Media</h2>
                        <Link to='/'>Instagram</Link>
                        <Link to='/'>Facebook</Link>
                        <Link to='/'>Youtube</Link>
                        <Link to='/'>Twitter</Link>
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                            <RiBankCardFill className='navbar-icon' />
                            SAFETY BANK
                        </Link>
                    </div>
                    <small className='website-rights'>SAFETY BANK © 2021</small>
                    <div className='social-icons'>
                        <Link
                            className='social-icon-link'
                            to='/'
                            target='_blank'
                            aria-label='Facebook'>
                            <FaFacebook />
                        </Link>
                        <Link
                            className='social-icon-link'
                            to='/'
                            target='_blank'
                            aria-label='Instagram'>
                            <FaInstagram />
                        </Link>
                        <Link
                            to='/'
                            className='social-icon-link'
                            target='_blank'
                            aria-label='Youtube'>
                            <FaYoutube />
                        </Link>
                        <Link
                            className='social-icon-link'
                            to='/'
                            target='_blank'
                            aria-label='Twitter'>
                            <FaTwitter />
                        </Link>
                        <Link
                            className='social-icon-link'
                            to='/'
                            target='_blank'
                            aria-label='LinkedIn'>
                            <FaLinkedin />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;
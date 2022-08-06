import React from 'react';
import './BankingSectionStyle.css';
import Button from "./Button";
import { Link } from 'react-router-dom';
import pic from './Pages/HomePage/Images/Banner-millennia.png'
// Section content properties rendered with Data
function BankingSection({
                         lightBg,
                         topLine,
                         lightText,
                         lightTextDesc,
                         headline,
                         description,
                         buttonLabel,
                         alt,
                         img,
                         imgStart})
 {
    return (
        // Section description properties including dark and light modes by changing background conditions on Data
        //All properties has special information rendered from database and it is reusable.
        //Reversing images configures images at the different places with specification of flexbox
        //Button linked to the sign-up page
        <>
            <div
                className={lightBg ? 'home-banking-section' : 'home-banking-section darkBg'}>
                <div className='container'>
                    <div
                        className='row home-banking-row'
                        style={{
                            display: 'flex',
                            flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'}}>
                        <div className='col'>
                            <div className='home-banking-text-wrapper'>
                                <div className='top-line'>{topLine}</div>
                                <h1 className={lightText ? 'heading' : 'heading dark'}>
                                    {headline}
                                </h1>
                                <p
                                    className={
                                        lightTextDesc
                                            ? 'home-banking-subtitle'
                                            : 'home-banking-subtitle dark'}>
                                    {description}
                                </p>
                                <Link to='/sign-up'>
                                    <Button buttonSize='btn--wide' buttonColor='blue'>
                                        {buttonLabel}
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='home-banking-img-wrapper'>
                                <img src={pic} alt={alt} className='home-banking-img' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BankingSection;
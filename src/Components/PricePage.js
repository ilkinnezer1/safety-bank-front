import React from "react"
import './PricePage.css'
import {Link} from "react-router-dom";
import {FaFire} from "react-icons/fa";
import Button from "./Button";
import {BsFillXOctagonFill, BsXCircleFill} from "react-icons/all";
import {IconContext} from "react-icons/lib";


const PricePage = () => {
    // cards provider
    // Linked with a button and referenced directly to the offering section 
        return (
            <IconContext.Provider value={{color: "white", size:68}}>
        <>
            <div className="price-section">
                <div className="price-wrapper">
                    <h1 className="price-header">
                    </h1>
                    <div className="price-container">
                        <Link className="price-container-card">
                            <div className="price-container-card-info">
                                <div className="icon">
                                    <FaFire/>
                                </div>
                                <h3>Beginner</h3>
                                <h4>10 dollar</h4>
                                <p>Per month</p>
                                <div className="price-container-features">
                                    <li>100 Transactions</li>
                                    <li>5% Cash Back</li>
                                    <li>Unlimited Transaction</li>
                                </div>
                                <Button buttonSize="btn--wide"
                                        buttonColor='primary'>
                                        Choose Plan
                                </Button>
                            </div>
                        </Link>
                        <Link className="price-container-card">
                            <div className="price-container-card-info">
                                <div className="icon">
                                    <BsFillXOctagonFill/>
                                </div>
                                <h3>Intermediate</h3>
                                <h4>15 pounds</h4>
                                <p>Per month</p>
                                <div className="price-container-features">
                                    <li>100 Transactions</li>
                                    <li>7% Cash Back</li>
                                    <li>Unlimited Transaction</li>
                                </div>
                                <Button buttonSize="btn--wide"
                                        buttonColor='blue'>
                                    Choose Plan
                                </Button>
                            </div>
                        </Link>
                        <Link className="price-container-card">
                            <div className="price-container-card-info">
                                <div className="icon">
                                    <BsXCircleFill/>
                                </div>
                                <h3>Advanced</h3>
                                <h4>20 dollar</h4>
                                <p>Per month</p>
                                <div className="price-container-features">
                                    <li>100 Transactions</li>
                                    <li>8% Cash Back</li>
                                    <li>Unlimited Transaction</li>
                                </div>
                                <Button buttonSize="btn--wide"
                                        buttonColor="red">
                                    Choose Plan
                                </Button>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
            </IconContext.Provider>
        )
}

export default PricePage
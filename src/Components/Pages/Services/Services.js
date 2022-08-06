import React from 'react'
import BankingSection from "../../BankingSection";
import {homeObjFour, homeObjTwo} from "./Data";
import Footer from "../Footer/Footer";
import PricePage from "../../PricePage";


const Services = () => {
    return(
        <>
            <BankingSection {...homeObjTwo}/>
            <PricePage/>
            <BankingSection {...homeObjFour}/>
            <Footer/>
        </>
    )
}


export default Services;

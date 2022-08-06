import React from 'react'
import BankingSection from "../../BankingSection";
import {homeObjFour, homeObjOne, homeObjThree} from "./Data";
import Footer from "../Footer/Footer";


const Products = () => {
    return(
        <>
            <BankingSection {...homeObjThree}/>
            <BankingSection {...homeObjFour}/>
            <Footer/>
        </>
    )
}


export default Products;

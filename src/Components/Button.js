import React from "react";
import "./Button.css"


// Button style elements in array and rendering it for each button
const buttonStyleElement = ["btn--primary", "btn--outline"]
const buttonColorElement = ["red", "blue" , "green" , "primary"]
const buttonSizeElement  = ["btn--mobile", "btn--large", "btn--medium", "btn--wide", "btn--small"]

const Button = ({children , buttonStyle, buttonSize, buttonColor, onClick, type}) =>  {
    // Reference to the button elements and it gives declaration to identify the exact style
    const checkButtonStyleElement = buttonStyleElement.includes(buttonStyle) ? buttonStyle : buttonStyleElement[0]
    const checkButtonColorElement = buttonColorElement.includes(buttonColor) ? buttonColor : buttonColorElement[0]
    const checkButtonSizeElement =  buttonSizeElement.includes(buttonSize) ? buttonSize : buttonSizeElement[0]

    return (
        // Button elements including all styles to render
        // Checking to reference all properties
        <button
        className={`btn ${checkButtonStyleElement} ${checkButtonColorElement} ${checkButtonSizeElement}`}
        onClick={onClick}
        type={type}
        >{children}</button>
    )
}

export default Button;
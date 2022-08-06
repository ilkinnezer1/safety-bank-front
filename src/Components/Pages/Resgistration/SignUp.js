import React from 'react'
import "./SignUp.css"
import Footer from "../Footer/Footer";
import Button from "../../Button";

const formErrorProvider = {
    name:"",
    email:"",
    password:"",
    nameError:"",
    emailError:"",
    passError:""
}
export default class SignUp extends React.Component{
    state = formErrorProvider;

// checking the type of inputs
    handleChange = event => {
        const isCheckBox = event.target.type === "checkbox"
        this.setState({
        [event.target.name] : isCheckBox ? event.target.checked : event.target.value
        })
    }


    validate = () => { // after not passing statement errors will show up on bottom of inputs
       let emailError = ""
       let nameError = ""
       let passError = ""
        if(!this.state.email.includes("@")){
            emailError = "Invalid address"
        }
        if(!this.state.name) {
            nameError = "It can't be left blank"
        }
        if(this.state.password.length < 8) {
            passError = "Password must contain at least 8 charachters"
        }
        if(emailError || nameError || passError ){
            this.setState({emailError, nameError, passError})
            return false
        }
return true
    }

// Handle Submit function that makes form elements active

    handleSubmit = event => {
        event.preventDefault();
        const isValid = this.validate()
        if(isValid){
            console.log (isValid)
            this.setState(formErrorProvider)
        }
    }
    render() {
        return( <>
            <div className="main-container">
                <div className='text-container'>
                    <h1 className='header-text'>Follow your interest</h1>
                    <p>Instant updates from our company experts, favorite celebrities, and what's happening around the world.</p>
                    <input type="search" placeholder="Search Safety Bank"/>
                </div>
                 <form className='form-elements' onSubmit={this.handleSubmit}>
                     <h3><span>New to SAFETY BANK?</span> Join today!</h3>
                     <div>
                        <input
                               name="name"
                               autoComplete='off'
                               placeholder="Full name"
                               value={this.state.name}
                               onChange={this.handleChange}/>
                               <div className="error-div">{this.state.nameError}</div>
                     </div>
                     <div>
                         <input
                                name="email"
                                autoComplete='off'
                                placeholder="Email"
                                value={this.state.email}
                                onChange={this.handleChange}/>
                             <div className="error-div">{this.state.emailError}</div>
                     </div>
                     <div>
                        <input
                               type="password"
                               name='password'
                               placeholder="Password"
                               value={this.state.password}
                               onChange={this.handleChange}/>
                            <div className="error-div">{this.state.passError}</div>
                     </div>
                        <Button buttonSize="btn--small" buttonColor={"red"} buttonStyle={"btn--outline"}>Sign up</Button>
                 </form>
            </div>
                <Footer/>
            </>
        )
    }
}


import React from 'react'
import "./LoginSignUpPage.scss"
import AssembleNav from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import LoginSignUpBody from '../../Components/LoginSignUpBody/LoginSignUpBody'

const LoginSignUpPage = ({onLogin}) => {
    return (
        <div className='Login-SignUp-Page-Container'>
            <AssembleNav />
            <LoginSignUpBody onLogin={onLogin} />
            <Footer />
        </div>
    )
}

export default LoginSignUpPage
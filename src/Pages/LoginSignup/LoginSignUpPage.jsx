import React from 'react'
import "./LoginSignUpPage.scss"

import LoginSignUpBody from '../../components/LoginSignUpBody/LoginSignUpBody'
import AssembleNav from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

const LoginSignUpPage = () => {
    return (
        <div className='Login-SignUp-Page-Container'>
            <AssembleNav />
            <LoginSignUpBody />
            <Footer />
        </div>
    )
}

export default LoginSignUpPage
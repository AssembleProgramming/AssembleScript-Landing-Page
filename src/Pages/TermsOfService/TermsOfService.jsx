import React from 'react'
import './TermsOfService.scss'
import data from './data'
import AssembleNav from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

const TermsOfService = () => {
    return (
        <div className='terms-container-wrapper'>
            <AssembleNav />

            <div className="terms-container">
                <h1>AssembleScript <span> Terms of Service</span> </h1>

                <p>
                    These terms of service are entered into between you and LeetCode, LLC (“us” “we” or “our”) for the use of our application in relation to our training tools. By accessing our websites (the "Services"), you acknowledge that you have read, understood, and agree to the most recent version of these Terms of Service ("Terms").

                    We reserve the right to revise these Terms at any time. If we do, we will post the modified Terms on this page and indicate the date of most the recent change above. You agree to read all notifications we send you and to periodically check this page for updates to these Terms. Your continued use of the Services constitutes acceptance of these Terms and any modifications thereto. If you object to any changes, your sole recourse is to cease use of the Services.
                </p>
                {data.map((item, index) => (
                    <div key={index} className="term-section">
                        <div className="term-icon" dangerouslySetInnerHTML={{ __html: item.icon }} />
                        <div className="term-content">
                            <h2>{item.title}</h2>
                            <p>{item.info}</p>
                        </div>
                    </div>
                ))}
            </div>

            <Footer />
        </div>
    )
}

export default TermsOfService

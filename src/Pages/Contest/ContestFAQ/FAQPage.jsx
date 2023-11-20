import React, { useState } from 'react';
import './FAQPage.scss';
import AssembleNav from '../../../Components/Navbar/Navbar';
import Footer from '../../../Components/Footer/Footer';

const FAQPage = ({ faqs }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="faq-container">
            <AssembleNav />
            <h1 style={{color: "#4b32c3"}}>Frequently Asked Questions</h1>
            {faqs.map((faq, index) => (
                <div className="faq-item" key={index}>
                    <div
                        className={`faq-question ${activeIndex === index ? 'active' : ''}`}
                        onClick={() => toggleAccordion(index)}
                    >
                        <h2>{faq.question}</h2>
                    </div>
                    <div
                        className={`faq-answer ${activeIndex === index ? 'open' : ''}`}
                    >
                        {faq.answer}
                    </div>
                </div>
            ))}

            <Footer />
        </div>
    );
};

export default FAQPage;
import React, { useMemo, useState, useEffect } from 'react'
import './CodefinityPage.scss'
import AssembleNav from '../../../Components/Navbar/Navbar'
import { startTime, endTime } from '../StartTime'
import deadpool from "../../../assets/images/contest-not-started.webp"
import { Link } from 'react-router-dom'
import PageNotFound from '../../PageNotFound/PageNotFound'


const calculateTimeRemaining = (startTime, endTime, currentTime) => {
    const start = new Date(startTime).getTime();
    const end = new Date(endTime).getTime();

    if (currentTime < start) {
        const difference = start - currentTime;
        return formatTime(difference);
    } else if (currentTime < end) {
        const difference = end - currentTime;
        return formatTime(difference);
    } else {
        return "Contest has ended";
    }
};

const formatTime = (difference) => {
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
};

const Countdown = ({ startTime, endTime, currentTime }) => {
    const timeRemaining = useMemo(() => calculateTimeRemaining(startTime, endTime, currentTime), [startTime, endTime, currentTime]);

    return (
        <div className="countdown">
            <div className="text">
                {
                    currentTime < endTime ? (
                        <h3>Contest will end in: <span>{timeRemaining}</span></h3>
                    ) : (
                        <span><b style={{ fontWeight: 600, color: "red" }}>The contest has ended.</b></span>
                    )
                }
            </div>
        </div>
    );
};

const CodefinityPage = ({ user }) => {
    const [currentTime, setCurrentTime] = useState(new Date().getTime());
    const [activeButton, setActiveButton] = useState(1);

    const [isMobile, setIsMobile] = useState(false);

    const handleButtonClick = (buttonNumber) => {
        setActiveButton(buttonNumber);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            const newCurrentTime = new Date().getTime();
            setCurrentTime(newCurrentTime);
        }, 1000);

        const handleResize = () => {
            setIsMobile(window.innerWidth < 768); // Adjust the threshold as needed
        };

        // Initial check on mount
        handleResize();

        // Listen to window resize events
        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount

        return () => {
            window.removeEventListener('resize', handleResize);
            clearInterval(timer);
        };
    }, []);

    return (
        <div>
            {!isMobile
                ?
                user.length
                    ?
                    <div className='contest-page-container'>
                        <AssembleNav />
                        {
                            // Contest has not started YET
                            currentTime < startTime
                                ?
                                (
                                    <div className='contest-page-container-inner'>
                                        <div className="contest-not-started">
                                            <div className="contest-not-started-top">
                                                <h1>Oops!</h1>
                                                <h3>Contest Has Not Started Yet!</h3>
                                                <p className='description'>Hey there Avenger the contest has not started yet. Please make sure to come to the page at the time of contest. Till then make sure to register as soon as possible for a thrilling experience.</p>
                                                <p>Here are some useful links instead:</p>
                                                <div className='buttons'>
                                                    <Link to="/contest/main-contest">
                                                        <button>Register</button>
                                                    </Link>
                                                    <Link to="/">
                                                        <button>Home</button>
                                                    </Link>
                                                    <Link to="/docs/latest">
                                                        <button>Documentation</button>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div
                                                style={{
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    width: "100%"
                                                }}
                                                className="dead-pool">
                                                <img style={{
                                                    width: "70%",
                                                    position: 'relative',
                                                    bottom: '100px',
                                                    pointerEvents: 'none'
                                                }} src={deadpool} alt="img" />
                                            </div>
                                        </div>
                                    </div>
                                )
                                :
                                currentTime < endTime
                                    ?
                                    (
                                        <div className="contest-started">
                                            <div className="contest-page-header">
                                                <h1>Welcome to Codefinity-2023</h1>
                                                <Countdown startTime={startTime} endTime={endTime} currentTime={currentTime} />
                                            </div>
                                            <h5 style={{
                                                padding: "10px 0px"
                                            }}>LoggedIn As:  <span style={{ color: "#4b32c3", fontWeight: 600 }}>{user[0].TEAM_NAME}</span> </h5>
                                            <div className="contest-questions">
                                                <div className="question-buttons">
                                                    {[1, 2, 3].map((buttonNumber) => (
                                                        <button
                                                            key={buttonNumber}
                                                            className={buttonNumber === activeButton ? 'active' : ''}
                                                            onClick={() => handleButtonClick(buttonNumber)}
                                                        >
                                                            {buttonNumber}
                                                        </button>
                                                    ))}
                                                </div>

                                                <div className="question-divs">
                                                    {activeButton === 1 && (
                                                        <div className="question-text">
                                                            <p>Question 1</p>
                                                            {/* Add your question content for question 1 here */}
                                                        </div>
                                                    )}

                                                    {activeButton === 2 && (
                                                        <div className="question-text">
                                                            <p>Question 2</p>
                                                            {/* Add your question content for question 2 here */}
                                                        </div>
                                                    )}

                                                    {activeButton === 3 && (
                                                        <div className="question-text">
                                                            <p>Question 3</p>
                                                            {/* Add your question content for question 3 here */}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                    :
                                    (
                                        <div className='contest-page-container-inner'>
                                            <div className="contest-not-started">
                                                <div className="contest-not-started-top">
                                                    <h1>Oops!</h1>
                                                    <h3>Contest Has Ended!</h3>
                                                    <p className='description'>Hey Avenger, The contest has ended. We appreciate your participation! Stay tuned for future events. Ensure you're registered for an upcoming thrilling experience. Thank you for being a part of the excitement!</p>
                                                    <p>Here are some useful links instead:</p>
                                                    <div className='buttons'>
                                                        <Link to="/playground">
                                                            <button>Playground</button>
                                                        </Link>
                                                        <Link to="/">
                                                            <button>Home</button>
                                                        </Link>
                                                        <Link to="/contest/codefinity-rankings">
                                                            <button>Leaderboard</button>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div
                                                    style={{
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        width: "100%"
                                                    }}
                                                    className="dead-pool">
                                                    <img style={{
                                                        width: "70%",
                                                        position: 'relative',
                                                        bottom: '100px',
                                                        pointerEvents: 'none'
                                                    }} src={deadpool} alt="img" />
                                                </div>
                                            </div>
                                        </div>
                                    )
                        }
                    </div>
                    :
                    <PageNotFound />
                :
                <>
                    <AssembleNav />
                    <div className="mobile-warning-card">
                        <div className="card-content">
                            <h2>Mobile User Alert</h2>
                            <p>
                                We're sorry, but the contest page is not available for mobile users. For the best experience, please switch to a desktop or laptop device.
                            </p>
                            <p>
                                If you have any questions or need assistance, please contact our support team at <a href="mailto:assemblescript@gmail.com">assemblescript@gmail.com</a>
                            </p>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}

export default CodefinityPage
